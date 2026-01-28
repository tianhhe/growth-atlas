# DESIGN SYSTEM — “Atlas UI”

> 目标：对标 Anthropic 官网的克制高级感（大留白、低饱和、柔和渐变、干净排版）。参考其首页的简洁布局和极少色彩使用，保持平衡与可读性。citeturn0search4

## 1) 视觉基线
- 网格：最大宽度 1180px，16px 基础间距；常用列：3/4 自适应卡片。
- 行宽：正文 60–72 字符。
- 字阶：32/24/18/16/14/12（H1/H2/H3/正文/辅助/微注）。
- 行高：1.6；段距 12–16px。
- 圆角：18px(卡片)、12px(按钮/输入)、8px(微控件)。
- 阴影：0 18px 50px rgba(15,23,42,0.08)；悬停时 0 12px 30px rgba(79,70,229,0.22)。
- 边框/分割线：#e5e7eb；分割线 1px。
- 交互态：hover 提升阴影+轻微上移；focus ring 2px #4f46e5 20% 透明。

## 2) 色板 & Tokens（CSS 变量）
- 主色 `--primary #4f46e5`
- 强调 `--accent #00c2a8`
- 背景 `--bg #f7f8fb`
- 表面 `--surface #ffffff`
- 正文 `--text #0f172a`
- 次级 `--muted #5b6475`
- 描边 `--border #e5e7eb`
- 阴影 `--shadow` 同上
- 圆角：`--radius-lg 18px` `--radius-md 12px` `--radius-sm 8px`
- 字重：700/800 用于标题与按钮

## 3) 组件规范
- Card：18px 圆角，1px 边，阴影；内边距 18px；标题+副标题+动作区（右上）。
- Pill/Tag：圆角 999px，背景低饱和（primary-soft）；最多显示 3 个，余量 “+N”。
- Button：主（靛蓝实底）、次（白底描边）、ghost（透明描边）；悬停轻微上移。
- Input：12px 圆角，1px 边，focus 用主色描边；内边距 12px。
- Table：1px 网格线，14px 字号；标题行粗体。
- Callout：淡渐变背景 + 1px 边；图标/标题/正文。
- Breadcrumb：13px，箭头分隔；最后节点低对比度。
- On-this-page：右侧粘性，14px 列表，可点击滚动。
- Accordion：外框 1px + 12px 圆角；展开背景 #f9fafb。
- Tabs：软背景胶囊；活动态白底+阴影。
- Dialog/Drawer：模糊遮罩，卡片 18px 圆角；Drawer 从右侧 360px；ESC/点击遮罩关闭。
- Tooltip：深色 90% 透明，圆角 8px，阴影轻。

## 4) 插画占位策略
- 自制 SVG：简化几何+柔和渐变（蓝紫/青），线条强调“连接/路径”。
- 尺寸：Hero 1200×360；空状态 320×220；侧插画 400×240。
- 生成提示词（中/英）：
  - “柔和渐变背景的抽象科技线条，圆角几何体，蓝紫+青绿色调，克制留白”
  - “Abstract soft gradient tech shapes, rounded geometry, blue‑violet with teal accents, high whitespace”
- 占位文件放 `public/illustrations/placeholder-*.svg`，可替换同尺寸。

## 5) Anthropic 风格对齐清单（15 条）
1. 大面积留白；模块间距 ≥16px  
2. 极少主色使用，正文深灰而非纯黑  
3. 卡片边界清晰但不过度阴影  
4. 圆角一致（18/12/8）  
5. 字体无衬线、紧凑字距；标题略负 tracking  
6. 页面首屏信息 ≤3 行文字 + 3~6 卡片  
7. 悬停轻微、克制动效（<200ms）  
8. 标签不堆砌，默认 ≤3，超出折叠  
9. 文本行宽控制在 60–72 字符  
10. 正文行高 1.6；段距固定  
11. 所有图表用淡色背景、细线条  
12. 负空间中有细分割线而非重色块  
13. Breadcrumb 与标题之间保留 12px 间距  
14. 空状态有插画+一句安抚文案，不出现“暂无数据”式冷处理  
15. 移动端：单列栅格、顶栏收起、粘性返回/导航按钮
