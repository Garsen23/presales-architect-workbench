const I18N = {
  zh: {
    appName: "售前业务架构师工作台",
    appTagline: "从客户资料到范围、架构、功能蓝图和正式文档。",
    navOverview: "项目总览", navSources: "资料汇入", navAnalysis: "分析确认", navScope: "范围确认", navArchitecture: "业务架构", navBlueprint: "功能蓝图", navDocuments: "文档中心", navSettings: "模型配置",
    sidebarNote: "对象建模不再强制出现；系统会按项目类型切换结构化重点。",
    openGuide: "双语说明书", modelSettings: "模型配置", startInput: "开始录入资料", currentProject: "当前项目",
    clientName: "客户名称", projectName: "项目名称", projectType: "项目类型", projectStage: "当前阶段", saveProject: "保存项目信息", goSources: "进入资料汇入",
    readiness: "准备度", metricSources: "资料", metricScope: "范围项", metricArchitecture: "架构要素", metricQuestions: "待确认",
    storyTitle: "使用故事线", storySubtitle: "按售前架构师的真实工作顺序组织",
    sourceInput: "资料输入", clearSources: "清空资料", sourceTextLabel: "会议纪要、访谈记录、背景材料", uploadSources: "上传项目资料", uploadHint: "txt / md 会读取正文；其它文件先记录文件名。",
    saveSources: "保存资料", analyzeSources: "开始分析", analysisState: "分析状态", analysisExplain: "完成资料输入并配置模型后，点击开始分析。结果会先进入确认页，不会自动覆盖工作台。",
    draftTitle: "分析结果草稿", draftSubtitle: "确认后再应用到范围、架构、蓝图和问题清单。", applyDraft: "应用到工作台", rerunAnalysis: "重新分析", backToSources: "返回补充资料", discardDraft: "放弃草稿",
    scopeTitle: "范围确认画布", addScope: "新增范围项", architectureTitle: "业务架构画布", addArchitecture: "新增要素", questionsTitle: "待确认问题", addQuestion: "新增问题",
    blueprintTitle: "功能蓝图", blueprintSubtitle: "把范围和架构转成可拆解、可验收的功能清单。", addFeature: "新增功能",
    documentGenerate: "文档生成", docType: "目标文档", template: "文档模板", templateText: "模板目录 / 正文片段", uploadTemplate: "上传模板文件", templateUploadHint: "txt / md 会读取正文；Word / PDF 先记录文件名。",
    generateDocument: "生成当前文档", documentPreview: "文档预览", copyMarkdown: "复制 Markdown",
    modelConfig: "模型配置", apiKeyNote: "API Key 仅保存在当前浏览器会话。", provider: "服务商", modelName: "模型名称", temperature: "温度", maxTokens: "最大输出长度", jsonMode: "结构化分析启用 JSON 模式", testModel: "测试连接", clearConfig: "清除配置", releaseChecklist: "正式版检查点",
    unnamedProject: "未命名项目", emptySummary: "请先填写项目信息并汇入资料。系统不会在没有资料时自动分析。", waiting: "等待操作", noDraft: "暂无草稿", hasDraft: "待确认草稿", emptyDraft: "暂无分析草稿。请先在资料汇入页点击开始分析。",
    blocked: "还不能执行：", readyAnalysis: "资料和模型配置已就绪，可以开始分析。", readyDocument: "工作台内容和模型配置已就绪，可以生成文档。",
    needProject: "请先填写客户名称和项目名称", needSource: "请先粘贴或上传项目资料", needModel: "请先完成模型配置", needScope: "缺少范围确认内容", needArchitecture: "缺少业务架构或功能蓝图内容",
    saved: "已保存到当前工作台。", sourcesSaved: "资料已保留在当前工作台。", analysisRunning: "正在分析", analysisDone: "分析完成", analysisFailed: "分析失败", documentRunning: "正在生成", documentDone: "已生成", documentFailed: "生成失败",
    applyDone: "分析草稿已应用到工作台。", draftDiscarded: "已放弃本次分析结果。", copied: "Markdown 已复制。", connected: "连接成功", confirmClear: "确定清空资料输入吗？已确认的范围和文档不会被清空。",
    defaultTemplate: "默认通用材料模板", tenderTemplate: "默认招标文件模板", specTemplate: "默认技术规格书模板", statementTemplate: "默认项目说明书模板", customTemplate: "用户自定义模板",
    emptyState: "暂无内容。点击新增，或先完成资料分析后应用草稿。", fileParsed: "已读取文本", fileRecorded: "仅记录文件名", generatedFallbackTitle: "本地预览文档",
    fields: {
      name: "名称", reason: "原因 / 说明", evidence: "依据", lane: "范围分类", kind: "类型", description: "描述", relations: "关系，每行一个", category: "分类", question: "问题", impact: "影响", owner: "建议确认方", domain: "所属领域", goal: "业务目标", users: "使用角色，每行一个", acceptance: "验收口径，每行一个", priority: "优先级", status: "状态", delete: "删除"
    }
  },
  en: {
    appName: "Presales Architect Workbench",
    appTagline: "Turn client materials into scope, architecture, feature blueprints and formal documents.",
    navOverview: "Overview", navSources: "Sources", navAnalysis: "Review Draft", navScope: "Scope", navArchitecture: "Architecture", navBlueprint: "Blueprint", navDocuments: "Documents", navSettings: "Model Config",
    sidebarNote: "Object modeling is not forced. The structure adapts to the project type.",
    openGuide: "Bilingual Guide", modelSettings: "Model Config", startInput: "Start Input", currentProject: "Current Project",
    clientName: "Client", projectName: "Project", projectType: "Project Type", projectStage: "Stage", saveProject: "Save Project", goSources: "Go to Sources",
    readiness: "Readiness", metricSources: "Sources", metricScope: "Scope Items", metricArchitecture: "Architecture Items", metricQuestions: "Questions",
    storyTitle: "User Journey", storySubtitle: "Organized by the real presales architect workflow",
    sourceInput: "Source Input", clearSources: "Clear Sources", sourceTextLabel: "Meeting notes, interview records, background materials", uploadSources: "Upload Materials", uploadHint: "txt / md will be parsed; other files are recorded by name first.",
    saveSources: "Save Sources", analyzeSources: "Start Analysis", analysisState: "Analysis State", analysisExplain: "After entering materials and configuring a model, start analysis. The result goes to review first and will not overwrite the workspace automatically.",
    draftTitle: "Analysis Draft", draftSubtitle: "Apply it to scope, architecture, blueprint and questions after review.", applyDraft: "Apply to Workspace", rerunAnalysis: "Run Again", backToSources: "Back to Sources", discardDraft: "Discard Draft",
    scopeTitle: "Scope Canvas", addScope: "Add Scope", architectureTitle: "Business Architecture Canvas", addArchitecture: "Add Element", questionsTitle: "Open Questions", addQuestion: "Add Question",
    blueprintTitle: "Feature Blueprint", blueprintSubtitle: "Convert scope and architecture into actionable and testable features.", addFeature: "Add Feature",
    documentGenerate: "Document Generation", docType: "Target Document", template: "Template", templateText: "Template outline / content fragment", uploadTemplate: "Upload Template", templateUploadHint: "txt / md will be parsed; Word / PDF are recorded by name first.",
    generateDocument: "Generate Document", documentPreview: "Document Preview", copyMarkdown: "Copy Markdown",
    modelConfig: "Model Configuration", apiKeyNote: "API Key is stored only in the current browser session.", provider: "Provider", modelName: "Model", temperature: "Temperature", maxTokens: "Max Tokens", jsonMode: "Use JSON mode for structured analysis", testModel: "Test Connection", clearConfig: "Clear Config", releaseChecklist: "Release Checklist",
    unnamedProject: "Untitled Project", emptySummary: "Fill in project information and import materials first. The system will not analyze without sources.", waiting: "Waiting", noDraft: "No Draft", hasDraft: "Draft Pending", emptyDraft: "No analysis draft yet. Start analysis from the Sources page.",
    blocked: "Blocked:", readyAnalysis: "Sources and model configuration are ready. You can start analysis.", readyDocument: "Workspace content and model configuration are ready. You can generate the document.",
    needProject: "Enter client and project name first", needSource: "Paste or upload project materials first", needModel: "Complete model configuration first", needScope: "Missing confirmed scope content", needArchitecture: "Missing business architecture or feature blueprint",
    saved: "Saved in the current workspace.", sourcesSaved: "Sources are kept in the current workspace.", analysisRunning: "Analyzing", analysisDone: "Analysis complete", analysisFailed: "Analysis failed", documentRunning: "Generating", documentDone: "Generated", documentFailed: "Generation failed",
    applyDone: "Analysis draft has been applied to the workspace.", draftDiscarded: "Analysis draft discarded.", copied: "Markdown copied.", connected: "Connection successful", confirmClear: "Clear source input? Confirmed scope and documents will not be cleared.",
    defaultTemplate: "Default General Template", tenderTemplate: "Default Tender Template", specTemplate: "Default Technical Specification Template", statementTemplate: "Default Project Statement Template", customTemplate: "Custom Template",
    emptyState: "No content yet. Add an item, or analyze sources and apply the draft.", fileParsed: "Text parsed", fileRecorded: "Filename recorded", generatedFallbackTitle: "Local Preview Document",
    fields: {
      name: "Name", reason: "Reason / Notes", evidence: "Evidence", lane: "Scope Category", kind: "Type", description: "Description", relations: "Relations, one per line", category: "Category", question: "Question", impact: "Impact", owner: "Suggested Owner", domain: "Domain", goal: "Business Goal", users: "Users, one per line", acceptance: "Acceptance, one per line", priority: "Priority", status: "Status", delete: "Delete"
    }
  }
};

