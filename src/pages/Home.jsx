import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import { ArticlesSection, GallerySection } from '../components/Sections'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Features />
      <ArticlesSection />
      <GallerySection />
      <Footer />
    </div>
  )
}
