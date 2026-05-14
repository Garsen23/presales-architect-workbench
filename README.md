# Presales Architect Workbench

A local web workbench for presales business architects. It turns client inputs, meeting notes, uploaded materials and architect review into implementation-ready scope, business architecture, feature blueprints and formal documents.

中文名：售前业务架构师工作台。

## Product Scope

The current formal version keeps one focused user mode: Architect Mode.

Core workflow:

1. Create a project and select the project type.
2. Paste meeting notes or upload project materials.
3. Configure an LLM provider and test the connection.
4. Start analysis after the inputs are ready.
5. Review the AI draft before applying it to the workspace.
6. Edit scope, architecture, features and open questions manually.
7. Generate formal documents such as tender documents, technical specifications, project statements and delivery blueprints.

## Project Types

The workbench does not force ontology or object modeling for every project. Modeling focus changes by project type:

- Big data platform: platform capabilities, data flows, system boundaries, data services, security and operations.
- Data governance: governance objects, accountability, standards, metrics, quality rules and workflows.
- Ontology modeling: business objects, relations, attributes, actions, rules and semantic mappings.
- Custom software: roles, processes, modules, business entities, states and acceptance paths.
- Hybrid project: combines the above methods based on the current phase focus.

## LLM Providers

The app uses OpenAI-compatible Chat Completions APIs through the local Node server. API keys are not hardcoded and are stored only in the current browser session.

Preset providers include:

- Kimi / Moonshot
- GLM / Zhipu
- DeepSeek
- MiniMax
- Qwen
- Doubao / Volcano Engine
- Baichuan
- Yi / 01.AI
- SiliconFlow
- OpenRouter
- Tencent Hunyuan
- OpenAI
- Custom OpenAI-compatible endpoint

## Local Development

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

Use another port:

```bash
$env:PORT=3001
npm run dev
```

## Important Files

- `server.mjs` - local static server and LLM proxy endpoints
- `public/index.html` - application shell
- `public/app.js` - product workflow, state, bilingual UI and API calls
- `public/styles.css` - formal TOB workbench styling
- `public/ontology-guide-bilingual.html` - bilingual usage guide
- `public/manual-assets/` - screenshots used by the guide

## Git Release Flow

Before pushing a formal version:

```bash
git status
git add package.json server.mjs public/index.html public/app.js public/styles.css public/ontology-guide-bilingual.html public/manual-assets README.md .gitignore
git commit -m "feat: release presales architect workbench"
git push origin main
```

Do not commit `.env`, API keys, cache folders, build artifacts or unrelated local documents.
