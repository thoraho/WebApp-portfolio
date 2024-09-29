export type ProjectProps = {
  id: string
  title: string
  description: string
  owner: string
  status: string
  startDate: string
  endDate: string
  deleteProject: (id: string) => void
}

export type StudentProps = {
  student: {
    name: string
    age: number
    email: string
    degree: string
    university: string
    experience: {
      title: string
      company: string
      startDate: string
      endDate: string
    }[]
  }
}
