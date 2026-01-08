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

export default function FullProposal() {
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
              const isActive = tab.href === '/reports/proposal/full-proposal'
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

          <h1 className="text-4xl font-bold text-black mb-6">Full Proposal</h1>

          <div className="glass-card p-8 mb-8 space-y-3">
            <h2 className="text-2xl font-semibold text-black">Project Details</h2>
            <dl className="grid md:grid-cols-2 gap-3 text-gray-700">
              <div>
                <dt className="font-semibold text-black">Project ID</dt>
                <dd>1300032</dd>
              </div>
              <div>
                <dt className="font-semibold text-black">Challenge</dt>
                <dd>F13: Cardano Open: Ecosystem</dd>
              </div>
              <div>
                <dt className="font-semibold text-black">Budget</dt>
                <dd>ADA 49,810.00</dd>
              </div>
              <div>
                <dt className="font-semibold text-black">Started</dt>
                <dd>February 1, 2025</dd>
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
                    href="https://milestones.projectcatalyst.io/projects/1300033"
                    className="text-dark-red underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Milestones
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="glass-card p-8 mb-8 space-y-4">
            <h2 className="text-2xl font-semibold text-black">General</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-black">Name and surname of main applicant:</strong> Felix Weber
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-black">Delivering as:</strong> Entity (Not Incorporated)
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-black">Project duration:</strong> 3 months
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-black">Auto-translated:</strong> No
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-black">Summary (200 chars):</strong>{' '}
              We ideate, organise and execute a new ambassador in-person workshop format to increase
              coordinations and collaborations amongst local Cardano Ambassadors
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-black">Dependencies:</strong> No dependencies
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-black">Open source:</strong> Yes. All project outcomes will be
              fully open sourced. We will create a playbook summarising all our experience under an
              open-source license on a public GitHub.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-black">Horizons:</strong> Connected Community
            </p>
          </div>

          <div className="glass-card p-8 mb-8 space-y-4">
            <h2 className="text-2xl font-semibold text-black">Solution</h2>
            <p className="text-gray-700 leading-relaxed">Let's keep it short and precise.</p>
            <div className="space-y-2 text-gray-700">
              <p>
                <strong className="text-black">TLDR:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong className="text-black">What:</strong> Local Ambassador workshop pilot
                </li>
                <li>
                  <strong className="text-black">When:</strong> Q1/2025
                </li>
                <li>
                  <strong className="text-black">Where:</strong> Switzerland
                </li>
                <li>
                  <strong className="text-black">Who:</strong> As many Ambassadors in Europe as
                  possible, also inviting members from the Cardano Foundation
                </li>
                <li>
                  <strong className="text-black">Why:</strong> To upskill Cardano Ambassadors as well
                  as improving relations of Ambassadors with each other and as Ambassadors to the
                  Cardano Foundation
                </li>
                <li>
                  <strong className="text-black">Workshop format:</strong> Builder Fest style,
                  unconference
                </li>
              </ul>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We will ideate, organise, host and report on an in-person Workshop with local
              Ambassadors in the style of the Builder Fest #1. We define and battleproof a repeatable
              playbook from our experiences which can be easily used by other local Ambassador
              communities around the globe to adapt &amp; adopt the playbook to their own
              geographical regions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The main intent is to strengthen the Ambassadors community and to facilitate better
              relations, alignment and engagements across strongly engaged Cardano contributors.
            </p>
          </div>

          <div className="glass-card p-8 mb-8 space-y-4">
            <h2 className="text-2xl font-semibold text-black">Impact</h2>
            <p className="text-gray-700 leading-relaxed">
              The event is created and specifically set up to trigger and facilitate collaboration
              among Ambassadors and to increase collectiveness and effectiveness of our ecosystem
              engagements. Here we are able to meet our fellow ambassadors with which we are able to
              coordinate already existing projects as well as initiate future projects which we
              identify as needed or to support each other in onboarding new projects to the Cardano
              ecosystem.
            </p>
          </div>

          <div className="glass-card p-8 mb-8 space-y-4">
            <h2 className="text-2xl font-semibold text-black">Capability &amp; Feasibility</h2>
            <p className="text-gray-700 leading-relaxed">
              We are a group of well experienced Cardano Ambassadors and meetup organisers, as such
              it is our passion &amp; expertise to create online &amp; offline events for the Cardano
              Community. Our experience and skill sets ensure a successful implementation of the
              proposal.
            </p>
          </div>

          <div className="glass-card p-8 mb-8 space-y-6">
            <h2 className="text-2xl font-semibold text-black">Project Milestones</h2>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-black">Milestone 1</h3>
              <p className="text-gray-700">Milestone Budget: 15,000 Ada</p>
              <p className="text-gray-700">Milestone progress in %: 20%</p>
              <p className="text-gray-700 font-semibold">Milestone outcomes:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Setup communication hub for project coordination</li>
                <li>Open a new Cardano multisig wallet to manage proposal funds</li>
                <li>Submit Proposal onboarding form</li>
                <li>Submit Proposal SoM’s</li>
                <li>Confirm test transaction</li>
                <li>Create and launch an event website</li>
              </ul>
              <p className="text-gray-700 font-semibold">Acceptance criteria:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Successfully created a new Discord server for project coordination</li>
                <li>Successfully opened a new Cardano multisig wallet</li>
                <li>Successfully submitted onboarding form</li>
                <li>Successfully submitted Proposal SoM’s</li>
                <li>Confirmed test transaction</li>
                <li>Successfully launched event website</li>
              </ul>
              <p className="text-gray-700 font-semibold">Evidence of Milestone completion:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Public link to the project Discord server</li>
                <li>Public link to the multisig wallet address on the Cardano Blockchain</li>
                <li>Public link of the Proposal at the Catalyst Milestone platform</li>
                <li>Public link to the event website</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-black">Milestone 2</h3>
              <p className="text-gray-700">Milestone Budget: 15,000 Ada</p>
              <p className="text-gray-700">Milestone progress in %: 40%</p>
              <p className="text-gray-700 font-semibold">Milestone outcomes:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Invite &amp; confirm workshop participants</li>
                <li>Book the event venue</li>
                <li>Define workshop agenda</li>
              </ul>
              <p className="text-gray-700 font-semibold">Acceptance criteria:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Confirmed workshop participant list</li>
                <li>Successfully booked the workshop venue</li>
                <li>Successfully defined workshop agenda</li>
              </ul>
              <p className="text-gray-700 font-semibold">Evidence of Milestone completion:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Public link listing confirmed workshop participants</li>
                <li>Public link to the venue booking confirmation</li>
                <li>Public link to the workshop agenda</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-black">Milestone 3: Hosting the Pilot Event</h3>
              <p className="text-gray-700">Milestone Budget: 10,000 Ada</p>
              <p className="text-gray-700">Milestone progress in %: 80%</p>
              <p className="text-gray-700 font-semibold">Milestone outcomes:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Successfully host the event</li>
                <li>Create and publish a short event summary</li>
              </ul>
              <p className="text-gray-700 font-semibold">Acceptance criteria:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Workshop photos and videos to prove the workshop execution</li>
                <li>
                  Create a short workshop summary including:
                  <ul className="list-disc list-inside ml-6 space-y-1">
                    <li>Number of workshop participants</li>
                    <li>Names of workshop participants</li>
                    <li>Workshop highlights</li>
                  </ul>
                </li>
              </ul>
              <p className="text-gray-700 font-semibold">Evidence of Milestone completion:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  Public link to workshop summary, including photos, short videos, and highlights
                  taken from the workshop
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-black">Milestone 4: Report &amp; Playbook</h3>
              <p className="text-gray-700">Milestone Budget: 9,810 Ada</p>
              <p className="text-gray-700">Milestone progress in %: 100%</p>
              <p className="text-gray-700 font-semibold">Milestone outcomes:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Published and open source playbook</li>
                <li>Complete proposal close out report</li>
                <li>Complete proposal close out video</li>
              </ul>
              <p className="text-gray-700 font-semibold">Acceptance criteria:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Published and open source playbook</li>
                <li>Completed close out report</li>
                <li>Completed close out video</li>
              </ul>
              <p className="text-gray-700 font-semibold">Evidence of Milestone completion:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Public URL to the playbook</li>
                <li>Public link to playbook open-source license</li>
                <li>Public link to close out report</li>
                <li>Public link to close out video</li>
              </ul>
            </div>
          </div>

          <div className="glass-card p-8 mb-8 space-y-4">
            <h2 className="text-2xl font-semibold text-black">Resources</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <div>
                <p className="font-semibold text-black">Felix Weber</p>
                <p>Cardano Ambassador since 2021</p>
                <p>Doing stuff at:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>
                    <a
                      href="https://x.com/CatalystSwarm"
                      className="text-dark-red underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @CatalystSwarm
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/meshsdk"
                      className="text-dark-red underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @meshsdk
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/uni_fires"
                      className="text-dark-red underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @uni_fires
                    </a>
                  </li>
                  <li>and more</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-black">Beatrice Anihiri</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>
                    <a
                      href="https://x.com/BeatriceAnihiri"
                      className="text-dark-red underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @BeatriceAnihiri
                    </a>
                  </li>
                  <li>Marketing Manager @Blockfrost_io</li>
                  <li>Founder of @Konsensis</li>
                  <li>ICC Member @CardanoAtlantic</li>
                  <li>Cardano Ambassador</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 mb-12 space-y-4">
            <h2 className="text-2xl font-semibold text-black">Budget &amp; Costs</h2>
            <p className="text-gray-700 leading-relaxed">
              We don't pay any participant for attending, yet we don't want them to pay for it either.
              Therefore, our budget covers these items for 25 participants:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Sleeping Rooms: 2,625 USD</li>
              <li>Seminar Room: 526.50 USD</li>
              <li>Food: 5,382 USD</li>
              <li>Travel Costs: 7,500 USD</li>
              <li>Organisation &amp; Documentation: 1,000 USD</li>
              <li>Website: 400 USD</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-black">Total:</strong> 17,433.50 USD<br />
              <strong className="text-black">At a rate of 0.35 Ada/USD = 49,810 Ada</strong>
            </p>
            <p className="text-gray-700 leading-relaxed">
              Calculated from prices from a potential venue at:{' '}
              <a
                href="https://www.landguet.ch/en/prices-and-conditions"
                className="text-dark-red underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                landguet.ch
              </a>
              . Ada prices calculated at 0.35 Ada/USD
            </p>
          </div>

          <div className="glass-card p-8 space-y-4">
            <h2 className="text-2xl font-semibold text-black">Value for Money</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-black">Community Strengthening:</strong> The proposed Ambassador
              Workshop aims to strengthen the Cardano Ambassadors' network by fostering in-person
              collaboration, which enhances both existing projects and the development of new
              initiatives. This adds value by improving ecosystem engagement and increasing collective
              project coordination.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-black">Skill Development:</strong> By upskilling Ambassadors, the
              workshop ensures that the participants can take these skills back to their local
              communities, further strengthening Cardano's presence and impact in different regions.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

