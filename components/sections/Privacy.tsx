import { ShieldCheck, Lock, EyeOff, Database } from "lucide-react";
import { type LucideIcon } from "lucide-react";
import Container from "@/components/layout/Container";

interface PrivacyCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

const cards: PrivacyCard[] = [
  {
    icon: ShieldCheck,
    title: "Anonimato Garantido",
    description:
      "Nenhuma informação pessoal é solicitada. Você conversa sem revelar quem é.",
  },
  {
    icon: Lock,
    title: "Criptografia Ponta a Ponta",
    description:
      "Todas as conversas são criptografadas. Nem nós conseguimos ler o conteúdo das mensagens.",
  },
  {
    icon: EyeOff,
    title: "Sem Rastreamento",
    description:
      "Não coletamos dados de navegação, não usamos cookies de rastreamento, nem vendemos dados a terceiros.",
  },
  {
    icon: Database,
    title: "Seus Dados, Seu Controle",
    description:
      "Você pode encerrar a sessão a qualquer momento. Sem histórico armazenado — nada fica salvo sem seu consentimento.",
  },
];

export default function Privacy() {
  return (
    <section
      id="privacidade"
      className="py-20 sm:py-24"
      aria-labelledby="privacy-heading"
    >
      <Container>
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-[#E0F5F5] text-[#006E6E] text-xs font-semibold uppercase tracking-widest mb-4">
            Segurança em primeiro lugar
          </span>
          <h2
            id="privacy-heading"
            className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-4"
          >
            Sua Privacidade em Primeiro Lugar
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-lg leading-relaxed">
            Construímos cada detalhe da plataforma pensando em proteger você. 
            Sua segurança não é uma funcionalidade — é a nossa fundação.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className="bg-white rounded-2xl shadow-sm border border-slate-100 p-7 flex flex-col items-center text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Centered icon circle */}
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#E0F5F5] text-[#008B8B] mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={24} strokeWidth={1.75} />
                </div>

                <h3 className="font-semibold text-slate-900 text-base mb-2">
                  {card.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {card.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
