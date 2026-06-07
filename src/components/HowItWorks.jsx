import { motion } from 'framer-motion'

const STEPS = [
  {
    number: '01',
    title: 'Le centre configure',
    desc: 'Le formateur crée les parcours, ajoute les cours et configure les évaluations depuis Ardoiz-Formateur.',
    detail: 'Ardoiz-Formateur — Formateurs',
  },
  {
    number: '02',
    title: 'Les étudiants apprennent',
    desc: 'Les apprenants accèdent à leurs contenus, participent aux sessions et passent leurs évaluations depuis Ardoiz Etudiant.',
    detail: 'Ardoiz Etudiant — Apprenants',
  },
  {
    number: '03',
    title: 'Le formateur pilote',
    desc: 'Les données remontent en temps réel : présences, notes, progression, alertes sur les étudiants en difficulté.',
    detail: 'Tableau de bord — Temps réel',
  },
]

export default function HowItWorks() {
  return (
    <section id="howitworks" className="py-28 px-6 border-t border-[#222222]">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <p className="text-[#444444] text-xs uppercase tracking-wide mb-4">
            Comment ça fonctionne
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "'Google Sans', sans-serif" }}
          >
            Simple à déployer,
            <br /> puissant à l'usage
          </h2>
        </motion.div>

        <div className="flex flex-col">
          {STEPS.map(({ number, title, desc, detail }, i) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] border-t border-[#1e1e1e] py-10 gap-6 md:gap-0 hover:border-[#2a2a2a] transition-colors duration-300"
            >
              <div className="flex items-start gap-6">
                <span
                  className="text-[6rem] md:text-[7rem] font-bold leading-none text-[#161616] group-hover:text-[#1e1e1e] transition-colors duration-300 select-none shrink-0"
                  style={{ fontFamily: "'Google Sans', sans-serif" }}
                  aria-hidden
                >
                  {number}
                </span>
                <span className="mt-3 text-[#333333] text-xs uppercase tracking-wide border-l border-[#222222] pl-4 leading-relaxed">
                  {detail}
                </span>
              </div>

              <div className="flex flex-col justify-center md:pl-12">
                <h3
                  className="text-white text-2xl font-bold mb-3"
                  style={{ fontFamily: "'Google Sans', sans-serif" }}
                >
                  {title}
                </h3>
                <p className="text-[#555555] text-sm leading-relaxed max-w-md">{desc}</p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-[#1e1e1e]" />
        </div>

      </div>
    </section>
  )
}