const providerPresets = {
  kimi: ["Kimi / Moonshot", "https://api.moonshot.cn/v1", "moonshot-v1-32k"],
  glm: ["GLM / Zhipu", "https://open.bigmodel.cn/api/paas/v4", "glm-4-flash"],
  deepseek: ["DeepSeek", "https://api.deepseek.com", "deepseek-chat"],
  minimax: ["MiniMax", "https://api.minimax.io/v1", "MiniMax-M1"],
  "minimax-cn": ["MiniMax China", "https://api.minimaxi.com/v1", "MiniMax-M1"],
  qwen: ["Qwen / Alibaba Cloud", "https://dashscope.aliyuncs.com/compatible-mode/v1", "qwen-plus"],
  doubao: ["Doubao / Volcano Engine", "https://ark.cn-beijing.volces.com/api/v3", "doubao-seed-1-6"],
  baichuan: ["Baichuan", "https://api.baichuan-ai.com/v1", "Baichuan4"],
  yi: ["01.AI / Yi", "https://api.lingyiwanwu.com/v1", "yi-large"],
  siliconflow: ["SiliconFlow", "https://api.siliconflow.cn/v1", "Qwen/Qwen3-32B"],
  openrouter: ["OpenRouter", "https://openrouter.ai/api/v1", "openai/gpt-4o-mini"],
  tencent: ["Tencent Hunyuan", "https://api.lkeap.cloud.tencent.com/v3", "hunyuan-turbos-latest"],
  openai: ["OpenAI", "https://api.openai.com/v1", "gpt-4.1-mini"],
  "openai-compatible": ["OpenAI Compatible", "", ""]
};

