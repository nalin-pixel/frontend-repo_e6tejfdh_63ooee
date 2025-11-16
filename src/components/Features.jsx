import { motion } from 'framer-motion'
import { Leaf, BookOpen, Image } from 'lucide-react'

const features = [
  { icon: Leaf, title: 'Aksi Kampus Hijau', desc: 'Ikut serta dalam kegiatan nyata seperti penanaman pohon dan bersih-bersih kampus.' },
  { icon: BookOpen, title: 'Edukasi Lingkungan', desc: 'Baca artikel, panduan, dan tips praktis untuk gaya hidup berkelanjutan.' },
  { icon: Image, title: 'Galeri Aktivitas', desc: 'Lihat dokumentasi kegiatan hijau di kampus dari waktu ke waktu.' },
]

export default function Features() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <f.icon className="h-8 w-8 text-green-600" />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
