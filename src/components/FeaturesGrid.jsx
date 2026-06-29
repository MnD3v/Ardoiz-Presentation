import { motion } from 'framer-motion'
import { ClipboardCheck, Compass, FileCheck2, Layers3, QrCode, Target } from 'lucide-react'

const FEATURES = [
  {
    label: 'Orientation d\'entrée',
    desc: 'Diagnostic initial pour orienter chaque apprenant selon son profil avant de démarrer.',
    icon: Compass,
  },
  {
    label: 'Cours par niveau',
    desc: 'Sections organisées en Débutant, Intermédiaire et Avancé — par partie pour les parcours multi-domaines.',
    icon: Layers3,
  },
  {
    label: 'Présence QR code',
    desc: 'Pointage instantané à chaque session, historique et taux de présence en temps réel.',
    icon: QrCode,
  },
  {
    label: 'Quiz d\'évaluation',
    desc: 'Questionnaires par niveau avec correction automatique et suivi des scores.',
    icon: ClipboardCheck,
  },
  {
    label: 'Projets & livrables',
    desc: 'Les étudiants soumettent leurs livrables. Les formateurs reçoivent, consultent et notent.',
    icon: FileCheck2,
  },
  {
    label: 'Orientation de sortie',
    desc: 'Bilan de fin de parcours générant le profil professionnel adapté à la progression.',
    icon: Target,
  },
]

export default function FeaturesGrid() {
  return (
    <section id="features" className="relative py-20 sm:py-28 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 sm:mb-16"
        >
          <p className="eyebrow mb-5">Fonctionnalités</p>
          <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.035em]">
            Tout ce qui fait avancer une formation.
          </h2>
          <p className="mt-4 max-w-2xl text-[#9BA5A2] leading-relaxed">
            Pas une collection d’outils dispersés : un flux cohérent qui relie pédagogie,
            présence, évaluation et résultats.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {FEATURES.map(({ label, desc, icon: Icon }, i) => (
            <motion.div
              key={label}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="group glass-card rounded-2xl p-6 sm:p-7 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#00E0E8]/25 hover:bg-[#00E0E8]/[0.035]"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#00E0E8]/9 text-[#00E0E8] transition-transform duration-300 group-hover:scale-105">
                  <Icon size={20} />
                </span>
                <span className="text-xs font-bold tabular-nums text-[#4E5A56]">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div>
                <h3 className="mb-2 text-white font-semibold">{label}</h3>
                <p className="text-[#9BA5A2] text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
