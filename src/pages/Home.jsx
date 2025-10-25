import React from 'react'
import Reveal from '../components/Reveal'

export default function Home(){
  return (
    <section id="home" className="py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <Reveal delay={100}>
          <div>
            <h1 className="text-3xl md:text-5xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">We build modern websites for your business</h1>
            <p className="text-slate-300 mb-8 text-base md:text-lg leading-relaxed">We design and develop fast, accessible, and SEO-friendly websites for restaurants, clinics, villas and more. Production-ready solutions with booking flows, online menus, admin dashboards, and more.</p>
            <a href="#contact" className="btn-primary">Get a quote</a>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="card p-8 rounded-lg border border-slate-700/50">
            <ul className="space-y-4 text-slate-200">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold mt-1">✓</span>
                <span>Custom design & branding</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold mt-1">✓</span>
                <span>Responsive & high-performance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold mt-1">✓</span>
                <span>CMS & admin dashboards</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold mt-1">✓</span>
                <span>E-commerce & marketplaces</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold mt-1">✓</span>
                <span>Hosting & maintenance</span>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
