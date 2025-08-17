'use client'
import { logout } from '@/lib/action'
export default function SignOutButton() {
  return (
    <button
      onClick={logout}
      className='rounded-md bg-red-600 px-4 py-2 text-white font-medium hover:bg-red-700 transition'
    >
      Logout
    </button>
  )
}
