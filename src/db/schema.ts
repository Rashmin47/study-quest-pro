import { pgTable, text, timestamp, integer, boolean } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: text('id').primaryKey(), // Clerk User ID
  email: text('email').notNull().unique(),
  username: text('username'),
  xp: integer('xp').default(0),
  level: integer('level').default(1),
  coins: integer('coins').default(0),
  rank: text('rank').default('Novice'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const projects = pgTable('projects', {
  id: text('id').primaryKey(), // generate via crypto.randomUUID()
  userId: text('user_id').references(() => users.id).notNull(),
  title: text('title').notNull(),
  description: text('description'),
  status: text('status').default('planned'), // planned, in-progress, completed
  githubUrl: text('github_url'),
  liveUrl: text('live_url'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const techSkills = pgTable('tech_skills', {
  id: text('id').primaryKey(),
  userId: text('user_id').references(() => users.id).notNull(),
  name: text('name').notNull(),
  category: text('category').notNull(), // frontend, backend, tools
  masteryPercentage: integer('mastery_percentage').default(0),
});
