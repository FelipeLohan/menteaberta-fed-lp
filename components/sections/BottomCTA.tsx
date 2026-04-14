import { Phone, MessageCircle } from "lucide-react";
import Container from "@/components/layout/Container";

export default function BottomCTA() {
  return (
    <section className="py-20 sm:py-24" aria-labelledby="bottom-cta-heading">
      <Container>
        {/* Main banner */}
        <div className="relative overflow-hidden bg-[#008B8B] rounded-3xl p-10 sm:p-14 text-center shadow-2xl shadow-teal-900/20">
          {/* Decorative blobs inside banner */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute -top-12 -left-12 w-52 h-52 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-[#006E6E]/60 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-2xl" />
          </div>

          <div className="relative z-10">
            {/* Heading */}
            <h2
              id="bottom-cta-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
            >
              Você merece se sentir bem.
            </h2>
            <p className="text-teal-100/90 text-lg sm:text-xl max-w-xl mx-auto leading-relaxed mb-10">
              Dar o primeiro passo pode ser difícil, mas você não precisa fazê-lo
              sozinho. Estamos aqui, a qualquer hora.
            </p>

            {/* CTA Button */}
            <button
              id="bottom-cta-start-btn"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-[#008B8B] font-semibold text-lg hover:bg-teal-50 active:scale-95 transition-all duration-200 shadow-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              <MessageCircle size={22} strokeWidth={2} />
              Começar Agora
            </button>
          </div>

          {/* Separator line */}
          <div className="relative z-10 my-8 border-t border-white/20" />

          {/* Emergency notice */}
          <div className="relative z-10 flex items-center justify-center gap-3 flex-wrap">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/15 text-white flex-shrink-0">
              <Phone size={16} strokeWidth={2} />
            </span>
            <p className="text-teal-100 text-sm">
              <strong className="text-white">Em caso de emergência, ligue para: </strong>
              CVV: <strong className="text-white">188</strong> · 24 horas, todos os dias
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
