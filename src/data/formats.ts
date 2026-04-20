import iconMeetingRoom from '../assets/icons/meeting-room.png'
import iconPodium from '../assets/icons/podium.png'

export const participationFormats = [
  {
    title: 'Круглый стол',
    tag: 'СТРАТЕГИЧЕСКАЯ ДИСКУССИЯ',
    description:
      'Профессиональный диалог производителей, потребителей и регуляторов о реальной управляемости ИТ-инфраструктуры',
    bullets: [
      'Прямой диалог с регуляторами',
      'Обсуждение стратегии отрасли',
      'Живое общение с экспертами',
      'Камерный формат (до 50 участников)',
    ],
    icon: iconMeetingRoom,
    cta: { label: 'Запросить приглашение', href: '#registration', variant: 'primary' as const },
  },
  {
    title: 'Открытый лекторий',
    tag: 'ТЕХНОЛОГИИ И ПРАКТИКА',
    description:
      'Серия практических докладов о безопасной разработке, российских ПАК и внедрении технологических решений',
    bullets: ['10+ экспертных докладов', 'Разбор реальных кейсов', 'Технические демонстрации', 'Ответы на вопросы'],
    icon: iconPodium,
    cta: { label: 'Выбрать лекции', href: '#lecture', variant: 'secondary' as const },
  },
] as const

