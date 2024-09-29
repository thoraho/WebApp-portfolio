type ContactFromProps = {
  student: {
    name: string
    email: string
  }
}

export default function ContactForm({ student }: ContactFromProps) {
  const { name, email } = student

  return (
    <>
      <h2>Contact</h2>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" />
        <button type="submit">Send</button>
      </form>
    </>
  )
}
