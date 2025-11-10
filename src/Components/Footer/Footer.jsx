import React from 'react'

function Footer() {
  return (
    <div>
       <footer className="w-full  text-white mt-16 py-6 px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p>MASH MAGIC © {new Date().getFullYear()}</p>
            <p className="text-sm text-gray-300">Results may vary. Not a substitute for formal schooling.</p>
          </div>
          <div className="space-x-4 flex items-center text-xl">
            <a href="#" aria-label="LinkedIn">🔗</a>
            <a href="#" aria-label="Instagram">📸</a>
            <a href="#" aria-label="YouTube">▶️</a>
          </div>
        </footer>
    </div>
  )
}

export default Footer
