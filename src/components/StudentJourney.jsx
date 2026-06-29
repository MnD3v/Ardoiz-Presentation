import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]

const STEPS = [
  {
    num: '01',
    label: 'Orientation d\'entrée',
    desc: 'Un diagnostic initial oriente l\'apprenant selon son profil avant le démarrage. Les résultats déterminent le niveau de départ adapté.',
    img: '/fonctionnalites/orientation-entr%C3%A9e.png',
  },
  {
    num: '02',
    label: 'Présence',
    desc: 'Pointage à chaque session par QR code. L\'historique et le taux de présence sont disponibles en temps réel pour le formateur.',
    img: '/fonctionnalites/presence.png',
  },
  {
    num: '03',
    label: 'Cours',
    desc: 'Sections organisées par niveau (Débutant → Intermédiaire → Avancé) et par partie pour les parcours multi-domaines. Vidéos, PDFs et exercices intégrés.',
    img: '/fonctionnalites/cours.png',
  },
  {
    num: '04',
    label: 'Quiz',
    desc: 'Évaluations par niveau avec correction automatique et suivi des scores. Chaque cours dispose également de ses propres quiz.',
    img: '/fonctionnalites/questinonnaire.png',
  },
  {
    num: '05',
    label: 'Projets',
    desc: 'L\'étudiant soumet ses livrables (fichier ou lien). Le formateur reçoit, consulte et note directement depuis son tableau de bord.',
    img: '/fonctionnalites/projets.png',
  },
  {
    num: '06',
    label: 'Orientation de sortie',
    desc: 'Un bilan final établit le profil professionnel de l\'apprenant selon sa progression tout au long du parcours.',
    img: '/fonctionnalites/orientation-sortie.png',
  },
]

export default function StudentJourney() {
  return (
    <section id="journey" className="relative py-20 sm:py-28 px-5 sm:px-6">
      <div className="absolute inset-x-0 top-0 h-px bg-white/8" />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease }}
          className="mb-12 sm:mb-16 grid gap-6 md:grid-cols-[1fr_0.75fr] md:items-end"
        >
          <div>
            <p className="eyebrow mb-5">Parcours apprenant</p>
            <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.035em] leading-tight">
              Six moments clés.<br />
              <span className="text-[#8D9895]">Une expérience continue.</span>
            </h2>
          </div>
          <p className="text-[#AEB8B5] text-sm sm:text-base leading-relaxed md:pb-1">
            De la découverte du bon parcours jusqu’au profil professionnel final,
            chaque étape reste simple pour l’apprenant et visible pour le formateur.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map(({ num, label, desc, img }, i) => (
            <motion.article
              key={num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.07, ease }}
              className="group glass-card relative min-h-[510px] overflow-hidden rounded-3xl"
            >
              <div className="absolute inset-x-8 top-8 bottom-20 overflow-hidden">
                <img
                  src={img}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-contain object-top transition-transform duration-700 group-hover:-translate-y-2 group-hover:scale-[1.02]"
                />
              </div>

              <div className="absolute inset-x-0 bottom-0 z-20 border-t border-white/8 bg-[#090D0C] p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-[#00E0E8]/25 bg-[#00E0E8]/10 text-xs font-bold text-[#00E0E8]">
                    {num}
                  </span>
                  <ArrowUpRight size={17} className="text-[#67736F] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#00E0E8]" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">{label}</h3>
                <p className="text-sm leading-relaxed text-[#9BA5A2]">{desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
