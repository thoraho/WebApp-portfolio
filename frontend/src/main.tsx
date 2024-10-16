import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
// import "./index.css"
// import "./index2.css"
import "./index3.css"
import { BrowserRouter as Router } from "react-router-dom"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
)
