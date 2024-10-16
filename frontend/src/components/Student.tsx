import { StudentProps } from "../types"

export default function Student(props: StudentProps) {
  const { student } = props
  return (
    <>
      <section className="flex col gap2">
        <h2>Den geriatriske studenten</h2>
        <article className="card student flex gap2">
          <section className="flex col gap1">
            <img src="https://placehold.co/150?text=TØYS" alt="" />
            <h2>{student.name}</h2>
            <div>
              <p>{student.degree}</p>
              <p>{student.university}</p>
            </div>
          </section>
          {student.experience?.length <= 0 ? (
            <h2>Ingen tidligere erfaringer</h2>
          ) : (
            <section className="flex col gap1">
              <h2>Erfaringer ({student.experience?.length})</h2>
              {student.experience?.map(
                ({ title, company, startDate, endDate }) => (
                  <div key={title}>
                    <strong>{title}</strong>
                    <p>{company}</p>
                    <span>{startDate}</span> - <span>{endDate}</span>
                  </div>
                )
              )}
            </section>
          )}
        </article>
      </section>
    </>
  )
}
