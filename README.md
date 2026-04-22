# 段义孚：一生漂泊的地理学

> *一个关于地理学家段义孚生平的交互式地球可视化*

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=flat-square)](https://jakobzhao.github.io/yifutuan/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

## 📍 项目简介

这是一个**交互式D3.js地球可视化项目**，通过动画呈现地理学家**段义孚(Yi-Fu Tuan, 1930-2022)**一生中重要的地理位置和人生经历。用户可以通过点击城市、拖动地球、控制播放等方式，探索这位伟大地理学者的漂泊人生。

> *"我们对某个地方的眷恋，往往在离开之后才真正开始。"* — 段义孚

## ✨ 核心特性

### 🌍 交互式地球
- **D3.js 正交投影**的3D地球可视化
- 拖动旋转地球，滚轮缩放
- 平滑的相机过渡和飞行动画
- 实时的经纬网格显示

### 🎬 自动旅程播放
- 自动播放段义孚的完整生命旅程（1930-2022）
- 22个关键城市站点，依次展示
- 每个位置配有故事、时间、出版物等信息
- 支持暂停/继续、上一站/下一站控制

### 📖 丰富的故事内容
- **每个城市**都有详细的生平故事卡片
- 包含**年份、年龄、关键事件、重要引言**
- 支持隐藏信息展开（学术出版、世界背景）
- 高清历史照片配图

### 🎨 高级设计
- **Premium Typography**
  - 英文标题：Playfair Display（优雅衬线体）
  - 中文文本：思源宋体（专业精致）
  - 英文辅助：EB Garamond（古典优雅）
  
- **精妙动画**
  - Welcome 和 Ending 面板的错开进入
  - 故事卡片的级联展开
  - 城市点标的发光效果
  - 按钮的灵动 hover 效果
  - 使用 cubic-bezier 缓动函数实现流畅感

- **色彩系统**
  - 深色主题配金色/棕色强调色
  - 根据时代变化的色彩提示（Era Tint）
  - 高对比度确保可读性

### 🎭 完整的用户体验
- **欢迎面板** - 项目开篇，8秒自动启动或点击开始
- **地球旅程** - 交互式探索段义孚的22个人生站点
- **结尾面板** - 旅程完成后自动显示，致敬大师

## 🛠 技术栈

| 技术 | 用途 |
|------|------|
| **D3.js v7** | 地球可视化、投影变换 |
| **TopoJSON** | 地理数据格式 |
| **HTML5/CSS3** | 结构和样式 |
| **Vanilla JavaScript** | 交互逻辑 |
| **Google Fonts** | 字体加载 |

### 依赖
```html
<script src="https://cdn.jsdelivr.net/npm/d3@7"></script>
<script src="https://cdn.jsdelivr.net/npm/topojson-client@3"></script>
```

## 🌐 访问方式

### 在线演示
👉 **[https://jakobzhao.github.io/yifutuan/](https://jakobzhao.github.io/yifutuan/)**

### 本地运行
```bash
# 克隆仓库
git clone https://github.com/jakobzhao/yifutuan.git
cd yifutuan

# 启动本地服务器
python3 -m http.server 8000

# 在浏览器中打开
# http://localhost:8000
```

## 📚 使用说明

### 与地球互动
- **拖动** 地球表面来旋转视角
- **滚轮** 缩放地球（放大/缩小）
- **点击** 城市点标跳转到该站点

### 控制旅程播放
- **播放/暂停** 按钮：开始或暂停自动播放
- **上一站/下一站** 按钮：手动浏览
- **进度条** 拖动：快速跳转到特定时间

### 读取信息
- 故事卡片包含该站点的详细信息
- 左侧年份时钟显示当前时间和生活阶段
- 底部时间轴显示整个92年的人生进程

## 📊 数据结构

### 站点数据
```javascript
{
  id: "tianjin",           // 唯一标识
  name: "天津",            // 中文名称
  en: "Tianjin",          // 英文名称
  coords: [117.2, 39.1],  // [经度, 纬度]
  year: "1930",           // 年份
  yearNum: 1930,          // 数值形式
  event: "出生于天津...",  // 关键事件
  quote: ""我们对某个地方...",  // 引言
  photo: null,            // 照片URL (可选)
  ...                     // 其他数据
}
```

### 关键变量
- `currentIdx` - 当前站点索引
- `isPlaying` - 播放状态
- `projection` - D3 地理投影
- `journeyAbort` - 播放中断令牌

## 🎨 设计理念

### 排版系统
- **标题层级**: 72px(Playfair) → 28px → 22px
- **正文**: 14-18px，行高 2.0-2.2
- **字间距**: 3-8px，创造优雅的呼吸感
- **字重**: Source Han Serif SC 的 300-700 全系列使用

### 动画设计
- **进入动画**: `welcomeFadeIn`、`endingFadeIn`
- **缓动函数**: `cubic-bezier(0.34, 1.56, 0.64, 1)` 实现弹性效果
- **错开延迟**: 各元素 0.08s-0.95s 渐进进入
- **交互反馈**: Hover 时 0.3s 流畅过渡

### 色彩调色板
```
深色背景: #141822 → #06080c (径向渐变)
主强调色: #c49a4a (金色)
高亮色: #ffd88a
辅助文本: #5a5040 - #8a7a60
```

## 📁 项目结构

```
yifutuan/
├── index.html              # 完整应用（4500+ 行）
├── img/                    # 图片资源
│   ├── yifu.png           # 段义孚肖像
│   ├── bz.png             # 作者肖像
│   └── ...                # 各城市和历史照片
├── README.md              # 本文件
└── .gitignore
```

## 🎯 关键页面元素

### 欢迎面板
- 段义孚的传记介绍
- 旋转的地球水印背景
- 作者署名（Visualized by Bo Zhao）
- 8秒后自动启动，或点击/按Esc手动开始

### 主交互界面
- **顶部**: 标题和肖像
- **右上**: 实时年份时钟
- **中心**: D3.js 地球
- **左下**: 作者信息和署名
- **底部**: 播放控制和进度条
- **右侧**: 故事卡片（可展开）
- **下方**: 时间轴和时代指示

### 结尾面板
- 与欢迎面板对称的设计
- 旋转的地球水印
- 收尾文案和引言
- 作者署名（A Tribute by Bo Zhao）

## 🔄 数据流

```
Page Load
    ↓
Welcome Panel (8s)
    ↓
runJourney() [自动启动]
  ├─ Loop through places[]
  │   ├─ Fly to location
  │   ├─ Zoom in
  │   ├─ Show story card (4.5s)
  │   ├─ Hide story card
  │   └─ Zoom out
  └─ End journey
    ↓
Ending Panel [自动显示]
```

## 💡 核心功能

### 地理投影
```javascript
const projection = d3.geoOrthographic()
  .scale(250)
  .center([0, 0])
  .rotate([0, 0, 0]);
```

### 飞行动画
```javascript
async function flyLeg(fromIdx, toIdx, duration) {
  const interp = d3.geoInterpolate(fromCoords, toCoords);
  await tween(duration, (eased) => {
    const pt = interp(eased);
    projection.rotate([-pt[0], -pt[1], 0]);
    redrawAll();
  });
}
```

### 进度更新
```javascript
function updateProgress() {
  const pct = currentIdx / (places.length - 1) * 100;
  progressBar.style.width = pct + '%';
  progressLabel.textContent = `${currentIdx + 1} / ${places.length}`;
}
```

## 📖 关于段义孚

**段义孚** (1930-2022) 是20世纪最伟大的地理学家之一，美国杰出的人文地理学大师。他的学术生涯跨越70年，足迹遍布全球。主要著作包括《空间与地方》《经验透视图》等，深刻影响了地理学、城市规划、人类学等多个学科。

**核心思想**: 地理学不仅是对地理现象的描述，更是对人与地方关系的哲学思考。每个地方都承载着人类的情感、记忆和意义。

## 🎓 学术资源

- [段义孚维基百科](https://en.wikipedia.org/wiki/Yi-Fu_Tuan)
- [《空间与地方》中英文版](https://www.amazon.com/Space-Place-Third-Yi-Fu-Tuan/dp/0816649855)
- [University of Wisconsin-Madison 讣告](https://geography.wisc.edu/)

## ✍️ 作者

**赵 博 (Bo Zhao)**
- University of Washington, Department of Geography
- Email: jakobzhao@gmail.com
- [GitHub](https://github.com/jakobzhao)

*本项目致敬段义孚教授的学术成就和人文精神。*

## 📄 许可证

本项目采用 [MIT License](LICENSE) 开源。

## 🙏 致谢

- D3.js 社区和文档
- Google Fonts (Playfair Display, Source Han Serif SC, EB Garamond)
- 历史照片和资料的各位提供者
- 段义孚教授的学术遗产

---

**Made with ❤️ for geography and humanity**

*最后更新: 2026年4月*
