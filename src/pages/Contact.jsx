import React, {useState} from 'react'
import emailjs from 'emailjs-com'
import Reveal from '../components/Reveal'

export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', message:'', company:''})
  const [status, setStatus] = useState(null)

  const onChange = (e) => setForm({...form, [e.target.name]: e.target.value})

  const submitGoogle = async () => {
    const url = import.meta.env.VITE_GOOGLE_SCRIPT_URL
    if(!url) return false
    try{
      const res = await fetch(url, {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form)})
      return res.ok
    }catch(e){
      return false
    }
  }

  const submitEmailJS = async () => {
    const user = import.meta.env.VITE_EMAILJS_USER
    const service = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const template = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    if(!user || !service || !template) return false
    try{
      const templateParams = {from_name: form.name, from_email: form.email, message: form.message, company: form.company}
      await emailjs.send(service, template, templateParams, user)
      return true
    }catch(e){
      console.error('EmailJS error', e)
      return false
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    // Try Google Sheets endpoint first, then fallback to EmailJS
    const g = await submitGoogle()
    if(g){ setStatus('sent'); return }

    const em = await submitEmailJS()
    if(em){ setStatus('sent'); return }

    setStatus('failed')
  }

  return (
    <section id="contact" className="py-20">
      <Reveal>
        <h2 className="text-4xl font-black mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Contact — Get a quote</h2>
      </Reveal>
      <div className="grid md:grid-cols-2 gap-8">
        <Reveal delay={100}>
          <form onSubmit={onSubmit} className="card p-8 rounded-lg border border-slate-700/50">
            <label className="block mb-4">
              <div className="text-sm text-slate-300 font-medium">Name</div>
              <input name="name" required value={form.name} onChange={onChange} className="w-full mt-2 p-3 bg-slate-800 border border-slate-700 rounded-md text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition" />
            </label>
            <label className="block mb-4">
              <div className="text-sm text-slate-300 font-medium">Email</div>
              <input name="email" type="email" required value={form.email} onChange={onChange} className="w-full mt-2 p-3 bg-slate-800 border border-slate-700 rounded-md text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition" />
            </label>
            <label className="block mb-4">
              <div className="text-sm text-slate-300 font-medium">Company / Project</div>
              <input name="company" value={form.company} onChange={onChange} className="w-full mt-2 p-3 bg-slate-800 border border-slate-700 rounded-md text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition" />
            </label>
            <label className="block mb-6">
              <div className="text-sm text-slate-300 font-medium">Message</div>
              <textarea name="message" required value={form.message} onChange={onChange} className="w-full mt-2 p-3 bg-slate-800 border border-slate-700 rounded-md text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition h-32" />
            </label>
            <div className="flex items-center gap-4">
              <button type="submit" className="btn-primary">Send</button>
              <div className="text-sm text-slate-400">{status === 'sending' ? 'Sending…' : status === 'sent' ? '✓ Received!' : status === 'failed' ? '✗ Check config' : ''}</div>
            </div>
          </form>
        </Reveal>

        <Reveal delay={200}>
          <div className="card p-8 rounded-lg border border-slate-700/50">
            <h3 className="text-lg font-semibold text-slate-100 mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div>
                <div className="text-sm text-slate-400 mb-2">📧 Email</div>
                <a href="mailto:mys3solutions2025@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition font-medium">mys3solutions2025@gmail.com</a>
              </div>
              <div>
                <div className="text-sm text-slate-400 mb-2">📞 Phone</div>
                <a href="tel:+918380820541" className="text-cyan-400 hover:text-cyan-300 transition font-medium">+91 8380820541</a>
              </div>
              <div className="pt-4 border-t border-slate-700/50">
                <p className="text-slate-400 text-sm leading-relaxed">Fill the form on the left and we'll get back to you within 24 hours. Or reach us directly using the contact details above.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
