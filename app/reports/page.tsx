import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

const tabs = [
  { label: 'Overview', href: '/reports' },
  { label: 'Workshop Report', href: '/reports/workshop-report' },
  { label: 'Playbook', href: '/reports/playbook' },
  { label: 'Proposal', href: '/reports/proposal' },
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

          <h1 className="text-4xl font-bold text-black mb-8">Reports & Outcomes</h1>
          
          <div className="glass-card p-8 mb-12">
            <p className="text-gray-700 text-lg leading-relaxed">
              Here we will provide reports and metrics from the event.
            </p>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-black mb-8">Event Report</h2>
            <div className="glass-card p-8">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-black mb-4">Workshop Overview</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Here we will place few metrics of the event
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="border-l-4 border-dark-red pl-4">
                  <h4 className="font-semibold text-black mb-2">Key Metrics</h4>
                  <p className="text-gray-700 text-sm">Participation rates, engagement levels, and success indicators</p>
                </div>
                <div className="border-l-4 border-dark-red pl-4">
                  <h4 className="font-semibold text-black mb-2">Outcomes</h4>
                  <p className="text-gray-700 text-sm">Achieved objectives and measurable results from the workshop</p>
                </div>
                <div className="border-l-4 border-dark-red pl-4">
                  <h4 className="font-semibold text-black mb-2">Feedback</h4>
                  <p className="text-gray-700 text-sm">Participant insights and recommendations for future events</p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <p className="text-gray-600 text-sm">
                  📄 <strong>Status:</strong> Report will be published following event completion and data analysis.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-black mb-8">Playbook</h2>
            <div className="glass-card p-8">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-black mb-4">Ambassador Workshop Playbook</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Here we will place the playbook which we will generate during the execution of the event
               </p>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-dark-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">Planning & Preparation</h4>
                    <p className="text-gray-700 text-sm">Step-by-step guide for event planning, venue selection, and logistics coordination</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-dark-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">Content Development</h4>
                    <p className="text-gray-700 text-sm">Workshop materials, session structures, and educational content frameworks</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-dark-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">Ambassador Engagement</h4>
                    <p className="text-gray-700 text-sm">Best practicezs to engage Ambassadors at the event</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-dark-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">Reports & Metrics</h4>
                    <p className="text-gray-700 text-sm">Assessment & reporting methods, feedback and metrics</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <p className="text-gray-600 text-sm">
                  📚 <strong>Status:</strong> Playbook will be developed and published as a project deliverable upon completion.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

