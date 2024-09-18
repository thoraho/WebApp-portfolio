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
      title: "About",
      url: "/about",
    },
    {
      title: "Contact",
      url: "/contact",
    },
  ]
  const location = window.location.pathname

  return (
    <nav>
      <ul id="main-nav">
        {navItems.map((item, index) => (
          <li key={index} className={location === item.url ? "active" : ""}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
