import { serve } from "@hono/node-server"
import { promises as fs, readFile } from "fs"
import { Hono } from "hono"
import { cors } from "hono/cors"

const app = new Hono()

app.use("*", cors())

app.get("/projects", async (c) => {
  try {
    const data = await fs.readFile("src/data/projects.json", "utf-8")
    const projects = JSON.parse(data)
    return c.json({ data: projects })
  } catch (error) {
    return c.json({ error: "Failed to read projects.json" }, 500)
  }
})

app.post("/projects", async (c) => {
  const data = await c.req.json<any>()
  try {
    const projects = JSON.parse(
      await fs.readFile("src/data/projects.json", "utf-8")
    )
    projects.push(data)
    await fs.writeFile("src/data/projects.json", JSON.stringify(projects))
    return c.json({ data: projects })
  } catch (error) {
    return c.json({ error: "Failed to write projects.json" }, 500)
  }
})

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port,
})
