import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, GraduationCap } from 'lucide-react'
import Navbar from '../components/Navbar'

const STUDENT_URL = 'https://ardoiz.saeicube.com'
const TUTOR_URL = 'https://ardoiz-tuteur.saeicube.com'

const ease = [0.22, 1, 0.36, 1]

const profiles = [
  {
    id: 'student',
    icon: BookOpen,
    label: 'Je suis Étudiant',
    description: 'Accède à tes parcours, cours, questionnaires et suis ta progression en temps réel.',
    href: STUDENT_URL,
    accent: '#00E0E8',
    accentBg: 'bg-[#00E0E8]/10',
    accentBorder: 'border-[#00E0E8]/25',
    accentHover: 'hover:border-[#00E0E8]/60',
    btnClass: 'bg-[#00E0E8] text-[#041011] hover:bg-[#62F5F8]',
    glow: 'bg-[#00E0E8]/15',
    glowPos: '-left-20 -top-20',
  },
  {
    id: 'tutor',
    icon: GraduationCap,
    label: 'Je suis Tuteur',
    description: 'Gère tes apprenants, évaluations, présences et pilote tes formations.',
    href: TUTOR_URL,
    accent: '#A78BFA',
    accentBg: 'bg-[#A78BFA]/10',
    accentBorder: 'border-[#A78BFA]/25',
    accentHover: 'hover:border-[#A78BFA]/60',
    btnClass: 'bg-[#A78BFA] text-[#0D0A1A] hover:bg-[#C4B5FD]',
    glow: 'bg-[#A78BFA]/12',
    glowPos: '-right-20 -top-20',
  },
]

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay, ease },
  }
}

export default function ConnexionPage() {
  return (
    <div className="min-h-screen bg-[#111111] flex flex-col">
      <Navbar />

      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#00E0E8]/8 blur-[130px] pointer-events-none" />
      <div className="absolute right-0 bottom-1/3 h-64 w-64 rounded-full bg-[#A78BFA]/8 blur-[110px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto w-full flex-1 flex flex-col justify-center px-5 sm:px-6 py-20">
        <motion.div {...fadeUp(0.08)} className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-[-0.035em] mb-3">
            Quel est votre profil&nbsp;?
          </h1>
          <p className="text-[#8A9490] leading-relaxed">
            Choisissez votre espace pour accéder à votre interface dédiée.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {profiles.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.a
                key={p.id}
                href={p.href}
                {...fadeUp(0.14 + i * 0.1)}
                className={`group relative flex flex-col gap-6 rounded-3xl border bg-[#1A1A1A] p-8 transition-all duration-300 ${p.accentBorder} ${p.accentHover}`}
              >
                <div className={`absolute h-44 w-44 rounded-full ${p.glow} blur-[70px] pointer-events-none ${p.glowPos}`} />

                <div className={`relative w-fit rounded-xl border p-3 ${p.accentBg} ${p.accentBorder}`}>
                  <Icon size={26} style={{ color: p.accent }} strokeWidth={1.7} />
                </div>

                <div className="flex-1">
                  <h2 className="text-xl font-bold text-white mb-2">{p.label}</h2>
                  <p className="text-[#7A8884] text-sm leading-relaxed">{p.description}</p>
                </div>

                <div className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold transition-all duration-200 ${p.btnClass}`}>
                  Accéder
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
