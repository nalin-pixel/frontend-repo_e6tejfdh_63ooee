import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="py-8"
          >
            <span className="inline-block text-xs tracking-widest font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full">BersamaWujudkanKampusHijaudanBerkelanjutan 🌎</span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              Mulai Langkahmu untuk Kampus yang Lebih Hijau!
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              Temukan inspirasi, aksi, dan edukasi lingkungan di EcoCampus.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/about" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-green-600 text-white hover:bg-green-700 transition">Pelajari Lebih Lanjut</Link>
              <Link to="/articles" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-green-600 text-green-700 hover:bg-green-50 transition">Baca Artikel</Link>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4">
              <Stat value="500+" label="Mahasiswa Terlibat" />
              <Stat value="20+" label="Kegiatan Hijau" />
              <Stat value="10.000+" label="Pohon Tertanam" />
            </div>
          </motion.div>
          <div className="h-[420px] lg:h-[520px]" />
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }) {
  return (
    <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl p-4 text-center shadow-sm">
      <div className="text-2xl font-bold text-slate-900">{value}</div>
      <div className="text-slate-600 text-sm">{label}</div>
    </div>
  )
}
