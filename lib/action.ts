'use server'
import { signIn, signOut } from '@/auth'
import { prisma } from './prisma'
import { hash } from 'bcryptjs'

export const logout = async () => {
  await signOut({
    redirectTo: '/',
  })
}
export const login = async (formData: FormData) => {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (!email || !password) {
    throw new Error('Email and password are required')
  }

  await signIn('credentials', {
    email,
    password,
    redirectTo: '/dashboard',
  })
}

export const loginWithGithub = async () => {
  await signIn('github', {
    redirectTo: '/dashboard',
  })
}

export const register = async (formData: FormData) => {
  const name = formData.get('name')?.toString()?.trim() || ''
  const email = formData.get('email')?.toString()?.trim() || ''
  const password = formData.get('password')?.toString() || ''
  const confirmPassword = formData.get('confirmPassword')?.toString() || ''

  if (!name || !email || !password || !confirmPassword) {
    console.log('All fields are required')
  }

  if (password !== confirmPassword) {
    console.log('Passwords do not match')
  }

  console.log(password, typeof password)
  const hashedPassword = await hash(password, 10)

  await prisma.user.create({
    data: {
      name: name,
      email: email,
      hashedpassword: hashedPassword,
    },
  })

  await signIn('credentials', {
    email,
    password,
    redirectTo: '/dashboard',
  })
}
