import { TitleProps } from "../types"

export function H1Title(props: TitleProps) {
  const { text = "Title text missing" } = props
  return <h1>{text}</h1>
}

export function H2Title(props: TitleProps) {
  const { text = "Title text missing" } = props
  return <h2>{text}</h2>
}

export function H3Title(props: TitleProps) {
  const { text = "Title text missing" } = props
  return <h3>{text}</h3>
}
