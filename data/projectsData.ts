export interface Product {
  slug: string
  title: string
  titleEn?: string
  shortDescription: string
  shortDescriptionEn?: string
  description: string
  descriptionEn?: string
  imgSrc?: string
  features?: string[]
  featuresEn?: string[]
}

const productsData: Product[] = [
  {
    slug: 'yunjue-one',
    title: '云玦 ONE',
    titleEn: 'Yunjue ONE',
    shortDescription:
      '带上云玦，丢掉大脑：我们如何打造身体的"自动驾驶"系统。基于自进化多模态智能体技术，云玦 ONE 不仅仅是一个记录者，它是一个决策者。',
    shortDescriptionEn:
      'Wear Yunjue, forget your brain: How we build an "autopilot" system for your body. Based on self-evolving multimodal intelligent agent technology, Yunjue ONE is not just a recorder, it is a decision-maker.',
    description: `# 带上手表，丢掉大脑

## 我们如何打造身体的"自动驾驶"系统

在科幻电影中，我们总能看到这样的场景：主角身边跟着一位全知全能的超级管家。它不仅安排行程，还能察言观色，在主角感到疲惫时递上一杯热茶，在危机来临前规划好逃生路线。

这正是云玦科技对未来的终极构想：接管人类生活中所有的繁琐规划，成为你的第二大脑。

要实现这个愿景，我们需要一个足够复杂却又足够闭环的切入点。我们选择了最贴近每个人，却又最让人头疼的领域——运动与健康。

## 现在的可穿戴设备，只是一面"镜子"

看看你手腕上的智能手表，它每天都在告诉你什么？ "心率 75"、"步数 8000"、"昨晚深睡 45 分钟"。

它像一面镜子，忠实地反射你的现状。但对于大多数人来说，镜子里的数据是冰冷的。你知道自己睡得不好，但不知道今天该怎么调整咖啡摄入量；你知道自己胖了，但不知道在今晚加班到9点的情况下，还能吃什么、练什么。

用户不想要手腕上的数值，用户只想要健康的身体。

中间的这个鸿沟，就是"决策"。

## 解决"决策疲惫"：带上云玦，丢掉大脑

现代生活最大的消耗，不是体力的消耗，而是决策力的消耗。 "今天练不练？"、"练什么？"、"吃沙拉还是吃面？"、"现在去会不会太晚？"……每一个微小的纠结，都在耗尽你的意志力。

云玦的核心理念非常激进且简单：带上云玦，丢掉大脑。

基于我们先进的自进化多模态智能体技术，云玦 ONE 不仅仅是一个记录者，它是一个决策者。 得益于多模态感知能力，云玦不仅读取你的心率和血氧，它还能感知你的情绪（通过语音语调）、理解你的处境（通过环境感知）、甚至预判你的意图。

当你戴上云玦，你不需要再动脑子去规划：

- **能不能练？** 云玦根据你的恢复状态和日程，直接告诉你：能，或者不能。
- **练什么？** 云玦结合你的目标和当前环境（办公室、健身房、家里），直接推送最适合的方案。
- **怎么吃？** 云玦知道你刚刚消耗了多少，结合你的口味偏好，直接推荐此刻的最佳补给。

你需要做的，仅仅是"听话"。把身体交给云玦托管，就像把汽车交给自动驾驶。

## 地图哲学：像 GPS 一样动态重排

很多人抗拒"自律"，是因为传统的自律充满了"挫败感"。一旦有一天没坚持住，计划就乱了，心理压力随之而来。

云玦的理念是：好的助理，从不审判老板。

我们采用了**"地图导航"**式的交互哲学。 当你开车用地图导航去目的地，如果你在路口走错了，或者因为堵车想换条路，地图软件会骂你吗？不会。它只会淡淡地说一句："正在为您重新规划路线"，然后给出基于当前位置前往终点的新方案。

云玦也是如此。

如果你今天太累，没按计划去健身房，云玦不会弹窗警告，它会默认过期重排，自动调整明天的训练强度。

如果你忍不住吃了一顿欺骗餐，云玦不会让你感到内疚，它会默默调整接下来的热量缺口规划。

我们默认用户不执行。用户拥有绝对的自由去走其他的路，但只要你还戴着云玦，我们就永远会为你提供一条基于当下（Current State）到达目标（Goal）的最优路径。

## 从身体到世界：构建未来的通用助理

为什么我们如此确信这一路径？

因为运动健康是一个绝佳的**"智力闭环"**。在这个领域里，我们需要解决三个核心技术难题：

1. **环境与世界模型建模**： 今天的雨、明天的会议、健身房的拥挤程度，都是变量。
2. **用户心理与状态感知**： 这里的"状态"不仅是生理指标，更是喜怒哀乐的心理能量。
3. **超长周期的动态规划**： 如何在数月的时间跨度里，动态调整每天的微小决策，以达成最终结果。

当我们在运动健康领域跑通了这套逻辑，当云玦能够完美处理你身体的"输入与输出"，理解你的"情绪与环境"时，这套技术就具备了迁移到生活其他领域的能力。

今天，云玦帮你决定"什么时候去跑步"； 未来，云玦将帮你决定"什么时候去旅行"、"如何规划职业发展"、"如何平衡工作与生活"。

**始于健康，终于自由。** 这是云玦给你的承诺。把繁琐的规划交给我们，把生活的美好留给你自己。`,
    descriptionEn: `# Wear the Watch, Forget Your Brain

## How We Build an "Autopilot" System for Your Body

In science fiction movies, we always see scenes like this: the protagonist is followed by an omniscient and omnipotent super butler. It not only arranges schedules but also reads expressions, handing a cup of hot tea when the protagonist feels tired, and planning escape routes before crises arrive.

This is exactly Yunjue Technology's ultimate vision for the future: to take over all the tedious planning in human life and become your second brain.

To realize this vision, we need an entry point that is complex enough yet closed-loop enough. We chose the field closest to everyone yet most headache-inducing—fitness and health.

## Current Wearable Devices Are Just a "Mirror"

Look at the smartwatch on your wrist, what does it tell you every day? "Heart rate 75", "Steps 8000", "Deep sleep 45 minutes last night".

It's like a mirror, faithfully reflecting your current state. But for most people, the data in the mirror is cold. You know you didn't sleep well, but you don't know how to adjust your coffee intake today; you know you've gained weight, but you don't know what to eat or exercise when you're working overtime until 9 PM tonight.

Users don't want numbers on their wrists, users only want a healthy body.

The gap in between is "decision-making".

## Solving "Decision Fatigue": Wear Yunjue, Forget Your Brain

The biggest consumption in modern life is not physical consumption, but decision-making consumption. "Should I exercise today?", "What to exercise?", "Salad or noodles?", "Is it too late to go now?"... Every tiny hesitation is draining your willpower.

Yunjue's core philosophy is very radical and simple: wear Yunjue, forget your brain.

Based on our advanced self-evolving multimodal intelligent agent technology, Yunjue ONE is not just a recorder, it is a decision-maker. Thanks to multimodal perception capabilities, Yunjue not only reads your heart rate and blood oxygen, it can also sense your emotions (through voice tone), understand your situation (through environmental perception), and even predict your intentions.

When you wear Yunjue, you don't need to think about planning anymore:

- **Can I exercise?** Yunjue tells you directly based on your recovery state and schedule: yes, or no.
- **What to exercise?** Yunjue combines your goals and current environment (office, gym, home) and directly pushes the most suitable plan.
- **What to eat?** Yunjue knows how much you've just consumed, combines your taste preferences, and directly recommends the best nutrition at this moment.

What you need to do is just "obey". Hand your body over to Yunjue's management, just like handing your car over to autopilot.

## Map Philosophy: Dynamic Re-routing Like GPS

Many people resist "self-discipline" because traditional self-discipline is full of "frustration". Once you fail to stick to it one day, the plan falls apart, and psychological pressure follows.

Yunjue's philosophy is: a good assistant never judges the boss.

We adopted a **"map navigation"** style interaction philosophy. When you drive using map navigation to a destination, if you take a wrong turn at an intersection, or want to change routes due to traffic, will the map software scold you? No. It will just calmly say: "Re-routing for you", and then give a new plan based on your current position to the destination.

Yunjue is the same.

If you're too tired today and didn't go to the gym as planned, Yunjue won't pop up a warning, it will default to expired re-planning and automatically adjust tomorrow's training intensity.

If you can't resist having a cheat meal, Yunjue won't make you feel guilty, it will silently adjust the upcoming calorie deficit plan.

We default that users don't execute. Users have absolute freedom to take other paths, but as long as you're still wearing Yunjue, we will always provide you with an optimal path from the current state to the goal.

## From Body to World: Building the Future's Universal Assistant

Why are we so confident in this path?

Because fitness and health is an excellent **"intelligence closed loop"**. In this field, we need to solve three core technical challenges:

1. **Environment and World Model Modeling**: Today's rain, tomorrow's meeting, the gym's crowdedness are all variables.
2. **User Psychology and State Perception**: The "state" here is not just physiological indicators, but also the psychological energy of emotions.
3. **Ultra-long Cycle Dynamic Planning**: How to dynamically adjust daily micro-decisions over months to achieve the final result.

When we successfully run this logic in the fitness and health field, when Yunjue can perfectly handle your body's "input and output" and understand your "emotions and environment", this technology will have the ability to migrate to other areas of life.

Today, Yunjue helps you decide "when to go for a run"; in the future, Yunjue will help you decide "when to travel", "how to plan career development", "how to balance work and life".

**Starting with health, ending with freedom.** This is Yunjue's promise to you. Leave the tedious planning to us, keep the beauty of life for yourself.`,
    imgSrc: '/static/images/time-machine.jpg',
    features: [
      '自进化多模态智能体技术',
      '实时决策与规划',
      '动态路径重排',
      '情绪与环境感知',
    ],
    featuresEn: [
      'Self-Evolving Multimodal Intelligent Agent Technology',
      'Real-time Decision Making and Planning',
      'Dynamic Path Re-routing',
      'Emotion and Environment Perception',
    ],
  },
]

export default productsData
