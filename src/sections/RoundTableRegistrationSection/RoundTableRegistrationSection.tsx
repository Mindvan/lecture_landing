import type { ReactElement } from 'react'
import { useState } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { ErrorSubmitModal } from '../../components/ui/ErrorSubmitModal/ErrorSubmitModal'
import { FormFieldError } from '../../components/ui/FormFieldError/FormFieldError'
import { SuccessSubmitModal } from '../../components/ui/SuccessSubmitModal/SuccessSubmitModal'
import { rollSimulatedServerFailure } from '../../lib/simulateServerSubmit'
import {
  registrationCompanyRules,
  registrationEmailRules,
  registrationFullNameRules,
  registrationPhoneRules,
  registrationPositionRules,
} from '../../forms/registrationFieldRules'
import type { RoundtableRegistration } from '../../types/registration'

export function RoundTableRegistrationSection(): ReactElement {
  const [successOpen, setSuccessOpen] = useState(false)
  const [errorOpen, setErrorOpen] = useState(false)

  const roundtableForm = useForm<RoundtableRegistration>({
    defaultValues: {
      fullName: '',
      phone: '',
      company: '',
      position: '',
      email: '',
    },
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = roundtableForm

  const onRoundtableSubmit: SubmitHandler<RoundtableRegistration> = (data) => {
    console.log('регистрация на круглый стол', data)
    if (rollSimulatedServerFailure()) {
      setErrorOpen(true)
      return
    }
    reset()
    setSuccessOpen(true)
  }

  return (
    <section
      id='registration'
      className='mt-60 max-md:mt-[7.375rem] flex flex-col items-center gap-16 max-md:gap-6 md:max-lg:mt-[11.375rem] md:max-lg:gap-12'
      aria-labelledby='registration-heading'
    >
      <div className='mx-auto flex max-w-[42rem] flex-col items-center gap-6 max-md:gap-2 text-center'>
        <h2 id='registration-heading' className='h2'>
          Регистрация на круглый стол
        </h2>
        <p className='body-l relative lg:right-[0.75rem]'>
          Для участия в закрытой дискуссии <br /> необходимо заполнить информацию о себе
        </p>
      </div>

      <form
        className='tiles-nohover relative flex flex-col gap-[3.9rem] max-md:gap-6 h-[30.75rem] max-md:h-auto max-md:pb-3 md:max-lg:h-auto md:max-lg:gap-[3.125rem]'
        onSubmit={handleSubmit(onRoundtableSubmit)}
        noValidate
      >
        <div className='grid grid-cols-1 gap-6 max-md:gap-[0.9375rem] md:grid-cols-2'>
          <div
            className={`relative flex flex-col gap-2 text-left w-78 max-md:w-auto md:max-lg:w-[17.75rem] ${errors.fullName ? 'z-[500]' : ''}`}
          >
            <label htmlFor='reg-fullname' className='body-m'>
              ФИО<span className='text-white'>*</span>
            </label>
            <input
              id='reg-fullname'
              type='text'
              autoComplete='name'
              placeholder='Иванов Иван Иванович'
              className='form-input max-md:h-9'
              aria-invalid={errors.fullName ? true : undefined}
              aria-describedby={errors.fullName ? 'reg-fullname-error' : undefined}
              {...register('fullName', registrationFullNameRules)}
            />
            <FormFieldError id='reg-fullname-error' message={errors.fullName?.message} />
          </div>
          <div
            className={`relative flex flex-col gap-2 text-left w-78 max-md:w-auto md:max-lg:w-[17.75rem] ${errors.phone ? 'z-[500]' : ''}`}
          >
            <label htmlFor='reg-phone' className='body-m'>
              Телефон<span className='text-white'>*</span>
            </label>
            <input
              id='reg-phone'
              type='tel'
              autoComplete='tel'
              placeholder='+7 (987) 654-32-10'
              className='form-input max-md:h-9'
              aria-invalid={errors.phone ? true : undefined}
              aria-describedby={errors.phone ? 'reg-phone-error' : undefined}
              {...register('phone', registrationPhoneRules)}
            />
            <FormFieldError id='reg-phone-error' message={errors.phone?.message} />
          </div>
          <div
            className={`relative flex flex-col gap-2 text-left w-78 max-md:w-auto md:max-lg:w-[17.75rem] ${errors.company ? 'z-[500]' : ''}`}
          >
            <label htmlFor='reg-company' className='body-m'>
              Компания<span className='text-white'>*</span>
            </label>
            <input
              id='reg-company'
              type='text'
              autoComplete='organization'
              placeholder='Название компании'
              className='form-input max-md:h-9'
              aria-invalid={errors.company ? true : undefined}
              aria-describedby={errors.company ? 'reg-company-error' : undefined}
              {...register('company', registrationCompanyRules)}
            />
            <FormFieldError id='reg-company-error' message={errors.company?.message} />
          </div>
          <div
            className={`relative flex flex-col gap-2 text-left w-78 max-md:w-auto md:max-lg:w-[17.75rem] ${errors.position ? 'z-[500]' : ''}`}
          >
            <label htmlFor='reg-position' className='body-m'>
              Должность<span className='text-white'>*</span>
            </label>
            <input
              id='reg-position'
              type='text'
              autoComplete='organization-title'
              placeholder='Руководитель отдела…'
              className='form-input max-md:h-9'
              aria-invalid={errors.position ? true : undefined}
              aria-describedby={errors.position ? 'reg-position-error' : undefined}
              {...register('position', registrationPositionRules)}
            />
            <FormFieldError id='reg-position-error' message={errors.position?.message} />
          </div>
          <div
            className={`relative flex flex-col gap-2 text-left md:col-span-1 md:max-lg:w-[19.5rem] ${errors.email ? 'z-[500]' : ''}`}
          >
            <label htmlFor='reg-email' className='body-m'>
              Email<span className='text-white'>*</span>
            </label>
            <input
              id='reg-email'
              type='email'
              autoComplete='email'
              placeholder='example@company.ru'
              className='form-input max-md:h-9 md:max-lg:w-[19.5rem]'
              aria-invalid={errors.email ? true : undefined}
              aria-describedby={errors.email ? 'reg-email-error' : undefined}
              {...register('email', registrationEmailRules)}
            />
            <FormFieldError id='reg-email-error' message={errors.email?.message} />
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
          <button
            type='button'
            className='caption absolute top-0 right-0 px-4 py-2 cursor-pointer hover:text-blue ease-out transition-colors'
            onClick={() => setErrorOpen(true)}
          >
            Симулировать ошибку сервера
          </button>
        </div>
      </form>

      <SuccessSubmitModal
        open={successOpen}
        onClose={() => setSuccessOpen(false)}
        title='Заявка принята'
        description='Спасибо! После проверки данных мы свяжемся с вами по указанным контактам.'
      />
      <ErrorSubmitModal
        open={errorOpen}
        onClose={() => setErrorOpen(false)}
        title='Не удалось отправить заявку'
        description='Сервер временно недоступен или ответил с ошибкой. Пожалуйста, попробуйте ещё раз чуть позже. Если проблема повторится - напишите нам на почту.'
      />
    </section>
  )
}
