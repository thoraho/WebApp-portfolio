import { StudentProps } from "../types"

export default function Student(props: StudentProps) {
  const { student } = props
  return (
    <>
      <h1>Den geriatriske studenten</h1>
      <article className="card student">
        <section>
          <img src="https://placehold.co/150?text=TØYS" alt="" />
          <h2>{student.name}</h2>
          <span>Alder: {student.age}</span>
        </section>
        <section>
          <p>{student.degree}</p>
          <p>{student.university}</p>
        </section>
        {student.experience?.length <= 0 ? (
          <h2>Ingen tidligere erfaringer</h2>
        ) : (
          <section>
            <h3>
              Erfaringer ({student.experience?.length}) - Dette er jo bare tøys
            </h3>
            {student.experience?.map((exp) => (
              <div key={exp.title}>
                <h4>{exp.title}</h4>
                <p>{exp.company}</p>
                <span>{exp.startDate}</span> - <span>{exp.endDate}</span>
              </div>
            ))}
          </section>
        )}
      </article>
    </>
  )
}
