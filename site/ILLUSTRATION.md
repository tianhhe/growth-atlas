# 插画策略

无需真实图片，工程内使用占位 SVG；未来可按提示词替换。

## 插画位定义
- 首页 Hero：1 张 1200×360 抽象科技流线。
- 首页可视化旁侧：1 张 400×240 节点网络。
- Library 空状态：1 张 320×200 放大镜+卡片。
- Graph 页面侧栏：1 张 360×200 抽象节点。
- Paths 顶部：1 张 480×220 阶梯/箭头流程。

## 占位 SVG
- 存放于 `site/public/illustrations/placeholder-*.svg`；可替换为同尺寸文件。

## 生成提示词（中/英）
- “柔和渐变背景的抽象科技线条，圆角几何体，蓝紫+青绿色调，低对比度，高留白，矢量插画”
- “Abstract soft gradient tech shapes, rounded geometry, blue-violet with teal accents, minimal, high whitespace, vector”
- “网络节点与连线，轻盈霓虹线条，浅灰背景，二维扁平风”
- “Isometric steps/ladder with arrows, pastel gradient, modern UI metaphor”

## 更换流程
1) 在设计工具中用上述提示生成 SVG/PNG。
2) 覆盖 `site/public/illustrations/placeholder-*.svg`，保持尺寸比例。
3) 若需多插画，可在页面组件中直接引用 `/illustrations/<name>.svg`。
