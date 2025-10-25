import React from 'react'

export default function Footer(){
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-slate-950/50 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Info */}
          <div>
            <h4 className="text-slate-100 font-bold mb-2">S3Solution</h4>
            <p className="text-slate-400 text-sm">Building modern websites and digital products for your business.</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-slate-100 font-bold mb-4">Contact</h4>
            <div className="space-y-2">
              <div className="text-sm">
                <div className="text-slate-400">Email:</div>
                <a href="mailto:mukkawarshravan04@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition">mukkawarshravan04@gmail.com</a>
              </div>
              <div className="text-sm">
                <div className="text-slate-400">Phone:</div>
                <a href="tel:+918380820541" className="text-cyan-400 hover:text-cyan-300 transition">+91 8380820541</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-100 font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-slate-400 hover:text-cyan-400 transition">Home</a></li>
              <li><a href="#projects" className="text-slate-400 hover:text-cyan-400 transition">Our Works</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-cyan-400 transition">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800/50 pt-8">
          <div className="text-center text-slate-500 text-sm">
            <p>© {currentYear} S3Solution. All rights reserved.</p>
            <p className="mt-2">Crafted with precision • Delivered with excellence</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
