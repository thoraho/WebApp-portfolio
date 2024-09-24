import { useState, useEffect } from "react"
import { initProjectData } from "./lib"
import Layout from "./components/Layout"
import { Route, Routes } from "react-router-dom"
import { Project } from "./types"
import { Outlet } from "react-router-dom"
import Card from "./components/Card"
import Grid from "./components/Grid"
import Projects from "./pages/Projects"

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
