function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const navLinks = [
  { href: "#percurso", label: "Percurso" },
  { href: "#inscricao", label: "Inscrição" },
  { href: "https://www.instagram.com/apicerunoficial/", label: "Instagram" },
  { href: "https://www.instagram.com/apiceacademia/", label: "Ápice Academia" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-apice-black border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12 py-16 md:py-20">
        <div className="grid md:grid-cols-12 gap-12 md:gap-10">
          <div className="md:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-apice-orange/70 mb-6">
              § Ápice Run · Edição 01 / 2026
            </p>
            <p className="font-display uppercase text-4xl md:text-5xl leading-[0.95] text-apice-white">
              Ápice
              <br />
              <span className="text-apice-orange">Run.</span>
            </p>
            <p className="mt-6 max-w-md text-sm text-apice-sweat/55 leading-relaxed">
              Primeira corrida de rua de Natal pensada para ser feita
              em dupla. 31 de maio · 05h · Ápice Academia · Capim Macio.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-apice-sweat/40 mb-6">
              Navegação
            </p>
            <ul className="space-y-3 font-mono text-[11px] uppercase tracking-[0.18em]">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    {...(l.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="text-apice-sweat/60 hover:text-apice-orange transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-apice-sweat/40 mb-6">
              Contato
            </p>
            <address className="not-italic text-sm text-apice-sweat/60 leading-relaxed space-y-1.5">
              <p>R. Aldo de Melo Freire, 1877</p>
              <p>Capim Macio · Natal/RN</p>
              <p className="pt-2">
                <a
                  href="tel:+5584991125989"
                  className="hover:text-apice-orange transition-colors font-mono uppercase tracking-[0.15em] text-[11px]"
                >
                  (84) 99112-5989
                </a>
              </p>
            </address>

            <div className="flex items-center gap-3 mt-7">
              <a
                href="https://www.instagram.com/apicerunoficial/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Ápice Run"
                className="size-10 rounded-md border border-white/15 flex items-center justify-center text-apice-sweat/60 hover:border-apice-orange hover:text-apice-orange transition-all"
              >
                <InstagramIcon className="size-4" />
              </a>
              <a
                href="https://www.facebook.com/apiceacademia/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da Ápice Academia"
                className="size-10 rounded-md border border-white/15 flex items-center justify-center text-apice-sweat/60 hover:border-apice-orange hover:text-apice-orange transition-all"
              >
                <FacebookIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="rounded-md border border-apice-orange/20 bg-apice-orange/[0.04] p-5 md:p-6">
            <p className="text-xs md:text-sm text-apice-sweat/70 leading-relaxed">
              <span className="font-mono uppercase tracking-[0.18em] text-apice-orange">
                Aviso de portfólio:
              </span>{" "}
              esta página é um{" "}
              <strong className="text-apice-white font-medium">
                projeto conceitual não-oficial
              </strong>{" "}
              desenvolvido por{" "}
              <a
                href="https://zenitestudio.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-apice-orange hover:underline"
              >
                Zênite Studio
              </a>{" "}
              como demonstração de design. Para inscrições oficiais e informações
              verídicas sobre o evento, consulte{" "}
              <a
                href="https://www.instagram.com/apicerunoficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-apice-orange hover:underline"
              >
                @apicerunoficial
              </a>
              .
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.22em] text-apice-sweat/40">
            <p>
              Concept design · {year} ·{" "}
              <a
                href="https://zenitestudio.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-apice-orange transition-colors"
              >
                Zênite Studio
              </a>
            </p>
            <p>Treine · Corra · Supere</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
