import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { serveStatic } from "@hono/node-server/serve-static";
import { } from "fs/promises";

const app = new Hono();

app.use("/*", cors());

app.use("/static/*", serveStatic({ root: "./" }));

const projects = [
  {
    id: crypto.randomUUID(),
    title: "Project",
    createdAt: new Date("2024-01-01"),
  },
];

app.post("/add", async (c) => {
  const newProject = await c.req.json();
  const project = ProjectSchema.parse(newProject);
  if (!project) return c.json({ error: "Invalid project" }, { status: 400 });
  console.log(project);
  projects.push(project);

  return c.json(projects, { status: 201 });
});

app.get("/", (c) => {

  return c.json(projects);
});

const port = 3000;

console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
