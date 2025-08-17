import GithubSignInBTN from '@/components/GithubSignInBTN'
import { register } from '@/lib/action'

export default function SignupPage() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-100'>
      <form
        action={register}
        className='w-full max-w-md rounded-lg bg-white p-8 shadow-md'
      >
        <h1 className='text-2xl font-bold text-center text-gray-800 mb-6'>
          Create an Account
        </h1>

        {/* Name Input */}
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Full Name
          </label>
          <input
            type='text'
            placeholder='John Doe'
            name='name'
            className='w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500'
          />
        </div>

        {/* Email Input */}
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Email
          </label>
          <input
            type='email'
            name='email'
            placeholder='you@example.com'
            className='w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500'
          />
        </div>

        {/* Password Input */}
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Password
          </label>
          <input
            type='password'
            name='password'
            placeholder='••••••••'
            className='w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500'
          />
        </div>

        {/* Confirm Password */}
        <div className='mb-6'>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Confirm Password
          </label>
          <input
            type='password'
            name='confirmPassword'
            placeholder='••••••••'
            className='w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500'
          />
        </div>

        {/* Signup Button */}
        <button className='w-full rounded-md bg-indigo-600 px-4 py-2 text-white font-medium hover:bg-indigo-700 transition'>
          Sign Up
        </button>

        {/* Divider */}
        <div className='my-6 flex items-center'>
          <hr className='flex-1 border-gray-300' />
          <span className='mx-2 text-sm text-gray-500'>OR</span>
          <hr className='flex-1 border-gray-300' />
        </div>

        {/* Continue with GitHub */}
        <GithubSignInBTN />

        {/* Link to Login */}
        <p className='mt-6 text-center text-sm text-gray-600'>
          Already have an account?{' '}
          <a href='/login' className='text-indigo-600 hover:underline'>
            Log in
          </a>
        </p>
      </form>
    </div>
  )
}
