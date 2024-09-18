type TitleProps = {
  text: string
}

export function H1Title(props: TitleProps) {
  const { text = "Title text missing" } = props
  return <h1>{text}</h1>
}

export function H2Title(props: TitleProps) {
  const { text = "Title text missing" } = props
  return <h2>{text}</h2>
}
