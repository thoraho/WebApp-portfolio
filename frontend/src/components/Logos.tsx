import { Link } from "react-router-dom"
import LogoSVG from "../assets/logo.svg"
import cLogo from "../assets/clogo.svg"

export function LogoLandscape() {
  return (
    <>
      <Link className="logo landscape" to="/">
        CARAMELLO
      </Link>
    </>
  )
}

export function LogoPortrait() {
  return (
    <>
      <Link className="logo portrait" to="/">
        CARAMELLO
      </Link>
    </>
  )
}
