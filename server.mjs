import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = fileURLToPath(new URL(".", import.meta.url));
const publicDir = resolve(rootDir, "public");
const port = Number(process.env.PORT || 3000);
const MAX_BODY_BYTES = 1_500_000;

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml; charset=utf-8"
};

const PROVIDER_DEFAULTS = {
  kimi: { apiBase: "https://api.moonshot.cn/v1", model: "moonshot-v1-32k" },
  glm: { apiBase: "https://open.bigmodel.cn/api/paas/v4", model: "glm-4-flash" },
  deepseek: { apiBase: "https://api.deepseek.com", model: "deepseek-chat" },
  minimax: { apiBase: "https://api.minimax.io/v1", model: "MiniMax-M1" },
  "minimax-cn": { apiBase: "https://api.minimaxi.com/v1", model: "MiniMax-M1" },
  qwen: { apiBase: "https://dashscope.aliyuncs.com/compatible-mode/v1", model: "qwen-plus" },
  doubao: { apiBase: "https://ark.cn-beijing.volces.com/api/v3", model: "doubao-seed-1-6" },
  baichuan: { apiBase: "https://api.baichuan-ai.com/v1", model: "Baichuan4" },
  yi: { apiBase: "https://api.lingyiwanwu.com/v1", model: "yi-large" },
  siliconflow: { apiBase: "https://api.siliconflow.cn/v1", model: "Qwen/Qwen3-32B" },
  openrouter: { apiBase: "https://openrouter.ai/api/v1", model: "openai/gpt-4o-mini" },
  tencent: { apiBase: "https://api.lkeap.cloud.tencent.com/v3", model: "hunyuan-turbos-latest" },
  openai: { apiBase: "https://api.openai.com/v1", model: "gpt-4.1-mini" },
  "openai-compatible": { apiBase: "", model: "" }
};

const JSON_MODE_PROVIDERS = new Set(["openai", "kimi", "glm", "deepseek", "qwen"]);

function sendJson(res, status, data) {
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });
  res.end(JSON.stringify(data));
}

async function readJsonBody(req) {
  const chunks = [];
  let received = 0;
  for await (const chunk of req) {
    received += chunk.length;
    if (received > MAX_BODY_BYTES) {
      throw new Error("Request body is too large. Please shorten the material or split the input.");
    }
    chunks.push(chunk);
  }

  const raw = Buffer.concat(chunks).toString("utf8");
  return raw ? JSON.parse(raw) : {};
}

function getStaticFilePath(urlPath) {
  const pathname = decodeURIComponent(urlPath === "/" ? "/index.html" : urlPath);
  const resolved = resolve(publicDir, `.${pathname}`);
  const allowedRoot = `${publicDir}${sep}`;
  if (resolved !== publicDir && !resolved.startsWith(allowedRoot)) {
    throw new Error("Invalid file path.");
  }
  return resolved;
}