const data = {
  zh: {
    stages: [["early", "早期交流"], ["research", "售前调研"], ["solution", "方案设计"], ["tender", "招标支持"], ["delivery", "蓝图交付"]],
    types: {
      bigdata: ["大数据平台类", "重点是平台能力、数据链路、系统边界、数据服务和安全运维。", "围绕平台能力、数据接入、数据处理、数据服务、安全运维和集成边界确认范围。", "展示能力地图、数据链路、系统边界、数据服务目录和平台角色。"],
      governance: ["数据治理类", "重点是治理对象、责任体系、标准、指标、质量规则和治理流程。", "围绕数据资产、标准、指标、质量、主数据、元数据和组织流程确认范围。", "展示治理对象、治理流程、责任矩阵、标准、指标和质量规则。"],
      ontology: ["本体建模类", "重点是业务对象、关系、属性、动作、规则和语义映射。", "围绕业务对象、关系、属性、动作、业务规则、语义映射和数据资产映射确认范围。", "展示对象模型、关系模型、属性模型、动作模型和规则模型。"],
      custom: ["定制化软件开发类", "重点是角色、流程、功能模块、业务实体、状态流转和验收口径。", "围绕用户角色、业务流程、功能模块、业务实体、页面场景、权限和验收确认范围。", "展示角色模型、流程模型、功能模块、业务实体、权限和状态。"],
      hybrid: ["综合型项目", "先定主线，再组合平台、治理、本体和定制开发的结构化方法。", "先确认本期主线，再拆分平台能力、治理对象、业务对象、功能模块和系统集成边界。", "展示跨域能力、对象、流程、系统和依赖关系。"]
    },
    story: [
      ["新建项目", "录入客户、项目类型和当前阶段。"], ["汇入资料", "粘贴纪要或上传客户资料。"], ["开始分析", "模型整理范围、架构、功能和问题。"],
      ["确认草稿", "人工确认后再应用到工作台。"], ["编辑画布", "修订范围、架构和功能蓝图。"], ["生成文档", "输出招标文件、规格书和实施材料。"]
    ],
    docTypes: [["presales", "售前方案材料"], ["brd", "业务需求说明书"], ["delivery-blueprint", "交付实施蓝图"], ["dev-brief", "开发任务说明"], ["tender", "招标文件"], ["technical-spec", "技术规格书"], ["statement", "项目说明书"]],
    templates: {
      general: "# 文档标题\n\n## 1. 项目背景\n## 2. 建设目标\n## 3. 项目范围\n## 4. 业务架构\n## 5. 功能蓝图\n## 6. 实施与验收\n## 7. 风险与待确认事项",
      tender: "# 招标文件\n\n## 第一章 招标公告\n## 第二章 投标人须知\n## 第三章 项目概况与采购范围\n## 第四章 建设内容与服务要求\n## 第五章 技术与功能要求\n## 第六章 实施、培训与运维要求\n## 第七章 交付物与验收标准\n## 第八章 投标文件响应要求\n## 第九章 评分要点\n## 第十章 附件清单",
      spec: "# 技术规格书\n\n## 1. 总体要求\n## 2. 业务范围与建设内容\n## 3. 功能规格要求\n## 4. 数据与建模要求\n## 5. 系统集成要求\n## 6. 权限、审计与安全要求\n## 7. 非功能性要求\n## 8. 实施服务要求\n## 9. 验收指标",
      statement: "# 项目说明书\n\n## 1. 项目背景\n## 2. 建设目标\n## 3. 本期范围\n## 4. 业务架构说明\n## 5. 功能蓝图\n## 6. 实施路径\n## 7. 风险与待确认问题"
    }
  },
  en: {
    stages: [["early", "Early Discussion"], ["research", "Presales Research"], ["solution", "Solution Design"], ["tender", "Tender Support"], ["delivery", "Blueprint Delivery"]],
    types: {
      bigdata: ["Big Data Platform", "Focus on platform capabilities, data flows, system boundaries, data services, security and operations.", "Confirm platform capabilities, data ingestion, processing, services, security, operations and integration boundaries.", "Show capability maps, data flows, system boundaries, data service catalogs and platform roles."],
      governance: ["Data Governance", "Focus on governance objects, accountability, standards, metrics, quality rules and governance workflows.", "Confirm data assets, standards, metrics, quality, master data, metadata and operating processes.", "Show governance objects, workflows, accountability matrix, standards, metrics and quality rules."],
      ontology: ["Ontology Modeling", "Focus on business objects, relations, attributes, actions, rules and semantic mappings.", "Confirm business objects, relations, attributes, actions, business rules, semantic mappings and data asset mappings.", "Show object, relation, attribute, action and rule models."],
      custom: ["Custom Software", "Focus on roles, processes, functional modules, business entities, state transitions and acceptance paths.", "Confirm user roles, business processes, modules, entities, screens, permissions and acceptance paths.", "Show role, process, module, entity, permission and state models."],
      hybrid: ["Hybrid Project", "Define the main line first, then combine platform, governance, ontology and custom software methods.", "Confirm the phase focus, then split platform capabilities, governance objects, business objects, modules and integration boundaries.", "Show cross-domain capabilities, objects, processes, systems and dependencies."]
    },
    story: [
      ["Create Project", "Enter client, project type and current stage."], ["Import Sources", "Paste notes or upload client materials."], ["Run Analysis", "Let the model organize scope, architecture, features and questions."],
      ["Review Draft", "Apply the result only after human review."], ["Edit Canvas", "Revise scope, architecture and feature blueprint."], ["Generate Docs", "Produce tender, specification and delivery materials."]
    ],
    docTypes: [["presales", "Presales Proposal"], ["brd", "Business Requirement Document"], ["delivery-blueprint", "Delivery Blueprint"], ["dev-brief", "Development Brief"], ["tender", "Tender Document"], ["technical-spec", "Technical Specification"], ["statement", "Project Statement"]],
    templates: {
      general: "# Document Title\n\n## 1. Background\n## 2. Objectives\n## 3. Project Scope\n## 4. Business Architecture\n## 5. Feature Blueprint\n## 6. Implementation and Acceptance\n## 7. Risks and Open Questions",
      tender: "# Tender Document\n\n## 1. Tender Notice\n## 2. Bidder Instructions\n## 3. Project Overview and Procurement Scope\n## 4. Construction Content and Service Requirements\n## 5. Technical and Functional Requirements\n## 6. Implementation, Training and Operations\n## 7. Deliverables and Acceptance Criteria\n## 8. Bid Response Requirements\n## 9. Evaluation Points\n## 10. Attachments",
      spec: "# Technical Specification\n\n## 1. Overall Requirements\n## 2. Business Scope and Construction Content\n## 3. Functional Specifications\n## 4. Data and Modeling Requirements\n## 5. System Integration Requirements\n## 6. Permission, Audit and Security\n## 7. Non-functional Requirements\n## 8. Implementation Services\n## 9. Acceptance Indicators",
      statement: "# Project Statement\n\n## 1. Background\n## 2. Objectives\n## 3. Phase Scope\n## 4. Business Architecture\n## 5. Feature Blueprint\n## 6. Implementation Path\n## 7. Risks and Open Questions"
    }
  }
};

