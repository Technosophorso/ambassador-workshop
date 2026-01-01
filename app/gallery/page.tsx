'use client'

import { useState } from 'react'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'

const pics = [
  'IMG_3243.JPG',
  'zIMG_3238.JPG',
  'Screenshot 2025-11-19 at 12.47.37.png',
  'Screenshot 2025-11-19 at 12.47.52.png',
  'Screenshot 2025-11-19 at 12.48.24.png',
  'Screenshot 2025-11-19 at 12.48.48.png',
  'Screenshot 2025-11-19 at 12.49.13.png',
  'Screenshot 2025-11-19 at 12.49.25.png',
  'Screenshot 2025-11-19 at 12.50.47.png',
  'Screenshot 2025-11-19 at 12.51.14.png',
  'Screenshot 2025-11-19 at 12.51.40.png',
  'Screenshot 2025-11-19 at 12.51.52.png',
  'Screenshot 2025-11-19 at 12.52.04.png',
  'Screenshot 2025-11-19 at 12.52.28.png',
  'Screenshot 2025-11-19 at 12.52.40.png',
  'Screenshot 2025-11-19 at 12.53.09.png',
]

export default function Gallery() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null)

  const closePhoto = () => setActiveIdx(null)

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />
      <main className="py-16 bg-black flex-grow">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="berlin-heading text-4xl mb-8 text-white">Gallery</h1>
          
          <div className="berlin-card p-8 mb-12">
            <p className="berlin-body text-lg leading-relaxed">
              Scenes from our workshop venue near Berlin.
            </p>
          </div>

          <section>
            <div className="masonry-grid">
              {pics.map((file, idx) => (
                <button
                  key={file + idx}
                  className="berlin-card p-2 w-full text-left cursor-pointer"
                  onClick={() => setActiveIdx(idx)}
                >
                  <div className="relative w-full overflow-hidden">
                    <Image
                      src={`/pics/${file}`}
                      alt={file.replace(/[-_]/g, ' ')}
                      width={1200}
                      height={800}
                      className="w-full h-auto object-cover"
                      priority={idx < 4}
                    />
                  </div>
                </button>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />

      {activeIdx !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closePhoto}
        >
          <div
            className="relative max-w-5xl w-full bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closePhoto}
              className="absolute -top-4 -right-4 bg-white text-black border-2 border-black px-3 py-2 font-bold"
              aria-label="Close enlarged photo"
            >
              ×
            </button>
            <img
              src={`/pics/${pics[activeIdx]}`}
              alt={pics[activeIdx].replace(/[-_]/g, ' ')}
              className="w-full h-full object-contain max-h-[80vh] bg-black"
            />
          </div>
        </div>
      )}
    </div>
  )
}