import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navItem = (to, label) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-4 py-2 rounded-md transition-colors ${isActive ? 'text-green-700' : 'text-slate-700 hover:text-green-700'}`
      }
      onClick={() => setOpen(false)}
    >
      {label}
    </NavLink>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/70 backdrop-blur-md border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="inline-block h-8 w-8 rounded-lg bg-green-500"></span>
            <span className="font-semibold text-slate-900">EcoCampus</span>
          </Link>
          <nav className="hidden md:flex items-center gap-2">
            {navItem('/', 'Home')}
            {navItem('/about', 'About')}
            {navItem('/articles', 'Artikel')}
            {navItem('/gallery', 'Galeri')}
            {navItem('/contact', 'Contact')}
          </nav>
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            <Menu className="h-6 w-6 text-slate-700" />
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-2">
            {navItem('/', 'Home')}
            {navItem('/about', 'About')}
            {navItem('/articles', 'Artikel')}
            {navItem('/gallery', 'Galeri')}
            {navItem('/contact', 'Contact')}
          </div>
        )}
      </div>
    </header>
  )
}