const $ = (s) => document.querySelector(s);
const $$ = (s) => Array.from(document.querySelectorAll(s));
const state = {
  lang: localStorage.getItem("paw.lang") || "zh",
  project: { clientName: "", projectName: "", type: "governance", stage: "research" },
  sourceText: "", sourceFiles: [],
  workspace: { summary: "", nextAction: "", scopeItems: [], architectureItems: [], features: [], questions: [], risks: [] },
  analysisDraft: null, document: { title: "", markdown: "" }, docType: "delivery-blueprint",
  templateId: "general", templateText: "", templateFiles: [], activeView: "overview",
  analysisTask: { running: false, steps: [] }, documentTask: { running: false, steps: [] }
};

const el = {
  notice: $("#notice"), topTitle: $("#topTitle"), clientName: $("#clientName"), projectName: $("#projectName"), projectType: $("#projectType"), projectStage: $("#projectStage"),
  projectNameDisplay: $("#projectNameDisplay"), projectTypeBadge: $("#projectTypeBadge"), projectSummary: $("#projectSummary"), sourceText: $("#sourceText"), sourceFiles: $("#sourceFiles"),
  sourceFileList: $("#sourceFileList"), sourceGate: $("#sourceGate"), analysisStatus: $("#analysisStatus"), analysisSteps: $("#analysisSteps"), analysisLog: $("#analysisLog"),
  draftStatus: $("#draftStatus"), analysisDraft: $("#analysisDraft"), scopeBoard: $("#scopeBoard"), scopeHint: $("#scopeHint"), architectureMap: $("#architectureMap"),
  architectureHint: $("#architectureHint"), questionList: $("#questionList"), featureBoard: $("#featureBoard"), docType: $("#docType"), templateSelect: $("#templateSelect"),
  templateText: $("#templateText"), templateFiles: $("#templateFiles"), templateFileList: $("#templateFileList"), documentGate: $("#documentGate"), documentSteps: $("#documentSteps"),
  documentStatus: $("#documentStatus"), documentTitle: $("#documentTitle"), documentPreview: $("#documentPreview"), provider: $("#provider"), apiBase: $("#apiBase"), apiKey: $("#apiKey"),
  model: $("#model"), temperature: $("#temperature"), maxTokens: $("#maxTokens"), jsonMode: $("#jsonMode"), modelStatus: $("#modelStatus")
};

function t(key) { return I18N[state.lang][key] || key; }
function uid(prefix) { return `${prefix}-${Math.random().toString(36).slice(2, 9)}`; }
function esc(v) { return String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[c])); }
function splitLines(v) { return String(v || "").split(/\n|；|;/).map((x) => x.trim()).filter(Boolean); }
function currentTypes() { return data[state.lang].types; }
function typeInfo() { return currentTypes()[state.project.type] || currentTypes().hybrid; }
function templateText(id = state.templateId) {
  const key = id === "technical-spec" ? "spec" : id === "default-tender" ? "tender" : id === "default-statement" ? "statement" : "general";
  return data[state.lang].templates[key];
}
function hasModelConfig() { return Boolean(el.apiKey.value.trim() && el.apiBase.value.trim() && el.model.value.trim()); }
function hasSourceInput() { return Boolean(state.sourceText.trim() || state.sourceFiles.length); }
function hasProjectInfo() { return Boolean(state.project.clientName.trim() && state.project.projectName.trim()); }
function workspacePayload() { return state.workspace; }
function getConfig() {
  return { provider: el.provider.value, apiBase: el.apiBase.value.trim(), apiKey: el.apiKey.value.trim(), model: el.model.value.trim(), temperature: Number(el.temperature.value || 0.2), maxTokens: Number(el.maxTokens.value || 8000), jsonMode: el.jsonMode.checked };
}

async function api(path, payload) {
  const response = await fetch(path, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || "Request failed");
  return data;
}

function showNotice(message, type = "info") {
  el.notice.textContent = message;
  el.notice.className = `notice ${type}`;
  clearTimeout(showNotice.timer);
  showNotice.timer = setTimeout(() => el.notice.classList.add("hidden"), 4500);
}

