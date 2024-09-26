import { useEffect, useState } from "react"
import { fetchProjects } from "./lib"
import Projects from "./components/Projects"
import Layout from "./components/Layout"
import { Route, Routes } from "react-router-dom"

function App() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetchProjects().then((data) => setProjects(data))
  }, [])

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<h1>PORTFOLIO</h1>} />
          <Route path="/projects" element={<Projects projects={projects} />} />
          <Route path="/contact" element={<h1>CONTACT</h1>} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
