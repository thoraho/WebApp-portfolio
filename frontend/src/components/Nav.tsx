import { useLocation, Link } from "react-router-dom"

export default function Nav() {
  const navItems = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Projects",
      url: "/projects",
    },
    {
      title: "Contact",
      url: "/contact",
    },
  ]

  const location = useLocation()

  return (
    <>
      <nav>
        <ul className="navigation main">
          {navItems.map((item) => (
            <li
              key={item.title}
              className={location.pathname === item.url ? "active" : ""}
            >
              <Link to={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
