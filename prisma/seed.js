// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Create sample users with hashed passwords
  const password = await hash('password123', 12);
  
  const user1 = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'john@example.com',
      emailVerified: new Date(),
      hashedpassword: password,
      image: 'https://example.com/john.jpg',
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: 'Jane Smith',
      email: 'jane@example.com',
      emailVerified: new Date(),
      hashedpassword: password,
    },
  });

  const user3 = await prisma.user.create({
    data: {
      name: 'Alex Johnson',
      email: 'alex@example.com',
      // No emailVerified to simulate unverified user
      hashedpassword: password,
      image: 'https://example.com/alex.jpg',
    },
  });

  // Create accounts for users
  await prisma.account.createMany({
    data: [
      {
        userId: user1.id,
        type: 'oauth',
        provider: 'google',
        providerAccountId: 'google123',
        access_token: 'google_access_token_123',
        expires_at: Math.floor(Date.now() / 1000) + 3600,
        token_type: 'Bearer',
        scope: 'profile email',
      },
      {
        userId: user2.id,
        type: 'oauth',
        provider: 'github',
        providerAccountId: 'github456',
        access_token: 'github_access_token_456',
        refresh_token: 'github_refresh_token_456',
        expires_at: Math.floor(Date.now() / 1000) + 3600,
        token_type: 'Bearer',
        scope: 'user repo',
      },
      {
        userId: user1.id,
        type: 'credentials',
        provider: 'credentials',
        providerAccountId: 'credentials_' + user1.id,
      },
    ],
  });

  // Create sessions
  await prisma.session.createMany({
    data: [
      {
        userId: user1.id,
        sessionToken: 'session_token_123',
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
      },
      {
        userId: user2.id,
        sessionToken: 'session_token_456',
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
      },
    ],
  });

  // Create verification tokens
  await prisma.verificationToken.createMany({
    data: [
      {
        identifier: user3.email,
        token: 'verify_token_789',
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours from now
      },
      {
        identifier: 'reset_password_' + user1.email,
        token: 'reset_token_123',
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours from now
      },
    ],
  });

  console.log('Database has been seeded with:');
  console.log(`- ${await prisma.user.count()} users`);
  console.log(`- ${await prisma.account.count()} accounts`);
  console.log(`- ${await prisma.session.count()} sessions`);
  console.log(`- ${await prisma.verificationToken.count()} verification tokens`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });