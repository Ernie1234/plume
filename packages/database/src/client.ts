import { PrismaClient } from '@prisma/client';

import { getLogger } from '@plume/logger';

const logger = getLogger('database');

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient(): PrismaClient {
  return new PrismaClient({
    log:
      process.env['NODE_ENV'] === 'development'
        ? [
          { emit: 'event', level: 'query' },
          { emit: 'event', level: 'error' },
          { emit: 'event', level: 'warn' },
        ]
        : [{ emit: 'event', level: 'error' }],
    errorFormat: 'pretty',
  });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env['NODE_ENV'] !== 'production') {
  globalForPrisma.prisma = prisma;
}

// Development query logging
if (process.env['NODE_ENV'] === 'development') {
  prisma.$on('query' as never, (e: { query: string; duration: number }) => {
    logger.debug('Prisma Query', { query: e.query, duration: e.duration });
  });
}

prisma.$on('error' as never, (e: { message: string }) => {
  logger.error('Prisma Error', { message: e.message });
});

export async function connectDatabase(): Promise<void> {
  try {
    await prisma.$connect();
    logger.info('Database connected successfully');
  } catch (error) {
    logger.error('Failed to connect to database', error as Error);
    process.exit(1);
  }
}

export async function disconnectDatabase(): Promise<void> {
  await prisma.$disconnect();
  logger.info('Database disconnected');
}