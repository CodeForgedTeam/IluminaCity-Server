import fastify from 'fastify'
import { validatorCompiler, serializerCompiler, ZodTypeProvider } from 'fastify-type-provider-zod'
import { healthRoute } from './routes/health'

export function buildApp() {
  const app = fastify().withTypeProvider<ZodTypeProvider>()

  // Configuração do Zod
  app.setValidatorCompiler(validatorCompiler)
  app.setSerializerCompiler(serializerCompiler)

  // Registro de Rotas
  app.register(healthRoute)

  // Rota raiz para teste rápido
  app.get('/', () => {
    return { message: 'IluminaCity API is running 🚀' }
  })

  return app
}
