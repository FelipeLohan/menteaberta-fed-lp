import { Shield, MessageCircle, Heart } from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-32"
      aria-labelledby="hero-heading"
    >
      {/* Decorative background blobs */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 pointer-events-none"
      >
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#008B8B]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-32 w-72 h-72 bg-teal-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-emerald-100/40 rounded-full blur-2xl" />
      </div>

      <Container>
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E0F5F5] border border-[#008B8B]/20 text-[#006E6E] text-sm font-medium mb-8 shadow-sm">
            <Shield size={15} strokeWidth={2.5} />
            <span>100% Anônimo e Gratuito</span>
          </div>

          {/* Heading */}
          <h1
            id="hero-heading"
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight max-w-3xl mb-6"
          >
            Você não precisa{" "}
            <br className="hidden sm:block" />
            enfrentar isso sozinho.{" "}
            <span className="text-[#008B8B]">Estamos aqui para ouvir.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed mb-10">
            Uma plataforma segura, gratuita e completamente anônima que conecta você
            a psicólogos voluntários prontos para te ajudar, sem julgamentos.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Button
              id="hero-cta-support"
              variant="primary"
              size="lg"
              rounded
              className="w-full sm:w-auto shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30"
            >
              <MessageCircle size={20} strokeWidth={2} />
              Preciso de Apoio
            </Button>
            <Button
              id="hero-cta-volunteer"
              variant="outline"
              size="lg"
              rounded
              className="w-full sm:w-auto"
            >
              <Heart size={20} strokeWidth={2} />
              Sou Psicólogo Voluntário
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 mt-14 text-sm text-slate-500">
            {[
              "Sem cadastro obrigatório",
              "Conexão criptografada",
              "Sem rastreamento",
            ].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#008B8B]" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
