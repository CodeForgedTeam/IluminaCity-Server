import { pgTable, text, timestamp, uuid, real, pgEnum } from 'drizzle-orm/pg-core'

export const userRoleEnum = pgEnum('user_role', ['ADMIN', 'OPERADOR', 'CIDADAO'])
export const issueStatusEnum = pgEnum('issue_status', ['OPEN', 'IN_PROGRESS', 'RESOLVED'])

export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  email: text('email').notNull().unique(),
  passwordHash: text('password_hash').notNull(),
  role: userRoleEnum('role').default('CIDADAO').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const poles = pgTable('poles', {
  id: text('id').primaryKey(), // Pode ser ID da Energisa
  code: text('code').unique().notNull(), // Código visual
  latitude: real('latitude').notNull(),
  longitude: real('longitude').notNull(),
  address: text('address').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const issues = pgTable('issues', {
  id: uuid('id').defaultRandom().primaryKey(),
  poleId: text('pole_id').references(() => poles.id).notNull(),
  type: text('type').notNull(), // Ex: "Lâmpada Queimada"
  status: issueStatusEnum('status').default('OPEN').notNull(),
  photoUrl: text('photo_url'),
  
  // SLA & Timestamps
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(), // Deve ser atualizado via aplicação ou trigger
  resolvedAt: timestamp('resolved_at'),
})
