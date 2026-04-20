import { useForm, type SubmitHandler } from 'react-hook-form'
import iconDown from '../../assets/icons/down.png'
import linesLecture from '../../assets/lines-3.svg'
import type { LectureRegistration } from '../../types/registration'
import { lectureCardsByDate, lectureProgramDays } from '../../data/lectureProgram'

const onLectureSubmit: SubmitHandler<LectureRegistration> = (_data) => {
  /* TODO: отправка на бэкенд */
}

export function LectureSection() {
  const lectureForm = useForm<LectureRegistration>()

  return (
    <section
      id='lecture'
      className='relative mt-60 pb-50 overflow-y-clip'
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
              Выберите интересующие вас темы и составьте индивидуальное расписание. Регистрация доступна на каждое событие отдельно.
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
                            <p className='lecture-time w-fit'>{card.time}</p>
                            <h3 className='h3 leading-[1.36] whitespace-pre-line'>{card.title}</h3>
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
          <h2 id='lecture-registration-heading' className='h2 h2 text-center'>
            Регистрация <br /> на лекторий
          </h2>
          <form
            className='tiles-nohover gap-12 flex flex-col h-[60.19rem]'
            onSubmit={lectureForm.handleSubmit(onLectureSubmit)}
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
