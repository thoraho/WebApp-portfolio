import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function MobileBar() {
  return (
    <div id="mobile-bar">
      <button id="mobile-menu">
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  )
}
