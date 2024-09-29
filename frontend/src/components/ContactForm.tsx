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
      <form onSubmit={handleSubmit}>
        <h2>Skriv til kødden</h2>
        <label htmlFor="name">Navn</label>
        <input type="text" id="name" name="name" onChange={handleChange} />
        <label htmlFor="message">Melding</label>
        <textarea id="message" onChange={handleChange} name="message" />
        <button onClick={() => alert(`E-post sendt til ${email}`)}>
          Send melding
        </button>
      </form>
    </>
  )
}
