import { useState } from "react"

type ContactFromProps = {
  student: {
    name: string
    email: string
  }
}

export default function ContactForm({ student }: ContactFromProps) {
  const { name, email } = student

  const [message, setMessage] = useState({})

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setMessage((prevMessage) => ({
      ...prevMessage,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(message)
  }

  return (
    <>
      <form className="card flex col gap1" onSubmit={handleSubmit}>
        <h2>Skriv en sang eller noe da vel</h2>
        <label htmlFor="name">
          Navn
          <input type="text" id="name" name="name" onChange={handleChange} />
        </label>
        <label htmlFor="message">
          Melding
          <textarea id="message" onChange={handleChange} name="message" />
        </label>
        <button onClick={() => alert(`E-post sendt til ${email}`)}>
          Send melding
        </button>
      </form>
    </>
  )
}
