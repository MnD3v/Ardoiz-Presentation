import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PlatformOverview from './components/PlatformOverview'
import FeaturesGrid from './components/FeaturesGrid'
import HowItWorks from './components/HowItWorks'
import Stats from './components/Stats'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PlatformOverview />
        <FeaturesGrid />
        <HowItWorks />
        <Stats />
      </main>
      <Footer />
    </>
  )
}
