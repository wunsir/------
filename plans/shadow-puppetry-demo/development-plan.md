# Shadow Puppetry Demo Development Plan

## Summary
在 `2-3 小时` 内完成一个 `React + Vite + TypeScript + Tailwind + Framer Motion` 的前端 Demo，严格遵循 PRD，做成 `4 个真实路由` 的策展型网站：`首页 / 制作工艺 / 光影美学 / 当代新生`。

MVP 的核心目标：
- 第一眼让用户记住“这是皮影戏，而且很酷”
- 体现完整网站结构，而不是单页海报
- 用轻量但有效的交互强化叙事和舞台感
- 保留清晰的数据和组件边界，方便后续继续扩展

已确认的实现边界：
- 路线：`A，四路由策展型站点`
- 模块策略：`全模块轻实现，但框架可扩展`
- 素材策略：`抽象化原创视觉 + 真实简要资料`
- 适配策略：`桌面优先 + 基础移动适配`
- 音效策略：`MVP 不接真实音频，只做视觉化暗示`

## Key Changes
### 工程与基础架构
- 使用 `Vite + React + TypeScript` 初始化项目。
- 使用 `React Router` 建立 4 个真实路由：`/`, `/craft`, `/light-shadow`, `/reborn`。
- 使用 `Tailwind CSS` 定义全站设计变量，统一暗场、暖光、幕布红、纸幕米白等主题色。
- 使用 `Framer Motion` 仅处理关键动画：首页开场、页面进入、灯光扩散、影人轻摆。
- 建立统一页面骨架：
  - `StageLayout`：全站戏台式布局、导航、页脚、背景层
  - `SectionBlock`：统一章节展示容器
  - `SpotlightHero`：统一首屏视觉结构

### 内容与数据模型
- 所有内容先本地化管理，不引入后端。
- 建立可扩展的数据结构：
  - `themePageMeta[]`
  - `characterCards[]`
  - `playCards[]`
  - `timelineSteps[]`
- 内容仅保留少量真实可信信息：
  - 皮影工艺流程
  - 常见角色类型
  - 代表性剧目或舞台瞬间
  - 当代再设计方向
- 不做百科式堆砌，不补充不确定的历史细节。

### 页面落地范围
- `首页`
  - 完成 `拉开幕布 -> 戏台展开 -> 主角影人登场 -> 进入专题导览`
  - 展示三张分主题入口卡片
  - 给出导演式推荐浏览顺序
- `制作工艺`
  - 聚焦材料、雕刻、上色、组装
  - 用一条主时间线表现“从材料到成角”
  - 配合工艺细节卡片和角色构造拆解
- `光影美学`
  - 作为王牌页重点实现
  - 核心体验为 `灯亮影现`
  - 承载角色卡片、剧目卡片、轻筛选
  - 这一页必须做出最强记忆点
- `当代新生`
  - 重点表现视觉再设计更新
  - 用 3 组当代化表达案例完成延展
  - 结尾回扣“皮影戏是今天仍可被重新感知的活内容”

### 功能模块的 MVP 标准
- `搜索 / 筛选`
  - 仅在 `光影美学` 页面实现
  - 以角色筛选为主，不做复杂搜索
- `时间线`
  - 只做“一场戏从幕后到落幕”的主时间线
  - 历史演变仅作为补充说明
- `角色卡片`
  - 6-8 张，突出视觉形象和基础档案信息
- `剧目卡片`
  - 3-4 张，以舞台场景入口为主
- `互动彩蛋`
  - 采用轻反馈：hover 发光、幕布轻晃、灯光反馈、影子轻摆
  - 不做游戏化互动

### 并行执行建议
- `窗口 A：工程初始化`
  - 起项目、配置路由、样式系统、全局布局
- `窗口 B：内容与数据`
  - 整理真实简要资料，生成本地数据文件和文案
- `窗口 C：视觉重点页`
  - 优先实现首页 Hero 和 `光影美学` 页的核心视觉与动效
- 收尾阶段统一补全：
  - `制作工艺`
  - `当代新生`
  - 基础移动适配
  - 交互一致性修正

## Public Interfaces / Types
建议先固定以下类型，避免后续扩展时反复改接口：

```ts
type ThemePageMeta = {
  slug: "home" | "craft" | "light-shadow" | "reborn";
  title: string;
  subtitle: string;
  intro: string;
  accent: "gold" | "crimson" | "amber" | "paper";
  heroMode: "curtain" | "craft" | "shadow" | "modern";
};

type CharacterCard = {
  id: string;
  name: string;
  roleType: string;
  temperament: string;
  featuredIn: string[];
  originStyle: string;
  description: string;
  tags: string[];
};

type PlayCard = {
  id: string;
  title: string;
  sceneHook: string;
  summary: string;
  relatedCharacters: string[];
  stageMood: string;
  tags: string[];
};

type TimelineStep = {
  id: string;
  title: string;
  phase: string;
  description: string;
  kind: "process" | "performance" | "history";
};
```

## Test Plan
- 4 个路由均可独立访问，导航跳转正常。
- 首页能建立明确的“幕布 / 戏台 / 灯光 / 影人”氛围。
- `光影美学` 页在首屏或首屏附近形成最强记忆点。
- 角色卡片、剧目卡片、时间线都能正常渲染。
- `光影美学` 页筛选切换后卡片集合正确变化。
- 全站 hover、显隐、转场动画自然，不影响阅读。
- 桌面体验完整，手机宽度下不溢出、不重叠、导航可用。
- 本地运行无后端依赖，可直接演示。

## Assumptions
- MVP 不接入真实音频文件。
- 不依赖真实图片素材作为启动前置条件。
- 搜索功能本质上按“筛选展示感”实现。
- `首页 + 光影美学` 为第一优先级，必须优先打磨。
- `制作工艺` 和 `当代新生` 以完整、稳定、风格统一为目标。
- 所有模块都要出现，但深度以 MVP 可展示、可讲述、可扩展为准。