function applyI18n() {
  document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
  $$("[data-i18n]").forEach((node) => { node.textContent = t(node.dataset.i18n); });
  $$(".lang-btn").forEach((btn) => btn.classList.toggle("active", btn.dataset.lang === state.lang));
  el.projectType.innerHTML = Object.entries(currentTypes()).map(([value, item]) => `<option value="${value}">${esc(item[0])}</option>`).join("");
  el.projectStage.innerHTML = data[state.lang].stages.map(([value, label]) => `<option value="${value}">${esc(label)}</option>`).join("");
  el.docType.innerHTML = data[state.lang].docTypes.map(([value, label]) => `<option value="${value}">${esc(label)}</option>`).join("");
  el.provider.innerHTML = Object.entries(providerPresets).map(([value, item]) => `<option value="${value}">${esc(item[0])}</option>`).join("");
  el.templateSelect.innerHTML = [
    ["general", t("defaultTemplate")], ["default-tender", t("tenderTemplate")], ["technical-spec", t("specTemplate")], ["default-statement", t("statementTemplate")], ["custom", t("customTemplate")]
  ].map(([value, label]) => `<option value="${value}">${esc(label)}</option>`).join("");
  if (!state.templateText || state.templateId !== "custom") state.templateText = templateText();
}

function setView(view) {
  state.activeView = view;
  $$(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.view === view));
  $$(".view").forEach((item) => item.classList.toggle("active", item.id === `view-${view}`));
  el.topTitle.textContent = $(`.nav-item[data-view="${view}"]`)?.textContent || t("navOverview");
  render();
}

function readinessItems() {
  return [
    [hasProjectInfo(), t("needProject")],
    [hasSourceInput(), t("needSource")],
    [hasModelConfig(), t("needModel")],
    [state.workspace.scopeItems.length > 0, t("needScope")],
    [state.workspace.architectureItems.length > 0 || state.workspace.features.length > 0, t("needArchitecture")]
  ];
}

function renderOverview() {
  const info = typeInfo();
  el.projectNameDisplay.textContent = state.project.projectName || t("unnamedProject");
  el.projectTypeBadge.textContent = info[0];
  el.projectSummary.textContent = state.workspace.summary || info[1] || t("emptySummary");
  const done = readinessItems().filter(([ok]) => ok).length;
  $("#completionText").textContent = `${Math.round((done / readinessItems().length) * 100)}%`;
  $("#readinessList").innerHTML = readinessItems().map(([ok, label]) => `<div class="${ok ? "ok" : ""}"><span></span>${esc(label)}</div>`).join("");
  $("#metricSources").textContent = state.sourceFiles.length + (state.sourceText.trim() ? 1 : 0);
  $("#metricScope").textContent = state.workspace.scopeItems.length;
  $("#metricArchitecture").textContent = state.workspace.architectureItems.length;
  $("#metricQuestions").textContent = state.workspace.questions.length;
  $("#storyline").innerHTML = data[state.lang].story.map((item, index) => `<article class="story-step"><span>${index + 1}</span><strong>${esc(item[0])}</strong><p>${esc(item[1])}</p></article>`).join("");
}

function gateReasons(kind) {
  const reasons = [];
  if (!hasProjectInfo() && kind !== "document") reasons.push(t("needProject"));
  if (kind === "analysis" && !hasSourceInput()) reasons.push(t("needSource"));
  if (!hasModelConfig()) reasons.push(t("needModel"));
  if (kind === "document") {
    if (!state.workspace.scopeItems.length) reasons.push(t("needScope"));
    if (!state.workspace.architectureItems.length && !state.workspace.features.length) reasons.push(t("needArchitecture"));
  }
  return reasons;
}

function renderGate(target, reasons, readyText) {
  target.innerHTML = reasons.length
    ? `<div class="gate-blocked"><strong>${esc(t("blocked"))}</strong>${reasons.map((x) => `<span>${esc(x)}</span>`).join("")}</div>`
    : `<div class="gate-ready">${esc(readyText)}</div>`;
}

function renderSources() {
  renderGate(el.sourceGate, gateReasons("analysis"), t("readyAnalysis"));
  $("#analyzeSources").disabled = gateReasons("analysis").length > 0 || state.analysisTask.running;
  $("#analyzeSources").textContent = state.analysisTask.running ? `${t("analysisRunning")}...` : t("analyzeSources");
  el.analysisStatus.textContent = state.analysisTask.running ? t("analysisRunning") : t("waiting");
  el.sourceFileList.innerHTML = state.sourceFiles.map((file) => `<div class="file-chip"><strong>${esc(file.name)}</strong><span>${esc(file.parsed ? t("fileParsed") : t("fileRecorded"))}</span></div>`).join("");
  renderTaskSteps("analysis");
}

function renderDraft() {
  el.draftStatus.textContent = state.analysisDraft ? t("hasDraft") : t("noDraft");
  $("#applyAnalysisDraft").disabled = !state.analysisDraft;
  $("#discardAnalysisDraft").disabled = !state.analysisDraft;
  if (!state.analysisDraft) {
    el.analysisDraft.innerHTML = `<div class="empty-state">${esc(t("emptyDraft"))}</div>`;
    return;
  }
  const d = state.analysisDraft;
  el.analysisDraft.innerHTML = [
    draftSection("Summary", [d.summary, d.nextAction].filter(Boolean)),
    draftSection("Scope", d.scopeItems.map((x) => `${x.name} - ${x.reason || ""}`)),
    draftSection("Architecture", d.architectureItems.map((x) => `${x.name} (${x.kind || ""}) - ${x.description || ""}`)),
    draftSection("Features", d.features.map((x) => `${x.name} [${x.priority || ""}] - ${x.goal || ""}`)),
    draftSection("Questions", d.questions.map((x) => `${x.category || ""}: ${x.question || ""}`)),
    draftSection("Risks", d.risks)
  ].join("");
}

function draftSection(title, rows) {
  return `<section class="draft-section"><h4>${esc(title)}</h4>${rows.length ? rows.map((row) => `<p>${esc(row)}</p>`).join("") : `<p class="subtle">${esc(t("emptyState"))}</p>`}</section>`;
}

