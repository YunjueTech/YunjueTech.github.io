export interface Product {
  slug: string
  title: string
  shortDescription: string
  description: string
  imgSrc?: string
  features?: string[]
}

const productsData: Product[] = [
  {
    slug: 'yunjue-agent',
    title: '云玦个人智能体',
    shortDescription:
      '随身硬件 + 移动端 + 云端的个人智能体。Early Fusion 多模态在原始信号层做理解，自进化智能体每晚自检 + 自己写工具 + 自己造卡片 —— 足够长的内测时间下，每个用户的卡片库各自专属、互不重叠。',
    description: `# 云玦个人智能体

## 不是一个 App，是一个跨四端的智能体

云玦不是一块手表，也不是一个手机应用 ——
它是一个跨随身硬件 / 移动端 / 云端的个人智能体。
硬件每 5 分钟采集多模态信号，云端在原始信号���做理解，
再由自进化智能体每晚自检 / 自己写工具 / 自己造卡片。

足够长的内测时间下，同一套系统会跑出每个人各自专属、互不重叠的 Skill 库。

## 三层产品 · 四端协同

- **随身硬件**：双麦阵列 + 心率 / HRV / IMU / 皮肤温度 / SpO2，当前以 Apple Watch 验证主链路，云玦自研多模态硬件 v1 进行中
- **移动端**：iOS App，首日 Feed 是空的，几天后开始造 Skill，每张卡片是一个独立 HTML
- **云端**：FastAPI 后端 + 自进化 Runtime，多模态时间线 + 个人知识图谱 + 自进化 Skill 系统

## 当前状态

少量同行正在深度内测，包括内容创作、长文写作、亲子记录、现场创作几类工作模式。
每张 Skill 都不是预置的 ——
是云玦自进化智能体在每晚自检环节，根据用户的事件叙事、声纹画像、行为模式自己识别缺口并生成的。

典型方向：

- **创作者方向**：创作能量曲线 / 灵感闪现回放 / 决策风格回顾
- **专业工作方向**：有效工作时长 / 信息利用率 / 长文写作复盘 / 协作对谈摘要
- **生活与陪伴方向**：亲子日常 / 长期成长档案 / 关系图谱 / 场景手记
- **现场创作方向**：拍摄/演出当下笔记 / 现场状态曲线 / 创作灵感簿

## 发售计划（下一阶段）

**普通版**：云玦自研多模态硬件 + iPhone 即开即用，硬件买断 + 软件订阅，原始数据默认走端侧 / 边侧路径。

**极客版**：
- 选项 1：私有服务器打包（用户自己的服务器 + token 按用量收费）
- 选项 2：轻量后端开源（仅硬件收费 + 软件免费）`,
    imgSrc: '/static/images/time-machine.jpg',
    features: [
      'Early Fusion 多模态（原始信号层融合）',
      'Self-Evolving Agent（每晚自检 + 自造工具 + 自造 Skill）',
      'Zero-Skill 千人千面（14 天后每个用户 App 不同）',
      'WKWebView 卡片渲染 · 每张卡片是独立 HTML',
      '端侧 / 边侧分流 · 原始数据出不出端由用户主动选择',
    ],
  },
]

export default productsData
