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

app.get("/about", async (c) => {
  try {
    const data = await fs.readFile("src/data/test.json", "utf-8")
    const test = JSON.parse(data)
    return c.json(test)
  } catch (error) {
    return c.json({ error: "Failed to read about.json" }, 500)
  }
})

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port,
})