function renderEditableList(target, list, type, fields) {
  if (!list.length) target.innerHTML = `<div class="empty-state">${esc(t("emptyState"))}</div>`;
  else target.innerHTML = list.map((item, index) => `<article class="edit-card" data-type="${type}" data-index="${index}">
    ${fields.map((field) => editField(item, field)).join("")}
    <button class="danger-btn" data-delete="${type}" data-index="${index}">${esc(t("fields").delete)}</button>
  </article>`).join("");
}

function editField(item, field) {
  const labels = t("fields");
  const value = Array.isArray(item[field]) ? item[field].join("\n") : item[field] || "";
  if (field === "lane") return `<label>${labels.lane}<select data-field="lane">${["must", "suggested", "later", "out"].map((x) => `<option value="${x}" ${value === x ? "selected" : ""}>${x}</option>`).join("")}</select></label>`;
  if (field === "priority") return `<label>${labels.priority}<select data-field="priority">${["P1", "P2", "P3"].map((x) => `<option value="${x}" ${value === x ? "selected" : ""}>${x}</option>`).join("")}</select></label>`;
  const multiline = ["reason", "description", "relations", "question", "impact", "goal", "users", "acceptance"].includes(field);
  const label = labels[field] || field;
  return `<label>${esc(label)}${multiline ? `<textarea data-field="${field}">${esc(value)}</textarea>` : `<input data-field="${field}" value="${esc(value)}" />`}</label>`;
}

function renderScope() {
  el.scopeHint.textContent = typeInfo()[2];
  renderEditableList(el.scopeBoard, state.workspace.scopeItems, "scopeItems", ["name", "lane", "reason", "evidence"]);
}

function renderArchitecture() {
  el.architectureHint.textContent = typeInfo()[3];
  renderEditableList(el.architectureMap, state.workspace.architectureItems, "architectureItems", ["name", "kind", "description", "relations", "evidence"]);
  renderEditableList(el.questionList, state.workspace.questions, "questions", ["category", "question", "impact", "owner", "status"]);
}

function renderBlueprint() {
  renderEditableList(el.featureBoard, state.workspace.features, "features", ["name", "domain", "goal", "users", "acceptance", "priority", "status"]);
}

function markdownToHtml(markdown) {
  const out = [];
  let inList = false;
  const close = () => { if (inList) { out.push("</ul>"); inList = false; } };
  String(markdown || "").split("\n").forEach((raw) => {
    const line = raw.trim();
    if (!line) return close();
    if (line.startsWith("### ")) { close(); out.push(`<h4>${esc(line.slice(4))}</h4>`); }
    else if (line.startsWith("## ")) { close(); out.push(`<h3>${esc(line.slice(3))}</h3>`); }
    else if (line.startsWith("# ")) { close(); out.push(`<h2>${esc(line.slice(2))}</h2>`); }
    else if (/^[-*]\s+/.test(line)) { if (!inList) { out.push("<ul>"); inList = true; } out.push(`<li>${esc(line.replace(/^[-*]\s+/, ""))}</li>`); }
    else { close(); out.push(`<p>${esc(line)}</p>`); }
  });
  close();
  return out.join("");
}

function localDocumentMarkdown() {
  const p = state.project.projectName || t("unnamedProject");
  const w = state.workspace;
  return `# ${p}\n\n## 1. Summary\n${w.summary || t("emptySummary")}\n\n## 2. Scope\n${w.scopeItems.map((x) => `- ${x.name}: ${x.reason || ""}`).join("\n") || "- To be confirmed"}\n\n## 3. Business Architecture\n${w.architectureItems.map((x) => `- ${x.name} (${x.kind || ""}): ${x.description || ""}`).join("\n") || "- To be confirmed"}\n\n## 4. Feature Blueprint\n${w.features.map((x) => `- ${x.name} (${x.priority || ""}): ${x.goal || ""}`).join("\n") || "- To be confirmed"}\n\n## 5. Open Questions\n${w.questions.map((x) => `- [${x.category || ""}] ${x.question || ""}`).join("\n") || "- To be confirmed"}`;
}

function renderDocuments() {
  el.docType.value = state.docType;
  el.templateSelect.value = state.templateId;
  if (document.activeElement !== el.templateText) el.templateText.value = state.templateText;
  renderGate(el.documentGate, gateReasons("document"), t("readyDocument"));
  $("#generateDocument").disabled = gateReasons("document").length > 0 || state.documentTask.running;
  $("#generateDocument").textContent = state.documentTask.running ? `${t("documentRunning")}...` : t("generateDocument");
  el.documentStatus.textContent = state.documentTask.running ? t("documentRunning") : t("waiting");
  el.templateFileList.innerHTML = state.templateFiles.map((file) => `<div class="file-chip"><strong>${esc(file.name)}</strong><span>${esc(file.parsed ? t("fileParsed") : t("fileRecorded"))}</span></div>`).join("");
  renderTaskSteps("document");
  const md = state.document.markdown || localDocumentMarkdown();
  el.documentTitle.textContent = state.document.title || t("generatedFallbackTitle");
  el.documentPreview.innerHTML = markdownToHtml(md);
}

function renderSettings() {
  $("#releaseChecklist").innerHTML = readinessItems().map(([ok, label]) => `<div><strong>${ok ? "OK" : "TODO"}</strong><span>${esc(label)}</span></div>`).join("");
}

function renderTaskSteps(kind) {
  const task = kind === "analysis" ? state.analysisTask : state.documentTask;
  const target = kind === "analysis" ? el.analysisSteps : el.documentSteps;
  target.innerHTML = task.steps.map((s) => `<div class="task-step ${s.status}"><span></span>${esc(s.label)}</div>`).join("");
}

