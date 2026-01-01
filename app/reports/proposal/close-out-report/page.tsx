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

export default function CloseOut() {
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
              const isActive = tab.href === '/reports/proposal/close-out-report'
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

          <h1 className="text-4xl font-bold text-black mb-6">Close Out Report</h1>

          <div className="glass-card p-8 mb-8 space-y-3">
            <h2 className="text-2xl font-semibold text-black">Project Details</h2>
            <dl className="grid md:grid-cols-2 gap-3 text-gray-700">
              <div>
                <dt className="font-semibold text-black">Project Name</dt>
                <dd>Cardano Ambassador Workshop - Europe</dd>
              </div>
              <div>
                <dt className="font-semibold text-black">Project Number</dt>
                <dd>1300033</dd>
              </div>
              <div>
                <dt className="font-semibold text-black">Date started</dt>
                <dd>February 2025</dd>
              </div>
              <div>
                <dt className="font-semibold text-black">Date completed</dt>
                <dd>December 2025</dd>
              </div>
              <div className="md:col-span-2">
                <dt className="font-semibold text-black">Links</dt>
                <dd className="space-x-4">
                  <a
                    href="https://projectcatalyst.io/funds/13/cardano-open-ecosystem/cardano-ambassador-workshop-europe"
                    className="text-dark-red underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    IdeaScale/Fund page
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
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-black">Project Manager:</strong> Felix Weber
            </p>
          </div>

          <div className="glass-card p-8 mb-8 space-y-4">
            <h2 className="text-2xl font-semibold text-black">Challenge KPIs &amp; How Addressed</h2>
            <p className="text-gray-700 leading-relaxed">
              The Challenge KPIs of the “Cardano-Open: Ecosystem” had been stated as: Cardano Governance working groups
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Cardano marketing initiatives and public outreach</li>
              <li>Community hackathons and builder outreach (in person and virtual)</li>
              <li>Content and education creation/curation</li>
              <li>Mentorship and collaboration</li>
              <li>Education advancement</li>
              <li>Local policy, standards, and regulation formulations</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">This project addressed these mainly by focusing on</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>
                Community hackathons and builder outreach (in person and virtual)
                <br />
                <span className="text-gray-700">
                  - in-person community/builder space, similar to the well known Cardano Buidler Fest but in smaller scope and
                  focused on the Cardano Ambassador Community
                </span>
              </li>
              <li>
                Mentorship and collaboration
                <br />
                <span className="text-gray-700">
                  - direct collaboration with Ambassadors as well as with the Cardano Foundation Community Team
                </span>
              </li>
              <li>
                Education advancement
                <br />
                <span className="text-gray-700">
                  - directly aiming to further educate highly active and present Ambassadors with workshop sessions, ideas &amp;
                  content
                </span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              To address these objectives, following KPIs/OKRs can match well to define the success:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Ideate, develop and execute a new concept for Cardano Ambassador in-person Workshops</li>
              <li>Collaborate with the Ambassadors Community and the Cardano Foundation to ideate, design and host the Workshop</li>
            </ul>
          </div>

          <div className="glass-card p-8 mb-8 space-y-4">
            <h2 className="text-2xl font-semibold text-black">Project KPIs &amp; Delivery</h2>
            <p className="text-gray-700 leading-relaxed">
              The Project KPIs have been formalised in the proposal Milestones, such as:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Milestone 1: Complete onboarding process for funded proposal and setup administration to coordinate and execute the proposal</li>
              <li>Milestone 2: Event preparation and setup a communication hub to communicate with event collaborators and participants</li>
              <li>Milestone 3: Hosting the Ambassadors Event</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              We addressed all project KPIs, the execution of all Milestones via completing &amp; reporting the respectful Milestones
              accordingly
            </p>
          </div>

          <div className="glass-card p-8 mb-8 space-y-4">
            <h2 className="text-2xl font-semibold text-black">Key achievements</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-black">1. With the Proposal</strong>
            </p>
            <p className="text-gray-700 leading-relaxed">
              Main achievement is surely the fact that we actually completed the proposal, all its objectives and KPIs. The proposal
              helped a load to experiment and establish a new Ambassador Workshop format, a simple, effective and great initiative
              wich helps to improve and support the Cardano Ambassadors program as a fully community driven initiative, By Ambassadors
              - For Ambassadors.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-black">2. With Ambassadors</strong>
            </p>
            <p className="text-gray-700 leading-relaxed">
              Key achievements have been specially fruitful around the collaboration and coordination of the participating Cardano
              Ambassador in different roles from ideation to execution, whereby Ambassadors engaged at the earliest stage to help in
              making the event a success.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-black">3. With the Cardano Foundation</strong>
            </p>
            <p className="text-gray-700 leading-relaxed">
              The CF Community Team, especially Sebastian Aravena, Manager of the Ambassadors Program, was sticking closely to
              communicate and coordinate the event together with the Ambassadors and Sebastian provided a wealth of helpful support.
            </p>
          </div>

          <div className="glass-card p-8 mb-8 space-y-4">
            <h2 className="text-2xl font-semibold text-black">Key learnings</h2>
            <h3 className="text-xl font-semibold text-black">1. Major lessons &amp; learnings from the Project</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-3 leading-relaxed">
              <li>
                <strong className="text-black">Ambassador Proposals via Catalyst</strong>
                <p>
                  Ambassadors can ask funding for, the hosting of an in-person workshop over multiple days is definitely a currently
                  out-of-the-scope project which the Ambassadors budget wouldn't be able to cover. Having Project Catalyst as a place to
                  go where Ambassadors can bootstrap new initiatives is, indeed, quite effective. The proposal has been a success and
                  completed, the event was an awesome time for present folks and we now have what needed to address the Cardano Foundation
                  and to make the point of a validated concept of Ambassador Workshops which now needs their attention and eventual
                  resources for further roll outs.
                </p>
              </li>
            </ul>
            <h3 className="text-xl font-semibold text-black">2. Major lessons &amp; learnings from the Event</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-3 leading-relaxed">
              <li>
                <strong className="text-black">Less is more</strong>
                <p>
                  Having a relatively small group over a long time (13 ppl for 4 days) while off the grid is a perfect setup with little
                  noise and distraction around, allowing it to easily create a very familiar and intimate setup, the venue which was the
                  perfect place with the cosy setup, rooms, catering, fireplaces etc further helped to have a space which feels more like a
                  home than a hotel. Non-overscheduled days with enough chill time for ppl to really connect is another time proving that,
                  at times,  less-is-(indeed)-more.
                </p>
              </li>
              <li>
                <strong className="text-black">Ambassadors are awesome ppl</strong>
                <p>
                  We have loads of communities and groups within the Cardano Ecosystem, and the Cardano Ambassadors program is surely on
                  the communities with an insanely high quality of members, deeply rooted and committed folks, on the ground day in and
                  out, having a group of such ppl coming a first time together in real time was a blast, you can image the quality and
                  depth of conversations which took place, the connections which have been built.
                </p>
              </li>
              <li>
                <strong className="text-black">Keep it simple</strong>
                <p>
                  For organising the workshop and everything, not more than 1 - 2 ppl were necessary. Its not needed to have a whole “Team”
                  organising and hosting workshops. Organisation and administration can be kept as simple as possible, reducing overhead and
                  needed internal coordination.
                </p>
              </li>
            </ul>
          </div>

          <div className="glass-card p-8 mb-8 space-y-4">
            <h2 className="text-2xl font-semibold text-black">Next steps</h2>
            <p className="text-gray-700 leading-relaxed">
              Since this project was to bootstrap the event and to validate the concept, we now indeed continue conversations with the
              Cardano Foundation with the objective to align together with the CF to support further Ambassador Workshops in the future and
              to ensure that Ambassadors Workshops stay a close collaborational effort between the CF and the Cardano Ambassadors community.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Furthermore, we will continue to explore how this low-budget workshops can be funded most effectively, either through sources
              such as Project Catalyst, Intersect or directly via the Cardano Foundation
            </p>
          </div>

          <div className="glass-card p-8 mb-8 space-y-4">
            <h2 className="text-2xl font-semibold text-black">Final thoughts/comments</h2>
            <p className="text-gray-700 leading-relaxed">
              As already mentioned, this proposal was a great thing indeed to enable some resources to kick off new initiatives to support
              the Cardano Ambassadors as a community driven initiative.
            </p>
          </div>

          <div className="glass-card p-8 space-y-4">
            <h2 className="text-2xl font-semibold text-black">Links to other relevant project sources or documents.</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-gray-700 border-collapse">
                <tbody>
                  {[
                    ['Workshop Report', 'https://github.com/Technosophorso/ambassador-workshop/blob/main/catalyst-proposal/workshop-report.md'],
                    ['Workshop Playbook', 'https://github.com/Technosophorso/ambassador-workshop/blob/main/catalyst-proposal/playbook.md'],
                    ['Workshop Website', 'https://ambassador-workshop.netlify.app/'],
                    ['Proposal on Catalyst Platform', 'https://projectcatalyst.io/funds/13/cardano-open-ecosystem/cardano-ambassador-workshop-europe'],
                    ['Milestones on Catalyst Platform', 'https://milestones.projectcatalyst.io/projects/1300033'],
                    ['Proposal & Milestones on Github', 'https://github.com/Technosophorso/ambassador-workshop/tree/main/catalyst-proposal'],
                  ].map(([label, url]) => (
                    <tr key={label} className="border-b border-gray-200 last:border-b-0">
                      <th className="py-2 pr-4 font-semibold text-black align-top">{label}</th>
                      <td className="py-2">
                        <a
                          href={url}
                          className="text-dark-red underline break-words"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {url}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed font-semibold">Link to Close-out video - must be either YouTube or Vimeo link only</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

