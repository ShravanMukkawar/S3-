import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 flex flex-col">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-12 flex-grow">
        <Home />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
