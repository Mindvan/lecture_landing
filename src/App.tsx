import { useForm } from 'react-hook-form'
import { Logo } from './components/ui/Logo/Logo'
import { Check } from './components/ui/Check/Check'
import { Timeline, TimelineItem } from './components/ui/Timeline/Timeline'
import iconMeetingRoom from './assets/icons/meeting-room.png'
import iconPodium from './assets/icons/podium.png'
import iconStack from './assets/icons/stack.png'
import iconCyberSecurity from './assets/icons/cyber-security.png'
import iconDocument from './assets/icons/document.png'
import iconSecurityShield from './assets/icons/security-shield.png'
import iconDown from './assets/icons/down.png'
import linesDecoration from './assets/lines-1.svg'
import linesRoundTable from './assets/lines-2.svg'
import linesLecture from './assets/lines-3.svg'
import photoRomanD from './assets/roman_d.jpg'
import photoPavelF from './assets/pavel_f.jpg'
import photoLectorPlaceholder from './assets/lector-unknown.jpg'

const navItems = [
  { label: 'О мероприятии', href: '#about' },
  { label: 'Форматы', href: '#formats' },
  { label: 'Круглый стол', href: '#round-table' },
  { label: 'Лекторий', href: '#lecture' },
]

function MetaDivider() {
  return (
    <svg
      width={2}
      height={23}
      viewBox='0 0 2 23'
      fill='none'
      className='mx-3 shrink-0 self-center text-blue'
      aria-hidden
    >
      <line
        x1={0.5}
        y1={0}
        x2={0.5}
        y2={23}
        stroke='currentColor'
        strokeWidth={2}
      />
    </svg>
  )
}

const industryChoiceItems = [
  {
    title: 'Контролируемость архитектуры',
    description:
      `Полный цикл разработки и производства\nкак фактор управляемости`,
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
    description:
      `Безопасная разработка, аудит\nи мониторинг защищённости`,
    icon: iconCyberSecurity,
  },
]

const roundtableProgramSteps = [
  {
    badge: 'ПРОИЗВОДИТЕЛИ',
    title: 'Разработка ПО и производство',
    body:
      `Почему разработка в производстве важна? Как выполнить требования регуляторов по отечественному производству: от микроэлектроники до конструктива. Как обеспечить реальную контролируемость? Как отличить псевдо-производство от реального?`,
  },
  {
    badge: 'ПРОИЗВОДИТЕЛИ',
    title: 'Разработка ПО',
    body:
      `Почему важна безопасная разработка ПО? Написание кода без использования Open-Source Software (OSS) и правильное использование инструментов на \n основе искусственного интеллекта. Комплексный аудит ИБ, тестирование на проникновение, оценка и мониторинг защищённости корпоративных систем.`,
  },
  {
    badge: 'ПОТРЕБИТЕЛИ',
    title: 'Потребители B2B',
    body:
      `Важность вопроса технологической безопасности. Является ли ключевым приоритетом реальная устойчивость к кибератакам, способность противостоять сложным и продолжительным угрозам? Инструменты для защиты инфраструктуры.`,
  },
  {
    badge: 'ПОТРЕБИТЕЛИ',
    title: 'Потребители B2G',
    body:
      `Какие основные требования к сетям и инфраструктуре органов государственной власти (ОГВ)? Важность обеспечения безопасности инфраструктуры ОГВ и принимаемые меры по ее развитию.`,
  },
  {
    badge: 'РЕГУЛЯТОРЫ',
    title: 'Регулятор в сфере создания',
    body:
      `Какие меры предпринимает Минпромторг для обеспечения безопасности данных и бесперебойной работы систем ОГВ и объектов КИИ? Организация перехода на российские ПАК, проверка актуальности и достоверности категорирования объектов КИИ. Меры поддержки отечественных производителей и потребителей при внедрении ими российских решений на своей ИТ-инфраструктуре.`,
  },
  {
    badge: 'РЕГУЛЯТОРЫ',
    title: 'Регулятор в сфере ИБ',
    body:
      `Как участникам круглого стола обеспечить безопасность информации, оказывающей существенное влияние на безопасность государства в информационной сфере: актуальные требования. Повышение устойчивости КИИ и контроль за соблюдением требований регулятора. Сертификация средств защиты информации и аттестации информационных систем. Приоритеты.`,
  },
]

