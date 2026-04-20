export type LectureCardSpeaker = {
  name: string
  position: string
  company: string
}

export type LectureProgramCard = {
  time: string
  title: string
  speaker: LectureCardSpeaker
  photo: string
}

