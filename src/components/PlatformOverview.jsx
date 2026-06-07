import { motion } from 'framer-motion'
import {
  BookOpen,
  Video,
  CheckSquare,
  PenTool,
  UserCheck,
  MessageSquare,
  Briefcase,
  FolderOpen,
  QrCode,
  BarChart3,
  UserCog,
  Download,
  Users,
} from 'lucide-react'

const STUDENT_FEATURES = [
  { icon: BookOpen, label: 'Parcours de formation structurés' },
  { icon: Video, label: 'Cours PDF et vidéo' },
  { icon: CheckSquare, label: 'Questionnaires et évaluations' },
  { icon: PenTool, label: 'Ardoise interactive' },
  { icon: UserCheck, label: 'Suivi de présence' },
  { icon: MessageSquare, label: 'Forum de discussion' },
  { icon: Briefcase, label: 'Opportunités professionnelles' },
]

const TRAINER_FEATURES = [
  { icon: FolderOpen, label: 'Gestion des parcours et sections' },
  { icon: CheckSquare, label: 'Création de questionnaires' },
  { icon: QrCode, label: 'Pointage de présence par QR code' },
  { icon: BarChart3, label: 'Tableau de bord KPI' },
  { icon: UserCog, label: 'Suivi individuel des étudiants' },
  { icon: Download, label: 'Export de données Excel' },
  { icon: Users, label: 'Gestion multi-rôles (formateur, assistant, responsable)' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

function AppCard({ id, badge, title, desc, features }) {
  return (
    <motion.article
      id={id}
      variants={cardVariants}
      className="flex-1 bg-[#111111] border border-[#222222] p-8 md:p-10 flex flex-col gap-7 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
    >
      <div>
        <span className="inline-block px-3 py-1 text-xs border border-[#2a2a2a] text-[#777777] mb-5">
          {badge}
        </span>
        <h3
          className="text-2xl font-bold text-white mb-3"
          style={{ fontFamily: "'Google Sans', sans-serif" }}
        >
          {title}
        </h3>
        <p className="text-[#A0A0A0] text-sm leading-relaxed">{desc}</p>
      </div>

      <ul className="flex flex-col gap-3">
        {features.map(({ icon: Icon, label }) => (
          <li key={label} className="flex items-start gap-3">
            <Icon size={14} className="text-[#444444] shrink-0 mt-0.5" />
            <span className="text-[#888888] text-sm leading-snug">{label}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  )
}

export default function PlatformOverview() {
  return (
    <section id="platform" className="py-28 px-6 border-t border-[#222222]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="text-[#444444] text-xs uppercase tracking-wide mb-4">
            Deux apps, une plateforme
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white leading-[1.1]"
            style={{ fontFamily: "'Google Sans', sans-serif" }}
          >
            Un écosystème pensé pour les deux
            <br className="hidden md:block" /> côtés de la formation
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="grid md:grid-cols-2 gap-6"
        >
          <AppCard
            id="qdclic"
            badge="Apprenants"
            title="L'app des étudiants"
            desc="Accédez à vos cours, suivez votre progression, passez vos évaluations et interagissez avec votre communauté — tout en un."
            features={STUDENT_FEATURES}
          />
          <AppCard
            id="qfdclic"
            badge="Formateurs"
            title="L'app des formateurs"
            desc="Gérez vos étudiants, créez vos contenus pédagogiques, suivez les performances et animez vos sessions en temps réel."
            features={TRAINER_FEATURES}
          />
        </motion.div>
      </div>
    </section>
  )
}
