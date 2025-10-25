import React, {useRef, useEffect, useState} from 'react'

export default function Reveal({children, className = '', delay = 0}){
  const ref = useRef()
  const [visible, setVisible] = useState(false)

  useEffect(()=>{
    const el = ref.current
    if(!el) return
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          setTimeout(()=> setVisible(true), delay)
          obs.unobserve(el)
        }
      })
    },{threshold:0.1})
    obs.observe(el)
    return ()=> obs.disconnect()
  },[delay])

  return (
    <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`}>
      {children}
    </div>
  )
}
