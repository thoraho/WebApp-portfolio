export const initData = async () => {
  const response = await fetch("http://localhost:3000/projects")
  const data = await response.json()
  const projects = data.data
  return projects
}

// export const initProjects = async () => {
//   const response = await fetch("http://localhost:3000/about")
//   const data = await response.json()
//   return data
// }