function setTask(kind, active, status = "running") {
  const labels = kind === "analysis"
    ? (state.lang === "zh" ? ["整理资料", "调用模型", "接收结果", "解析草稿", "等待确认"] : ["Prepare input", "Call model", "Receive result", "Parse draft", "Await review"])
    : (state.lang === "zh" ? ["检查内容", "套用模板", "调用模型", "接收正文", "生成预览"] : ["Check content", "Apply template", "Call model", "Receive content", "Render preview"]);
  const task = kind === "analysis" ? state.analysisTask : state.documentTask;
  task.steps = labels.map((label, index) => ({ label, status: index < active ? "done" : index === active ? status : "pending" }));
  renderTaskSteps(kind);
}

async function sleep(ms) { return new Promise((resolve) => setTimeout(resolve, ms)); }

function normalizeDraft(result) {
  return {
    summary: result.summary || "", nextAction: result.nextAction || "",
    scopeItems: (result.scopeItems || []).map((x) => ({ id: uid("scope"), lane: "suggested", ...x })),
    architectureItems: (result.architectureItems || []).map((x) => ({ id: uid("arch"), relations: [], ...x })),
    features: (result.features || []).map((x) => ({ id: uid("feature"), users: [], acceptance: [], priority: "P2", ...x })),
    questions: (result.questions || []).map((x) => ({ id: uid("question"), ...x })),
    risks: result.risks || []
  };
}

async function runAnalysis() {
  const reasons = gateReasons("analysis");
  if (reasons.length) return showNotice(reasons.join("；"), "warn");
  state.analysisTask.running = true;
  el.analysisLog.innerHTML = `<div class="log-item">${esc(t("analysisRunning"))}...</div>`;
  try {
    setTask("analysis", 0); await sleep(150); setTask("analysis", 1);
    const request = api("/api/ai/analyze", { language: state.lang, config: getConfig(), project: state.project, sources: { text: state.sourceText, files: state.sourceFiles }, workspace: workspacePayload() });
    await sleep(250); setTask("analysis", 2);
    const { result } = await request;
    setTask("analysis", 3); await sleep(100);
    state.analysisDraft = normalizeDraft(result);
    setTask("analysis", 4, "done");
    showNotice(t("analysisDone"));
    setView("analysis");
  } catch (error) {
    setTask("analysis", 1, "error");
    el.analysisLog.innerHTML = `<div class="log-item danger">${esc(error.message)}</div>`;
    showNotice(error.message, "error");
  } finally {
    state.analysisTask.running = false;
    render();
  }
}

function applyDraft() {
  if (!state.analysisDraft) return;
  state.workspace = { ...state.workspace, ...state.analysisDraft };
  state.analysisDraft = null;
  showNotice(t("applyDone"));
  setView("scope");
}

async function generateDocument() {
  const reasons = gateReasons("document");
  if (reasons.length) return showNotice(reasons.join("；"), "warn");
  state.documentTask.running = true;
  try {
    setTask("document", 0); await sleep(120); setTask("document", 1); await sleep(120); setTask("document", 2);
    const { result } = await api("/api/ai/document", { language: state.lang, config: getConfig(), project: state.project, docType: state.docType, template: { id: state.templateId, name: $("#templateSelect").selectedOptions[0]?.textContent, content: state.templateText, uploadedFiles: state.templateFiles }, workspace: workspacePayload() });
    setTask("document", 4, "done");
    state.document = result;
    showNotice(t("documentDone"));
  } catch (error) {
    setTask("document", 2, "error");
    showNotice(error.message, "error");
  } finally {
    state.documentTask.running = false;
    renderDocuments();
  }
}

async function testModel() {
  el.modelStatus.className = "notice inline";
  el.modelStatus.textContent = `${t("testModel")}...`;
  try {
    const result = await api("/api/llm/test", { config: getConfig() });
    el.modelStatus.textContent = `${result.message || t("connected")} - ${result.modelRole || ""}`;
  } catch (error) {
    el.modelStatus.className = "notice inline error";
    el.modelStatus.textContent = error.message;
  }
  render();
}

async function readFiles(files) {
  const records = [];
  const textParts = [];
  for (const file of files) {
    const lower = file.name.toLowerCase();
    const canRead = file.type.startsWith("text/") || lower.endsWith(".txt") || lower.endsWith(".md") || lower.endsWith(".markdown");
    if (canRead) {
      textParts.push(`\n\n<!-- ${file.name} -->\n${await file.text()}`);
      records.push({ name: file.name, size: file.size, type: file.type || "text", parsed: true });
    } else {
      records.push({ name: file.name, size: file.size, type: file.type || "binary", parsed: false });
    }
  }
  return { records, text: textParts.join("") };
}

function addItem(type) {
  const defaults = {
    scopeItems: { id: uid("scope"), name: "", lane: "must", reason: "", evidence: "manual" },
    architectureItems: { id: uid("arch"), name: "", kind: "", description: "", relations: [], evidence: "manual" },
    questions: { id: uid("question"), category: "", question: "", impact: "", owner: "", status: "to be confirmed" },
    features: { id: uid("feature"), name: "", domain: "", goal: "", users: [], acceptance: [], priority: "P2", status: "draft" }
  };
  state.workspace[type].unshift(defaults[type]);
  render();
}

