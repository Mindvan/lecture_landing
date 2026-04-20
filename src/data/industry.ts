import iconStack from '../assets/icons/stack.png'
import iconCyberSecurity from '../assets/icons/cyber-security.png'
import iconDocument from '../assets/icons/document.png'
import iconSecurityShield from '../assets/icons/security-shield.png'

export const industryChoiceItems = [
  {
    title: 'Контролируемость архитектуры',
    description: `Полный цикл разработки и производства\nкак фактор управляемости`,
    icon: iconStack,
  },
  {
    title: 'Устойчивость КИИ',
    description:
      'Способность инфраструктуры противостоять сложным и продолжительным угрозам',
    icon: iconSecurityShield,
  },
  {
    title: 'Требования регуляторов',
    description: `Соответствие нормативной базе\n без компромиссов`,
    icon: iconDocument,
  },
  {
    title: 'Информационная безопасность',
    description: `Безопасная разработка, аудит\nи мониторинг защищённости`,
    icon: iconCyberSecurity,
  },
] as const

