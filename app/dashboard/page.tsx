import Image from 'next/image'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import SignOutButton from '@/components/sginOutBTN'

export default async function Dashboard() {
  const session = await auth()

  if (!session) {
    redirect('/login')
  }
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col'>
      {/* Navbar */}
      <header className='bg-white shadow'>
        <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
          <h1 className='text-xl font-bold text-gray-800'>Dashboard</h1>
          <SignOutButton />
        </div>
      </header>

      {/* Main Content */}
      <main className='flex-grow flex items-center justify-center px-6 py-12'>
        <div className='w-full max-w-md rounded-lg bg-white p-8 shadow-md'>
          <div className='flex flex-col items-center'>
            {/* Avatar */}
            <Image
              src={'/Default_pfp.jpg'}
              alt={session?.user?.name || 'User Avatar'}
              width={96}
              height={96}
              className='w-24 h-24 rounded-full border border-gray-300 mb-4'
            />

            {/* User Info */}
            <h2 className='text-xl font-semibold text-gray-800'>
              {session.user?.name}
            </h2>
            <p className='text-gray-500 text-sm'>{session.user?.email}</p>

            {/* Extra Info */}
            <div className='mt-6 w-full space-y-3 text-sm text-gray-700'>
              <div className='flex justify-between border-b pb-2'>
                <span className='font-medium'>Joined</span>
                <span>Jan 15, 2024</span>
              </div>
              <div className='flex justify-between border-b pb-2'>
                <span className='font-medium'>Role</span>
                <span>User</span>
              </div>
              <div className='flex justify-between'>
                <span className='font-medium'>Status</span>
                <span className='text-green-600 font-medium'>Active</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
