import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StudentJourney from './components/StudentJourney'
import PlatformOverview from './components/PlatformOverview'
import FeaturesGrid from './components/FeaturesGrid'
import HowItWorks from './components/HowItWorks'
import Stats from './components/Stats'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <StudentJourney />
        <PlatformOverview />
        <FeaturesGrid />
        <HowItWorks />
        <Stats />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
