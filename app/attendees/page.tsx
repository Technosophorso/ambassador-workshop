import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'

export default function Attendees() {
  const ambassadors = [
    { handle: 'Andreas', url: 'https://x.com/andreassosilo' },
    { handle: 'Chris', url: 'https://x.com/Straightpool4' },
    { handle: 'Christian', url: 'https://x.com/CrisRo0787' },
    { handle: 'Daniel', url: 'https://x.com/ddlezu' },
    { handle: 'Felix', url: 'https://x.com/meshsdk' },
    { handle: 'Hinson', url: 'https://x.com/HinsonSIDAN' },
    { handle: 'Jenny', url: 'https://x.com/Jennycitalinda' },
    { handle: 'Loyd', url: 'https://x.com/radioastro' },
    { handle: 'Mike', url: 'https://x.com/Hornan7' },
    { handle: 'Simon', url: 'https://x.com/Seomon4u' },
    { handle: 'Stephanie', url: 'https://x.com/Lido_Phuffy' },
  ]

  const cardanoFoundation: { handle: string; url: string }[] = [
    { handle: 'Sebastian', url: 'https://x.com/indi_gital' },
    { handle: 'Josefine', url: 'https://x.com/Josi_sndnc' }
  ]

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="py-16 bg-white flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
            <h1 className="berlin-heading text-4xl md:text-5xl mb-4 !text-black">
              Workshop Attendees
            </h1>
            <div className="mt-6 mb-8">
              <p className="berlin-mono text-sm !text-gray-600 italic">
                *Sign up open and in progress, listing confirmed attendees as they sign up
              </p>
            </div>
            </div>

          {/* Ambassadors Section */}
          <div className="mb-16">
            <h2 className="berlin-heading text-3xl md:text-4xl mb-8 !text-black text-center">
              Ambassadors
            </h2>
            <div className="berlin-grid">
              {ambassadors.map((ambassador, index) => (
                <a
                  key={index}
                  href={ambassador.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="berlin-card p-6 text-center group cursor-pointer transition-all duration-300 hover:scale-105"
                >
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-black border-2 border-black flex items-center justify-center mx-auto mb-4 group-hover:bg-white group-hover:border-black transition-all duration-300">
                      <svg className="w-8 h-8 text-white group-hover:text-black transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="berlin-mono text-xl mb-2 text-black group-hover:text-black transition-all duration-300">
                    {ambassador.handle}
                  </h3>
                                  <p className="berlin-body text-gray-600 text-sm">
                  CARDANO AMBASSADOR
                </p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="berlin-mono text-xs text-black border border-black px-2 py-1">
                    VISIT PROFILE →
                  </span>
                </div>
                {/* Ambassador Logo */}
                <div className="absolute bottom-3 left-3">
                  <Image
                    src="/Ambassadors Logo Black.png"
                    alt="Ambassador Logo"
                    width={80}
                    height={80}
                    className="opacity-30 group-hover:opacity-60 transition-opacity duration-300"
                  />
                </div>
                </a>
              ))}
            </div>
          </div>

          {/* Cardano Foundation Section */}
          <div className="mb-16">
            <h2 className="berlin-heading text-3xl md:text-4xl mb-8 !text-black text-center">
              Cardano Foundation
            </h2>
            <div className="berlin-grid">
              {cardanoFoundation.length > 0 ? (
                cardanoFoundation.map((member, index) => (
                  <a
                    key={index}
                    href={member.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="berlin-card p-6 text-center group cursor-pointer transition-all duration-300 hover:scale-105"
                  >
                    <div className="mb-4">
                      <div className="w-16 h-16 bg-black border-2 border-black flex items-center justify-center mx-auto mb-4 group-hover:bg-white group-hover:border-black transition-all duration-300">
                        <svg className="w-8 h-8 text-white group-hover:text-black transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </div>
                    </div>
                    <h3 className="berlin-mono text-xl mb-2 text-black group-hover:text-black transition-all duration-300">
                      {member.handle}
                    </h3>
                    <p className="berlin-body text-gray-600 text-sm">
                      CARDANO FOUNDATION
                    </p>
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="berlin-mono text-xs text-black border border-black px-2 py-1">
                        VISIT PROFILE →
                      </span>
                    </div>
                    {/* Cardano Foundation Logo */}
                    <div className="absolute bottom-3 left-3">
                      <Image
                        src="/cardano-logo.svg"
                        alt="Cardano Foundation Logo"
                        width={80}
                        height={22}
                        className="opacity-30 group-hover:opacity-60 transition-opacity duration-300"
                      />
                    </div>
                  </a>
                ))
              ) : (
                <div className="berlin-card p-8 text-center col-span-full">
                  <p className="berlin-body text-gray-600">
                    Cardano Foundation attendees will be announced soon.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 