const roundtableProgramSections = [
  roundtableProgramSteps.filter((s) => s.badge === 'ПРОИЗВОДИТЕЛИ'),
  roundtableProgramSteps.filter((s) => s.badge === 'ПОТРЕБИТЕЛИ'),
  roundtableProgramSteps.filter((s) => s.badge === 'РЕГУЛЯТОРЫ'),
]

const participationFormats = [
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
    bullets: [
      '10+ экспертных докладов',
      'Разбор реальных кейсов',
      'Технические демонстрации',
      'Ответы на вопросы',
    ],
    icon: iconPodium,
    cta: { label: 'Выбрать лекции', href: '#lecture', variant: 'secondary' as const },
  },
]

type RoundtableRegistration = {
  fullName: string
  phone: string
  company: string
  position: string
  email: string
}

type LectureRegistration = RoundtableRegistration & {
  questions: string
}

type LectureCardSpeaker = {
  name: string
  position: string
  company: string
}

type LectureProgramCard = {
  time: string
  title: string
  speaker: LectureCardSpeaker
  photo: string
}

const april7LectureCards: readonly LectureProgramCard[] = [
  {
    time: '11:00–12:00',
    title:
      'Вертикальное импортозамещение: Путь к технологической безопасности сетей связи',
    speaker: {
      name: 'Григорищенко Александр',
      position: 'Пресейл-менеджер',
      company: 'НТЦ ПРОТЕЙ',
    },
    photo: photoRomanD,
  },
  {
    time: '12:00–13:00',
    title: 'Экосистема Унифицированных Коммуникаций ПРОТЕЙ',
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
      'Единая среда реагирования: как связь управляет инцидентами в ERP и системах безопасности',
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
      'Управление инфраструктурой в распределённых сетях: контроль сотен объектов из одной точки',
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
      'Выделенные сети pLTE на объектах КИИ. Надёжная транспортная среда для взаимодействия людей и координации устройств',
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
      'Технологии профессиональной радиосвязи для критической связи в экстренных ситуациях',
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
      'Системы оперативно-диспетчерской связи и управления: зонтичная система мониторинга',
    speaker: {
      name: 'Павел Филлипов',
      position: 'Руководитель группы продуктового маркетинга',
      company: 'ПРОТЕЙ Технологии',
    },
    photo: photoPavelF,
  },
  {
    time: '16:00–17:00',
    title: 'Тактическая система связи и оперативного реагирования «Метель»',
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
      'Надёжная корпоративная сеть телефонной связи — что нужно и как создать?',
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
      'Стратегия обеспечения высокой доступности и надёжности информационных систем',
    speaker: {
      name: 'Олег Федоровских',
      position: 'Пресейл-менеджер',
      company: 'НТЦ ПРОТЕЙ',
    },
    photo: photoLectorPlaceholder,
  },
  {
    time: '12:00–13:00',
    title: 'тест',
    speaker: { name: '123', position: '', company: '123' },
    photo: photoLectorPlaceholder,
  },
  {
    time: '16:00–17:00',
    title: 'тест',
    speaker: { name: '123', position: '', company: '123' },
    photo: photoLectorPlaceholder,
  },
]

const lectureCardsByDate: Record<string, readonly LectureProgramCard[]> = {
  '7 апреля': april7LectureCards,
  '8 апреля': april8LectureCards,
  '9 апреля': april9LectureCards,
}

