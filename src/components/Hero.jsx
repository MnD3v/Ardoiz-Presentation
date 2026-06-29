import { motion } from 'framer-motion'
import { ArrowRight, Check, Play } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease },
  }
}

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center px-5 sm:px-6 pt-32 sm:pt-36 pb-16 overflow-hidden">
      <div className="absolute left-1/2 top-28 h-72 w-72 -translate-x-1/2 rounded-full bg-[#00E0E8]/10 blur-[110px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto w-full text-center">
        <motion.h1
          {...fadeUp(0)}
          className="text-balance text-[2.85rem] sm:text-6xl md:text-[4.8rem] font-bold text-white leading-[1.02] tracking-[-0.045em] mb-7"
        >
          Pilotez chaque étape.
          <span className="block text-[#00E0E8]">
            Révélez chaque talent.
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.16)}
          className="text-balance text-[#AEB8B5] text-base sm:text-lg max-w-2xl mx-auto mb-9 leading-relaxed"
        >
          Une plateforme unique pour orienter les apprenants, diffuser les cours,
          suivre les présences, évaluer les acquis et mesurer la progression.
        </motion.p>

        <motion.div
          {...fadeUp(0.22)}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8"
        >
          <a
            href="#journey"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 bg-[#00E0E8] text-[#041011] text-sm font-bold hover:bg-[#62F5F8] transition-all duration-200 shadow-[0_14px_40px_rgba(0,224,232,0.16)]"
          >
            Découvrir la plateforme
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 border border-white/12 bg-white/[0.035] text-[#D3DAD8] text-sm font-medium hover:border-white/25 hover:bg-white/[0.06] hover:text-white transition-all duration-200"
          >
            <Play size={14} fill="currentColor" />
            Voir comment ça marche
          </a>
        </motion.div>

        <motion.div
          {...fadeUp(0.28)}
          className="mb-16 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-[#7E8A86]"
        >
          {['Deux espaces dédiés', 'Données en temps réel', 'Parcours complet'].map((item) => (
            <span key={item} className="inline-flex items-center gap-1.5">
              <Check size={13} className="text-[#00E0E8]" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.35, ease }}
        className="relative w-full max-w-6xl mx-auto"
      >
        <div className="absolute inset-x-[12%] top-[8%] h-[70%] rounded-full bg-[#00E0E8]/15 blur-[100px]" />
        <div className="relative rounded-[1.75rem] border border-white/10 bg-[#0A0A0A] p-2 sm:p-4 shadow-[0_40px_120px_rgba(0,0,0,0.65)]">
          <img
            src="/landing-page.png"
            alt="Aperçu de l'application Ardoiz"
            className="w-full rounded-[1.2rem] border border-white/8 bg-black"
          />
        </div>
      </motion.div>
    </section>
  )
}
