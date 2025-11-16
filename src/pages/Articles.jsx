import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Articles() {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    fetch(`${API}/api/articles`).then(r => r.json()).then(setArticles).catch(() => setArticles([]))
  }, [])

  return (
    <div className="bg-white">
      <Navbar />
      <main className="pt-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900">Artikel & Edukasi</h1>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {articles.map(a => (
            <a key={a.slug} href={`/articles/${a.slug}`} className="block bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-slate-900">{a.title}</h3>
              <p className="mt-2 text-slate-600">{a.excerpt}</p>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
