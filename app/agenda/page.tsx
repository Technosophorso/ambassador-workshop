'use client'

import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SessionCard from '../components/SessionCard'

type Day = 'day1' | 'day2' | 'day3' | 'day4'

export default function Agenda() {
  const [selectedDay, setSelectedDay] = useState<Day>('day1')

  // Hide scrollbar on this page only
  useEffect(() => {
    document.body.classList.add('no-scrollbar')
    return () => {
      document.body.classList.remove('no-scrollbar')
    }
  }, [])

  const days = [
    { id: 'day1', label: 'Day 1', subtitle: 'Friday - Arrival' },
    { id: 'day2', label: 'Day 2', subtitle: 'Saturday - Workshops' },
    { id: 'day3', label: 'Day 3', subtitle: 'Sunday - Workshops' },
    { id: 'day4', label: 'Day 4', subtitle: 'Monday - Departure' }
  ]

  const renderDay1 = () => (
    <div className="masonry-grid">
      <SessionCard 
        time="09:00 - 17:00"
        category="Keynote"
        title="Arrival"
        description="Ambassadors arriving at the venue, cosy & cool"
      />

      <SessionCard 
        time="17:00 - 19:00"
        category="Networking"
        title="Dinner"
        description="Ambassador Dinner at the venue"
      />
    </div>
  )

  const renderDay2 = () => (
    <div className="masonry-grid">
      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="time-badge text-sm px-3 py-1 rounded-full">08:00 - 10:00</span>
          <span className="text-sm text-gray-600">Foodies</span>
        </div>
        <h3 className="text-xl font-semibold text-black mb-2">Breakfast</h3>
        <div className="text-sm text-gray-600">
        </div>
      </div>

      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="time-badge text-sm px-3 py-1 rounded-full">10:30 - 12:30</span>
          <span className="text-sm text-gray-600">Workshop</span>
        </div>
        <h3 className="text-xl font-semibold text-black mb-2">Session #1 | Ambassadors Introduction </h3>
        <p className="text-gray-700 mb-3">Ambassadors presenting their Cardano Journey, their projects, their ideas and dreams.</p>
        <div className="text-sm text-gray-600">
          <p>Speaker: Everyone</p>
        </div>
      </div>

      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="time-badge text-sm px-3 py-1 rounded-full">13:00 - 14:00</span>
          <span className="text-sm text-gray-600">Workshop</span>
        </div>
        <h3 className="text-xl font-semibold text-black mb-2">Session #2 | DRep incentives</h3>
        <p className="text-gray-700 mb-3">DReps play an essential role in Cardano and it's success, we will dive into if, why and how DReps should be incentivized in Cardanos Governance model</p>
        <div className="text-sm text-gray-600">
          <p>Speaker: Simon</p>
        </div>
      </div>

      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="time-badge text-sm px-3 py-1 rounded-full">14:00 - 15:00</span>
          <span className="text-sm text-gray-600">Foodies</span>
        </div>
        <h3 className="text-xl font-semibold text-black mb-2">Lunch</h3>
        <div className="text-sm text-gray-600">
        </div>
      </div>

      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="time-badge text-sm px-3 py-1 rounded-full">15:00 - 16:00</span>
          <span className="text-sm text-gray-600">Chill & Connect</span>
        </div>
        <h3 className="text-xl font-semibold text-black mb-2">Chill & Connect</h3>
        <div className="text-sm text-gray-600">
        </div>
      </div>

      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="time-badge text-sm px-3 py-1 rounded-full">16:00 - 17:30</span>
          <span className="text-sm text-gray-600">Workshop</span>
        </div>
        <h3 className="text-xl font-semibold text-black mb-2">Session #3 | Cardano Multi Assets Treasury (CMAT)</h3>
        <p className="text-gray-700 mb-3">What if the Cardano Treasury would not only hold Ada ? Join us and find out. A  workshop where we discuss and ideate on a Cardano Multi Asset Treasury</p>
        <div className="text-sm text-gray-600">
          <p>Hinson Wong & Felix Weber</p>
        </div>
      </div>

      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="time-badge text-sm px-3 py-1 rounded-full">18:00 - 19:00</span>
          <span className="text-sm text-gray-600">Foodies</span>
        </div>
        <h3 className="text-xl font-semibold text-black mb-2">Dinner</h3>
        <div className="text-sm text-gray-600">
        </div>
      </div>
    </div>
  )

  const renderDay3 = () => (
    <div className="masonry-grid">
      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="time-badge text-sm px-3 py-1 rounded-full">08:00 - 10:00</span>
          <span className="text-sm text-gray-600">Foodies</span>
        </div>
        <h3 className="text-xl font-semibold text-black mb-2">Breakfast</h3>
        <div className="text-sm text-gray-600">
        </div>
      </div>

      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="time-badge text-sm px-3 py-1 rounded-full">10:30 - 12:30</span>
          <span className="text-sm text-gray-600">Workshop</span>
        </div>
        <h3 className="text-xl font-semibold text-black mb-2">Session #4 | Cardano Ambassador Program - The future</h3>
        <p className="text-gray-700 mb-3">Explore what’s next for the Cardano Ambassador Program as it evolves beyond Phase 4 into its future iterations. This session looks at how the program is redefining community impact through new governance models, innovative reward systems, and stronger collaboration tools. Together, we’ll discuss how ambassadors continue to shape Cardano’s global mission, building a resilient, connected, and future ready ecosystem. </p>
        <div className="text-sm text-gray-600">
          <p>Speaker: CF Team</p>
        </div>
      </div>

      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="time-badge text-sm px-3 py-1 rounded-full">13:00 - 14:00</span>
          <span className="text-sm text-gray-600">Workshop</span>
        </div>
        <h3 className="text-xl font-semibold text-black mb-2">Session #5 | Onboarding the Next Wave: Building Communities and Driving On-Chain Transactions</h3>
        <p className="text-gray-700 mb-3">This session explores how to onboard new individuals, communities, and enterprises into the Cardano ecosystem while boosting real on-chain activity. We’ll discuss strategies for amplifying community growth, engaging new users, and supporting organizations to adopt Cardano for real-world use cases. Together, we’ll look at how coordinated education, incentives, and partnerships can turn participation into measurable on-chain impact. </p>
        <div className="text-sm text-gray-600">
          <p>Speaker: CF Team</p>
        </div>
      </div>

      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="time-badge text-sm px-3 py-1 rounded-full">14:00 - 15:00</span>
          <span className="text-sm text-gray-600">Foodies</span>
        </div>
        <h3 className="text-xl font-semibold text-black mb-2">Lunch</h3>
        <div className="text-sm text-gray-600">
        </div>
      </div>

      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="time-badge text-sm px-3 py-1 rounded-full">15:00 - 16:00</span>
          <span className="text-sm text-gray-600">Chill & Connect</span>
        </div>
        <h3 className="text-xl font-semibold text-black mb-2">Chill & Connect</h3>
        <div className="text-sm text-gray-600">
        </div>
      </div>

      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="time-badge text-sm px-3 py-1 rounded-full">16:00 - 17:30</span>
          <span className="text-sm text-gray-600">Workshop</span>
        </div>
        <h3 className="text-xl font-semibold text-black mb-2">Session #6 | Onboarding Locals </h3>
        <p className="text-gray-700 mb-3">What Ambassadors would we be if we wouldnt onboard the Venue Owners and locals to Cardano ? A session where we will introduce locals to the Cardano Blockchain ecosystem</p>
        <div className="text-sm text-gray-600">
          <p>Speaker: Present Ambassadors</p>
        </div>
      </div>

      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="time-badge text-sm px-3 py-1 rounded-full">18:00 - 19:00</span>
          <span className="text-sm text-gray-600">Foodies</span>
        </div>
        <h3 className="text-xl font-semibold text-black mb-2">Dinner</h3>
        <div className="text-sm text-gray-600">
        </div>
      </div>
    </div>
  )

  const renderDay4 = () => (
    <div className="masonry-grid">
      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="time-badge text-sm px-3 py-1 rounded-full">08:00 - 10:00</span>
          <span className="text-sm text-gray-600">Foodies</span>
        </div>
        <h3 className="text-xl font-semibold text-black mb-2">Breakfast</h3>
        <div className="text-sm text-gray-600">
        </div>
      </div>

      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="time-badge text-sm px-3 py-1 rounded-full">10:00 - 12:00</span>
          <span className="text-sm text-gray-600">Wrap Up</span>
        </div>
        <h3 className="text-xl font-semibold text-black mb-2">Recap & Wrap up</h3>
        <p className="text-gray-700 mb-3">Wrapping up the workshop and sharing reflections</p>
        <div className="text-sm text-gray-600">
          <p>Host: Everyone</p>
        </div>
      </div>

      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="time-badge text-sm px-3 py-1 rounded-full">12:00</span>
          <span className="text-sm text-gray-600">Closure</span>
        </div>
        <h3 className="text-xl font-semibold text-black mb-2">Closing & Farewell</h3>
        <p className="text-gray-700 mb-3">Final words, and check out. Everyone leaving and heading over to Berlin for the Summit. See you there again everyone </p>
        <div className="text-sm text-gray-600">
        </div>
      </div>
    </div>
  )

  const renderSelectedDay = () => {
    switch (selectedDay) {
      case 'day1':
        return renderDay1()
      case 'day2':
        return renderDay2()
      case 'day3':
        return renderDay3()
      case 'day4':
        return renderDay4()
      default:
        return renderDay1()
    }
  }

  const getCurrentDayInfo = () => {
    const dayInfo = days.find(day => day.id === selectedDay)
    return dayInfo || days[0]
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="py-16 bg-white flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Workshop Agenda</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              The Agenda will be defined by Ambassadors who will be invited to submit their own workshop topics which they want to host as speakers and presenters.
              The exact agenda will be announced in due time.
            </p>
          </div>

          {/* Day Selection Menu */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {days.map((day) => (
                <button
                  key={day.id}
                  onClick={() => setSelectedDay(day.id as Day)}
                  className={`flex items-center rounded-xl font-medium transition-all duration-300 overflow-hidden transform hover:scale-105 ${
                    selectedDay === day.id
                      ? 'shadow-xl shadow-black/25 ring-2 ring-black/20'
                      : 'shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/25'
                  }`}
                  style={{
                    boxShadow: selectedDay === day.id 
                      ? '0 10px 25px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                      : '0 6px 20px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  }}
                >
                  {/* Day Number Section */}
                  <div 
                    className="px-3 py-2 text-white transition-all duration-300 relative"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.85) 50%, rgba(0, 0, 0, 0.95) 100%)',
                      boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.2)'
                    }}
                  >
                    <div className="text-sm font-bold">{day.label}</div>
                  </div>
                  
                  {/* Title Section */}
                  <div 
                    className={`px-4 py-2 transition-all duration-300 relative ${
                      selectedDay === day.id
                        ? 'text-dark-red border-l border-dark-red/20'
                        : 'text-black border-l border-gray-200'
                    }`}
                    style={{
                      background: selectedDay === day.id 
                        ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 50%, rgba(255, 255, 255, 0.95) 100%)'
                        : 'linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.75) 50%, rgba(255, 255, 255, 0.85) 100%)',
                      boxShadow: selectedDay === day.id 
                        ? 'inset 0 1px 0 rgba(255, 255, 255, 0.5), inset 0 -1px 0 rgba(0, 0, 0, 0.1)'
                        : 'inset 0 1px 0 rgba(255, 255, 255, 0.5), inset 0 -1px 0 rgba(0, 0, 0, 0.05)'
                    }}
                  >
                    <div className="text-sm font-semibold whitespace-nowrap">
                      {day.subtitle.split(' - ')[1]}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Selected Day Content */}
          <section className="mb-16">
            <div className="min-h-[800px] transition-all duration-300 flex items-start">
              <div className="w-full">
                {renderSelectedDay()}
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
} 