# 信息架构（IA）与页面层级

## Sitemap（L0–L5）
- **L0 /home**：定位 + 3 入口（地图/路径/搜索）+ 6 个 hub 卡片（不展示条目列表）
- **L1 /atlas**：所有 hub 的地图视图，轻量关系示意；仅标题+一句话+进入
- **L2 /hub/[hubId]**：该领域的 cluster 目录（≤6/屏）；关键问题清单（3–7 条）；无长文
- **L3 /cluster/[clusterId]**：模块结构图（children_ids 树/列表）；阅读顺序建议（3–5 步）；常见误区 callout（≤5）；点击节点进入 item
- **L4 /item/[id]**：TL;DR + 3 个子页入口（playbook/metrics/pitfalls/proof）；默认不展开长文
  - /item/[id]/playbook：步骤与清单
  - /item/[id]/metrics：指标/漏斗/矩阵
  - /item/[id]/pitfalls：误区与反例
  - /item/[id]/proof：关联证据列表（跳往 proof）
- **L5 /proof/[proofId]**：摘录+来源定位+支持结论+关联条目；默认折叠
- **Paths /paths /path/[pathId]**：分步路线，默认收起细节，步骤可跳 cluster/item
- **Workbench /workbench**：用户收藏组合，导出 Markdown
- **Graph /graph**：关系探索（网络图），非主入口

## 领域分解（Domain → Theme → Module → Item → Proof）
- **领域 / Hub**：增长基础、渠道与内容、直播电商、本地生活、社交关系、游戏与泛内容
- **主题 / Cluster**：在 hub 下拆为 2–3 个模块，如“漏斗与方法论”“直播阶段与平台”
- **模块 / Item**：概念/方法/案例/指标等原子知识点
- **证据 / Proof**：单条引用，指向原文出处，支持某个 item 的结论
- 拆分原则：每层只回答一个问题；避免同层混杂不同抽象级；children_ids 体现父子层级。

## 低过载策略（信息预算）
- L0：首屏 3 CTA + 6 hub 卡；每卡摘要 ≤2 行
- L1：hub 网格首屏 6；标签 ≤3；描述 1 行
- L2：cluster 卡 ≤6；关键问题 3–7 条；无正文段落
- L3：结构图仅列节点标题；阅读顺序 3–5 步；误区 ≤5 条；无长文
- L4：主页只保留 TL;DR + 子页入口卡片（3~4 张）；标签 ≤3；正文不超过 1 屏
- 子页：表格/步骤分页或折叠；Sources 折叠；标签折叠
- Graph：默认缩放居中；节点 tooltip 仅标题

## 交互推进机制
- 每层仅给“下一步”显眼按钮：Hub→Cluster→Item→子页/Proof
- Breadcrumb + “返回上层”按钮
- On-this-page 仅在 L4 子页与 proof 出现
- 搜索作为快捷入口，仍以 Atlas/Paths 为主引导

## 页面模板规范
- **Hub 模板**：标题 + 问题清单 + cluster 卡网格 + “开始阅读顺序”按钮
- **Cluster 模板**：结构图（列表/树）、阅读顺序（列表）、误区 callout、子节点卡片
- **Item 模板**：TL;DR、适用场景、标签、子页入口卡片、关联节点（related_ids）
- **Item 子页**：顶部摘要 + tabs + 主体（步骤/指标/误区/证据）；右侧 On-this-page；底部“回到 Item”按钮
- **Proof 模板**：证据摘录、来源（文件名+章节+locator）、支持结论、相关条目链接
- **Paths 模板**：折叠步骤列表（每步摘要 ≤2 行）、检查点、跳转链接；导出 Markdown
- **Workbench 模板**：已选节点列表 + 可排序 + 导出/复制按钮；空状态插画