function bindEvents() {
  $$(".nav-item").forEach((item) => item.addEventListener("click", () => setView(item.dataset.view)));
  $$(".lang-btn").forEach((item) => item.addEventListener("click", () => { state.lang = item.dataset.lang; localStorage.setItem("paw.lang", state.lang); applyI18n(); render(); }));
  $("#goSourcesTop").addEventListener("click", () => setView("sources"));
  $("#goSettingsTop").addEventListener("click", () => setView("settings"));
  $("#goSources").addEventListener("click", () => setView("sources"));
  $("#saveProjectInfo").addEventListener("click", () => showNotice(t("saved")));
  $("#saveSources").addEventListener("click", () => showNotice(t("sourcesSaved")));
  $("#analyzeSources").addEventListener("click", runAnalysis);
  $("#applyAnalysisDraft").addEventListener("click", applyDraft);
  $("#rerunAnalysis").addEventListener("click", runAnalysis);
  $("#backToSources").addEventListener("click", () => setView("sources"));
  $("#discardAnalysisDraft").addEventListener("click", () => { state.analysisDraft = null; showNotice(t("draftDiscarded")); renderDraft(); });
  $("#addScopeItem").addEventListener("click", () => addItem("scopeItems"));
  $("#addArchitectureItem").addEventListener("click", () => addItem("architectureItems"));
  $("#addQuestion").addEventListener("click", () => addItem("questions"));
  $("#addFeature").addEventListener("click", () => addItem("features"));
  $("#generateDocument").addEventListener("click", generateDocument);
  $("#testModel").addEventListener("click", testModel);
  $("#copyDocument").addEventListener("click", async () => { await navigator.clipboard.writeText(state.document.markdown || localDocumentMarkdown()); showNotice(t("copied")); });
  $("#clearSources").addEventListener("click", () => { if (confirm(t("confirmClear"))) { state.sourceText = ""; state.sourceFiles = []; render(); } });

  el.clientName.addEventListener("input", () => { state.project.clientName = el.clientName.value; render(); });
  el.projectName.addEventListener("input", () => { state.project.projectName = el.projectName.value; render(); });
  el.projectType.addEventListener("change", () => { state.project.type = el.projectType.value; render(); });
  el.projectStage.addEventListener("change", () => { state.project.stage = el.projectStage.value; });
  el.sourceText.addEventListener("input", () => { state.sourceText = el.sourceText.value; renderSources(); });
  el.sourceFiles.addEventListener("change", async (event) => { const { records, text } = await readFiles(Array.from(event.target.files || [])); state.sourceFiles = records; if (text) state.sourceText = `${state.sourceText}\n${text}`.trim(); render(); });
  el.templateFiles.addEventListener("change", async (event) => { const { records, text } = await readFiles(Array.from(event.target.files || [])); state.templateFiles = records; if (text) { state.templateId = "custom"; state.templateText = `${state.templateText}\n${text}`.trim(); } renderDocuments(); });
  el.docType.addEventListener("change", () => { state.docType = el.docType.value; if (state.templateId !== "custom") { state.templateId = state.docType === "tender" ? "default-tender" : state.docType === "technical-spec" ? "technical-spec" : state.docType === "statement" ? "default-statement" : "general"; state.templateText = templateText(); } renderDocuments(); });
  el.templateSelect.addEventListener("change", () => { state.templateId = el.templateSelect.value; if (state.templateId !== "custom") state.templateText = templateText(); renderDocuments(); });
  el.templateText.addEventListener("input", () => { state.templateText = el.templateText.value; state.templateId = "custom"; });
  el.provider.addEventListener("change", () => applyProviderPreset(true));
  $("#clearModelConfig").addEventListener("click", () => { el.apiKey.value = ""; el.apiBase.value = ""; el.model.value = ""; sessionStorage.removeItem("paw.apiKey"); applyProviderPreset(true); render(); });
  [el.apiBase, el.model, el.temperature, el.maxTokens, el.jsonMode].forEach((field) => field.addEventListener("input", persistConfig));
  el.apiKey.addEventListener("input", () => { sessionStorage.setItem("paw.apiKey", el.apiKey.value); render(); });
  document.addEventListener("input", (event) => {
    const card = event.target.closest(".edit-card");
    const field = event.target.dataset.field;
    if (!card || !field) return;
    const item = state.workspace[card.dataset.type][Number(card.dataset.index)];
    item[field] = ["relations", "users", "acceptance"].includes(field) ? splitLines(event.target.value) : event.target.value;
  });
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-delete]");
    if (!button) return;
    state.workspace[button.dataset.delete].splice(Number(button.dataset.index), 1);
    render();
  });
}

function applyProviderPreset(force = false) {
  const preset = providerPresets[el.provider.value] || providerPresets["openai-compatible"];
  if (force || !el.apiBase.value) el.apiBase.value = preset[1];
  if (force || !el.model.value) el.model.value = preset[2];
  persistConfig();
  render();
}

function persistConfig() {
  localStorage.setItem("paw.modelConfig", JSON.stringify({ provider: el.provider.value, apiBase: el.apiBase.value, model: el.model.value, temperature: el.temperature.value, maxTokens: el.maxTokens.value, jsonMode: el.jsonMode.checked }));
}

function restoreConfig() {
  const saved = JSON.parse(localStorage.getItem("paw.modelConfig") || "{}");
  if (saved.provider) el.provider.value = saved.provider;
  el.apiBase.value = saved.apiBase || "";
  el.model.value = saved.model || "";
  el.temperature.value = saved.temperature || "0.2";
  el.maxTokens.value = saved.maxTokens || "8000";
  el.jsonMode.checked = saved.jsonMode !== false;
  el.apiKey.value = sessionStorage.getItem("paw.apiKey") || "";
  applyProviderPreset(false);
}

function render() {
  if (document.activeElement !== el.clientName) el.clientName.value = state.project.clientName;
  if (document.activeElement !== el.projectName) el.projectName.value = state.project.projectName;
  if (document.activeElement !== el.sourceText) el.sourceText.value = state.sourceText;
  el.projectType.value = state.project.type;
  el.projectStage.value = state.project.stage;
  renderOverview(); renderSources(); renderDraft(); renderScope(); renderArchitecture(); renderBlueprint(); renderDocuments(); renderSettings();
}

function init() {
  applyI18n();
  restoreConfig();
  bindEvents();
  render();
}

init();
