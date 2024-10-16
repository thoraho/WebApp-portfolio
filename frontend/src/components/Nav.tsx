import { useLocation, Link } from "react-router-dom"

export default function Nav() {
  const navItems = [
    {
      title: "Hjem",
      url: "/",
    },
    {
      title: "Projects",
      url: "/projects",
    },
    {
      title: "Kontakt",
      url: "/contact",
    },
  ]

  const location = useLocation()

  return (
    <>
      <nav>
        <ul className="navigation main">
          {navItems.map((item) => (
            <li key={item.title}>
              <Link
                className={location.pathname === item.url ? "active" : ""}
                to={item.url}
                onClick={() =>
                  document
                    .querySelector(".navigation.main")
                    ?.classList.remove("open")
                }
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
