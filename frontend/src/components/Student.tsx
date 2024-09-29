import { StudentProps } from "../types"

export default function Student(props: StudentProps) {
  const { student } = props
  return (
    <>
      <article className="card student">
        <h2>{student.name}</h2>
        <span>Alder: {student.age}</span>
        <section>
          <p>{student.degree}</p>
          <p>{student.university}</p>
        </section>
        {student.experience?.length >= 1 ? (
          <section>
            <h3>Erfaringer ({student.experience?.length})</h3>
            {student.experience?.map((exp) => (
              <div key={exp.title}>
                <h4>{exp.title}</h4>
                <p>{exp.company}</p>
                <span>{exp.startDate}</span> - <span>{exp.endDate}</span>
              </div>
            ))}
          </section>
        ) : null}
      </article>
    </>
  )
}
