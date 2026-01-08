import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

const tabs = [
  { label: 'Overview', href: '/reports' },
  { label: 'Workshop Report', href: '/reports/workshop-report' },
  { label: 'Playbook', href: '/reports/playbook' },
  { label: 'Proposal', href: '/reports/proposal' },
  { label: 'Testimonials', href: '/reports/testimonials' },
]

export default function Reports() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="py-16 bg-white flex-grow">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-12">
            {tabs.map((tab) => {
              const isActive = tab.href === '/reports'
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

          <h1 className="text-4xl font-bold text-black mb-10">Reports</h1>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="berlin-card p-6 flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="berlin-heading text-2xl text-black">Workshop Report</h3>
                <p className="berlin-body text-gray-700">
                  Full write-up of the Ambassador Workshop with setup, rollout, reflections, and next steps.
                </p>
              </div>
              <div className="mt-4">
                <Link
                  href="/reports/workshop-report"
                  className="berlin-button-primary block text-center"
                >
                  Open Report
                </Link>
              </div>
            </div>

            <div className="berlin-card p-6 flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="berlin-heading text-2xl text-black">Playbook</h3>
                <p className="berlin-body text-gray-700">
                  Step-by-step guide, checklists, and templates to run future Ambassador Workshops.
                </p>
              </div>
              <div className="mt-4">
                <Link
                  href="/reports/playbook"
                  className="berlin-button-primary block text-center"
                >
                  Open Playbook
                </Link>
              </div>
            </div>

            <div className="berlin-card p-6 flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="berlin-heading text-2xl text-black">Proposal</h3>
                <p className="berlin-body text-gray-700">
                  Catalyst proposal, milestone reports, and close-out deliverables.
                </p>
              </div>
              <div className="mt-4">
                <Link
                  href="/reports/proposal"
                  className="berlin-button-primary block text-center"
                >
                  Open Proposal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

