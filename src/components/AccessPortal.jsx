import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, GraduationCap } from 'lucide-react'

const STUDENT_URL = 'https://ardoiz.saeicube.com'
const TUTOR_URL = 'https://ardoiz-tuteur.saeicube.com'

const ease = [0.22, 1, 0.36, 1]

const profiles = [
  {
    id: 'student',
    icon: BookOpen,
    label: 'Je suis Étudiant',
    description: 'Accède à tes parcours, cours, questionnaires et suis ta progression.',
    href: STUDENT_URL,
    accent: '#00E0E8',
    accentBg: 'bg-[#00E0E8]/10',
    accentBorder: 'border-[#00E0E8]/20',
    accentHover: 'hover:border-[#00E0E8]/50 hover:bg-[#00E0E8]/[0.07]',
    btnClass: 'bg-[#00E0E8] text-[#041011] hover:bg-[#62F5F8]',
    glow: 'bg-[#00E0E8]/12',
  },
  {
    id: 'tutor',
    icon: GraduationCap,
    label: 'Je suis Tuteur',
    description: 'Gère tes apprenants, évaluations, présences et pilote tes formations.',
    href: TUTOR_URL,
    accent: '#A78BFA',
    accentBg: 'bg-[#A78BFA]/10',
    accentBorder: 'border-[#A78BFA]/20',
    accentHover: 'hover:border-[#A78BFA]/50 hover:bg-[#A78BFA]/[0.07]',
    btnClass: 'bg-[#A78BFA] text-[#0D0A1A] hover:bg-[#C4B5FD]',
    glow: 'bg-[#A78BFA]/10',
  },
]

export default function AccessPortal() {
  return (
    <section id="acces" className="px-5 sm:px-6 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease }}
          className="text-center mb-12"
        >
          <span className="eyebrow mb-5">Accès à la plateforme</span>
          <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.035em] leading-tight">
            Quel est votre profil&nbsp;?
          </h2>
          <p className="mt-4 text-[#AEB8B5] max-w-xl mx-auto leading-relaxed">
            Choisissez votre espace pour accéder à votre interface dédiée.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {profiles.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.a
                key={p.id}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.1, ease }}
                className={`group relative flex flex-col gap-6 rounded-3xl border bg-[#1A1A1A] p-8 transition-all duration-300 ${p.accentBorder} ${p.accentHover}`}
              >
                <div className={`absolute -top-16 ${i === 0 ? '-left-16' : '-right-16'} h-48 w-48 rounded-full ${p.glow} blur-[80px] pointer-events-none`} />

                <div className={`relative w-fit rounded-xl border p-3 ${p.accentBg} ${p.accentBorder}`}>
                  <Icon size={24} style={{ color: p.accent }} strokeWidth={1.8} />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{p.label}</h3>
                  <p className="text-[#8A9490] text-sm leading-relaxed">{p.description}</p>
                </div>

                <div className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-all duration-200 ${p.btnClass}`}>
                  Accéder
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
