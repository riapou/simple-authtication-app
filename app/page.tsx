export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-indigo-600">MyApp</h1>
          <nav className="space-x-4">
            <a href="/login" className="text-gray-700 hover:text-indigo-600">
              Login
            </a>
            <a
              href="/signup"
              className="rounded-md bg-indigo-600 px-4 py-2 text-white font-medium hover:bg-indigo-700 transition"
            >
              Sign Up
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex items-center justify-center px-6 py-12">
        <div className="text-center max-w-2xl">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Welcome to <span className="text-indigo-600">MyApp</span>
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            A simple app with authentication, user dashboard, and clean design
            powered by <span className="font-semibold">React</span> &{" "}
            <span className="font-semibold">TailwindCSS</span>.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/signup"
              className="rounded-md bg-indigo-600 px-6 py-3 text-white font-medium hover:bg-indigo-700 transition"
            >
              Get Started
            </a>
            <a
              href="/login"
              className="rounded-md border border-gray-300 px-6 py-3 text-gray-700 font-medium hover:bg-gray-100 transition"
            >
              Login
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-4">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-500">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
