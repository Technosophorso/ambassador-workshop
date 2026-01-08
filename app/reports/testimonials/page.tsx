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

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="py-16 bg-white flex-grow">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-12">
            {tabs.map((tab) => {
              const isActive = tab.href === '/reports/testimonials'
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

          <h1 className="text-4xl font-bold text-black mb-10">Testimonials</h1>

          <div className="space-y-6">
            <div className="glass-card p-8 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                The Cardano Ambassadors retreat was more than a workshop—it was a moment of connection and growth.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Meeting many of the ambassadors for the first time and learning together made the experience truly impactful. Grateful for the shared insights, collaboration, and vision for what&apos;s ahead.
              </p>
              <p className="text-black font-semibold">— Daniel</p>
            </div>

            <div className="glass-card p-8 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                The Cardano Ambassador Workshop in Berlin was a great chance to meet other ambassadors, share honest feedback, and align on what&apos;s next for the program. The conversations were open and practical. It is focused on improving how we work together and how we can better support the global community. I left feeling energized, connected, and excited for the next steps.
              </p>
              <p className="text-black font-semibold">— Andi</p>
            </div>

            <div className="glass-card p-8 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Nothing can replace meetups in person. The Ambassador workshop 2025 in Berlin was an absolute highlight with constructive conversations, fun networking with other like-minded Ambassadors in a uniquely inspiring venue with history aka temporal spaces. Collectively on-boarding the venue to Cardano completed the event.
              </p>
              <p className="text-black font-semibold">— Chris</p>
            </div>

            <div className="glass-card p-8 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                As Community member, former Ambassador and current admin of the Cardano Ambassador Program, I think that the IRL workshop we held in Berlin last year was a signal of the quality of the group we have leading the ecosystem forward. This diverse group engaged in very interesting conversations about how to grow adoption, improve governance and coordinate a global decentralised ecosystem. The workshops were divided into four days, two of them dedicated to social interactions and getting to know each other better, and the other two days were used to work on five different workstreams and sessions:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Discussions about DRep incentives.</li>
                <li>Presentation about MultiAssets Treasury.</li>
                <li>The future of the Ambassador Program.</li>
                <li>Onboarding the next wave of users.</li>
                <li>Community growth and coordinated communications.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                In these sessions, we shared opinions and created content in the form of documents, videos and boards to show the community the results and guides with recommendations to improve in these specific topics. Participation was good, including Ambassadors from all around the globe, even if the event was focused on Europe, connecting these workshops with the Cardano Summit in Berlin allowed many others to join the conversation. Also, the Community Team from CF was represented by two members to help funnel the better ideas to push them into mainstream tasks. Overall, a success with the future in mind to keep doing this IRL with the Community leaders.
              </p>
              <p className="text-black font-semibold">— Sebastian</p>
            </div>

            <div className="glass-card p-8 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                The Ambassador Workshop strengthened the bond between global Ambassadors and proved invaluable for defining the future scope of the program as well as joint initiatives. The collaboration sparked here has already brought new ideas to life that will undoubtedly bring lasting value to the entire ecosystem.
              </p>
              <p className="text-black font-semibold">— Josefine</p>
            </div>

            <div className="glass-card p-8 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                The Workshop indeed was a blast. Im glad that we had awesome members of the Ambassadors Community joining the event, making it a rich and worthy experience for everyone. Getting some of the most committed Cardano community members together in a fitting setup allowed us to share and connect relevant experiences and perspectives, insights and knowledge.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Also big shoutout to the members of the Cardano Foundation Community Team, who supported and joined the workshop, making sure that direct connections &amp; coordinations between ambassadors and the foundation conclude in strong collaborations.
              </p>
              <p className="text-black font-semibold">— Felix</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

