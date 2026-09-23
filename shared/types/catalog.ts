export type Level = 'Dasar' | 'Menengah' | 'Mahir'

export interface Course {
  slug: string
  title: string
  tagline: string
  level: Level
  minutes: number
  lessons: number
}

export interface Track {
  slug: string
  title: string
  description: string
  minutes: number
  lessons: number
  courses: number
}
