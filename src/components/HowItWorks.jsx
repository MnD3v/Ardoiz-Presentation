import { motion } from 'framer-motion'

const STEPS = [
  {
    num: '01',
    title: 'Le centre configure',
    desc: 'Le formateur crée les parcours, structure les niveaux, définit les quiz et projets d\'évaluation.',
  },
  {
    num: '02',
    title: 'L\'étudiant est orienté',
    desc: 'Un diagnostic d\'entrée analyse le profil et oriente vers le bon niveau de démarrage.',
  },
  {
    num: '03',
    title: 'La formation se déroule',
    desc: 'L\'apprenant suit ses cours, pointe par QR code, passe ses quiz et soumet ses livrables.',
  },
  {
    num: '04',
    title: 'Le formateur pilote',
    desc: 'Soumissions, notes, présences et progression remontent en temps réel sur le tableau de bord.',
  },
  {
    num: '05',
    title: 'Le bilan de sortie',
    desc: 'Un profil professionnel est généré selon les résultats et la progression de l\'étudiant.',
  },
]

export default function HowItWorks() {
  return (
    <section id="howitworks" className="relative py-20 sm:py-28 px-5 sm:px-6 bg-[#0A0E0D]">
      <div className="absolute inset-x-0 top-0 h-px bg-white/8" />
      <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="lg:sticky lg:top-28 lg:self-start"
        >
          <p className="eyebrow mb-5">Comment ça fonctionne</p>
          <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.035em] leading-tight">
            Du paramétrage aux résultats.
          </h2>
          <p className="mt-5 text-[#9BA5A2] leading-relaxed">
            Ardoiz suit le rythme naturel d’une formation. L’équipe garde le contrôle,
            l’apprenant garde le cap.
          </p>
        </motion.div>

        <div className="flex flex-col">
          {STEPS.map(({ num, title, desc }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="group grid grid-cols-[auto_1fr] gap-5 border-t border-white/9 py-7 sm:py-8 transition-colors duration-300 hover:border-[#00E0E8]/30"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.035] text-xs font-bold tabular-nums text-[#00E0E8] transition-colors group-hover:border-[#00E0E8]/30 group-hover:bg-[#00E0E8]/10">
                {num}
              </span>
              <div>
                <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
                <p className="text-[#9BA5A2] text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-white/9" />
        </div>
      </div>
    </section>
  )
}
