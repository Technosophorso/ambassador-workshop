import Link from 'next/link'

export default function Header() {
  return (
    <header className="glass-header">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6 min-h-[80px]">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-black">
              Cardano Ambassador Workshop [EUROPE]
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-dark-red transition-colors">
              Home
            </Link>
            <Link href="/gallery" className="text-gray-700 hover:text-dark-red transition-colors">
              Gallery
            </Link>
            <Link href="/agenda" className="text-gray-700 hover:text-dark-red transition-colors">
              Agenda
            </Link>
            <Link href="/reports-outcomes" className="text-gray-700 hover:text-dark-red transition-colors">
              Reports & Outcomes
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
} 