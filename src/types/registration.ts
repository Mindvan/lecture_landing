export type RoundtableRegistration = {
  fullName: string
  phone: string
  company: string
  position: string
  email: string
}

export type LectureRegistration = RoundtableRegistration & {
  /** Необязательное поле; пустая строка допустима */
  questions?: string
}

