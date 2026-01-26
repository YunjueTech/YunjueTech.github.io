import type { Locale } from '@/lib/i18n'

export type TranslationKey = string
export type Translations = Record<Locale, string>

export interface TranslationObject {
  [key: string]: TranslationObject | Translations
}

const translations: TranslationObject = {
  nav: {
    home: { en: 'Home', zh: '首页' },
    products: { en: 'Products', zh: '产品' },
    blog: { en: 'Blog', zh: '博客' },
    joinUs: { en: 'Join Us', zh: '加入我们' },
  },
  home: {
    hero: {
      title: {
        en: 'Intelligence that Evolves with You.',
        zh: '智能，因你而进化。',
      },
      subtitle: {
        en: 'Building Self-Evolving AGI for a better future.',
        zh: '构建自进化通用智能体，创造更美好的未来。',
      },
    },
    whoWeAre: {
      title: { en: 'Who We Are', zh: '我们是谁' },
      content1: {
        en: 'Yunjue Technology is a cutting-edge technology company dedicated to building Self-Evolving AGI (Artificial General Intelligence) and wearable hardware.',
        zh: '云玦科技 (Yunjue Technology) 是一家致力于构建自进化通用智能体 (Self-Evolving AGI)和可穿戴硬件载体的前沿科技公司。',
      },
      content2: {
        en: 'We are a group of tireless explorers, with members from top AI laboratories and engineering teams. We are not satisfied with "static" large models—those parameter matrices frozen at the moment of training completion. We believe that true intelligence lies not in how much past knowledge is stored, but in the ability to adapt, learn, and create tools when facing an unknown future.',
        zh: '我们是一群不知疲倦的探索者，成员来自顶尖的 AI 实验室与工程团队。我们不满足于"静态"的大模型——那些被冻结在训练完成那一刻的参数矩阵。我们相信，真正的智能不在于存储了多少过去的知识，而在于面对未知未来时，适应、学习并创造工具的能力。',
      },
      quote: {
        en: '"Yun" symbolizes the infinite boundaries of computation, "Jue" represents the decisiveness and wisdom of decision-making. Yunjue is to find the definitive intelligent solution within infinite computation.',
        zh: '"云"象征着计算的无限边界，"玦"代表着决策的果敢与智慧。云玦，即是在无限的计算中，寻找确定的智能解。',
      },
    },
    vision: {
      title: { en: 'Our Vision', zh: '愿景' },
      subtitle: {
        en: 'To build the substrate for continuous evolution in synthetic intelligence, and wearable hardware.',
        zh: '构建合成智能持续进化的基石，并打造可穿戴硬件载体。',
      },
      content: {
        en: 'We are committed to giving every intelligent agent "vitality". It is no longer a mechanical Q&A machine, but a digital life that can grow autonomously, self-correct, and self-optimize as user needs change and world information updates.',
        zh: '我们致力于让每一个智能体都拥有"生命力"。它不再是一个机械的问答机器，而是一个能够随着用户需求变化、随着世界信息更新，自主生长、自主纠错、自主优化的数字生命。',
      },
    },
    philosophy: {
      title: { en: 'Our Philosophy', zh: '技术哲学' },
      fromStatic: {
        title: { en: 'From Static to Dynamic', zh: '从静态到动态' },
        content: {
          en: 'Only learning at inference time (Test-Time) is true self-evolving intelligence.',
          zh: '只有在推理时（Test-Time）的学习，才是真正的自我进化智能。',
        },
      },
      fromManual: {
        title: { en: 'From Manual to Autonomous', zh: '从手动到自主' },
        content: {
          en: 'We refuse to pile up artificial rules. Intelligent agents should self-solve new problems and expand their capabilities.',
          zh: '我们拒绝堆砌人工规则。智能体应当自我解决新问题，并拓展能力边界。',
        },
      },
      openConvergent: {
        title: { en: 'Open & Convergent', zh: '开放与收敛' },
        content: {
          en: 'Evolution must be open, but knowledge must be convergent. We open-source this process and share the benefits of AGI with all of humanity.',
          zh: '进化必须是开放的，但知识必须是收敛的。我们将这一进程开源，与全人类共享 AGI 的红利。',
        },
      },
    },
    joinUs: {
      title: { en: 'Join Us', zh: '加入我们' },
      content: {
        en: 'We are building AI systems that push technical boundaries while delivering real value to as many people as possible. Our team combines rigorous engineering practices with creative exploration, and we are looking for like-minded partners to realize this vision together.',
        zh: '我们正在构建能够突破技术边界、同时为尽可能多的人创造真正价值的 AI 系统。我们的团队结合严谨的工程实践与创造性探索，我们正在寻找志同道合的伙伴来共同实现这一愿景。',
      },
      button: { en: 'View Open Positions →', zh: '查看职位 →' },
    },
  },
  products: {
    title: { en: 'Products', zh: '产品' },
    subtitle: { en: 'Our Products', zh: '我们的产品' },
    learnMore: { en: 'Learn More →', zh: '了解更多 →' },
    backToList: { en: '← Back to Products', zh: '← 返回产品列表' },
    features: { en: 'Core Features', zh: '核心特性' },
  },
  joinUs: {
    title: { en: 'Join Us', zh: '加入我们' },
    subtitle: {
      en: 'We are building AI systems that push technical boundaries while delivering real value to as many people as possible. Our team combines rigorous engineering practices with creative exploration, and we are looking for like-minded partners to realize this vision together.',
      zh: '我们正在构建能够突破技术边界、同时为尽可能多的人创造真正价值的 AI 系统。我们的团队结合严谨的工程实践与创造性探索，我们正在寻找志同道合的伙伴来共同实现这一愿景。',
    },
    openPositions: { en: 'Open Positions(Hangzhou, China)', zh: '开放职位（杭州）' },
    howToApply: { en: 'How to Apply', zh: '如何申请' },
    applyContent1: {
      en: 'Please send your resume to:',
      zh: '请将您的简历发送至：',
    },
    applyContent2: {
      en: 'We look forward to working with you to build a self-evolving future.',
      zh: '我们期待与您一起，构建自进化的未来。',
    },
    positions: {
      embedded: {
        title: { en: 'Embedded Systems Engineer', zh: '嵌入式工程师' },
        description: {
          en: 'Responsible for the development and optimization of intelligent agent hardware platforms, including edge computing devices, sensor integration, and real-time system design.',
          zh: '负责智能体硬件平台的开发与优化，包括边缘计算设备、传感器集成和实时系统设计。',
        },
      },
      productManager: {
        title: { en: 'Software Product Manager', zh: '软件产品经理' },
        description: {
          en: 'Define product roadmaps, coordinate cross-team collaboration, and transform the technical capabilities of self-evolving intelligent agents into user value.',
          zh: '定义产品路线图，协调跨团队协作，将自进化智能体的技术能力转化为用户价值。',
        },
      },
      algorithm: {
        title: { en: 'Algorithm Scientist', zh: '算法科学家' },
        description: {
          en: 'Research and implement cutting-edge algorithms such as Test-Time Learning, tool generation, and self-evolution mechanisms to push the boundaries of AGI capabilities.',
          zh: '研究并实现 Test-Time Learning、工具生成和自进化机制等前沿算法，推动 AGI 能力的边界。',
        },
      },
    },
  },
  blog: {
    title: { en: 'Blog', zh: '博客' },
    subtitle: {
      en: 'Shared science and news from the team',
      zh: '团队分享的科学与新闻',
    },
  },
  footer: {
    copyright: { en: '©', zh: '©' },
  },
  common: {
    loading: { en: 'Loading...', zh: '加载中...' },
    error: { en: 'Error', zh: '错误' },
  },
}

/**
 * 获取翻译文本
 * @param key - 翻译键，使用点号分隔，如 'nav.home'
 * @param locale - 语言代码
 * @returns 翻译文本
 */
export function getTranslation(key: string, locale: Locale): string {
  const keys = key.split('.')
  let current: any = translations

  for (const k of keys) {
    if (current && typeof current === 'object' && k in current) {
      current = current[k]
    } else {
      console.warn(`Translation key not found: ${key}`)
      return key
    }
  }

  if (typeof current === 'object' && locale in current) {
    return current[locale]
  }

  console.warn(`Translation not found for locale ${locale}: ${key}`)
  return key
}

/**
 * 获取嵌套的翻译对象
 * @param key - 翻译键，使用点号分隔
 * @param locale - 语言代码
 * @returns 翻译对象或字符串
 */
export function getTranslationObject(key: string, locale: Locale): any {
  const keys = key.split('.')
  let current: any = translations

  for (const k of keys) {
    if (current && typeof current === 'object' && k in current) {
      current = current[k]
    } else {
      return null
    }
  }

  if (typeof current === 'object' && locale in current) {
    return current[locale]
  }

  return current
}

export default translations

