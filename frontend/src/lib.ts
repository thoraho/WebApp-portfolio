export const fetchProjects = async () => {
  const response = await fetch("http://localhost:3000/projects")
  const data = await response.json()
  return data.data
}

export const fetchProjectById = async (id: string) => {
  const response = await fetch(`http://localhost:3000/projects/${id}`)
  const data = await response.json()
  return data.data
}
