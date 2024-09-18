import { H2Title } from "./Titles"

type ProjectType = {
  id?: number
  title: string
  description: string
  start_date: string
  end_date: string
  status: string
}

export default function Card(props: ProjectType) {
  const {
    title = "Project title",
    description = "Project description",
    start_date = "Start Date",
    end_date = "End Date",
    status = "Status",
  } = props

  return (
    <>
      <H2Title text={title} />
      <p>{description}</p>
      <p>{`${start_date} - ${end_date}`}</p>
    </>
  )
}
