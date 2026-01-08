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

export default function WorkshopReport() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="py-16 bg-white flex-grow">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-12">
            {tabs.map((tab) => {
              const isActive = tab.href === '/reports/workshop-report'
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

          <h1 className="text-4xl font-bold text-black mb-6">
            Cardano Ambassadors Workshop Europe - Report
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-10">
            This report summarises and reflects on the very first Ambassador only workshop, hosted
            by Cardano Ambassadors in November 7-10, 2025 in Drahnsdorf near Berlin, Germany.
          </p>

          <div className="space-y-6 mb-10">
            <p className="text-gray-700 leading-relaxed">
              The Workshop had a simple goal: To bring Cardano Ambassadors together. And while doing
              that, to make sure that Ambassadors are able to meet and connect, to build up strong
              bonds with each other, to share knowledge and experience, to discuss ecosystem critical
              topics and, most importantly, to coordinate and synchronise individual efforts towards
              a collective goal, to make Cardano grow and mature on all its layers.
            </p>
          </div>

          <section className="space-y-6 mb-12">
            <h2 className="text-2xl font-semibold text-black">1) Setup</h2>
            <div className="glass-card p-8 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                The Ambassadors community is a small, yet highly committed group of independent
                contributors, builders, educators and much more at the Cardano Ecosystem. The
                workshop therefore was designed for a small number of people. While the initial idea
                was to host a workshop to invite Ambassadors in Europe, we changed the scope and
                opened up to any Ambassadors which also attend the Cardano Summit 2025 in Berlin.
                This decision set the criteria for the first important thing to manage, the workshop
                venue which had to be:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Able to host a group of max 25 people over a timeframe of 4 days</li>
                <li>Able to provide catering</li>
                <li>Ideally positioned not far from Berlin, yet off the grid</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Initial research let us stumble over a promising location, a first online meeting
                with the venue owners showed a great match and the location was quickly after
                confirmed together with the exact dates.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Now, since the date and location was set, we published an easy{' '}
                <a
                  href="https://ambassador-workshop.netlify.app/"
                  className="text-dark-red underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  website
                </a>{' '}
                for the workshop where we displayed all needed info to get Ambassadors signing up
                and to plan their travel &amp; trips.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Sign ups came in briefly after, one major setback was for a few ambassadors who
                struggled with visa administration and couldn't join due to visa request rejections.
                However, we ended up with a solid number of signups to bootstrap the first
                Ambassadors workshop, two members of the Cardano Foundation joining the workshop
                completed the initial{' '}
                <a
                  href="https://ambassador-workshop.netlify.app/attendees/"
                  className="text-dark-red underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  attendees
                </a>{' '}
                setup.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Next up, was to invite Ambassadors not only to join, but also to sign up their own
                sessions to present and discuss topics and projects. The First day of the two
                workshop session days was reserved for Cardano Ambassador sessions, the second day
                was reserved for the Cardano Foundation to host sessions with ambassadors to discuss
                the overall project as well for the venue owners which presented their project and
                history. With that, the{' '}
                <a
                  href="https://ambassador-workshop.netlify.app/agenda/"
                  className="text-dark-red underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  agenda
                </a>{' '}
                was set and ready to go.
              </p>
              <p className="text-gray-700 leading-relaxed">
                And with that, the setup was very much completed, location, time, attendees and
                agenda has been set. Next up, run the whole thing.
              </p>
            </div>
          </section>

          <section className="space-y-6 mb-12">
            <h2 className="text-2xl font-semibold text-black">2) Roll Out</h2>

            <div className="glass-card p-8 space-y-4">
              <h3 className="text-xl font-semibold text-black">Day 1.</h3>
              <p className="text-gray-700 leading-relaxed">
                As initially planned, the first day (Nov 7, 2025) was mainly check-in for all
                attendees at the workshop venue and closing the day with Lunch in the evening. The
                cosy and roots style of the venue allowed us to quickly have a cool and familiar
                setup and atmosphere, more like old friends coming together than a crypto conference
                style, which was an important objective of the workshop.
              </p>
            </div>

            <div className="glass-card p-8 space-y-4">
              <h3 className="text-xl font-semibold text-black">Day 2.</h3>
              <p className="text-gray-700 leading-relaxed">
                On the second day of the workshop, the first sessions took place where Cardano
                Ambassadors hosted sessions on 3 topics, before that yet, breakfast was served to
                fil everyone's belly and get everyone ready for the day. After breakfast, sessions
                started
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>
                  <span className="font-semibold text-black">Introductions</span>
                  <br />
                  Making the round and allowing each attendee to present themself, their work and
                  builder journey on Cardano. Many of us know each other already for years, yet we
                  also had a few newly appointed Ambassadors with us and giving an intro to everyone
                  was a great deal in making folks more familiar with each other.
                </li>
                <li>
                  <span className="font-semibold text-black">DRep incentives</span>
                  <br />
                  Hosted by Simon, a session where Ambassadors discussed current challenges at
                  Cardano Onchain Governance, especially around the incentivisation of DRep’s
                  (Delegated Representatives), a key role within the Cardano Governance system.
                </li>
                <li>
                  <span className="font-semibold text-black">Cardano Multi Asset Treasury (CMAT)</span>
                  <br />
                  Hosted by Hinson &amp; Felix, a session which once more addressed onchain
                  governance, precisely the topic around the possibilities of a Cardano Multi Asset
                  treasury which could allow the ecosystem to not only hold Ada in its decentralised
                  onchain Treasury.
                </li>
              </ol>
              <p className="text-gray-700 leading-relaxed">
                All sessions went smooth like butter and due to having awesome folks present, a lot
                of high quality thought, perspectives, feedback and ideas have been shared.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dinner and Lunch, coffee &amp; drinks during the day to keep everyone on energy and
                lots of side line coffee talks, chess rounds in breaks and deep chats during the day
                took place.
              </p>
            </div>

            <div className="glass-card p-8 space-y-4">
              <h3 className="text-xl font-semibold text-black">Day 3.</h3>
              <p className="text-gray-700 leading-relaxed">
                The third day followed the same pattern as day 2. Breakfast -&gt; Sessions very
                much, yet the topics surely changed. Day 2 was dedicated to two sessions by the
                Cardano Foundation and a final session by the venue owners.
              </p>
              <p className="text-gray-700 leading-relaxed">The Cardano Foundation session, were:</p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>
                  <span className="font-semibold text-black">Cardano Ambassador program - The Future</span>
                  <br />
                  A session hosted by Sebastian Aravena, the Ambassadors Program manager. Sebastian
                  gave a intro on the past and current situation of the program, followed by his
                  roadmap, vision and ideas towards the next Cardano Ambassador version, a ever
                  evolving program since 2019.
                </li>
                <li>
                  <span className="font-semibold text-black">
                    Onboarding the Next Wave: Building Communities and Driving On-Chain Transactions
                  </span>
                  <br />
                  Hosted by Josefine Birkigt from the Cardano Foundation Community Team which opened
                  a session on building Communities around the globe with new objectives and ideas
                  how Ambassadors can further help strengthen and support the Cardano community and
                  ecosystem.
                </li>
              </ol>
              <p className="text-gray-700 leading-relaxed">
                After these Sessions, and dinner passed, we opened the floor to the venue owners
                which shared the history and context of the venue as well as presenting future ideas
                on how to connect more effectively to the web and blockchain economies and
                communities. As a result, the workshop venue got heavily interested in Cardano,
                accepted to receive part of the payments in Ada, opened a wallet and at the same
                evening, received first tips from Ambassadors to the new venue wallet.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Bonfire and barbecue in the evening outside, wine and beer, some smokes and a holy
                load of great conversations finished the day, some still in deep discussions until
                3am in the morning ^^.
              </p>
            </div>

            <div className="glass-card p-8 space-y-4">
              <h3 className="text-xl font-semibold text-black">Day 4.</h3>
              <p className="text-gray-700 leading-relaxed">
                The last day of the workshop was pretty simple and mainly all around check out and
                getting everyone together to travel to Berlin to the Cardano Summit which will start
                the next day. Most of the Ambassadors went as group to the villages train station and
                from there in the same train to Berlin where we then separated and everyone checking
                in at their hotels.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Everything went smooth and fine, and indeed, a success in bootstrapping the format
                for Cardano Ambassador Workshops. The concept has been developed and proved, now
                ready to be wrapped into a blueprint so that other ambassadors can easily repeat and
                adapt the format to follow up Cardano Ambassador Workshops around the globe.
              </p>
            </div>
          </section>

          <section className="space-y-4 mb-12">
            <h2 className="text-2xl font-semibold text-black">3) Reflections</h2>
            <div className="glass-card p-8 space-y-4">
              <div>
                <h3 className="font-semibold text-black mb-1">1. Less is more</h3>
                <p className="text-gray-700 leading-relaxed">
                  Having a relatively small group over a long time (13 ppl for 4 days) while off the
                  grid is a perfect setup with little noise and distraction around, allowing it to
                  easily create a very familiar and intimate setup, the venue which was the perfect
                  place with the cosy setup, rooms, catering, fireplaces etc further helped to have a
                  space which feels more like a home than a hotel. Non-overscheduled days with
                  enough chill time for ppl to really connect is another time proving that, at times,
                  less-is-(indeed)-more.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-black mb-1">2. Ambassadors are awesome ppl</h3>
                <p className="text-gray-700 leading-relaxed">
                  We have loads of communities and groups within the Cardano Ecosystem, and the
                  Cardano Ambassadors program is surely on the communities with an insanely high
                  quality of members, deeply rooted and committed folks, on the ground day in and
                  out, having a group of such ppl coming a first time together in real time was a
                  blast, you can image the quality and depth of conversations which took place, the
                  connections which have been built.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-black mb-1">3. Keep it simple</h3>
                <p className="text-gray-700 leading-relaxed">
                  For organising the workshop and everything, not more than 1 - 2 ppl were
                  necessary. Its not needed to have a whole “Team” organising and hosting workshops.
                  Organisation and administration can be kept as simple as possible, reducing
                  overhead and needed internal coordination.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4 mb-16">
            <h2 className="text-2xl font-semibold text-black">4) What’s Next ?</h2>
            <div className="glass-card p-8 space-y-3">
              <p className="text-gray-700 leading-relaxed">
                Since this project was to bootstrap the event and to validate the concept, we now
                indeed continue conversations with the Cardano Foundation with the objective to align
                together with the CF to support further Ambassador Workshops in the future and to
                ensure that Ambassadors Workshops stay a close collaborational effort between the CF
                and the Cardano Ambassadors community.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Furthermore, we will continue to explore how this low-budget workshops can be funded
                most effectively, either through sources such as Project Catalyst, Intersect or
                directly via the Cardano Foundation
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

