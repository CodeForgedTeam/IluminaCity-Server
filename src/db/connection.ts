import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'
import * as dotenv from 'dotenv'

dotenv.config()

const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/iluminacity'

if (!process.env.DATABASE_URL) {
  console.warn('⚠️  DATABASE_URL not found. Using default/dummy connection.')
}

// Configuração otimizada para Serverless (Vercel) + Supabase Transaction Mode
// LEMBRETE: Use a porta 6543 na string de conexão e ative o Transaction Mode no Supabase
export const client = postgres(connectionString, {
  prepare: false, // Transaction Mode não suporta prepared statements
  max: 1          // 1 conexão por Lambda é suficiente
})
export const db = drizzle(client, { schema })
