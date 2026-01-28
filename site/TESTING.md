# 测试清单（≥25）

数据 & 校验
1. `npm run lint:data` 通过；无重复 id / 缺字段 / related/children 断链。
2. knowledge.json 节点数=70；summary ≤120 字；proof excerpt ≤80 字。
3. hub 节点 children_ids 非空；cluster children_ids 均可解析。
4. paths.json 每个 ref id 存在于 knowledge.json。
5. taxonomy 中 stage/channel/type 与数据实际使用一致（抽样）。

构建
6. `npm run build` 成功；`out/` 生成；无动态导出错误。
7. `npm run start` 可访问所有路由（/ /atlas /hub /cluster /item 子页 /proof /paths /path /graph /workbench /tags）。

L0–L5 导航
8. 首页仅 3 个主 CTA + 6 Hub 卡；无条目列表。
9. Atlas 显示全部 Hub；点击进入对应 hub 页。
10. Hub 页最多 6 个 cluster 卡；关键问题列表展示 3–7 条。
11. Cluster 页显示结构列表、阅读顺序、误区 callout；点击节点跳到 item。
12. Item 页只含 TL;DR 与子页入口卡（playbook/metrics/pitfalls/proof）。
13. Item 子页 tabs 正常切换；Breadcrumb 回到上层；“返回模块”可用。
14. Proof 页显示来源文件名/章节/locator/excerpt；支持返回相关 item。
15. 路径列表 6 条；路径详情步骤可跳转到对应 item/cluster。
16. Workbench 选择节点后生成 Markdown；未选时提示空状态。

低过载与 UI
17. 每卡摘要 ≤2 行；标签显示 ≤3，其余 +N。
18. 移动端宽度 375px：栅格单列、导航隐藏、内容不溢出。
19. Hover 动效存在但克制（按钮/卡片轻微上浮）。
20. Breadcrumb 间距与分隔符正确；On-this-page 仅在 item 子页 / proof 出现。
21. 空状态组件显示插画 + 文案，无“暂无数据”生硬文案。

可视化
22. /graph 网络图可拖拽，点击节点跳详情；节点颜色按 type。
23. /item/[id]/metrics 漏斗和矩阵正常渲染（无空白）。
24. Cluster 结构图（列表）加载无报错。

搜索与过滤（可选）
25. /library 搜索“直播”能返回相关条目；过滤 stage=Acquisition + channel=直播 时结果匹配。

可访问性
26. 所有按钮/链接可键盘聚焦；focus ring 可见。
27. 图片均有 alt（占位插画）或装饰性可忽略。
