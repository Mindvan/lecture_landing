import type { RegisterOptions } from 'react-hook-form'
import type { LectureRegistration, RoundtableRegistration } from '../types/registration'

type SharedRules<K extends keyof RoundtableRegistration> = RegisterOptions<
  RoundtableRegistration,
  K
>

function isValidRuPhone(value: string): boolean {
  const digits = value.replace(/\D/g, '')
  if (digits.length === 11 && (digits[0] === '7' || digits[0] === '8')) return true
  if (digits.length === 10 && digits[0] === '9') return true
  return false
}

export const registrationFullNameRules: SharedRules<'fullName'> = {
  required: 'Укажите ФИО',
  minLength: { value: 2, message: 'Введите не менее 2 символов' },
}

export const registrationPhoneRules: SharedRules<'phone'> = {
  required: 'Укажите телефон',
  validate: (value) =>
    isValidRuPhone(value)
      ? true
      : 'Введите 10 цифр без кода страны',
}

export const registrationCompanyRules: SharedRules<'company'> = {
  required: 'Укажите компанию',
  minLength: { value: 1, message: 'Укажите компанию' },
}

export const registrationPositionRules: SharedRules<'position'> = {
  required: 'Укажите должность',
  minLength: { value: 1, message: 'Укажите должность' },
}

export const registrationEmailRules: SharedRules<'email'> = {
  required: 'Укажите email',
  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
    message: 'Введите корректный email',
  },
}

export const lectureQuestionsRules: RegisterOptions<LectureRegistration, 'questions'> = {
  maxLength: { value: 4000, message: 'Слишком длинный текст (максимум 4000 символов)' },
}

export const lectureSharedFieldRules = {
  fullName: registrationFullNameRules as RegisterOptions<LectureRegistration, 'fullName'>,
  phone: registrationPhoneRules as RegisterOptions<LectureRegistration, 'phone'>,
  company: registrationCompanyRules as RegisterOptions<LectureRegistration, 'company'>,
  position: registrationPositionRules as RegisterOptions<LectureRegistration, 'position'>,
  email: registrationEmailRules as RegisterOptions<LectureRegistration, 'email'>,
} as const
