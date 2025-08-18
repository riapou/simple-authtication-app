export const runtime = 'nodejs'

import NextAuth from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from '@/lib/prisma'
import Credentials from 'next-auth/providers/credentials'
import { compare } from 'bcryptjs'
import GitHub from 'next-auth/providers/github'


export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHub,
    Credentials({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
          placeholder: 'Enter your email',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Enter your password',
        },
      },
      async authorize(credentials) {
        console.log('Authorizing user with credentials:', credentials)
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email as string },
        })
        if (!user) {
          console.log('No user found with the provided email')
        }
        const isValidPassword = await compare(
          credentials?.password as string,
          user?.hashedpassword as string
        )
        if (!isValidPassword) {
          console.log('Invalid password')
        }
        console.log('User authenticated:', user?.email)
        return {
          id: user?.id,
          email: user?.email,
          name: user?.name || 'User',
          image: user?.image || '/Default_pfp.jpg',
        }
      },
    }),
  ],

  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string
        session.user.email = token.email as string
        session.user.name = token.name || ('User' as string)
      }
      console.log('Session created for user:', session.user?.email)
      return session
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = user.name || 'User'
      }
      console.log('JWT created for user:', token.email)
      return token
    },
  },
})
