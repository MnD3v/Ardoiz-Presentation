import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/8 py-12 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        <div>
          <a href="#" className="mb-4 flex items-center gap-2.5 text-white font-bold tracking-[0.16em] uppercase">
            <span className="grid h-8 w-8 place-items-center rounded-lg border border-[#00E0E8]/25 bg-[#00E0E8]/8">
              <img src="/ardoiz-logo.png" alt="" className="h-5 w-5 object-contain" />
            </span>
            <span className="text-sm">Ardoiz</span>
          </a>
          <p className="text-[#87928E] text-sm leading-relaxed max-w-sm">
            La plateforme e-learning pensée pour les centres de formation.
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 md:items-end">
          <p className="text-[#66716D] text-xs uppercase tracking-widest font-medium">Contact</p>
          <a
            href="mailto:saeicube.tools@gmail.com"
            className="inline-flex items-center gap-1.5 text-[#A3ADAA] hover:text-[#00E0E8] text-sm transition-colors duration-200"
          >
            saeicube.tools@gmail.com
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[#5E6965] text-xs">© {year} Ardoiz. Tous droits réservés.</p>
        <p className="text-[#4F5A56] text-xs">Conçu pour faire grandir les talents.</p>
      </div>
    </footer>
  )
}
