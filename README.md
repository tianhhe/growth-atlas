# Growth Atlas

一个基于本地营销增长知识库构建的多层交互式百科站点。核心内容和页面都在 `site/` 目录：

- **数据层**：`site/data/knowledge.json` / `taxonomy.json`，从 11 份营销案例与方法论文档解析而来，支持 hub/cluster/item/proof 分层。
- **设计与信息架构**：`site/DESIGN_SYSTEM.md`、`site/IA.md`、`site/DESIGN.md`、`site/ILLUSTRATION.md`。
- **前端工程**：Next.js (App Router)，多层浏览（欢迎页、首页、地图、Hub、Cluster、Item 及子页、Paths、Graph、Workbench），内置搜索、过滤、导出与引用展示。
- **校验与测试**：`site/scripts/validate-data.mjs` 校验数据完整性，`site/TESTING.md` 提供 25+ 用例。

开发/预览：
```bash
cd site
npm install
npm run dev
```

生产构建：
```bash
cd site
npm run build
npm start    # 需要先 npm i -g serve，或直接部署到 Vercel / GitHub Pages
```

此仓库仅包含整理后的知识与站点源码，未依赖外部服务。添加新的知识文件后，可运行 `npm run lint:data` 重新校验数据并构建站点。
