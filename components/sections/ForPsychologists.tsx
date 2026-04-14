import { Clock, Users, Award, HeartHandshake } from "lucide-react";
import { type LucideIcon } from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Clock,
    title: "Flexibilidade Total",
    description:
      "Atenda quando e onde quiser, encaixando o voluntariado na sua rotina sem compromisso fixo.",
  },
  {
    icon: Users,
    title: "Impacto Social Real",
    description:
      "Alcance pessoas que nunca teriam acesso a apoio profissional. Cada conversa pode mudar uma vida.",
  },
  {
    icon: Award,
    title: "Certificação de Horas",
    description:
      "Receba certificado de horas de atividade voluntária para o seu currículo e sua jornada profissional.",
  },
  {
    icon: HeartHandshake,
    title: "Comunidade de Apoio",
    description:
      "Faça parte de uma rede de psicólogos comprometidos com saúde mental acessível para todos.",
  },
];

export default function ForPsychologists() {
  return (
    <section
      id="para-psicologos"
      className="py-20 sm:py-24 bg-white"
      aria-labelledby="psychologists-heading"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text & CTA */}
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-[#E0F5F5] text-[#006E6E] text-xs font-semibold uppercase tracking-widest mb-5">
              Para profissionais
            </span>
            <h2
              id="psychologists-heading"
              className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-snug"
            >
              Transforme vidas com seu{" "}
              <span className="text-[#008B8B]">conhecimento</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              A Mente Aberta é uma plataforma de impacto social onde psicólogos
              registrados no{" "}
              <strong className="text-slate-800">CRP</strong> podem oferecer apoio
              emocional a pessoas que precisam, de forma completamente voluntária e
              flexível.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Sua participação não apenas ajuda quem está em sofrimento — ela fortalece
              a comunidade de saúde mental no Brasil e reconhece seu compromisso ético
              com a sociedade.
            </p>

            {/* CRP validation tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#E0F5F5] border border-[#008B8B]/20 text-[#006E6E] text-sm font-medium mb-8">
              <Award size={16} strokeWidth={2} />
              Validação de CRP obrigatória · Plataforma segura
            </div>

            <div className="block">
              <Button variant="primary" size="lg" rounded id="psychologists-cta">
                <HeartHandshake size={20} strokeWidth={2} />
                Quero Ser Voluntário
              </Button>
            </div>
          </div>

          {/* Right: Feature cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article
                  key={feature.title}
                  className="bg-[#F4F9F9] rounded-2xl p-6 border border-teal-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#E0F5F5] text-[#008B8B] mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <h3 className="font-semibold text-slate-900 text-sm mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
