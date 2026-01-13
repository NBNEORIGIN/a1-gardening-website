import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-green-800 font-bold text-xl">
              A1 Gardening Services
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="#services" className="text-gray-700 hover:text-green-600 transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-green-600 transition-colors">
              About
            </Link>
            <Link href="#gallery" className="text-gray-700 hover:text-green-600 transition-colors">
              Gallery
            </Link>
            <Link href="#reviews" className="text-gray-700 hover:text-green-600 transition-colors">
              Reviews
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-green-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
