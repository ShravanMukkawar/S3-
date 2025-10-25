import React from 'react'

export default function ProjectCard({title, description, tech, url, image}){
  return (
    <article className="card rounded-xl overflow-hidden flex flex-col justify-between hover:shadow-2xl transition-all transform hover:-translate-y-2">
      {image && (
        <div className="h-48 md:h-56 bg-gradient-to-br from-slate-700 to-slate-900 overflow-hidden relative">
          <img src={image} alt={title} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition duration-300" onError={(e) => {e.target.style.display='none'}} />
        </div>
      )}
      <div className="p-6 flex-1">
  <h3 className="text-lg md:text-xl font-semibold mb-2 text-slate-100">{title}</h3>
        <p className="text-slate-400 mb-4 leading-relaxed">{description}</p>
      </div>
      <div className="px-6 pb-6 flex items-center justify-between border-t border-slate-700/50 pt-4">
        <div className="text-xs text-slate-500 font-mono">{tech}</div>
        <a href={url} target="_blank" rel="noreferrer" className="text-cyan-400 font-medium hover:text-cyan-300 transition">View →</a>
      </div>
    </article>
  )
}
