import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function ArticleDetail() {
  const { slug } = useParams()
  const [article, setArticle] = useState(null)
  useEffect(() => {
    fetch(`${API}/api/articles/${slug}`).then(async r => {
      if (!r.ok) throw new Error('not found')
      return r.json()
    }).then(setArticle).catch(() => setArticle(null))
  }, [slug])

  return (
    <div className="bg-white">
      <Navbar />
      <main className="pt-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {!article ? (
          <p className="text-slate-600">Memuat...</p>
        ) : (
          <article>
            <h1 className="text-3xl font-bold text-slate-900">{article.title}</h1>
            <p className="mt-2 text-slate-600">{article.excerpt}</p>
            <div className="mt-6 prose max-w-none">
              {article.content}
            </div>
          </article>
        )}
      </main>
      <Footer />
    </div>
  )
}
