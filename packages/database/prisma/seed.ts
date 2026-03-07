import 'dotenv/config'
import { PrismaClient, UserRole } from '../src/generated'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.upsert({
    where: { email: 'ernie@example.com' },
    update: {},
    create: {
      username: 'ernie',
      email: 'ernie@example.com',
      passwordHash: 'hashed-password',
      role: UserRole.ADMIN,
      bio: 'Building Plume'
    }
  })

  const tweet = await prisma.tweet.create({
    data: {
      content: 'Hello Plume 🚀',
      authorId: user.id,
      tweetMetrics: { create: {} }
    }
  })

  await prisma.like.create({
    data: {
      userId: user.id,
      tweetId: tweet.id
    }
  })

  console.log('Seed complete')
}

main().finally(() => prisma.$disconnect())