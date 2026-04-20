import { useState } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import iconDown from '../../assets/icons/down.png'
import linesLecture from '../../assets/lines-3.svg'
import { FormFieldError } from '../../components/ui/FormFieldError/FormFieldError'
import { lectureQuestionsRules, lectureSharedFieldRules } from '../../forms/registrationFieldRules'
import type { LectureRegistration } from '../../types/registration'
import { lectureCardsByDate, lectureProgramDays } from '../../data/lectureProgram'

const onLectureSubmit: SubmitHandler<LectureRegistration> = () => {
  /* TODO: отправка на бэкенд */
}

function pluralLectures(n: number): string {
  const n100 = n % 100
  const n10 = n % 10
  if (n100 >= 11 && n100 <= 14) return 'лекций'
  if (n10 === 1) return 'лекция'
  if (n10 >= 2 && n10 <= 4) return 'лекции'
  return 'лекций'
}

export function LectureSection() {
  const lectureForm = useForm<LectureRegistration>({
    defaultValues: {
      fullName: '',
      phone: '',
      company: '',
      position: '',
      email: '',
      questions: '',
    },
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = lectureForm

  const [selectedLectureIds, setSelectedLectureIds] = useState<Set<string>>(() => new Set())

  const toggleLectureSelection = (id: string) => {
    setSelectedLectureIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const selectedCount = selectedLectureIds.size

  return (
    <section
      id='lecture'
      className='relative mt-60 pb-50'
      aria-labelledby='lecture-program-heading'
    >
      <div
        className='pointer-events-none absolute inset-y-0 left-1/2 z-0 w-screen max-w-[100vw] -translate-x-1/2 overflow-y-clip'
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
      <div className='relative z-10 grid min-w-0 gap-6 lg:grid-cols-3'>
        <div className='relative z-0 flex min-w-0 flex-col gap-6 lg:col-span-2'>
          <h2 id='lecture-program-heading' className='h2'>
            Программа лектория
          </h2>
          <div className='flex flex-col gap-12'>
            <p className='body-l w-[32rem]'>
              Выберите интересующие вас темы и составьте индивидуальное расписание. Регистрация доступна на каждое событие отдельно.
            </p>
            <div className='flex flex-col gap-12'>
              {lectureProgramDays.map((day) => (
                <details
                  key={day.date}
                  className='group flex flex-col gap-4 blue-gradient'
                >
                  <summary className='flex cursor-pointer list-none items-center gap-3 h3 marker:content-none h-8 [&::-webkit-details-marker]:hidden'>
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
                    <div className='mb-4 flex flex-col gap-3 gap-[0.88rem]'>
                      {lectureCardsByDate[day.date]!.map((card) => {
                        const cardId = `${day.date}-${card.title}-${card.time}`
                        const isSelected = selectedLectureIds.has(cardId)
                        return (
                          <button
                            key={cardId}
                            type='button'
                            aria-pressed={isSelected}
                            data-selected={isSelected ? 'true' : undefined}
                            onClick={() => toggleLectureSelection(cardId)}
                            className='lecture-card flex w-full min-w-0 gap-4 text-left'
                          >
                            <img
                              src={card.photo}
                              alt={card.speaker.name || 'Фото спикера'}
                              width={120}
                              height={160}
                              className='relative z-10 h-[160px] w-[120px] shrink-0 rounded-lg object-cover object-top'
                            />
                            <div className='relative z-10 flex min-w-0 flex-1 flex-col gap-2'>
                              <p className='lecture-time w-fit'>{card.time}</p>
                              <h3 className='h3 leacture-title whitespace-pre-line'>{card.title}</h3>
                              <div className='flex flex-col'>
                                <p className='body-m'>
                                  {card.speaker.name}
                                  {card.speaker.position ? `, ${card.speaker.position}` : ''}
                                </p>
                                {card.speaker.company ? (
                                  <p className='body-m'>{card.speaker.company}</p>
                                ) : null}
                              </div>
                            </div>
                          </button>
                        )
                      })}
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

        <div className='relative z-20 flex min-w-0 flex-col gap-12'>
          <h2 id='lecture-registration-heading' className='h2 h2 text-center'>
            Регистрация <br /> на лекторий
          </h2>
          <form
            className='relative isolate z-0 tiles-nohover gap-12 flex flex-col h-[60.19rem]'
            onSubmit={handleSubmit(onLectureSubmit)}
            noValidate
            aria-labelledby='lecture-registration-heading'
          >
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col gap-6'>
                <div
                  className={`relative flex flex-col gap-2 text-left ${errors.fullName ? 'z-[500]' : ''}`}
                >
                  <label htmlFor='lect-fullname' className='body-m'>
                    ФИО<span className='text-white'>*</span>
                  </label>
                  <input
                    id='lect-fullname'
                    type='text'
                    autoComplete='name'
                    placeholder='Иванов Иван Иванович'
                    className='form-input'
                    aria-invalid={errors.fullName ? true : undefined}
                    aria-describedby={errors.fullName ? 'lect-fullname-error' : undefined}
                    {...register('fullName', lectureSharedFieldRules.fullName)}
                  />
                  <FormFieldError id='lect-fullname-error' message={errors.fullName?.message} />
                </div>
                <div
                  className={`relative flex flex-col gap-2 text-left ${errors.phone ? 'z-[500]' : ''}`}
                >
                  <label htmlFor='lect-phone' className='body-m'>
                    Телефон<span className='text-white'>*</span>
                  </label>
                  <input
                    id='lect-phone'
                    type='tel'
                    autoComplete='tel'
                    placeholder='+7 (987) 654-32-10'
                    className='form-input'
                    aria-invalid={errors.phone ? true : undefined}
                    aria-describedby={errors.phone ? 'lect-phone-error' : undefined}
                    {...register('phone', lectureSharedFieldRules.phone)}
                  />
                  <FormFieldError id='lect-phone-error' message={errors.phone?.message} />
                </div>
                <div
                  className={`relative flex flex-col gap-2 text-left ${errors.company ? 'z-[500]' : ''}`}
                >
                  <label htmlFor='lect-company' className='body-m'>
                    Компания<span className='text-white'>*</span>
                  </label>
                  <input
                    id='lect-company'
                    type='text'
                    autoComplete='organization'
                    placeholder='Название компании'
                    className='form-input'
                    aria-invalid={errors.company ? true : undefined}
                    aria-describedby={errors.company ? 'lect-company-error' : undefined}
                    {...register('company', lectureSharedFieldRules.company)}
                  />
                  <FormFieldError id='lect-company-error' message={errors.company?.message} />
                </div>
                <div
                  className={`relative flex flex-col gap-2 text-left ${errors.position ? 'z-[500]' : ''}`}
                >
                  <label htmlFor='lect-position' className='body-m'>
                    Должность<span className='text-white'>*</span>
                  </label>
                  <input
                    id='lect-position'
                    type='text'
                    autoComplete='organization-title'
                    placeholder='Руководитель отдела…'
                    className='form-input'
                    aria-invalid={errors.position ? true : undefined}
                    aria-describedby={errors.position ? 'lect-position-error' : undefined}
                    {...register('position', lectureSharedFieldRules.position)}
                  />
                  <FormFieldError id='lect-position-error' message={errors.position?.message} />
                </div>
                <div
                  className={`relative flex flex-col gap-2 text-left md:col-span-1 ${errors.email ? 'z-[500]' : ''}`}
                >
                  <label htmlFor='lect-email' className='body-m'>
                    Email<span className='text-white'>*</span>
                  </label>
                  <input
                    id='lect-email'
                    type='email'
                    autoComplete='email'
                    placeholder='example@company.ru'
                    className='form-input'
                    aria-invalid={errors.email ? true : undefined}
                    aria-describedby={errors.email ? 'lect-email-error' : undefined}
                    {...register('email', lectureSharedFieldRules.email)}
                  />
                  <FormFieldError id='lect-email-error' message={errors.email?.message} />
                </div>
                <div
                  className={`relative flex flex-col gap-2 text-left md:col-span-2 ${errors.questions ? 'z-[500]' : ''}`}
                >
                  <label htmlFor='lect-questions' className='body-m'>
                    Ваши вопросы к обсуждению
                  </label>
                  <textarea
                    id='lect-questions'
                    rows={5}
                    placeholder='Какие темы вам особенно интересны?'
                    className='form-input resize-none h-40'
                    aria-invalid={errors.questions ? true : undefined}
                    aria-describedby={errors.questions ? 'lect-questions-error' : undefined}
                    {...register('questions', lectureQuestionsRules)}
                  />
                  <FormFieldError id='lect-questions-error' message={errors.questions?.message} />
                </div>
              </div>

              <p className='body-m'>
                Выбрано <span className='text-blue'>{selectedCount}</span> {pluralLectures(selectedCount)}
              </p>
            </div>

            <div className='flex flex-col gap-2'>
              <button type='submit' className='btn-secondary body-m'>
                Зарегистрироваться
              </button>

              <p className='agreement-text text-center'>
                Нажимая кнопку, вы соглашаетесь с{' '}
                <a href='#' className='underline'>
                  политикой обработки персональных данных
                </a>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
