'use client'

import Link from 'next/link'
import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const tabs = [
  { label: 'Overview', href: '/reports' },
  { label: 'Workshop Report', href: '/reports/workshop-report' },
  { label: 'Playbook', href: '/reports/playbook' },
  { label: 'Proposal', href: '/reports/proposal' },
]

function Checklist({ items }: { items: Array<string | JSX.Element> }) {
  const [checked, setChecked] = useState<boolean[]>(() => items.map(() => false))

  const toggle = (idx: number) =>
    setChecked((prev) => prev.map((v, i) => (i === idx ? !v : v)))

  return (
    <ul className="space-y-2 text-gray-700">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2">
          <button
            type="button"
            onClick={() => toggle(idx)}
            aria-pressed={checked[idx]}
            className={`mt-1 h-4 w-4 border-2 border-gray-400 flex items-center justify-center ${
              checked[idx] ? 'bg-dark-red border-dark-red' : 'bg-white'
            }`}
          >
            {checked[idx] && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="white"
                className="h-3 w-3"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 5.29a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3.25-3.25a1 1 0 111.414-1.414L8.75 11.836l6.543-6.542a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function Playbook() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="py-16 bg-white flex-grow">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-12">
            {tabs.map((tab) => {
              const isActive = tab.href === '/reports/playbook'
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

          <h1 className="text-4xl font-bold text-black mb-6">Ambassador Workshop - Playbook</h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            A hopefully helpful playbook for setting up and hosting Ambassador Workshops. Emerged
            through the initial Ambassador Workshop concept bootstrapped in November 2025.
          </p>

          <div className="glass-card p-8 space-y-4 mb-10">
            <p className="text-gray-700 leading-relaxed">
              At first, a few recommendations for your Ambassador Workshop
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Keep the event organisers team as small as possible to avoid overhead for
                coordinations and administrative tasks. A Workshop can be easily organised by a
                single person
              </li>
              <li>
                Keep close coordinations and collaborations with the Cardano Foundation to ensure
                that the CF can provide support and participate at the event.
              </li>
              <li>
                Keep the event roots and basic, no fancy setup needed, also helps to keep costs low
              </li>
              <li>
                Choose a venue location off the grid, away from city noise &amp; distractions, make
                it a space for ppl to calm down and relax.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Anyways, after all, its really up to you to decide what to take from our first
              Ambassador Workshop, and what you want to change or adjust. This playbook aims to be a
              guide which helps you setting up your event, not a rule book to which anyone has to
              adhere to.
            </p>
          </div>

          <section className="space-y-6 mb-12">
            <h2 className="text-2xl font-semibold text-black">1) Planning</h2>

            <div className="glass-card p-8 space-y-3">
              <h3 className="text-xl font-semibold text-black">1.1 Define the location</h3>
              <Checklist
                items={[
                  'Ensure the venue can host all attendees over the full timeframe of the workshop',
                  'Ensure the venue can provide catering',
                  'Ensure the venue has support materials for sessions (Beamer, Whiteboards, etc)',
                  'Ensure the venue is off the grid',
                  'Ensure easy access to the venue from airport/train stations',
                  'Ideally add travel guidance for attendees to easily find travel connections from airport to the venue',
                ]}
              />
            </div>

            <div className="glass-card p-8 space-y-3">
              <h3 className="text-xl font-semibold text-black">1.2 Define the exact time</h3>
              <Checklist items={['Ensure the first and last day of the workshop for check-in, checkout']} />
              <p className="text-gray-700 leading-relaxed">
                Note*<br />
                You can take following format, which worked quite well<br />
                Day 1 (Friday) - Arrival, check-in, Dinner at the evening<br />
                Day 2 (Saturday) - Workshop, Ambassador hosted sessions<br />
                Day 3 (Sunday) - Workshop, CF hosted sessions<br />
                Day 4 (Monday) - Departure, check-out, breakfast in the morning
              </p>
            </div>

            <div className="glass-card p-8 space-y-3">
              <h3 className="text-xl font-semibold text-black">1.3 Define the Agenda (Ambassadors &amp; CF)</h3>
              <Checklist
                items={[
                  'Ensure Attendees are able to sign up their own sessions, best to use a simple google form',
                  'Ensure CF attendees and let them host relevant sessions',
                ]}
              />
            </div>

            <div className="glass-card p-8 space-y-3">
              <h3 className="text-xl font-semibold text-black">1.4 Define the Signup</h3>
              <Checklist
                items={[
                  'An easy google-form where attendees can sign up and confirm attendance as well as submitting sessions they’d like to host at the event',
                ]}
              />
            </div>

            <div className="glass-card p-8 space-y-3">
              <h3 className="text-xl font-semibold text-black">1.5 Create Workshop website</h3>
              <p className="text-gray-700 leading-relaxed">Display all relevant information on the website such as</p>
              <Checklist items={['Dates & Times', 'Location', 'Attendees', 'Agenda']} />
              <p className="text-gray-700 leading-relaxed">
                Ideally host the website code on a public available github, making the repo open
                source is another nice thing to do:
              </p>
              <Checklist
                items={[
                  'Deploy your website code on a respective github',
                  'Open source the github repository on which you host the code',
                ]}
              />
              <p className="text-gray-700 leading-relaxed">
                Note*<br />
                You can use the Ambassador Workshop Europe website as example<br />
                <a
                  href="https://github.com/Technosophorso/ambassador-workshop/tree/main"
                  className="text-dark-red underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/Technosophorso/ambassador-workshop/tree/main
                </a>
              </p>
            </div>

            <div className="glass-card p-8 space-y-3">
              <h3 className="text-xl font-semibold text-black">1.6 Setup your payment channel</h3>
              <p className="text-gray-700 leading-relaxed">
                The venue will probably need to be paid in fiat, make sure to have a bank account
                from which you or your collaborators can send payments to the venue.
              </p>
              <Checklist items={['Setup payment channel']} />
            </div>
          </section>

          <section className="space-y-6 mb-12">
            <h2 className="text-2xl font-semibold text-black">2) Launch Sign up</h2>
            <div className="glass-card p-8 space-y-3">
              <Checklist
                items={[
                  'Use a dedicated channel on the Cardano Ambassadors Slack (Coordinate with CF for channel setup) from where Workshop organisers can coordinate with attendees',
                  'Publish and announce the Sign up via Slack and emails sent from official CF email to Ambassadors.',
                  'Prepare yourself to provide support for Visa requests from Ambassadors, therefore you can ask the venue beforehand to provide a support document which makes it easier for Ambassadors to apply for visa if needed',
                ]}
              />
              <p className="text-gray-700 leading-relaxed">
                With that, everything most important is done to get things setup.
              </p>
            </div>
          </section>

          <section className="space-y-6 mb-12">
            <h2 className="text-2xl font-semibold text-black">3) Run the Event</h2>
            <div className="glass-card p-8 space-y-3">
              <h3 className="text-xl font-semibold text-black">3.1 Prepare the arrival day</h3>
              <Checklist
                items={[
                  'Organisers should be present at the venue before attendees join to make sure organisers are familiar with the location and can help arriving attendees with the check in',
                  'If your venue is off the grid, make sure to have a driver & car available to emergency pick ups for Ambassadors who may have ended up taking wrong train/bus connections.',
                ]}
              />
            </div>

            <div className="glass-card p-8 space-y-3">
              <h3 className="text-xl font-semibold text-black">3.2 During the Workshop</h3>
              <Checklist
                items={[
                  'Make sure to take photos & videos from the event',
                  'Make sure to coordinate with venue for everything needed during the event',
                  'Times for breaks, catering, refreshments',
                  'Special equipments for sessions (beamer, whiteboards, adapter, etc)',
                  'Make sure your event responsibilities are carried out in the back to not distract anyone at session, can also say, you as organiser will have a busy as hell time so that everyone else should have a smooth & relaxing experience',
                ]}
              />
            </div>
          </section>

          <section className="space-y-6 mb-16">
            <h2 className="text-2xl font-semibold text-black">4) Post Event Task</h2>
            <div className="glass-card p-8 space-y-3">
              <Checklist
                items={[
                  'Coordinate footage, setup a shared folder to which attendees can upload photos or videos from the event',
                  'Create a report and summarise the event, best is to closely coordinate with CF, send them the draft and let them add/complement the report and receive feedback and suggestions for improvement before you publish the report',
                  <>
                    Update the website to display event photos on a{' '}
                    <a
                      href="https://ambassador-workshop.netlify.app/gallery/https://ambassador-workshop.netlify.app/gallery/v"
                      className="text-dark-red underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      gallery
                    </a>{' '}
                    and a{' '}
                    <a
                      href="https://ambassador-workshop.netlify.app/reports-outcomes/"
                      className="text-dark-red underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      reports
                    </a>{' '}
                    page to publish final reports
                  </>,
                  'Publish & share the reports at the Ambassadors Community as well as publicly on social media',
                ]}
              />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

