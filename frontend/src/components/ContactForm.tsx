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

  return (
    <>
      <h2>Contact</h2>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" />
        <button onClick={() => alert(`Email sent to ${email}`)}>
          Send Email
        </button>
      </form>
    </>
  )
}
