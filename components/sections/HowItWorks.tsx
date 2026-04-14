import { UserPlus, Edit, MessageSquare, Heart } from "lucide-react";
import { type LucideIcon } from "lucide-react";
import Container from "@/components/layout/Container";

interface Step {
  number: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: 1,
    icon: UserPlus,
    title: "Acesse anonimamente",
    description:
      "Nenhum cadastro, nome ou email é necessário. Sua identidade fica completamente protegida desde o início.",
  },
  {
    number: 2,
    icon: Edit,
    title: "Conte como se sente",
    description:
      "Descreva brevemente o que está te incomodando. Pode ser qualquer coisa — estamos aqui para ouvir, sem julgamentos.",
  },
  {
    number: 3,
    icon: MessageSquare,
    title: "Converse com um psicólogo",
    description:
      "Você será conectado a um psicólogo voluntário qualificado e registrado no CRP. A conversa é sigilosa.",
  },
  {
    number: 4,
    icon: Heart,
    title: "Cuide-se com apoio",
    description:
      "Receba orientação, acolhimento e estratégias para lidar com o que está sentindo, no seu tempo.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="py-20 sm:py-24"
      aria-labelledby="how-it-works-heading"
    >
      <Container>
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-[#E0F5F5] text-[#006E6E] text-xs font-semibold uppercase tracking-widest mb-4">
            Simples e acessível
          </span>
          <h2
            id="how-it-works-heading"
            className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-4"
          >
            Como Funciona?
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-lg leading-relaxed">
            Em apenas 4 passos, você tem acesso a apoio psicológico qualificado,
            gratuito e completamente anônimo.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <article
                key={step.number}
                className="relative bg-white rounded-2xl shadow-sm border border-slate-100 p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Step number badge */}
                <span
                  aria-label={`Passo ${step.number}`}
                  className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center rounded-full bg-[#008B8B] text-white text-xs font-bold shadow-sm"
                >
                  {step.number}
                </span>

                {/* Icon circle */}
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#E0F5F5] text-[#008B8B] mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={22} strokeWidth={1.75} />
                </div>

                <h3 className="font-semibold text-slate-900 text-base mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
