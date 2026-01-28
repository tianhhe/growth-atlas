# 增长知识图谱（Design-first，多层渐进）

基于 `knowledge/` 目录 11 份本地文档，抽取并分层组织 70 个节点（含 hub / cluster / item / proof），呈现“地图 → 模块 → 条目 → 证据”的渐进体验。UI 对标 Anthropic 官网页风：大留白、低饱和、柔和插画、克制动效。

## 运行与构建
```bash
npm install              # 安装依赖
npm run dev              # 本地开发 (http://localhost:3000)
npm run build            # 生成静态导出 (site/.next 与 out/)
npm run start            # 预览生产构建
npm run lint:data        # 校验数据结构与断链
```
Node 18+。GitHub Pages 使用 `out/` 目录；Vercel 直接导入仓库，构建命令 `npm run build`。

## 数据层
- `site/data/knowledge.json`：70 节点，字段含 id/type/title/summary/body/tags/stage/channel/metrics/playbook_steps/pitfalls/related_ids/children_ids/sources。
- `site/data/taxonomy.json`：阶段、渠道、类型、标签词典。
- `site/data/paths.json`：6 条路径。
- 校验：`npm run lint:data` 检查重复 id、缺字段、related/children 断链。
- 扩展：新增文档后按现有字段补全节点与 sources，引入 hub/cluster 链接，再运行校验。

## 页面层级（L0-L5）
- L0 `/`：定位 + 三入口（地图/路径/搜索）+ 6 Hub 卡片。
- L1 `/atlas`：Hub 地图（仅标题+一句话）。
- L2 `/hub/[hubId]`：Cluster 目录 + 关键问题。
- L3 `/cluster/[clusterId]`：结构图 + 阅读顺序 + 误区。
- L4 `/item/[id]`：TL;DR + 子页入口（playbook/metrics/pitfalls/proof）。
  - `/item/[id]/playbook`：步骤清单
  - `/item/[id]/metrics`：指标/漏斗/矩阵
  - `/item/[id]/pitfalls`：误区与反例
  - `/item/[id]/proof`：证据入口
- L5 `/proof/[proofId]`：来源摘录与关联条目。
- 辅助：`/paths` 路线 · `/path/[pathId]` 详情 · `/graph` 关系图 · `/workbench` 组合导出 · `/tags/[tag]` 标签聚合。

## 设计与体验
- 设计系统：`site/DESIGN_SYSTEM.md`（视觉基线、tokens、组件、Anthropic 对齐清单）。
- 信息架构：`site/IA.md`（Sitemap L0-L5、信息预算、模板）。
- 低过载：卡片 ≤6/屏；摘要 ≤2 行；标签 ≤3（其余折叠 “+N”）；正文默认不超一屏，细节进子页。
- 组件：NavBar/Breadcrumb/On-page/Accordion/Tabs/PillOverflow/CardGrid/ClusterStructure/ItemSubnav/CitationList/EmptyState。
- 可视化：Graph（网络图）、Funnel/Matrix（指标）、结构列表（Cluster）、路径折叠。

## 数据可追溯
每个 item/proof 关联 sources：`file_name + section_heading + locator + excerpt(<=80字)`，在证据页与子页折叠展示，可追溯到本地原文。

## 部署
- GitHub Pages：`npm run build` 后发布 `out/`。
- Vercel：根目录，构建命令 `npm run build`；无需服务器端渲染。
