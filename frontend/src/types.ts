export type Project = {
  projectOwner: string
  projects?: Project[]
  description: string
  id: string
  title: string
  start_date: string
  end_date: string
  status?: "planned" | "ongoing" | "completed"
}

export type TitleProps = {
  text: string
}
