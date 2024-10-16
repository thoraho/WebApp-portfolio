import Hamburger from "./Hamburger"
import { LogoLandscape as Logo } from "./Logos"
import Nav from "./Nav"

export default function Header() {
  return (
    <>
      <header className="flex gapX">
        <Hamburger />
        {/* <button onClick={handleMenu} className="hamburger">
          |||
        </button> */}
        <Logo />
        <Nav />
      </header>
    </>
  )
}
