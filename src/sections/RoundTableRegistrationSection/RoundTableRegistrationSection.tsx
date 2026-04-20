import { useForm, type SubmitHandler } from 'react-hook-form'
import type { RoundtableRegistration } from '../../types/registration'

const onRoundtableSubmit: SubmitHandler<RoundtableRegistration> = (_data) => {
  /* TODO: отправка на бэкенд */
}

export function RoundTableRegistrationSection() {
  const roundtableForm = useForm<RoundtableRegistration>()

  return (
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
        className='tiles-nohover gap-[3.9rem] flex flex-col h-[30.75rem]'
        onSubmit={roundtableForm.handleSubmit(onRoundtableSubmit)}
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
          <button type='submit' className='btn-primary'>
            Запросить приглашение
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
    </section>
  )
}
