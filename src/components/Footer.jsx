const LINKS = [
  {
    heading: 'Plateforme',
    items: [
      { label: 'Fonctionnalités', href: '#features' },
      { label: 'Comment ça fonctionne', href: '#howitworks' },
      { label: 'Ardoiz Etudiant — Apprenants', href: '#qdclic' },
      { label: 'Ardoiz-Formateur — Formateurs', href: '#qfdclic' },
    ],
  },
  {
    heading: 'Contact',
    items: [
      { label: 'Demander une démo', href: '#contact' },
      { label: 'saeicube.tools@gmail.com', href: 'mailto:saeicube.tools@gmail.com' },
    ],
  },
  {
    heading: 'Légal',
    items: [
      { label: 'Mentions légales', href: '#' },
      { label: 'Politique de confidentialité', href: '#' },
      { label: 'CGU', href: '#' },
    ],
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="border-t border-[#222222] pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between gap-12 mb-14">
          <div className="max-w-xs">
            <span
              className="text-white font-bold text-xl tracking-wide block mb-4"
              style={{ fontFamily: "'Google Sans', sans-serif" }}
            >
              ARDOIZ
            </span>
            <p className="text-[#444444] text-sm leading-relaxed">
              La plateforme e-learning des centres de formation modernes.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
            {LINKS.map(({ heading, items }) => (
              <div key={heading}>
                <h4 className="text-[#666666] text-xs uppercase tracking-wide font-medium mb-4">
                  {heading}
                </h4>
                <ul className="flex flex-col gap-3">
                  {items.map(({ label, href }) => (
                    <li key={label}>
                      <a
                        href={href}
                        className="text-[#444444] hover:text-white text-sm transition-colors duration-200"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-[#1a1a1a] flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-[#333333] text-xs">© {year} Ardoiz. Tous droits réservés.</p>
          <p className="text-[#333333] text-xs">Fait avec soin pour les centres de formation.</p>
        </div>

      </div>
    </footer>
  )
}
