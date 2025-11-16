export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-600 text-sm">© {new Date().getFullYear()} EcoCampus. Semua hak dilindungi.</p>
        <p className="text-slate-500 text-sm">BersamaWujudkanKampusHijaudanBerkelanjutan 🌎</p>
      </div>
    </footer>
  )
}
