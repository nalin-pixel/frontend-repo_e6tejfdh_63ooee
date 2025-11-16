import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Gallery() {
  const [items, setItems] = useState([])
  useEffect(() => {
    fetch(`${API}/api/gallery`).then(r => r.json()).then(setItems).catch(() => setItems([]))
  }, [])

  return (
    <div className="bg-white">
      <Navbar />
      <main className="pt-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900">Galeri Kegiatan</h1>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map(x => (
            <div key={x.id} className="group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="aspect-video overflow-hidden">
                <img src={x.image} alt={x.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
              </div>
              <div className="p-3">
                <h3 className="text-sm font-semibold text-slate-900">{x.title}</h3>
                <p className="text-xs text-slate-600">{x.category}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
