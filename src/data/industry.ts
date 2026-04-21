import iconStack from '../assets/icons/stack.png'
import iconCyberSecurity from '../assets/icons/cyber-security.png'
import iconDocument from '../assets/icons/document.png'
import iconSecurityShield from '../assets/icons/security-shield.png'

export const industryChoiceItems = [
  {
    title: 'Контролируемость архитектуры',
    description: {
      desktop: ['Полный цикл разработки и производства', 'как фактор управляемости'],
      tablet: ['Полный цикл разработки', 'и производства как фактор', 'управляемости'],
    },
    icon: iconStack,
  },
  {
    title: 'Устойчивость КИИ',
    description: {
      desktop: [
        'Способность инфраструктуры противостоять',
        'сложным и продолжительным угрозам',
      ],
      tablet: [
        'Способность инфраструктуры',
        'противостоять сложным',
        'и продолжительным угрозам',
      ],
    },
    icon: iconSecurityShield,
  },
  {
    title: 'Требования регуляторов',
    description: {
      desktop: ['Соответствие нормативной базе', 'без компромиссов'],
      tablet: ['Соответствие нормативной базе', 'без компромиссов'],
    },
    icon: iconDocument,
  },
  {
    title: 'Информационная безопасность',
    description: {
      desktop: ['Безопасная разработка, аудит', 'и мониторинг защищённости'],
      tablet: ['Безопасная разработка, аудит', 'и мониторинг защищённости'],
    },
    icon: iconCyberSecurity,
  },
] as const

