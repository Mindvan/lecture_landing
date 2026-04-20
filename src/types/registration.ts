export type RoundtableRegistration = {
  fullName: string
  phone: string
  company: string
  position: string
  email: string
}

export type LectureRegistration = RoundtableRegistration & {
  questions: string
}

