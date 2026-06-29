import { motion } from 'framer-motion'
import { ArrowRight, Mail, Sparkles } from 'lucide-react'

export default function CallToAction() {
  return (
    <section id="contact" className="px-5 sm:px-6 py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-6xl mx-auto overflow-hidden rounded-[2rem] border border-[#00E0E8]/20 bg-[#1A1A1A] px-6 py-14 sm:px-12 sm:py-16 lg:px-16"
      >
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#00E0E8]/15 blur-[90px]" />
        <div className="absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-[#A78BFA]/10 blur-[90px]" />
        <div className="relative grid items-end gap-10 lg:grid-cols-[1fr_auto]">
          <div className="max-w-3xl">
            <span className="eyebrow mb-6"><Sparkles size={13} /> Passons au concret</span>
            <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.035em] leading-tight">
              Prêt à offrir un meilleur parcours à vos apprenants&nbsp;?
            </h2>
            <p className="mt-5 max-w-2xl text-[#AEB8B5] leading-relaxed">
              Découvrez comment Ardoiz peut s’adapter à votre centre, à vos parcours
              et à votre manière d’accompagner les talents.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
            <a
              href="mailto:saeicube.tools@gmail.com?subject=Demande%20de%20démo%20Ardoiz"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#00E0E8] px-6 py-3.5 text-sm font-bold text-[#041011] transition-colors hover:bg-[#62F5F8]"
            >
              Demander une démo
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="mailto:saeicube.tools@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.035] px-6 py-3.5 text-sm font-medium text-[#D3DAD8] transition-colors hover:bg-white/[0.07] hover:text-white"
            >
              <Mail size={15} />
              Nous écrire
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
