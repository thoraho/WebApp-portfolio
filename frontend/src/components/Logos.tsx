import { Link } from "react-router-dom"
import LogoSVG from "../assets/logo.svg"

export function LogoMain() {
  return (
    <>
      <Link className="logo main" to="/">
        <img src={LogoSVG} alt="logo" />
        <h2>Thorfolio</h2>
      </Link>
    </>
  )
}

export function LogoSmall() {
  return (
    <>
      <span className="logo small">TF</span>
    </>
  )
}
