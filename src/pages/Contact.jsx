import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`${API}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Gagal mengirim pesan')
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus(err.message)
    }
  }

  return (
    <div className="bg-white">
      <Navbar />
      <main className="pt-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900">Kontak</h1>
        <p className="mt-2 text-slate-600">Hubungi pengelola portal. Kami siap berkolaborasi.</p>

        <form onSubmit={submit} className="mt-8 grid gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700">Nama</label>
            <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Pesan</label>
            <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required rows="5" className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600" />
          </div>
          <button type="submit" className="inline-flex px-5 py-3 rounded-md bg-green-600 text-white hover:bg-green-700">Kirim Pesan</button>
          {status === 'loading' && <p className="text-slate-600">Mengirim...</p>}
          {status === 'success' && <p className="text-green-700">Pesan terkirim! Terima kasih 🙌</p>}
          {status && status !== 'loading' && status !== 'success' && <p className="text-red-600">{status}</p>}
        </form>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <p className="text-sm text-slate-600">Alamat</p>
            <p className="font-semibold text-slate-900">Kampus X, Gedung E Lantai 2</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <p className="text-sm text-slate-600">Email</p>
            <p className="font-semibold text-slate-900">ecocampus@kampus.ac.id</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <p className="text-sm text-slate-600">Instagram</p>
            <p className="font-semibold text-slate-900">@ecocampus.id</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
