import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease },
  }
}

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-16 pb-8">
      <div className="max-w-4xl mx-auto w-full text-center">
        <motion.h1
          {...fadeUp(0)}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[82px] font-bold text-white leading-[1.04] tracking-tight mb-6"
          style={{ fontFamily: "'Google Sans', sans-serif" }}
        >
          La plateforme qui connecte{' '}
          <span className="text-[#666666]">formateurs</span>{' '}
          et <span className="text-[#666666]">apprenants.</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.1)}
          className="text-[#A0A0A0] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Ardoiz centralise la gestion des formations, le suivi des étudiants et
          la création de contenus pédagogiques en un seul espace.
        </motion.p>

        <motion.div
          {...fadeUp(0.2)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#platform"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-[#0A0A0A] text-sm font-semibold hover:bg-[#e4e4e4] transition-colors duration-200"
          >
            Découvrir la plateforme
            <ArrowRight size={15} />
          </a>
          <a
            href="#features"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 border border-[#333333] text-white text-sm font-medium hover:border-[#555555] transition-colors duration-200"
          >
            Voir les fonctionnalités
          </a>
        </motion.div>
      </div>
    </section>
  )
}
