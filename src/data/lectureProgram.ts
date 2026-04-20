import photoRomanD from '../assets/roman_d.jpg'
import photoPavelF from '../assets/pavel_f.jpg'
import photoLectorPlaceholder from '../assets/lector-unknown.jpg'
import type { LectureProgramCard } from '../types/lecture'

const april7LectureCards: readonly LectureProgramCard[] = [
  {
    time: '11:00–12:00',
    title:
      `Вертикальное импортозамещение: Путь\nк технологической безопасности сетей связи`,
    speaker: {
      name: 'Григорищенко Александр',
      position: 'Пресейл-менеджер',
      company: 'НТЦ ПРОТЕЙ',
    },
    photo: photoRomanD,
  },
  {
    time: '12:00–13:00',
    title: `Экосистема Унифицированных Коммуникаций ПРОТЕЙ`,
    speaker: {
      name: 'Роман Дмитриев',
      position: 'Пресейл-менеджер',
      company: 'ПРОТЕЙ Технологии',
    },
    photo: photoRomanD,
  },
  {
    time: '12:00–13:00',
    title:
      `Единая среда реагирования: как связь управляет инцидентами в ERP и системах безопасности`,
    speaker: {
      name: 'Павел Филлипов',
      position: 'Руководитель группы продуктового маркетинга',
      company: 'ПРОТЕЙ Технологии',
    },
    photo: photoPavelF,
  },
  {
    time: '16:00–17:00',
    title:
      `Управление инфраструктурой\nв распределённых сетях: контроль сотен объектов из одной точки`,
    speaker: {
      name: 'Роман Дмитриев',
      position: 'Пресейл-менеджер',
      company: 'ПРОТЕЙ Технологии',
    },
    photo: photoRomanD,
  },
]

const april8LectureCards: readonly LectureProgramCard[] = [
  {
    time: '11:00–12:00',
    title:
      `Выделенные сети pLTE на объектах КИИ. Надёжная транспортная среда для взаимодействия людей и координации устройств`,
    speaker: {
      name: 'Кочетков Игорь',
      position: 'Руководитель направления частных сетей',
      company: 'НТЦ ПРОТЕЙ',
    },
    photo: photoLectorPlaceholder,
  },
  {
    time: '12:00–13:00',
    title:
      `Технологии профессиональной радиосвязи\nдля критической связи в экстренных ситуациях`,
    speaker: {
      name: 'Александр Григорищенко',
      position: 'Руководитель продуктового офиса NGN/IMS',
      company: 'НТЦ ПРОТЕЙ',
    },
    photo: photoRomanD,
  },
  {
    time: '12:00–13:00',
    title:
      'Системы оперативно-диспетчерской связи и управления: зонтичная система мониторинга`',
    speaker: {
      name: 'Павел Филлипов',
      position: 'Руководитель группы продуктового маркетинга',
      company: 'ПРОТЕЙ Технологии',
    },
    photo: photoPavelF,
  },
  {
    time: '16:00–17:00',
    title: `Тактическая система связи и оперативного реагирования «Метель»`,
    speaker: {
      name: 'Олег Федоровских',
      position: 'Руководитель проектного офиса',
      company: 'ПРОТЕЙ СТ',
    },
    photo: photoLectorPlaceholder,
  },
]

const april9LectureCards: readonly LectureProgramCard[] = [
  {
    time: '11:00–12:00',
    title:
      `Надёжная корпоративная сеть телефонной связи - что нужно\nи как создать?`,
    speaker: {
      name: 'Пыхалов Виталий',
      position: 'Менеджер продуктов',
      company: 'ПРОТЕЙ Технологии',
    },
    photo: photoLectorPlaceholder,
  },
  {
    time: '12:00–13:00',
    title:
      `Стратегия обеспечения высокой доступности\nи надёжности информационных систем`,
    speaker: {
      name: 'Олег Федоровских',
      position: 'Пресейл-менеджер',
      company: 'НТЦ ПРОТЕЙ',
    },
    photo: photoLectorPlaceholder,
  },
  {
    time: '12:00–13:00',
    title: `Неизвестно, будет ли`,
    speaker: { name: '123', position: '', company: '123' },
    photo: photoLectorPlaceholder,
  },
  {
    time: '16:00–17:00',
    title: `Неизвестно, будет ли`,
    speaker: { name: '123', position: '', company: '123' },
    photo: photoLectorPlaceholder,
  },
]

export const lectureCardsByDate: Record<string, readonly LectureProgramCard[]> = {
  '7 апреля': april7LectureCards,
  '8 апреля': april8LectureCards,
  '9 апреля': april9LectureCards,
}

export const lectureProgramDays = [
  {
    date: '7 апреля',
    sessions: [] as string[],
  },
  {
    date: '8 апреля',
    sessions: [] as string[],
  },
  {
    date: '9 апреля',
    sessions: [] as string[],
  },
] as const
