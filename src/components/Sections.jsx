import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export function ArticlesSection() {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    fetch(`${API}/api/articles`).then(r => r.json()).then(setArticles).catch(() => setArticles([]))
  }, [])
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-slate-900">Artikel/Edukasi</h2>
          <a href="/articles" className="text-green-700 hover:underline">Lihat Semua</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map(a => (
            <a key={a.slug} href={`/articles/${a.slug}`} className="block bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-slate-900">{a.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{a.excerpt}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export function GallerySection() {
  const [items, setItems] = useState([])
  useEffect(() => {
    fetch(`${API}/api/gallery`).then(r => r.json()).then(setItems).catch(() => setItems([]))
  }, [])
  return (
    <section className="py-12 bg-gradient-to-b from-blue-50/40 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-slate-900">Galeri Kegiatan</h2>
          <a href="/gallery" className="text-green-700 hover:underline">Lihat Semua</a>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {items.map(x => (
            <div key={x.id} className="aspect-video bg-white border border-slate-200 rounded-xl overflow-hidden">
              <img src={x.image} alt={x.title} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
