type StudentProps = {
  student: {
    name: string
    email: string
  }
}

export default function Student(props: StudentProps) {
  const { student } = props

  return (
    <>
      <h3>{student.name}</h3>
      <p>{student.email}</p>
    </>
  )
}