function stripCodeFence(text) {
  return String(text || "")
    .trim()
    .replace(/^```(?:json|markdown|md)?\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();
}

function parseJsonFromText(text) {
  const cleaned = stripCodeFence(text);
  try {
    return JSON.parse(cleaned);
  } catch {
    const first = cleaned.indexOf("{");
    const last = cleaned.lastIndexOf("}");
    if (first >= 0 && last > first) return JSON.parse(cleaned.slice(first, last + 1));
    throw new Error("The model did not return valid JSON.");
  }
}

function normalizeConfig(input = {}) {
  const provider = String(input.provider || "openai-compatible").trim();
  const defaults = PROVIDER_DEFAULTS[provider] || PROVIDER_DEFAULTS["openai-compatible"];
  const apiBase = String(input.apiBase || "").trim().replace(/\/+$/, "") || defaults.apiBase;
  const apiKey = String(input.apiKey || "").trim();
  const model = String(input.model || "").trim() || defaults.model;
  const temperature = Number.isFinite(Number(input.temperature)) ? Number(input.temperature) : 0.2;
  const maxTokens = Number.isFinite(Number(input.maxTokens)) ? Number(input.maxTokens) : 7000;

  if (!apiBase) throw new Error("Please enter an API Base URL.");
  if (!apiKey) throw new Error("Please enter an API Key.");
  if (!model) throw new Error("Please enter a model name.");

  return {
    provider,
    apiBase,
    apiKey,
    model,
    temperature: Math.max(0, Math.min(1, temperature)),
    maxTokens: Math.max(800, Math.min(16000, maxTokens)),
    jsonMode: input.jsonMode !== false
  };
}

async function callChatCompletions(rawConfig, messages, options = {}) {
  const config = normalizeConfig(rawConfig);
  const payload = {
    model: config.model,
    temperature: options.temperature ?? config.temperature,
    max_tokens: options.maxTokens ?? config.maxTokens,
    messages
  };

  if (config.jsonMode && options.expectJson !== false && JSON_MODE_PROVIDERS.has(config.provider)) {
    payload.response_format = { type: "json_object" };
  }

  const response = await fetch(`${config.apiBase}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.apiKey}`
    },
    body: JSON.stringify(payload)
  });

  const raw = await response.text();
  let data;
  try {
    data = raw ? JSON.parse(raw) : {};
  } catch {
    data = { raw };
  }

  if (!response.ok) {
    const message = data?.error?.message || data?.message || data?.raw || `Model request failed: HTTP ${response.status}`;
    throw new Error(message);
  }

  const content = data?.choices?.[0]?.message?.content;
  if (!content) throw new Error("The model returned an empty response.");
  return content;
}

function languageRule(language) {
  return language === "en"
    ? "Return all business content in professional English."
    : "所有业务内容请使用正式、专业、可交付的中文。";
}

function buildAnalysisPrompt(payload) {
  const project = payload.project || {};
  const sources = payload.sources || {};
  const workspace = payload.workspace || {};
  const sourceText = String(sources.text || "").slice(0, 70000);

  return [
    {
      role: "system",
      content: `You are a senior presales business architect for enterprise projects. You specialize in big data platforms, data governance, ontology modeling, and custom enterprise software. Transform client materials into structured delivery-ready content. Return valid JSON only. ${languageRule(payload.language)}`
    },
    {
      role: "user",
      content: `Analyze the project materials and produce a structured presales architecture draft.

Rules:
1. Do not force object modeling for every project. Choose the right modeling focus by project type.
2. Big data platform projects focus on platform capabilities, data flows, system boundaries, data services, security and operations.
3. Data governance projects focus on governance objects, accountability, standards, metrics, quality rules, workflows and operating mechanisms.
4. Ontology projects focus on business objects, relations, attributes, actions, rules and semantic mappings.
5. Custom software projects focus on roles, processes, modules, business entities, state transitions and acceptance paths.
6. Mark uncertain items as "To be confirmed" or "待确认". Do not invent facts.

Return this JSON shape:
{
  "summary": "project understanding",
  "nextAction": "recommended next step",
  "scopeItems": [
    { "name": "scope item", "lane": "must|suggested|later|out", "reason": "reason", "evidence": "explicit material|AI inference|to be confirmed" }
  ],
  "architectureItems": [
    { "name": "element", "kind": "capability|data flow|governance object|business object|process|role|system|rule|entity|state", "description": "description", "relations": ["relation"], "evidence": "source" }
  ],
  "features": [
    { "name": "feature", "domain": "domain", "goal": "business goal", "users": ["role"], "flow": ["step"], "acceptance": ["criteria"], "priority": "P1|P2|P3", "status": "draft|to be confirmed" }
  ],
  "questions": [
    { "category": "scope|data|process|organization|system|permission|acceptance|tender", "question": "question", "impact": "impact", "owner": "suggested owner", "status": "to be confirmed" }
  ],
  "risks": ["risk"]
}

Project:
${JSON.stringify(project, null, 2)}

Uploaded file records:
${JSON.stringify(sources.files || [], null, 2)}

Material text:
${sourceText || "None"}

Existing workspace:
${JSON.stringify(workspace, null, 2)}`
    }
  ];
}

function normalizeArray(value) {
  return Array.isArray(value) ? value.filter((item) => item !== null && item !== undefined) : [];
}

function normalizeAnalysis(raw) {
  return {
    summary: String(raw.summary || ""),
    nextAction: String(raw.nextAction || ""),
    scopeItems: normalizeArray(raw.scopeItems),
    architectureItems: normalizeArray(raw.architectureItems),
    features: normalizeArray(raw.features),
    questions: normalizeArray(raw.questions),
    risks: normalizeArray(raw.risks)
  };
}

function buildDocumentPrompt(payload) {
  const project = payload.project || {};
  const workspace = payload.workspace || {};
  const template = payload.template || {};
  const docType = String(payload.docType || "delivery-blueprint");

  return [
    {
      role: "system",
      content: `You are an enterprise presales business architect and procurement document consultant. Produce formal, implementation-ready Markdown. Do not wrap the response in a code block. ${languageRule(payload.language)}`
    },
    {
      role: "user",
      content: `Generate a ${docType} document.

Document requirements:
1. Use a formal enterprise delivery tone.
2. Follow the user template where provided; otherwise create a complete structure for the document type.
3. Write uncertain content as "To be confirmed" or "待确认".
4. Keep technical details at a presales and delivery planning level unless the document type is a technical specification.
5. Tender documents should cover project overview, procurement scope, construction content, bidder requirements, implementation requirements, deliverables, acceptance criteria and response points.
6. Technical specifications should cover overall requirements, functional specifications, data/modeling/governance/platform requirements, integration, permission, audit, non-functional requirements, services and acceptance indicators.

Project:
${JSON.stringify(project, null, 2)}

Template:
${JSON.stringify(template, null, 2)}

Workspace:
${JSON.stringify(workspace, null, 2)}`
    }
  ];
}

async function handleApi(req, res) {
  if (req.method !== "POST") return sendJson(res, 405, { error: "Method not allowed" });
  const body = await readJsonBody(req);

  if (req.url === "/api/llm/test") {
    const content = await callChatCompletions(
      body.config,
      [
        { role: "system", content: "Return valid JSON only." },
        { role: "user", content: '{"ok": true, "message": "Connection successful", "modelRole": "Presales business architecture assistant"}' }
      ],
      { maxTokens: 300 }
    );
    const result = parseJsonFromText(content);
    return sendJson(res, 200, {
      ok: Boolean(result.ok),
      message: result.message || "Connection successful",
      modelRole: result.modelRole || ""
    });
  }

  if (req.url === "/api/ai/analyze") {
    const content = await callChatCompletions(body.config, buildAnalysisPrompt(body), {
      maxTokens: Number(body.config?.maxTokens || 8000)
    });
    return sendJson(res, 200, { result: normalizeAnalysis(parseJsonFromText(content)) });
  }

  if (req.url === "/api/ai/document") {
    const content = await callChatCompletions(body.config, buildDocumentPrompt(body), {
      maxTokens: Number(body.config?.maxTokens || 10000),
      expectJson: false
    });
    return sendJson(res, 200, {
      result: {
        title: String(body.template?.name || "Generated document"),
        markdown: stripCodeFence(content)
      }
    });
  }

  sendJson(res, 404, { error: "Not found" });
}

createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    if (url.pathname.startsWith("/api/")) return await handleApi(req, res);
    const filePath = getStaticFilePath(url.pathname);
    const file = await readFile(filePath);
    res.writeHead(200, { "Content-Type": MIME_TYPES[extname(filePath)] || "application/octet-stream" });
    res.end(file);
  } catch (error) {
    const isApi = req.url?.startsWith("/api/");
    const message = error instanceof Error ? error.message : String(error);
    if (isApi) return sendJson(res, 500, { error: message });
    sendJson(res, 404, { error: "Page or resource not found." });
  }
}).listen(port, () => {
  console.log(`Presales Architect Workbench running at http://localhost:${port}`);
});
