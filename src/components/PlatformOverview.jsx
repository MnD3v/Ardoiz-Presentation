import { motion } from 'framer-motion'
import { BarChart3, Check, GraduationCap, Users } from 'lucide-react'

const STUDENT = [
  'Orientation d\'entrée par diagnostic',
  'Cours structurés par niveau et par partie',
  'Présence par QR code',
  'Quiz d\'évaluation par niveau',
  'Soumission de livrables de projet',
  'Orientation de sortie & profil professionnel',
]

const TRAINER = [
  'Création de parcours multi-niveaux et multi-parties',
  'Quiz et projets par niveau (débutant / intermédiaire / avancé)',
  'Réception et notation des livrables',
  'Pointage de présence par QR code',
  'Tableau de bord KPI temps réel',
  'Suivi individuel des étudiants',
  'Gestion multi-rôles',
  'Export Excel',
]

function Card({ badge, title, desc, items, accent, icon: Icon, glow }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/9 bg-[#0C100F] p-7 sm:p-9 flex flex-col gap-7"
    >
      <div className={`absolute -right-20 -top-20 h-52 w-52 rounded-full blur-[80px] ${glow}`} />
      <div>
        <div className="relative mb-8 flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: accent }}>{badge}</span>
          <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.04]" style={{ color: accent }}>
            <Icon size={20} />
          </span>
        </div>
        <h3 className="relative text-white text-2xl sm:text-3xl font-bold mb-3">
          {title}
        </h3>
        <p className="relative text-[#A3ADAA] text-sm leading-relaxed">{desc}</p>
      </div>

      <ul className="relative grid gap-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <Check size={14} className="mt-0.5 shrink-0" style={{ color: accent }} />
            <span className="text-[#A3ADAA] text-sm leading-snug">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function PlatformOverview() {
  return (
    <section id="platform" className="relative py-20 sm:py-28 px-5 sm:px-6 bg-white/[0.018]">
      <div className="absolute inset-x-0 top-0 h-px bg-white/8" />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 sm:mb-16 text-center"
        >
          <p className="eyebrow mb-5">Deux expériences, une plateforme</p>
          <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.035em]">
            Chacun voit ce dont il a besoin.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#9BA5A2]">
            Une expérience fluide pour apprendre. Un cockpit complet pour accompagner.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid md:grid-cols-2 gap-4"
        >
          <Card
            badge="Apprenants"
            title="Ardoiz Étudiant"
            desc="De l'orientation d'entrée jusqu'au bilan de sortie."
            items={STUDENT}
            accent="#00E0E8"
            icon={GraduationCap}
            glow="bg-[#00E0E8]/15"
          />
          <Card
            badge="Formateurs"
            title="Ardoiz Formateur"
            desc="Créez, pilotez et suivez vos formations en temps réel."
            items={TRAINER}
            accent="#A78BFA"
            icon={BarChart3}
            glow="bg-[#A78BFA]/15"
          />
        </motion.div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="glass-card flex items-center gap-4 rounded-2xl p-5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#00E0E8]/10 text-[#00E0E8]"><Users size={18} /></span>
            <div><strong className="block text-sm">Une donnée partagée</strong><span className="text-xs text-[#88938F]">Toujours synchronisée entre les deux espaces</span></div>
          </div>
          <div className="glass-card flex items-center gap-4 rounded-2xl p-5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#A78BFA]/10 text-[#A78BFA]"><BarChart3 size={18} /></span>
            <div><strong className="block text-sm">Une vision claire</strong><span className="text-xs text-[#88938F]">Les bons indicateurs, au bon moment</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
