import { Brain, Phone } from "lucide-react";
import Link from "next/link";

const quickLinks = [
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Para Psicólogos", href: "#para-psicologos" },
  { label: "Privacidade", href: "#privacidade" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300" aria-label="Rodapé">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Col 1: Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#008B8B] text-white transition-transform group-hover:scale-105">
                <Brain size={20} strokeWidth={2} />
              </span>
              <span className="font-serif text-xl font-bold text-white">
                Mente Aberta
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Plataforma gratuita e anônima de apoio psicológico. Conectamos pessoas a
              psicólogos voluntários para conversas seguras e confidenciais.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Links Rápidos
            </h3>
            <ul className="flex flex-col gap-2" role="list">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-[#4DD9D9] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Help / CVV */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Em caso de emergência
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800 border border-slate-700">
                <span className="mt-0.5 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-red-500/20 text-red-400">
                  <Phone size={16} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">CVV — 188</p>
                  <p className="text-xs text-slate-400">Ligação gratuita · 24h por dia, todos os dias</p>
                  <a
                    href="https://www.cvv.org.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#4DD9D9] hover:underline mt-1 inline-block"
                  >
                    Acessar cvv.org.br →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-slate-500 text-center">
            © 2026 Mente Aberta. Todos os direitos reservados.
          </p>
          <p className="text-xs text-slate-600">
            Feito com 💚 para quem precisa.
          </p>
        </div>
      </div>
    </footer>
  );
}
