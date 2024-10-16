export default function Hamburger() {
  const handleMenu = () => {
    const nav = document.querySelector(".navigation.main")
    const hamButton = document.querySelector(".hamburger")
    nav?.classList.toggle("open")
    hamButton?.classList.toggle("open")
  }

  return (
    <>
      <div onClick={handleMenu} className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  )
}
