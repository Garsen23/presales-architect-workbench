# Presales Architect Workbench

> Standardize presales work, turn field knowledge into reusable enterprise assets, and generate delivery-ready materials from client inputs.

**Presales Architect Workbench** is a bilingual operating workspace for enterprise presales teams. It helps architects transform scattered customer conversations, uploaded materials, product capabilities and internal delivery knowledge into standardized scope definitions, solution blueprints, feature combinations and formal project documents.

中文名：**售前业务架构师工作台**

![Project overview](public/manual-assets/01-overview.png)

## Product Positioning

Enterprise presales work often depends heavily on individual experience. Different architects may ask different questions, write different documents, use different solution structures, and hand over work to delivery teams in inconsistent formats.

This project is designed to change that.

It turns presales from a personal craft into a repeatable operating process:

- standardize how requirements are collected
- standardize how scope is confirmed
- standardize how architecture and feature blueprints are produced
- standardize how open questions and risks are tracked
- standardize how tender documents, technical specifications and delivery materials are generated

The long-term goal is not only to build a document tool. The goal is to become a **presales workflow operating layer** for enterprise ToB teams.

## Core Value

### 1. From Presales Experience to SOP

The workbench packages the key steps of presales architecture work into a clear SOP:

1. create a project
2. import customer materials
3. run structured analysis
4. review AI-generated drafts
5. confirm scope
6. shape business architecture
7. assemble feature blueprints
8. generate formal documents

This makes presales output more stable across teams, regions and project types.

![Source input](public/manual-assets/02-sources.png)

### 2. From Scattered Inputs to Structured Delivery Assets

Client workshops, meeting notes and uploaded files are usually fragmented. The workbench turns them into structured assets that delivery teams can understand:

- project scope
- architecture elements
- business objects or governance objects
- feature modules
- acceptance criteria
- risks and open questions
- formal project documents

AI is used as a structuring assistant, while the architect remains responsible for review and final judgment.

![Analysis review](public/manual-assets/03-analysis.png)

### 3. From Single Project Delivery to Enterprise Reuse

For an enterprise with an internal product matrix, this workbench can evolve into a solution assembly layer.

Instead of designing every proposal from scratch, the platform can connect customer requirements with internal products, modules and delivery templates:

- match requirements to existing product capabilities
- combine standard modules into industry solutions
- reuse proven implementation patterns
- reduce repeated proposal writing
- improve consistency between sales promises and delivery capability

This is where the product becomes more than a presales note-taking tool. It becomes a bridge between **customer demand**, **enterprise product assets** and **delivery execution**.

### 4. Agent-Ready Enterprise Integration

The current version is a local workbench. The next step is to connect it with enterprise systems through agents.

Potential integrations include:

- CRM: customer profiles, opportunities, account history and sales stages
- internal product platforms: product catalog, module capabilities and pricing references
- knowledge bases: industry cases, best practices and delivery templates
- project management systems: delivery tasks, milestones and acceptance plans
- document systems: proposal libraries, tender templates and historical submissions

With agents, the workbench can become the front office of a larger presales automation system.

## Workflow Story

Imagine a presales architect just finished a client workshop.

The client described business pain points, uploaded partial documents, mentioned several existing systems, and asked for a proposal before the next meeting. The architect opens the workbench and follows a structured journey:

1. **Set up the project**  
   Enter the client name, project name, phase and project type.

2. **Import customer materials**  
   Paste meeting notes or upload files. The system waits for complete inputs and does not analyze before the architect starts the process.

3. **Run AI-assisted analysis**  
   Configure Kimi, GLM, DeepSeek, MiniMax, Qwen, Doubao, OpenAI, OpenRouter or another compatible model.

4. **Review before applying**  
   AI results are shown as drafts. The architect reviews assumptions before applying them to the workspace.

5. **Confirm scope and architecture**  
   The workbench helps convert uncertainty into explicit scope items, architecture elements and open questions.

6. **Generate documents**  
   The reviewed workspace becomes a source for tender documents, technical specifications, project statements and delivery blueprints.

## Workspace Modules

### Scope Confirmation

Scope is separated into must-have, suggested, later-phase and out-of-scope items. This helps the sales team, client and delivery team align before implementation starts.

![Scope canvas](public/manual-assets/04-scope.png)

### Business Architecture

The architecture canvas captures the elements that matter for the project: systems, roles, processes, governance objects, business objects, rules and relationships.

![Business architecture](public/manual-assets/05-architecture.png)

### Feature Blueprint

The feature blueprint converts architecture thinking into implementable modules, including users, goals, priorities and acceptance criteria.

![Feature blueprint](public/manual-assets/06-blueprint.png)

### Document Center

The document center generates formal materials from the reviewed workspace, not from raw notes alone.

Supported outputs include:

- presales proposal material
- business requirement document
- delivery implementation blueprint
- development task brief
- tender document
- technical specification
- project statement

Templates can come from the default library or user-uploaded files.

![Document center](public/manual-assets/07-documents.png)

## Why Enterprises Would Use It

This product is valuable when a company wants to:

- make presales output less dependent on individual consultants
- shorten the time from customer research to proposal material
- align sales commitments with real product and delivery capabilities
- reuse product modules, solution patterns and historical project knowledge
- create a consistent handover path from sales to delivery
- prepare for an agent-based sales and solution automation system

## Model Providers

The app calls large models through the local Node server using OpenAI-compatible Chat Completions APIs. API keys are not hardcoded in the repository.

Preset providers:

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

## Quick Start

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

Use another port on Windows PowerShell:

```powershell
$env:PORT=3001
npm run dev
```

## Repository Structure

```text
.
|-- server.mjs                         # Static server and LLM proxy
|-- public/
|   |-- index.html                      # Main workbench
|   |-- app.js                          # Workflow, state, bilingual UI and API calls
|   |-- styles.css                      # TOB workbench styling
|   |-- ontology-guide-bilingual.html   # Bilingual usage guide
|   `-- manual-assets/                  # Real screenshots used in guide and README
|-- package.json
|-- README.md
`-- .gitignore
```

## Current Stage

This repository is the formal demo version. It already includes the core workflow, bilingual UI, model provider configuration, review-before-apply logic, document generation flow and usage guide.

Future evolution can focus on:

- CRM integration agents
- internal product matrix integration
- solution module recommendation
- document template governance
- delivery task generation
- enterprise knowledge base retrieval
