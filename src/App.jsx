import { Routes, Route, useLocation } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ProductsShowcase from './components/ProductsShowcase'
import Boutiques from './components/Boutiques'
import Footer from './components/Footer'

// Lazy load pages for better performance
const LesJus = lazy(() => import('./pages/LesJus'))
const Complements = lazy(() => import('./pages/Complements'))
const Cosmetiques = lazy(() => import('./pages/Cosmetiques'))
const HuilesEssentielles = lazy(() => import('./pages/HuilesEssentielles'))
const FruitsSecs = lazy(() => import('./pages/FruitsSecs'))
const Confiserie = lazy(() => import('./pages/Confiserie'))
const PapierGrenade = lazy(() => import('./pages/PapierGrenade'))
const ColorantsAdditifs = lazy(() => import('./pages/ColorantsAdditifs'))
const BioGrenaGoldNutrition = lazy(() => import('./pages/BioGrenaGoldNutrition'))
const VideoClip = lazy(() => import('./pages/VideoClip'))

// Loading fallback
const PageLoader = () => (
  <div style={{
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'var(--color-bg-dark)'
  }}>
    <div style={{
      width: '40px',
      height: '40px',
      border: '2px solid rgba(201, 169, 98, 0.2)',
      borderTopColor: 'var(--color-accent)',
      borderRadius: '50%',
      animation: 'spin 0.8s linear infinite'
    }} />
  </div>
)

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <ProductsShowcase />
      <Boutiques />
    </>
  )
}

function App() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const isVideoPage = location.pathname === '/video'

  return (
    <>
      {/* Grain Overlay for texture */}
      {!isVideoPage && <div className="grain-overlay" aria-hidden="true"></div>}

      {/* Navigation */}
      {!isVideoPage && <Navbar />}

      {/* Main Content */}
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/les-jus" element={<LesJus />} />
            <Route path="/complements" element={<Complements />} />
            <Route path="/cosmetiques" element={<Cosmetiques />} />
            <Route path="/huiles-essentielles" element={<HuilesEssentielles />} />
            <Route path="/fruits-secs" element={<FruitsSecs />} />
            <Route path="/confiserie" element={<Confiserie />} />
            <Route path="/papier-grenade" element={<PapierGrenade />} />
            <Route path="/colorants-additifs" element={<ColorantsAdditifs />} />
            <Route path="/bio-grenagold-nutrition" element={<BioGrenaGoldNutrition />} />
            <Route path="/video" element={<VideoClip />} />
          </Routes>
        </Suspense>
      </main>

      {/* Footer - show on all pages except the video page */}
      {!isVideoPage && <Footer />}
    </>
  )
}

export default App
