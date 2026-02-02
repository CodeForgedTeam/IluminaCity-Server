import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { checkDatabaseConnection } from '../../services/health-service'

export const healthRoute: FastifyPluginAsyncZod = async (app) => {
  app.get('/health', {
    schema: {
      tags: ['Observability'],
      summary: 'Check application health',
      response: {
        200: z.object({
          status: z.literal('ok'),
          message: z.string(),
          uptime: z.number(),
          db: z.boolean()
        })
      }
    }
  }, async (_request, reply) => {
    const isDbUp = await checkDatabaseConnection()

    return reply.status(200).send({
      status: 'ok',
      message: 'Rota funcionando 🚀',
      uptime: process.uptime(),
      db: isDbUp
    })
  })
}
