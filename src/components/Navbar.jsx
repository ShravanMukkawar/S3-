import React from 'react'
import LogoQA from '../assets/logo-qa.svg'

export default function Navbar(){
  return (
    <header className="backdrop-blur-xl bg-slate-950/40 border-b border-slate-800/50 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 hover:opacity-80 transition">
          <img src={LogoQA} alt="S3Solution" className="logo-mark rounded-md shadow-lg" />
          <div>
            <div className="text-slate-100 font-extrabold">S3Solution</div>
            <div className="text-xs text-slate-400 -mt-1">Websites & Digital Products</div>
          </div>
        </a>

        <nav className="space-x-6 text-slate-300">
          <a href="#home" className="hover:text-cyan-400 transition">Home</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </nav>
      </div>
    </header>
  )
}
