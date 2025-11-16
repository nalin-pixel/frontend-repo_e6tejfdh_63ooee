import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="bg-white">
      <Navbar />
      <main className="pt-24">
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-slate-900">Tentang EcoCampus</h1>
            <p className="mt-4 text-slate-600">Menjadi pusat edukasi dan kolaborasi bagi mahasiswa untuk menjaga kelestarian lingkungan kampus.</p>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <h3 className="font-semibold text-green-800">Visi</h3>
                <p className="mt-2 text-green-800/90">Menjadi pusat edukasi dan kolaborasi bagi mahasiswa untuk menjaga kelestarian lingkungan kampus.</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h3 className="font-semibold text-blue-800">Misi</h3>
                <ul className="mt-2 list-disc list-inside text-blue-900/90 space-y-1">
                  <li>Meningkatkan kesadaran dan tanggung jawab lingkungan.</li>
                  <li>Mendorong partisipasi aktif dalam kegiatan hijau.</li>
                  <li>Menyediakan sumber belajar dan dokumentasi aksi lingkungan.</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-5">
                <h3 className="font-semibold text-slate-900">Tim & Komunitas</h3>
                <p className="mt-2 text-slate-600">Kenal lebih dekat dengan tim penggerak. Ayo bergabung dan berkolaborasi.</p>
                <a href="#" className="inline-flex mt-3 px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700">Gabung Komunitas</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
