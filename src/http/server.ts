import { buildApp } from './app'

const app = buildApp()
const PORT = 3333

app.listen({ port: PORT }).then(() => {
  console.log(`HTTP Server running on http://localhost:${PORT}`)
}).catch(err => {
  console.error(err)
  process.exit(1)
})
