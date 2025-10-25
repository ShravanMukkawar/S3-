import React, {useState} from 'react'
import LogoQA from '../assets/Gemini_Generated_Image_g2od6hg2od6hg2od.png'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  return (
    <header className="backdrop-blur-xl bg-slate-950/40 border-b border-slate-800/50 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 hover:opacity-80 transition">
          <img src={LogoQA} alt="S3Solution" className="logo-mark w-12 h-12 md:w-14 md:h-14 rounded-md shadow-lg object-cover" />
          <div>
            <div className="text-slate-100 font-extrabold text-xl md:text-2xl">S3Solution</div>
            <div className="text-sm md:text-sm text-slate-400 -mt-1">Websites & Digital Products</div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6 text-slate-300 text-base md:text-lg">
          <a href="#home" className="hover:text-cyan-400 transition">Home</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="p-2 rounded-md text-slate-200 hover:bg-slate-800/40 focus:outline-none focus:ring-2 focus:ring-cyan-400">
            {!open ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div className={`md:hidden bg-slate-950/95 border-t border-slate-800/50 ${open ? 'block' : 'hidden'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 space-y-3">
          <a href="#home" onClick={() => setOpen(false)} className="block text-slate-100 font-medium">Home</a>
          <a href="#projects" onClick={() => setOpen(false)} className="block text-slate-100 font-medium">Projects</a>
          <a href="#contact" onClick={() => setOpen(false)} className="block text-slate-100 font-medium">Contact</a>
        </div>
      </div>
    </header>
  )
}
