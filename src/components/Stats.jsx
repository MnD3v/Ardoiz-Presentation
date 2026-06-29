import { motion } from 'framer-motion'

const STATS = [
  { value: '2', label: 'Applications dédiées', sub: 'Étudiant · Formateur' },
  { value: '6', label: 'Étapes du parcours', sub: 'De l\'entrée à la sortie' },
  { value: '1', label: 'Écosystème connecté', sub: 'Une donnée, deux expériences' },
  { value: 'Temps réel', label: 'Synchronisation', sub: 'Firebase · Données live' },
]

export default function Stats() {
  return (
    <section className="px-5 sm:px-6 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map(({ value, label, sub }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card rounded-2xl px-6 py-8 flex flex-col gap-1"
            >
              <span className="text-[#00E0E8] text-3xl font-bold leading-none mb-3 tracking-[-0.03em]">
                {value}
              </span>
              <span className="text-white text-sm font-medium">{label}</span>
              <span className="text-[#7F8B87] text-xs mt-1">{sub}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
