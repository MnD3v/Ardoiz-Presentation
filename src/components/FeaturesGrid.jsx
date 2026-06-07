import { motion } from 'framer-motion'
import { BookOpen, CheckCircle, QrCode, BarChart3, Target, MessageSquare } from 'lucide-react'

const FEATURES = [
  {
    icon: BookOpen,
    title: 'Parcours structurés',
    desc: 'Organisez vos formations en parcours, sections et cours progressifs',
  },
  {
    icon: CheckCircle,
    title: 'Évaluations intelligentes',
    desc: 'Créez des questionnaires avec correction automatique et suivi des résultats',
  },
  {
    icon: QrCode,
    title: 'Présence QR code',
    desc: "Pointez les présences instantanément via scan QR depuis n'importe quel appareil",
  },
  {
    icon: BarChart3,
    title: 'Tableaux de bord KPI',
    desc: 'Visualisez les performances, le taux de présence et les étudiants en difficulté',
  },
  {
    icon: Target,
    title: 'Orientation professionnelle',
    desc: 'Guidez chaque étudiant vers le profil professionnel qui correspond à ses aptitudes',
  },
  {
    icon: MessageSquare,
    title: 'Forum intégré',
    desc: "Un espace d'échange entre étudiants et formateurs au sein de chaque parcours",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-28 px-6 border-t border-[#222222]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="text-[#444444] text-xs uppercase tracking-wide mb-4">
            Fonctionnalités clés
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "'Google Sans', sans-serif" }}
          >
            Tout ce dont un centre de
            <br className="hidden md:block" /> formation a besoin
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1a1a]"
        >
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <motion.article
              key={title}
              variants={cardVariants}
              className="group bg-[#0A0A0A] p-8 flex flex-col gap-5 hover:bg-[#0f0f0f] transition-colors duration-200 border border-[#181818]"
            >
              <div className="w-10 h-10 border border-[#222222] flex items-center justify-center group-hover:border-[#333333] transition-colors duration-200">
                <Icon size={17} className="text-white" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-white font-semibold text-base mb-2">{title}</h3>
                <p className="text-[#666666] text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
