import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const tabs = [
  { label: 'Overview', href: '/reports' },
  { label: 'Workshop Report', href: '/reports/workshop-report' },
  { label: 'Playbook', href: '/reports/playbook' },
  { label: 'Proposal', href: '/reports/proposal' },
  { label: 'Testimonials', href: '/reports/testimonials' },
]

const proposalTabs = [
  { label: 'Full Proposal', href: '/reports/proposal/full-proposal' },
  { label: 'Milestone 1 Report', href: '/reports/proposal/milestone-1-report' },
  { label: 'Milestone 2 Report', href: '/reports/proposal/milestone-2-report' },
  { label: 'Milestone 3 Report', href: '/reports/proposal/milestone-3-report' },
  { label: 'Close Out Report', href: '/reports/proposal/close-out-report' },
]

export default function Proposal() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="py-16 bg-white flex-grow">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {tabs.map((tab) => {
              const isActive = tab.href === '/reports/proposal'
              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={`berlin-mono px-4 py-2 border-2 transition-all duration-200 ${
                    isActive
                      ? 'bg-black !text-white border-black'
                      : 'bg-white !text-black border-black hover:!bg-black hover:!text-white'
                  }`}
                >
                  {tab.label}
                </Link>
              )
            })}
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-10">
            {proposalTabs.map((tab) => (
              <Link
                key={tab.href}
                href={tab.href}
                className="berlin-mono px-4 py-2 border-2 border-black bg-white !text-black hover:!bg-black hover:!text-white transition-all duration-200"
              >
                {tab.label}
              </Link>
            ))}
          </div>

          <h1 className="text-4xl font-bold text-black mb-4">Proposal</h1>
          <p className="text-gray-700 text-lg leading-relaxed">Select a proposal document.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

