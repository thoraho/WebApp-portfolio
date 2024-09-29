import { Link } from "react-router-dom"
import LogoSVG from "../assets/logo.svg"
import cLogo from "../assets/clogo.svg"

export function LogoMain() {
  return (
    <>
      <Link className="logo main" to="/">
        <img src={cLogo} alt="logo" />
        <h2>Caramello</h2>
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
