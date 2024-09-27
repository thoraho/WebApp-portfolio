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
