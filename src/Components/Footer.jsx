import React from 'react'

function Footer() {
  return (
    <div>
       <footer className="w-full  text-black mt-16 py-6 px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p>MASH MAGIC © {new Date().getFullYear()}</p>
            <p className="text-sm text-black">Results may vary. Not a substitute for formal schooling.</p>
          </div>
        </footer>
    </div>
  )
}

export default Footer