const lectureProgramDays = [
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

const currLectItems = {
  title: 'Импортозамещение или локализация',
  subtitle: 'локализация',
  showcase: {
    title: '«Связь-2026»',
    data: '9–11 апреля',
    location: 'Зал «Немчинов»',
    description: {
      primary:
        `Стратегия повышения контролируемости и управляемости\nИТ-решений для государства и КИИ — какой путь выбрать?`,
      secondary:
        'Закрытая дискуссия и практический лекторий для ИТ и телекоммуникационной отраслей',
    },
  },
}

const footerAboutLinks = [
  { label: 'НТЦ ПРОТЕЙ', href: 'https://www.ntcprotei.ru/' },
  { label: 'ПРОТЕЙ Технологии', href: 'https://www.protei.ru/' },
] as const

const footerSocialLinks = [
  { label: 'Telegram', href: 'https://t.me/proteigroup' },
  { label: 'ВКонтакте', href: 'https://vk.com/proteigroup' },
  { label: 'MAX', href: '#' },
  { label: 'YouTube', href: '#' },
  { label: 'Rutube', href: '#' },
] as const

export default function App() {
  const { title, subtitle, showcase } = currLectItems
  const [headlineLead] = title.split(' или ')
  const heroAccentWord = title.split(' или ')[1] ?? subtitle
  const roundtableForm = useForm<RoundtableRegistration>()
  const lectureForm = useForm<LectureRegistration>()

  return (
    <div className='relative min-h-[100svh] w-full overflow-hidden bg-blue-dark font-montserrat text-white'>
      <img
        src={linesDecoration}
        alt=''
        width={1109.74}
        height={1087.73}
        className='pointer-events-none absolute right-0 top-0 z-0 h-auto [transform:translate(81px,-45px)_scale(1.4)]'
        aria-hidden
      />
      <div className='relative z-10 mx-auto my-0 max-w-[1128px] pt-19'>
      <header className='flex w-full'>
        <div className='flex min-h-0 flex-1 flex-row items-stretch'>
          <Logo width={153.28} height={42} />
          <nav className='flex flex-1 items-center justify-end'>
            <ul className='flex gap-x-[1.5rem]'>
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <main className='pt-47.5 pb-50.5'>
        <section
          className=''
          // className='relative pt-47.5'
          aria-labelledby='hero-heading'
        >
          <div className='relative z-10 max-w-[54rem] flex flex-col gap-6'>
            <p className='flex flex-wrap items-center text-lg gap-[0.7rem]'>
              <span>{showcase.title}</span>
              <MetaDivider />
              <span>{showcase.data}</span>
              <MetaDivider />
              <span>{showcase.location}</span>
            </p>

            <h1
              id='hero-heading'
              className='h1'
            >
              <span className='block'>{headlineLead}</span>
              <span className='block'>
                или{' '}
                <span className='text-[#2ba1c7]'>{heroAccentWord}</span>
              </span>
            </h1>

            <div className='flex flex-col'>
              <p className='h3 mb-2 whitespace-pre-line'>
                {showcase.description.primary}
              </p>
              <p className='h4'>
                {showcase.description.secondary}
              </p>

            </div>
            <div>
            <div className='flex flex-col gap-6 flex-row'>
                <a
                  href='#round-table'
                  className='btn-primary'
                >
                  Участвовать в круглом столе
                </a>
                <a
                  href='#lecture'
                  className='btn-secondary'
                >
                  Зарегистрироваться на лекторий
                </a>
              </div>
            </div>

          </div>
        </section>

        <section
          id='industry'
          className='mt-60'
          aria-labelledby='industry-heading'
        >
          <div className='flex flex-col gap-24'>
            <div className='flex max-w-[46rem] flex-col gap-6'>
              <h2 id='industry-heading' className='h2'>
                Точка выбора для отрасли ИТ
              </h2>
              <div className='flex flex-col gap-4'>
                <p className='h3'>Перед отраслью стоит практический вопрос:</p>
                <p className='body-l w-[35.25rem]'>
                  как обеспечить реальную управляемость инфраструктуры и
                  устойчивость КИИ, а не формальное соответствие требованиям?
                </p>
              </div>
            </div>

            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-6'>
              {industryChoiceItems.map((item) => (
                <article
                  key={item.title}
                  className='tiles flex h-full flex-col gap-[0.56rem] max-h-64'
                >
                  <div className='square-icons'>
                    <img
                      src={item.icon}
                      alt=''
                      width={48}
                      height={48}
                      className='size-12'
                      aria-hidden
                    />
                  </div>
                  <h3 className='h3'>{item.title}</h3>
                  <p className='body-m whitespace-pre-line'>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id='formats'
          className='mt-36'
          aria-labelledby='formats-heading'
        >
          <div className='mx-auto mb-12 flex flex-col gap-6 items-center text-center'>
            <h2 id='formats-heading' className='h2'>
              Форматы участия
            </h2>
            <p className='body-l'>
              Выберите подходящий формат взаимодействия
            </p>
          </div>

          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-6'>
            {participationFormats.map((card) => (
              <article
                key={card.title}
                className='tiles flex h-full flex-col gap-12'
              >
                <div className='flex flex-col gap-3'>
                  <div className='square-icons'>
                    <img
                      src={card.icon}
                      alt=''
                      width={48}
                      height={48}
                      className='size-12'
                      aria-hidden
                    />
                  </div>

                  <div className='flex flex-col gap-2'>
                    <h3 className='h3'>{card.title}</h3>
                    <p className='body-m text-blue'>
                      {card.tag}
                    </p>
                  </div>

                  <p className='body-m'>{card.description}</p>

                  <ul className='flex flex-col gap-4'>
                    {card.bullets.map((line) => (
                      <li key={line} className='flex gap-3'>
                        <Check className='shrink-0 text-white' size={22} />
                        <span className='body-m'>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={card.cta.href}
                  className={
                    card.cta.variant === 'primary'
                      ? 'btn-primary mt-auto inline-flex min-h-11 items-center justify-center text-center font-semibold'
                      : 'btn-secondary mt-auto inline-flex min-h-11 items-center justify-center text-center font-semibold'
                  }
                >
                  {card.cta.label}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section
          id='round-table'
          className='mt-63 relative flex flex-col gap-10'
          aria-labelledby='roundtable-program-heading'
        >
          <div
            className='pointer-events-none absolute left-1/2 top-0 z-0 w-screen max-w-[100vw] -translate-x-1/2'
            aria-hidden
          >
            <img
              src={linesRoundTable}
              alt=''
              width={1247}
              height={2019}
              className='pointer-events-none absolute right-0 top-0 h-auto max-w-none [transform:translate(460px,-330px)_scale(1)]'
              aria-hidden
            />
          </div>
          <div className='btn-secondary pointer-events-none absolute right-0 top-[-2px] z-10 h-auto w-90'>
              <p className='body-m whitespace-pre-line'>
                Дискуссионный формат <br /> с экспертами отрасли
              </p>
            </div>

            <div className='relative z-10 flex flex-col gap-[0.38rem]'>
              <h2 id='roundtable-program-heading' className='h2'>
                  Программа круглого стола
                </h2>
                <p className='body-l mt-4'>
                  Ключевые векторы дискуссии
              </p>
            </div>

            <div className='relative z-10 flex flex-col gap-12 mt-6'>
              {roundtableProgramSections.map((steps, sectionIndex) => {
                const sectionBadge = steps[0]?.badge
                const timelineMb =
                  sectionBadge === 'ПРОИЗВОДИТЕЛИ'
                    ? 'mb-6'
                    : sectionBadge === 'ПОТРЕБИТЕЛИ'
                      ? 'mb-4.5'
                      : ''
                const bridgeTailDistance =
                  sectionIndex < roundtableProgramSections.length - 1
                    ? sectionBadge === 'ПРОИЗВОДИТЕЛИ'
                      ? 'calc(var(--spacing) * (6 + 12 + 6))'
                      : 'calc(var(--spacing) * (4.5 + 12 + 6))'
                    : undefined

                return (
                  <Timeline
                    key={steps[0]?.title ?? steps.length}
                    className={timelineMb}
                    bridgeTailDistance={bridgeTailDistance}
                  >
                    {steps.map((step) => (
                      <TimelineItem key={step.title}>
                        <p className='program-group caption w-fit uppercase h-6'>
                          {step.badge}
                        </p>
                        <h3 className='h3'>{step.title}</h3>
                        <p className='body-m w-full max-w-173 whitespace-pre-line'>{step.body}</p>
                      </TimelineItem>
                    ))}
                  </Timeline>
                )
              })}
            </div>
        </section>

        <section
          id='registration'
          className='mt-60 flex flex-col items-center gap-16'
          aria-labelledby='registration-heading'
        >
          <div className='mx-auto flex max-w-[42rem] flex-col items-center gap-6 text-center'>
            <h2 id='registration-heading' className='h2'>
              Регистрация на круглый стол
            </h2>
            <p className='body-l relative right-[0.75rem]'>
              Для участия в закрытой дискуссии <br /> необходимо заполнить информацию о себе
            </p>
          </div>

          <form
            className='tiles gap-8 flex flex-col h-[30.75rem]'
            onSubmit={roundtableForm.handleSubmit(() => {})}
            noValidate
          >
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
              <div className='flex flex-col gap-2 text-left w-78'>
                <label htmlFor='reg-fullname' className='body-m'>
                  ФИО<span className='text-white'>*</span>
                </label>
                <input
                  id='reg-fullname'
                  type='text'
                  autoComplete='name'
                  placeholder='Иванов Иван Иванович'
                  className='form-input'
                  {...roundtableForm.register('fullName', { required: true })}
                />
              </div>
              <div className='flex flex-col gap-2 text-left w-78'>
                <label htmlFor='reg-phone' className='body-m'>
                  Телефон<span className='text-white'>*</span>
                </label>
                <input
                  id='reg-phone'
                  type='tel'
                  autoComplete='tel'
                  placeholder='+7 (987) 654-32-10'
                  className='form-input'
                  {...roundtableForm.register('phone', { required: true })}
                />
              </div>
              <div className='flex flex-col gap-2 text-left w-78'>
                <label htmlFor='reg-company' className='body-m'>
                  Компания<span className='text-white'>*</span>
                </label>
                <input
                  id='reg-company'
                  type='text'
                  autoComplete='organization'
                  placeholder='Название компании'
                  className='form-input'
                  {...roundtableForm.register('company', { required: true })}
                />
              </div>
              <div className='flex flex-col gap-2 text-left w-78'>
                <label htmlFor='reg-position' className='body-m'>
                  Должность<span className='text-white'>*</span>
                </label>
                <input
                  id='reg-position'
                  type='text'
                  autoComplete='organization-title'
                  placeholder='Руководитель отдела…'
                  className='form-input'
                  {...roundtableForm.register('position', { required: true })}
                />
              </div>
              <div className='flex flex-col gap-2 text-left md:col-span-1'>
                <label htmlFor='reg-email' className='body-m'>
                  Email<span className='text-white'>*</span>
                </label>
                <input
                  id='reg-email'
                  type='email'
                  autoComplete='email'
                  placeholder='example@company.ru'
                  className='form-input'
                  {...roundtableForm.register('email', { required: true })}
                />
              </div>
            </div>

            <div className='flex flex-col gap-2'>
            <button
              type='submit'
              className='btn-primary mt-8 inline-flex w-full min-h-11 items-center justify-center text-center font-semibold'
            >
              Запросить приглашение
            </button>

            <p className='agreement-text text-center'>
              Нажимая кнопку, вы соглашаетесь с{' '}
              <a
                href='#'
                className='underline'
              >
                политикой обработки персональных данных
              </a>
              .
            </p>
            </div>
          </form>
        </section>

        
        <section
          id='lecture'
          className='relative mt-60'
          aria-labelledby='lecture-program-heading'
        >
          <div
            className='pointer-events-none absolute left-1/2 top-0 z-0 w-screen max-w-[100vw] -translate-x-1/2'
            aria-hidden
          >
            <img
              src={linesLecture}
              alt=''
              width={1247}
              height={2019}
              className='pointer-events-none absolute left-0 top-0 h-auto max-w-none origin-top-left [transform:translate(-495px,69px)_scale(1)]'
              aria-hidden
            />
          </div>
          <div className='relative z-10 grid gap-6 lg:grid-cols-3'>
            <div className='flex flex-col gap-6 lg:col-span-2'>
              <h2 id='lecture-program-heading' className='h2'>
                Программа лектория
              </h2>
              <div className='flex flex-col gap-12'>
              <p className='body-l w-[32rem]'>
                Выберите интересующие вас темы и составьте индивидуальное
                расписание. Регистрация доступна на каждое событие отдельно.
              </p>
              <div className='flex flex-col gap-12'>
                {lectureProgramDays.map((day) => (
                  <details
                    key={day.date}
                    className='group flex flex-col gap-4 blue-gradient'
                  >
                    <summary className='flex cursor-pointer list-none items-center gap-3 h3 marker:content-none [&::-webkit-details-marker]:hidden'>
                      <p>{day.date}</p>
                      <img
                        src={iconDown}
                        alt=''
                        width={24}
                        height={24}
                        className='shrink-0 object-contain transition-transform duration-200 group-open:rotate-180'
                        aria-hidden
                      />
                    </summary>
                    {lectureCardsByDate[day.date] ? (
                      <div className='mb-4 flex flex-col gap-3'>
                        {lectureCardsByDate[day.date]!.map((card) => (
                          <article
                            key={`${day.date}-${card.title}-${card.time}`}
                            className='lecture-card flex gap-4'
                          >
                            <img
                              src={card.photo}
                              alt={card.speaker.name || 'Фото спикера'}
                              width={120}
                              height={160}
                              className='h-[160px] w-[120px] shrink-0 rounded-lg object-cover object-top'
                            />
                            <div className='flex min-w-0 flex-1 flex-col gap-2'>
                              <p className='lecture-time w-fit'>
                                {card.time}
                              </p>
                              <h3 className='h3 leading-[1.36]'>
                                {card.title}
                              </h3>
                              <div className='flex flex-col'>
                                <p className='body-m'>
                                  {card.speaker.name}
                                  {card.speaker.position
                                    ? `, ${card.speaker.position}`
                                    : ''}
                                </p>
                                {card.speaker.company ? (
                                  <p className='body-m'>
                                    {card.speaker.company}
                                  </p>
                                ) : null}
                              </div>
                            </div>
                          </article>
                        ))}
                      </div>
                    ) : (
                      <ul className='mb-4 flex flex-col gap-3 border-t border-solid border-blue/20 pt-4'>
                        {day.sessions.map((line) => (
                          <li key={line} className='body-m'>
                            {line}
                          </li>
                        ))}
                      </ul>
                    )}
                  </details>
                ))}
              </div>
              </div>
            </div>

            <div className='flex flex-col gap-12'>
              <h2
                id='lecture-registration-heading'
                className='h2 h2 text-center'
              >
                Регистрация <br /> на лекторий
              </h2>
              <form
                className='tiles gap-12 flex flex-col h-[60.19rem]'
                onSubmit={lectureForm.handleSubmit(() => {})}
                noValidate
                aria-labelledby='lecture-registration-heading'
              >
                <div className='flex flex-col gap-6'>
                  <div className='flex flex-col gap-6'>
                  <div className='flex flex-col gap-2 text-left'>
                    <label htmlFor='lect-fullname' className='body-m'>
                      ФИО<span className='text-white'>*</span>
                    </label>
                    <input
                      id='lect-fullname'
                      type='text'
                      autoComplete='name'
                      placeholder='Иванов Иван Иванович'
                      className='form-input'
                      {...lectureForm.register('fullName', { required: true })}
                    />
                  </div>
                  <div className='flex flex-col gap-2 text-left'>
                    <label htmlFor='lect-phone' className='body-m'>
                      Телефон<span className='text-white'>*</span>
                    </label>
                    <input
                      id='lect-phone'
                      type='tel'
                      autoComplete='tel'
                      placeholder='+7 (987) 654-32-10'
                      className='form-input'
                      {...lectureForm.register('phone', { required: true })}
                    />
                  </div>
                  <div className='flex flex-col gap-2 text-left'>
                    <label htmlFor='lect-company' className='body-m'>
                      Компания<span className='text-white'>*</span>
                    </label>
                    <input
                      id='lect-company'
                      type='text'
                      autoComplete='organization'
                      placeholder='Название компании'
                      className='form-input'
                      {...lectureForm.register('company', { required: true })}
                    />
                  </div>
                  <div className='flex flex-col gap-2 text-left'>
                    <label htmlFor='lect-position' className='body-m'>
                      Должность<span className='text-white'>*</span>
                    </label>
                    <input
                      id='lect-position'
                      type='text'
                      autoComplete='organization-title'
                      placeholder='Руководитель отдела…'
                      className='form-input'
                      {...lectureForm.register('position', { required: true })}
                    />
                  </div>
                  <div className='flex flex-col gap-2 text-left md:col-span-1'>
                    <label htmlFor='lect-email' className='body-m'>
                      Email<span className='text-white'>*</span>
                    </label>
                    <input
                      id='lect-email'
                      type='email'
                      autoComplete='email'
                      placeholder='example@company.ru'
                      className='form-input'
                      {...lectureForm.register('email', { required: true })}
                    />
                  </div>
                  <div className='flex flex-col gap-2 text-left md:col-span-2'>
                    <label htmlFor='lect-questions' className='body-m'>
                      Ваши вопросы к обсуждению
                    </label>
                    <textarea
                      id='lect-questions'
                      rows={5}
                      placeholder='Какие темы вам особенно интересны?'
                      className='form-input resize-none h-40'
                      {...lectureForm.register('questions')}
                    />
                  </div>
                </div>

                <p className='body-m'>
                  Выбрано <span className='text-blue'>3</span> лекции
                </p>
                  </div>

                <div className='flex flex-col gap-2'>
                <button
                  type='submit'
                  className='btn-secondary body-m'
                >
                  Зарегистрироваться
                </button>

                <p className='agreement-text text-center'>
                  Нажимая кнопку, вы соглашаетесь с{' '}
                  <a
                    href='#'
                    className='underline'
                  >
                    политикой обработки персональных данных
                  </a>
                  .
                </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      </div>
      <footer className='relative z-20 w-full bg-footer text-white'>
        <div className='mx-auto w-full max-w-[1128px] py-20 px-0'>
          <div className='flex justify-between'>
            <div>
              <a href='https://www.protei.ru/' className='inline-flex w-fit shrink-0'>
                <Logo width={168} height={47} />
              </a>
            </div>

            <div className='flex gap-[7.19rem]'>
            <nav
              className='flex w-[173px] shrink-0 flex-col gap-4'
              aria-labelledby='footer-about-heading'
            >
              <p id='footer-about-heading' className='body-m font-semibold'>
                О компании
              </p>
              <ul className='flex flex-col gap-2'>
                {footerAboutLinks.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className='body-m transition-colors hover:text-blue'
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className='flex w-[173px] shrink-0 flex-col gap-4'>
              <p className='body-m font-semibold'>Контакты</p>
              <ul className='flex flex-col gap-2'>
                <li>
                  <a
                    href='mailto:sales@protei.ru'
                    className='body-m transition-colors hover:text-blue'
                  >
                    sales@protei.ru
                  </a>
                </li>
                <li>
                  <a
                    href='tel:+78124494727'
                    className='body-m transition-colors hover:text-blue'
                  >
                    +7 (812) 449-47-27
                  </a>
                </li>
              </ul>
            </div>

            <nav
              className='flex w-[154px] shrink-0 flex-col gap-4'
              aria-labelledby='footer-social-heading'
            >
              <p id='footer-social-heading' className='body-m font-semibold'>
                Социальные сети
              </p>
              <ul className='flex flex-col gap-2'>
                {footerSocialLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className='body-m transition-colors hover:text-blue'
                      {...(item.href.startsWith('http')
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}
