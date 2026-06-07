import { motion } from 'framer-motion'

const STATS = [
  {
    value: '2',
    label: 'Apps dédiées',
    sub: 'Ardoiz Etudiant · Ardoiz-Formateur',
  },
  {
    value: '100%',
    label: 'Web',
    sub: 'Aucune installation requise',
  },
  {
    value: 'Temps réel',
    label: 'Synchronisation',
    sub: 'Données en direct',
  },
  {
    value: 'Multi-rôles',
    label: "Gestion d'accès",
    sub: 'Formateur · Assistant · Responsable',
  },
]

export default function Stats() {
  return (
    <section className="py-24 px-6 bg-[#0d0d0d] border-y border-[#222222]">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1a1a1a]">
          {STATS.map(({ value, label, sub }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.5,
                delay: i * 0.09,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-[#0d0d0d] px-8 py-10 flex flex-col gap-1.5"
            >
              <span
                className="text-white text-3xl md:text-[2.4rem] font-bold tracking-tight leading-none mb-1"
                style={{ fontFamily: "'Google Sans', sans-serif" }}
              >
                {value}
              </span>
              <span className="text-[#888888] text-sm font-medium">{label}</span>
              <span className="text-[#3a3a3a] text-xs mt-1">{sub}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
