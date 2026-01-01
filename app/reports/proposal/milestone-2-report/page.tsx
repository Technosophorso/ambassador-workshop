import Link from 'next/link'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

const tabs = [
  { label: 'Overview', href: '/reports' },
  { label: 'Workshop Report', href: '/reports/workshop-report' },
  { label: 'Playbook', href: '/reports/playbook' },
  { label: 'Proposal', href: '/reports/proposal' },
]

const proposalTabs = [
  { label: 'Full Proposal', href: '/reports/proposal/full-proposal' },
  { label: 'Milestone 1 Report', href: '/reports/proposal/milestone-1-report' },
  { label: 'Milestone 2 Report', href: '/reports/proposal/milestone-2-report' },
  { label: 'Milestone 3 Report', href: '/reports/proposal/milestone-3-report' },
  { label: 'Close Out Report', href: '/reports/proposal/close-out-report' },
]

export default function Milestone2() {
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
              const isActive = tab.href === '/reports/proposal/milestone-2-report'
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

          <h1 className="text-4xl font-bold text-black mb-6">Milestone 2 Report</h1>

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
                <dd>ADA 14,943.00</dd>
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
                    href="https://milestones.projectcatalyst.io/projects/1300033/milestones/2"
                    className="text-dark-red underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Milestone 2
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="glass-card p-8 mb-8 space-y-4">
            <h2 className="text-2xl font-semibold text-black">Milestone 2 Report</h2>
            <p className="text-gray-700 leading-relaxed">
              Hey there and happy day to you Milestone Reviewers and anyone else following the progress of this proposal.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Here we are submitting the report of the successful completion of Milestone 2 of this proposal.
            </p>
          </div>

          <div className="glass-card p-8 mb-8 space-y-4">
            <h2 className="text-2xl font-semibold text-black">Acceptance Criteria</h2>
            <p className="text-gray-700 leading-relaxed">The acceptance criteria had been stated as:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>
                Public link listing confirmed workshop participants: Considering the fact that this event is for Ambassadors, the
                confirmation list will be for Ambassadors who have confirmed that they wish to attend.
              </li>
              <li>Venue confirmation: Public url's to the payment and booking confirmations of the workshop venue</li>
              <li>Public link to the workshop agenda: Public url to the Workshop agenda, accessible via the workshop website.</li>
            </ul>
          </div>

          <div className="glass-card p-8 space-y-6">
            <h2 className="text-2xl font-semibold text-black">Deliverables &amp; Evidence</h2>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-black">Public list confirming workshop participants:</h3>
              <p className="text-gray-700 leading-relaxed">
                We added a page on the event website where we track the signed up and confirmed attendees with links to their respective X/Twitter accounts:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  <a
                    href="https://ambassador-workshop.netlify.app/attendees/"
                    className="text-dark-red underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://ambassador-workshop.netlify.app/attendees/
                  </a>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Since we still have a healthy time to go until the event, we will keep the signup open to allow ambassadors to further sign up.
              </p>
              <p className="text-gray-700 leading-relaxed">
                (especially wanted to keep it open since some Ambassadors do have to wait for e.g visa-approvals or other factors which determine their ability to join)
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-black">Venue Confirmation:</h3>
              <p className="text-gray-700 leading-relaxed">
                The venue has been booked and confirmed, we added the respective PDF files which confirm the reservation in this publicly accessible folder:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  <a
                    href="https://drive.google.com/drive/folders/1uytGc54rdQQ-eiKx0vskS1rbNIH7424C?usp=sharing"
                    className="text-dark-red underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://drive.google.com/drive/folders/1uytGc54rdQQ-eiKx0vskS1rbNIH7424C?usp=sharing
                  </a>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">You can find more information about the venue at:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  <a
                    href="https://meetreet.com/en/location/redirect/1c59380b-78bf-4d3a-af97-c3de0f1151bf"
                    className="text-dark-red underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://meetreet.com/en/location/redirect/1c59380b-78bf-4d3a-af97-c3de0f1151bf
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.projektraum-drahnsdorf.de/"
                    className="text-dark-red underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.projektraum-drahnsdorf.de/
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-black">Public Link to the workshop agenda:</h3>
              <p className="text-gray-700 leading-relaxed">
                The /agenda page gives an overview on the defined agenda of the workshop and its sessions.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  <a
                    href="https://ambassador-workshop.netlify.app/agenda/"
                    className="text-dark-red underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://ambassador-workshop.netlify.app/agenda/
                  </a>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                While Day2 of the event is reserved for Ambassadors to sign up and host Sessions, Day3 will provide two slots to the Cardano Foundation and one slot for locals. Quite glad to have a well diverse agenda &amp; topics gathered so far. A bit of everything for everyone. And we still expect Ambassadors to host spontaneous ad-hoc sessions as the days go by, so ye, pretty sure we won't get bored ^^
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-black">And that's it 🙂</h3>
              <p className="text-gray-700 leading-relaxed">
                Ambassadors sign up keep coming in (will update the website accordingly to track new entries), sessions are being signed up from both sides, Ambassadors and the Cardano Foundation while we continue to plan out further details and event support such as documents for visa applications by Ambassadors, figure how to film/record stuff etc. And for sure, online meetings with the venue owners who became apparently quite interested about Cardano, so onboarding there is in full process too. ^^
              </p>
              <p className="text-gray-700 leading-relaxed">
                Hope all provided information satisfies the Reviewers expectations.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

