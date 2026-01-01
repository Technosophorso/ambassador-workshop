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

export default function Milestone1() {
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
              const isActive = tab.href === '/reports/proposal/milestone-1-report'
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

          <h1 className="text-4xl font-bold text-black mb-6">Milestone 1 Report</h1>

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
                <dd>ADA 33,000 Ada</dd>
              </div>
              <div>
                <dt className="font-semibold text-black">Delivered</dt>
                <dd>July 28, 2025</dd>
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
                    href="https://milestones.projectcatalyst.io/projects/1300033/milestones/1"
                    className="text-dark-red underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Milestone 1
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="glass-card p-8 mb-8 space-y-4">
            <h2 className="text-2xl font-semibold text-black">Milestone Report</h2>
            <p className="text-gray-700 leading-relaxed">
              Huhuu &amp; happy day there again, here the second submission of the Milestone 1 Proof of
              Achievement (PoA) since the first one lacked a few stated deliverables as pointed out by
              the Milestone Reviewers. Here now the updated report...
            </p>
          </div>

          <div className="glass-card p-8 mb-8 space-y-4">
            <h2 className="text-2xl font-semibold text-black">What wanted to be achieved in this milestone:</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Setup Communication hub for project coordination</li>
              <li>Open a new cardano-multisig wallet to manage proposal funds</li>
              <li>Submit Proposal onboarding form</li>
              <li>Submit Proposal SoM’s</li>
              <li>Confirm test transaction</li>
              <li>Create and launch an event website</li>
            </ul>
          </div>

          <div className="glass-card p-8 space-y-6">
            <h2 className="text-2xl font-semibold text-black">Report on Deliverables</h2>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-black">Setup Communication hub for project coordination</h3>
              <p className="text-gray-700 leading-relaxed">
                To communicate and coordinate, we have Cardano Foundation who provided us with a dedicated channel for
                this project on the private Cardano Ambassadors Slack by Cardano Foundation.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Furthermore, several individual discord chats help in 1:1 coordinations
              </p>
              <p className="text-gray-700 leading-relaxed">
                A Respective X Account through which event details will be made to the public has been initiated
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  <a
                    href="https://x.com/Ambassador_work"
                    className="text-dark-red underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://x.com/Ambassador_work
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-black">Open a new cardano-multisig wallet to manage proposal funds</h3>
              <p className="text-gray-700 leading-relaxed">Changes to first PoA:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>We created a multisignature account, using the Mesh Multisig platform where we receive and distribute proposal funding.</li>
                <li>
                  The Wallet addr1: addr1xymgnqqlemvc5a6a6n7n3spyxr0t8264a4ys6aflcnqf77tmnylfxupxj8y36hvrnm4k5n828e8stxk3agejrjm4fh9q9anrm6
                </li>
                <li>The multisignature wallet now consists of 5 signers</li>
              </ul>
              <p className="text-gray-700 leading-relaxed font-semibold">Multisignature signers:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Felix (Cardano Ambassador)</li>
                <li>Hinson (Cardano Ambassador)</li>
                <li>Nori Nishigaya (Cardano Ambassador)</li>
                <li>Simon (Cardano Ambassador)</li>
                <li>Yoram (Cardano Ambassador)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">The quorum of the multisig is set to 3/5.</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-black">Submit Proposal onboarding form</h3>
              <p className="text-gray-700 leading-relaxed">
                The proposal onboarding form has been submitted and is approved by the Catalyst Admin Team.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Check the Catalyst Proposal readiness tracker for confirmed onboarding form. (Column 37)
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  <a
                    href="https://docs.google.com/spreadsheets/d/1Zb_eNDp8iiXcJm7qnaogTUujyH9edQAKCu7bMqkUAWQ/edit?gid=0#gid=0"
                    className="text-dark-red underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://docs.google.com/spreadsheets/d/1Zb_eNDp8iiXcJm7qnaogTUujyH9edQAKCu7bMqkUAWQ/edit?gid=0#gid=0
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-black">Submit Proposal SoM’s</h3>
              <p className="text-gray-700 leading-relaxed">
                All Statements of Milestones have been submitted and approved and are accessible at:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  <a
                    href="https://milestones.projectcatalyst.io/projects/1300033"
                    className="text-dark-red underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://milestones.projectcatalyst.io/projects/1300033
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-black">Confirm test transaction</h3>
              <p className="text-gray-700 leading-relaxed">
                The test transaction, has been received and confirmed, you can check the completion at the readiness tracker. (Column 37)
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  <a
                    href="https://docs.google.com/spreadsheets/d/1Zb_eNDp8iiXcJm7qnaogTUujyH9edQAKCu7bMqkUAWQ/edit?gid=0#gid=0"
                    className="text-dark-red underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://docs.google.com/spreadsheets/d/1Zb_eNDp8iiXcJm7qnaogTUujyH9edQAKCu7bMqkUAWQ/edit?gid=0#gid=0
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-black">Create and launch an event website</h3>
              <p className="text-gray-700 leading-relaxed">
                We created and launched the initial Event Website where we will regularly update and add content as the project evolves.
              </p>
              <p className="text-gray-700 leading-relaxed">Changes to first PoA:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  we added workshop details such as dates &amp; location (Cant state exact location yet as the confirmation &amp; booking of the venue is part of Milestone2)
                </li>
                <li>
                  <a
                    href="https://ambassador-workshop.netlify.app/"
                    className="text-dark-red underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://ambassador-workshop.netlify.app/
                  </a>
                </li>
                <li>
                  we added a sign up form for Ambassadors to sign up for the workshop
                  <br />
                  <a
                    href="https://forms.gle/yK48hKvESjas7w5v7"
                    className="text-dark-red underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://forms.gle/yK48hKvESjas7w5v7
                  </a>
                </li>
                <li>
                  we added the missing x-account, linked at the header menu from which we will share event details in public as soon as public information are available at Milestone 2 and 3.
                  <br />
                  <a
                    href="https://x.com/Ambassador_work"
                    className="text-dark-red underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://x.com/Ambassador_work
                  </a>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">You can find the website at:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  <a
                    href="https://ambassador-workshop.netlify.app/"
                    className="text-dark-red underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://ambassador-workshop.netlify.app/
                  </a>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                The respective open source github repository for the project where we host the code and proposal milestone reports can be found at:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  <a
                    href="https://github.com/Technosophorso/ambassador-workshop"
                    className="text-dark-red underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/Technosophorso/ambassador-workshop
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-black">And thats it...</h3>
              <p className="text-gray-700 leading-relaxed">
                For this Milestone, we hope that the provided deliverables match the Milestone Reviewers acceptance criteria.
              </p>
              <p className="text-gray-700 leading-relaxed">Yet, notice to the Milestone Reviewers:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  providing the exact workshop location as you requested is a deliverable of Milestone 2 since this can only come with the confimation and booking of the venue which is not a deliverable of this milestone
                </li>
                <li>
                  providing photos as you requested is a deliverable of Milestone 3 since we can only share photos once the event is concluded
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

