import Link from 'next/link'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

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

export default function Milestone3() {
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
            {proposalTabs.map((tab) => {
              const isActive = tab.href === '/reports/proposal/milestone-3-report'
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

          <h1 className="text-4xl font-bold text-black mb-6">Milestone 3 Report</h1>

          <div className="glass-card p-8 mb-8 space-y-3">
            <h2 className="text-2xl font-semibold text-black">Project Details</h2>
            <dl className="grid md:grid-cols-2 gap-3 text-gray-700">
              <div>
                <dt className="font-semibold text-black">Project ID</dt>
                <dd>1300033</dd>
              </div>
              <div>
                <dt className="font-semibold text-black">Challenge</dt>
                <dd>F13: Cardano Open: Ecosystem</dd>
              </div>
              <div>
                <dt className="font-semibold text-black">Milestone Budget</dt>
                <dd>ADA 22,912.00</dd>
              </div>
              <div>
                <dt className="font-semibold text-black">Delivered</dt>
                <dd>September 28, 2025</dd>
              </div>
              <div className="md:col-span-2">
                <dt className="font-semibold text-black">Links</dt>
                <dd className="space-x-4">
                  <a
                    href="https://projectcatalyst.io/funds/10/f13-cardano-open-ecosystem/cardano-ambassador-workshop-europe"
                    className="text-dark-red underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open full project
                  </a>
                  <a
                    href="https://milestones.projectcatalyst.io/projects/1300033/milestones/3"
                    className="text-dark-red underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Milestone 3
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="glass-card p-8 mb-8 space-y-4">
            <h2 className="text-2xl font-semibold text-black">Milestone 3 Report</h2>
            <p className="text-gray-700 leading-relaxed">
              Hey there and Happy day.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Here we are, reporting the successful completion of the last and final Milestone.
            </p>
          </div>

          <div className="glass-card p-8 mb-8 space-y-4">
            <h2 className="text-2xl font-semibold text-black">Deliverables</h2>
            <p className="text-gray-700 leading-relaxed">The deliverables of this Milestone had been stated as:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Workshop Highlights &amp; insights report: a public link to a document which captures key insights and highlights of the workshop, supported by visual material such as pictures taken at the workshop.</li>
              <li>The report includes sharing testimonials from Ambassadors which attended the workshop</li>
              <li>Final close-out report: A final close out report which reflects on the workshop and proposal</li>
              <li>Final closeout video: A final close out video which reflects on the workshop and proposal</li>
            </ul>
          </div>

          <div className="glass-card p-8 mb-8 space-y-6">
            <h2 className="text-2xl font-semibold text-black">Deliverables &amp; Evidence</h2>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-black">1) Workshop Highlights &amp; insights report</h3>
              <p className="text-gray-700 leading-relaxed">
                The workshop highlight &amp; insights report has been completed and is publicly accessible at:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  <a
                    href="https://github.com/Technosophorso/ambassador-workshop/blob/main/catalyst-proposal/workshop-report.md"
                    className="text-dark-red underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github: workshop-report.md
                  </a>
                </li>
                <li>
                  <a
                    href="https://ambassador-workshop.netlify.app/reports"
                    className="text-dark-red underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Website: /reports
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-black">2) Final close-out report</h3>
              <p className="text-gray-700 leading-relaxed">
                The Final close-out report has been completed and is publicly accessible at:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  <a
                    href="https://github.com/Technosophorso/ambassador-workshop/blob/main/catalyst-proposal/close-out.md"
                    className="text-dark-red underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github: close-out.md
                  </a>
                </li>
                <li>
                  <a
                    href="https://ambassador-workshop.netlify.app/reports/proposal/close-out-report/"
                    className="text-dark-red underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Website: /reports/proposal/close-out-report
                  </a>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                Testimonials to be found at:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  <a
                    href="https://ambassador-workshop.netlify.app/reports/testimonials"
                    className="text-dark-red underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Website: /reports/testimonials
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-black">3) Final closeout video</h3>
              <p className="text-gray-700 leading-relaxed">
                The Final closeout video has been completed and is publicly accessible at:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  <a
                    href="https://vimeo.com/1152467726?share=copy&fl=sv&fe=ci#t=0"
                    className="text-dark-red underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VIMEO: Close-out Video
                  </a>
                </li>
              </ul>
              <div className="aspect-video mt-4">
                <iframe
                  src="https://player.vimeo.com/video/1152467726"
                  className="w-full h-full rounded-lg"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Close-out Video"
                />
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-black">And that&apos;s it 🙂</h3>
              <p className="text-gray-700 leading-relaxed">
                We hope all provided info and details satisfy the acceptance of this Milestone &amp; proposal close out.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

