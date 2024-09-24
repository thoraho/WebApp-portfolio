import { Project as ProjectType } from "./types"

export const initProjectData = async () => {
  const response = await fetch("http://localhost:3000/projects")
  const data = await response.json()
  const projects = data
  return projects
}

export const addProject = async (project: ProjectType) => {
  try {
    const response = await fetch("http://localhost:3000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error adding project:", error)
    throw error
  }
}

export const getRandomNumber = (min: number, max: number): number => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
  console.log(randomNumber)
  return randomNumber
}
