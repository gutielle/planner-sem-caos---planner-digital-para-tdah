

import React from 'react';
import { Analytics } from '@vercel/analytics/react';

// --- Reusable Icon Component ---
const CheckIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  </svg>
);

// --- Page Section Components ---

const Header: React.FC = () => (
  <header className="py-5 px-4 sm:px-6 bg-creme-papel">
    <div className="text-center">
      <a href="#" className="text-verde-musgo text-2xl font-bold tracking-wider">Planner Sem Caos</a>
    </div>
  </header>
);

// Você pode substituir estas imagens por suas próprias imagens locais
// Coloque suas imagens na pasta public/images/planner/ com proporção 2667:2000 (2667x2000px)

const Hero: React.FC = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="text-center pt-8 sm:pt-12 pb-6 sm:pb-8 bg-creme-papel">
      <div className="px-4 sm:px-6">
        {/* Mensagem especial de remarketing */}
        <div className="mb-6">
          <p className="text-verde-musgo text-base sm:text-lg">
            <span className="font-bold text-terracota">Bem-vindo de volta! 🎁</span> Preparamos um valor especial só pra você: <span className="font-bold text-terracota">R$ 27,00</span>.
          </p>
        </div>
        
        <h1 className="text-4xl sm:text-5xl font-black text-verde-musgo leading-tight">
          Finalmente, um Planner Feito para o Cérebro com TDAH.
        </h1>
        <p className="mt-4 text-base sm:text-lg text-verde-musgo/80">
          Pare de lutar contra seu cérebro e comece a trabalhar com ele. Nosso planner digital ajuda você a domar o caos, gerenciar prioridades e finalmente concluir suas tarefas.
        </p>
      </div>
      <div className="mt-8 px-4 sm:px-6">
        <div className="max-w-md mx-auto aspect-[1728/2304]">
          <img
            src="/images/cover/capa-mockup-novo.jpg"
            alt="Capa do Planner Sem Caos - ferramenta de organização para TDAH"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      
      {/* Botão CTA no Hero */}
      <div className="mt-8 px-4 sm:px-6">
        <button
          onClick={scrollToPricing}
          className="bg-terracota text-white font-bold text-lg uppercase w-full max-w-md py-4 px-6 rounded-md shadow-lg transform hover:scale-105 hover:bg-pessego-suave transition-all duration-300 ease-in-out"
        >
          Garantir Meu Planner
        </button>
        <p className="mt-4 text-base sm:text-lg text-verde-musgo/80 text-center">
          +170 páginas + 5 bônus por R$ 27
        </p>
        <p className="text-sm sm:text-base text-terracota font-semibold text-center mt-1">
          (só nesta visita)
        </p>
      </div>
    </section>
  );
  };

const ScienceBasedSection: React.FC = () => {
  const steps = [
    {
      title: 'Baseado em ciência',
      text: 'Descubra como funciona o seu cérebro com TDAH, com páginas que explicam hábitos inconscientes e neurobiologia, além de dicas de leitura para se aprofundar',
    },
    {
      title: 'Modelos inéditos',
      text: 'Modelos inéditos para TDAH que eu criei, como a Flor de Lótus do Hiperfoco, a Regra de Poupança 10&10, o Planner de Foco para Ligações, o Carrinho de Compras de 24 Horas, o Checklist de Compras por Impulso, o Planejamento DIV/CON, as Pétalas do Poder da Produtividade e muito mais!',
    },
    {
      title: 'Coaching e foco',
      text: 'Dicas, conselhos e coaching para te ajudar a focar nos seus pontos fortes e criar hábitos e rotinas que cuidem de você e funcionem junto com o seu cérebro, em vez de contra ele.',
    },
    {
      title: 'Design flexível',
      text: 'Design e estrutura únicos que te dão total flexibilidade para personalizar o planner totalmente para a sua vida, rotina e trabalho.',
    },
  ];

  return (
    <section className="px-4 sm:px-6 py-12 sm:py-16 bg-rosa-aquarela">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-verde-musgo mb-10 text-center">
          Nossos planners são modernos e baseados em ciência
        </h2>
        <ol>
          {steps.map((step, index) => (
            <li key={index} className="flex gap-4 sm:gap-6">
              <div className="flex flex-col items-center">
                <span className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-terracota text-white font-bold text-base sm:text-lg shadow-md shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {index < steps.length - 1 && (
                  <span className="flex-1 w-0.5 bg-terracota/20 my-2" aria-hidden="true" />
                )}
              </div>
              <div className={index < steps.length - 1 ? 'pb-8 sm:pb-10' : ''}>
                <h3 className="text-xl sm:text-2xl font-bold text-verde-musgo mb-2">
                  {step.title}
                </h3>
                <p className="text-base sm:text-lg text-verde-musgo/80 leading-relaxed">
                  {step.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};





const PlannerInsideSection: React.FC = () => {
  const pages = [
    '/images/nova-versao/versao01.jpg',
    '/images/nova-versao/versao02.jpg',
    '/images/nova-versao/versao03.jpg',
    '/images/nova-versao/versao04.jpg',
    '/images/nova-versao/versao05.jpg',
    '/images/nova-versao/versao06.jpg',
    '/images/nova-versao/versao07.jpg',
    '/images/nova-versao/versao08.jpg',
    '/images/nova-versao/versao09.jpg',
    '/images/nova-versao/versao10.jpg',
    '/images/nova-versao/versao11.jpg',
    '/images/nova-versao/versao12.jpg',
  ];

  const trackRef = React.useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(true);

  const updateArrows = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollPrev(el.scrollLeft > 4);
    setCanScrollNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  React.useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener('scroll', updateArrows, { passive: true });
    window.addEventListener('resize', updateArrows);
    return () => {
      el.removeEventListener('scroll', updateArrows);
      window.removeEventListener('resize', updateArrows);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollByCard = (direction: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const amount = card ? card.clientWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: direction * amount, behavior: 'smooth' });
  };

  const arrowClass = 'absolute top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-11 h-11 rounded-full bg-white text-verde-musgo shadow-md border border-verde-musgo/10 transition hover:bg-verde-musgo hover:text-white disabled:opacity-30 disabled:pointer-events-none';

  return (
    <section className="px-4 sm:px-6 py-12 sm:py-16 bg-creme-papel">
      <h2 className="text-3xl sm:text-4xl font-bold text-verde-musgo mb-4 text-center">
        Veja o Planner por Dentro
      </h2>
      <p className="text-lg text-verde-musgo/80 mb-10 max-w-3xl mx-auto text-center leading-relaxed">
        Uma prévia de algumas páginas que você vai receber, tudo pensado para funcionar com o seu cérebro.
      </p>
      <div className="relative max-w-5xl mx-auto">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          disabled={!canScrollPrev}
          aria-label="Páginas anteriores"
          className={`${arrowClass} left-1 sm:-left-5`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <div
          ref={trackRef}
          className="hide-scrollbar flex gap-5 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-1"
        >
          {pages.map((image, index) => (
            <div key={image} className="snap-start shrink-0 w-[72%] sm:w-[46%] md:w-[31%]">
              <img
                src={image}
                alt={`Página ${index + 1} do Planner Sem Caos`}
                className="w-full h-auto rounded-lg shadow-md"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          disabled={!canScrollNext}
          aria-label="Próximas páginas"
          className={`${arrowClass} right-1 sm:-right-5`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </section>
  );
};

const Features: React.FC = () => (
    <section className="px-4 sm:px-6 py-8 sm:py-10 bg-creme-papel">
      <h2 className="text-2xl sm:text-3xl font-bold text-verde-musgo mb-8 text-center">Projetado para Ajudar Você a Prosperar</h2>
      <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
        <div>
          <h3 className="text-xl font-semibold text-terracota mb-3">O Que Vem Dentro</h3>
          <ul className="space-y-2 text-verde-musgo">
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-dourado flex-shrink-0 mt-1" /><span>Planejamentos diários, semanais e mensais – organize tudo de forma simples e clara</span></li>
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-dourado flex-shrink-0 mt-1" /><span>Listas e trackers práticos – nunca mais esqueça o que é importante</span></li>
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-dourado flex-shrink-0 mt-1" /><span>Hábitos saudáveis – defina e alcance suas metas com orientação passo a passo</span></li>
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-dourado flex-shrink-0 mt-1" /><span>Autocuidado em foco – trackers para cuidar de você todos os dias</span></li>
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-dourado flex-shrink-0 mt-1" /><span>Controle financeiro fácil – acompanhe orçamento e finanças sem stress</span></li>
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-dourado flex-shrink-0 mt-1" /><span>Casa em ordem – ferramentas para organizar o dia a dia do lar</span></li>
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-dourado flex-shrink-0 mt-1" /><span>Mente tranquila – técnicas baseadas em evidências para acalmar e focar</span></li>
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-dourado flex-shrink-0 mt-1" /><span>E muito mais!!</span></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-terracota mb-3">Benefícios para o Seu Cérebro</h3>
          <ul className="space-y-2 text-verde-musgo">
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-dourado flex-shrink-0 mt-1" /><span>Reduza a sobrecarga com uma estrutura clara.</span></li>
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-dourado flex-shrink-0 mt-1" /><span>Mantenha-se motivado com rastreadores visuais.</span></li>
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-dourado flex-shrink-0 mt-1" /><span>Abrace a criatividade com espaço para anotações.</span></li>
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-dourado flex-shrink-0 mt-1" /><span>Crie rotinas que realmente funcionam.</span></li>
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-dourado flex-shrink-0 mt-1" /><span>Melhore o foco com técnicas adaptadas ao TDAH.</span></li>
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-dourado flex-shrink-0 mt-1" /><span>Diminua a ansiedade com planejamento estruturado.</span></li>
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-dourado flex-shrink-0 mt-1" /><span>Aumente a autoestima celebrando pequenas conquistas.</span></li>
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-dourado flex-shrink-0 mt-1" /><span>Desenvolva autodisciplina com ferramentas práticas.</span></li>
          </ul>
        </div>
      </div>
    </section>
);

const testimonials = [
  {
    quote: "Eu já tentei todos os planners que existem, mas nenhum funcionou. O Planner Sem Caos é diferente. É flexível, não me faz sentir culpado por pular um dia, e a seção de 'despejo de ideias' é uma salvação. Finalmente estou em dia com meus prazos e me sinto muito menos ansioso.",
    author: "Alex P."
  },
  {
    quote: "A melhor parte é que não é datado. Eu posso começar a usar a qualquer momento do ano sem desperdiçar páginas. É perfeito para os meus picos de motivação. Finalmente um sistema que se adapta a mim!",
    author: "Julia M."
  },
  {
    quote: "O design é lindo e funcional. Não é sobrecarregado com seções desnecessárias. Ele me ajuda a focar no que realmente importa no dia. Minha produtividade melhorou muito desde que comecei a usá-lo.",
    author: "Lucas F."
  }
];

const Testimonial: React.FC = () => (
  <section className="px-4 sm:px-6 py-8 sm:py-10 bg-creme-papel">
    <h2 className="text-2xl sm:text-3xl font-bold text-verde-musgo mb-8 text-center">A Transformação é Real</h2>
    <div className="max-w-2xl mx-auto space-y-8">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-rosa-aquarela p-6 rounded-lg shadow-md border border-terracota/10">
          <p className="italic text-base sm:text-lg text-verde-musgo relative">
            <span className="text-4xl sm:text-5xl text-terracota opacity-20 absolute -top-2 -left-2 sm:-top-4 sm:-left-4 font-serif">“</span>
            {testimonial.quote}
          </p>
          <p className="font-semibold text-right mt-4 text-terracota">- {testimonial.author}</p>
        </div>
      ))}
    </div>
  </section>
);

const WhoAmI: React.FC = () => (
  <section className="px-4 sm:px-6 py-8 sm:py-10 bg-creme-papel">
    <h2 className="text-2xl sm:text-3xl font-bold text-verde-musgo mb-8 text-center">Uma Ferramenta Criada por Alguém que Entende</h2>
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="md:w-1/3 flex justify-center">
        <img 
          src="/images/creator/profile.jpg" 
          alt="Mariana Costa, educadora TDAH e criadora do Planner Sem Caos." 
          className="rounded-full w-40 h-40 object-cover shadow-lg border-4 border-rosa-aquarela"
        />
      </div>
      <div className="md:w-2/3 text-center md:text-left text-verde-musgo">
        <p className="text-base sm:text-lg mb-4">
          "Olá! Eu sou a Juliana, educadora especializada em TDAH. Por anos, minha mesa era um mar de post-its e cadernos pela metade. Como uma adulta com TDAH, a organização tradicional nunca funcionou para mim. Era frustrante e me fazia sentir inadequada."
        </p>
        <p className="text-base sm:text-lg mb-4">
          "Sou dedicada a criar ferramentas e recursos que ajudem pessoas neurodivergentes a prosperar. Sabemos, por experiência própria, como pode ser desafiador encontrar sistemas que realmente funcionem, e estou aqui para mudar isso."
        </p>
        <p className="text-base sm:text-lg">
          "Criei o <strong>Planner Sem Caos</strong> porque precisava de uma ferramenta que se adaptasse ao meu cérebro, e não o contrário. Minha esperança é que ele te ajude a encontrar a mesma clareza e controle que ele me trouxe."
        </p>
        <p className="font-semibold text-right mt-4 text-terracota">- Juliana C.</p>
      </div>
    </div>
  </section>
);



// Validity notice with clean, subtle styling and micro-interaction
const ValidityNotice: React.FC = () => (
  <div className="inline-flex items-center justify-center gap-2 bg-creme-papel border border-terracota/20 rounded-md p-3 shadow-sm mx-auto">
    <svg className="w-4 h-4 text-terracota animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" strokeWidth="2" />
      <path d="M12 7v5l3 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <span className="text-xs font-bold text-terracota tracking-wide uppercase">BÔNUS LIMITADO</span>
    <span className="text-xs text-verde-musgo/60">Válido até hoje às 23h59</span>
  </div>
);


const Pricing: React.FC = () => (
  <section id="pricing" className="text-verde-musgo text-center px-4 sm:px-6 py-10 sm:py-12 bg-creme-papel">
    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-verde-musgo">Adquira Seu Planner 👇</h2>
    <div className="mt-2 mb-8 text-base sm:text-lg max-w-lg mx-auto space-y-4 text-verde-musgo/80">
      <p>Faltam poucos meses pra virada do ano…</p>
      <p>e você ainda sente que está perdido?</p>
      <p>Rotina bagunçada, planos que não saem do papel, foco que vai e volta…</p>
      <p>Não é sobre tentar mais é sobre ter o sistema certo.</p>
      <p>O Planner Sem Caos foi feito pra quem precisa de clareza sem pressão.</p>
      <p>Disponível agora com valor especial.</p>
    </div>
    
    <div className="flex justify-center max-w-md mx-auto">
      {/* Plano Premium */}
      <div className="bg-rosa-aquarela text-verde-musgo rounded-lg shadow-xl p-8 border-2 border-terracota relative w-full">
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-terracota text-white px-4 py-1 rounded-full text-sm font-bold">
          MAIS POPULAR
        </div>
        
        {/* Limited Time Badge */}
        <div className="absolute -top-3 -right-3 bg-terracota text-white px-3 py-1 rounded-full text-xs font-bold transform rotate-12">
          65% OFF
        </div>
        
        
        <p className="text-lg mb-2 text-verde-musgo/80">Pagamento único. Sem assinaturas.</p>
          <img 
            src="/images/cover/imagem-oferta.jpg" 
            alt="Capa do eBook Planner Sem Caos"
            className="w-full max-w-[240px] mx-auto my-4 block pricing-cover-animate"
            loading="lazy"
          />
        

        
        <div className="my-6">
          <span className="text-2xl font-semibold line-through text-verde-musgo/40">R$ 98,00</span>
          <span className="text-4xl sm:text-5xl font-black text-verde-musgo ml-2">R$ 27<span className="text-2xl sm:text-3xl align-top">,00</span></span>
        </div>
        <p className="text-sm text-verde-musgo/60 -mt-4 mb-4">Planner com mais de 170 páginas</p>
        

        <ul className="space-y-3 text-left mb-6">
          <li className="flex items-center"><CheckIcon className="w-5 h-5 mr-2 text-dourado flex-shrink-0" /><span>Acesse e preencha de onde quiser, no celular, tablet ou computador</span></li>
          <li className="flex items-center"><CheckIcon className="w-5 h-5 mr-2 text-dourado flex-shrink-0" /><span>Planner em PDF para Impressão</span></li>
          <li className="flex items-center"><CheckIcon className="w-5 h-5 mr-2 text-dourado flex-shrink-0" /><span>Layouts Flexíveis e Não Datados</span></li>
          <li className="flex items-center"><CheckIcon className="w-5 h-5 mr-2 text-dourado flex-shrink-0" /><span>+170 Maneiras de fazer as coisas acontecerem</span></li>
          <li className="flex items-center"><CheckIcon className="w-5 h-5 mr-2 text-dourado flex-shrink-0" /><span>Imprima quantas vezes quiser</span></li>
          <li className="flex items-center"><CheckIcon className="w-5 h-5 mr-2 text-dourado flex-shrink-0" /><span>Atualizações grátis para sempre</span></li>
        </ul>
        
        <a 
          href={(function() {
            const base = "https://pay.hotmart.com/G105627121L?off=jr9dagv7&checkoutMode=10";
            if (typeof window === "undefined") return base;
            let url: URL;
            try {
              url = new URL(base);
            } catch {
              return base;
            }
            const allowed = new Set([
              "utm_source",
              "utm_medium",
              "utm_campaign",
              "utm_term",
              "utm_content",
              "utm_id",
              "gclid",
              "fbclid",
              "wbraid",
              "gbraid",
              "msclkid",
              "src",
              "sck"
            ]);
            const incoming = new URLSearchParams(window.location.search);
            const hash = window.location.hash || "";
            const hashQueryIndex = hash.indexOf("?");
            if (hashQueryIndex !== -1) {
              const hashParams = new URLSearchParams(hash.slice(hashQueryIndex));
              hashParams.forEach((value, key) => {
                if (!incoming.has(key)) {
                  incoming.set(key, value);
                }
              });
            }
            
            // Pass allowed parameters
            incoming.forEach((value, key) => {
              if (allowed.has(key) || key.startsWith("utm_")) {
                if (!url.searchParams.has(key)) {
                  url.searchParams.set(key, value);
                }
              }
            });

            // Ensure sck (Source Check Key) is populated for Hotmart tracking
            // "Hotmart funciona como SCK" - User request to ensure origin is tracked via SCK
            // Concat all UTM parameters to ensure full tracking
            if (!url.searchParams.has("sck")) {
              const sckParts = [];
              if (incoming.has("sck")) sckParts.push(incoming.get("sck"));
              if (incoming.has("src")) sckParts.push(incoming.get("src"));
              if (incoming.has("utm_source")) sckParts.push(incoming.get("utm_source"));
              if (incoming.has("utm_campaign")) sckParts.push(incoming.get("utm_campaign"));
              if (incoming.has("utm_medium")) sckParts.push(incoming.get("utm_medium"));
              if (incoming.has("utm_content")) sckParts.push(incoming.get("utm_content"));
              if (incoming.has("utm_term")) sckParts.push(incoming.get("utm_term"));
              
              const source = sckParts.join("|");
              if (source) {
                url.searchParams.set("sck", source);
              }
            }

            // Also ensure src is populated as fallback for producers
            if (!url.searchParams.has("src")) {
              const srcParts = [];
              if (incoming.has("src")) srcParts.push(incoming.get("src"));
              if (incoming.has("sck")) srcParts.push(incoming.get("sck"));
              if (incoming.has("utm_source")) srcParts.push(incoming.get("utm_source"));
              if (incoming.has("utm_campaign")) srcParts.push(incoming.get("utm_campaign"));
              if (incoming.has("utm_medium")) srcParts.push(incoming.get("utm_medium"));
              if (incoming.has("utm_content")) srcParts.push(incoming.get("utm_content"));
              if (incoming.has("utm_term")) srcParts.push(incoming.get("utm_term"));

              const source = srcParts.join("|");
              if (source) {
                url.searchParams.set("src", source);
              }
            }
            
            return url.toString();
          })()}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-terracota text-white font-bold text-lg uppercase w-full py-4 px-6 rounded-md shadow-lg transform hover:scale-105 hover:bg-pessego-suave transition-all duration-300 ease-in-out animate-pulse"
        >
          GARANTIR MEU PLANNER
        </a>
        
        {/* Risk Reversal */}
        <div className="mt-4 text-center">
          <p className="text-xs text-verde-musgo/60">🛡️ Garantia de 30 dias ou seu dinheiro de volta</p>
          <p className="text-xs text-verde-musgo/40 mt-1">Compra 100% segura e protegida</p>
        </div>
      </div>
    </div>
  </section>
);

const FAQ: React.FC = () => (
  <section className="px-4 sm:px-6 py-8 sm:py-10 bg-rosa-aquarela">
    <h2 className="text-2xl sm:text-3xl font-bold text-verde-musgo mb-8 text-center">
      Perguntas Frequentes
    </h2>
    <div className="max-w-2xl mx-auto space-y-6 text-left">
      <div>
        <h3 className="font-semibold text-base sm:text-lg text-terracota">
          Como funciona o planner?
        </h3>
        <p className="mt-1 text-sm sm:text-base text-verde-musgo/80">
          Você receberá um arquivo PDF de alta qualidade no tamanho A4 e A5 pronto para ser impresso em casa ou em uma gráfica. Você pode imprimir as páginas que precisar, quantas vezes quiser. Recomendamos imprimir em papel de gramatura média a alta para maior durabilidade.
        </p>
      </div>
      <div className="border-t border-terracota/10 pt-6">
        <h3 className="font-semibold text-base sm:text-lg text-terracota">
          É um pagamento único ou uma assinatura?
        </h3>
        <p className="mt-1 text-sm sm:text-base text-verde-musgo/80">
          É um pagamento 100% único! Você compra uma vez e tem acesso vitalício ao planner e a todas as futuras atualizações, sem nenhuma taxa recorrente.
        </p>
      </div>
      <div className="border-t border-terracota/10 pt-6">
        <h3 className="font-semibold text-base sm:text-lg text-terracota">
          Como receberei o planner após a compra?
        </h3>
        <p className="mt-1 text-sm sm:text-base text-verde-musgo/80">
          Imediatamente após a confirmação do pagamento, você receberá um e-mail com um link para baixar seu planner em PDF. O processo é instantâneo.
        </p>
      </div>
      <div className="border-t border-terracota/10 pt-6">
        <h3 className="font-semibold text-base sm:text-lg text-terracota">
          E se não funcionar para mim?
        </h3>
        <p className="mt-1 text-sm sm:text-base text-verde-musgo/80">
          Temos uma garantia de satisfação de 30 dias. Se você sentir que o planner não atendeu às suas expectativas, basta nos contatar dentro de 30 dias para um reembolso total, sem complicações.
        </p>
      </div>
      <div className="border-t border-terracota/10 pt-6">
        <h3 className="font-semibold text-base sm:text-lg text-terracota">
          Preciso ter diagnóstico de TDAH para usar?
        </h3>
        <p className="mt-1 text-sm sm:text-base text-verde-musgo/80">
          Não, o planner foi desenvolvido para ajudar qualquer pessoa que se identifique com os desafios do TDAH, mesmo sem diagnóstico formal. As estratégias são úteis para qualquer pessoa que busca melhorar seu foco e organização.
        </p>
      </div>
    </div>
  </section>
);


const Footer: React.FC = () => (
  <footer className="bg-verde-musgo text-creme-papel text-center px-4 sm:px-6 py-8 border-t border-terracota/20">
    <p className="font-bold text-xl tracking-tight">Planner Sem Caos</p>
    <p className="text-sm mt-2 opacity-70">
      &copy; {new Date().getFullYear()} Planner Sem Caos. Todos os Direitos Reservados.
    </p>
    <p className="text-xs mt-6 opacity-50 max-w-md mx-auto leading-relaxed">
      Investi anos de trabalho na pesquisa e design deste planner com a minha equipe. Por favor, respeite os criadores e apoie o trabalho original.
    </p>
    <div className="text-xs mt-6 opacity-60 space-x-6">
      <a href="#" className="hover:text-rosa-aquarela transition-colors">Termos de Serviço</a>
      <a href="#" className="hover:text-rosa-aquarela transition-colors">Política de Privacidade</a>
    </div>
  </footer>
);



function AppRemarketing() {
  return (
    <div className="min-h-screen bg-creme-papel font-sans text-verde-musgo antialiased">
      <div className="bg-terracota text-white text-center text-xs sm:text-sm font-semibold tracking-wide py-2 px-4">
        Escolhido por +10.912 pessoas com TDAH
      </div>
      <main className="max-w-screen-md mx-auto shadow-2xl bg-creme-papel">
        <div className="bg-creme-papel">
          <Hero />
          <ScienceBasedSection />
          <PlannerInsideSection />

      <Features />


          <Pricing />
        </div>
        <div className="bg-creme-papel">
          <Testimonial />

          <WhoAmI />
    
        </div>
        <FAQ />
        
        <Pricing />
        <Footer />
      </main>
      <div className="text-center text-xs text-verde-musgo/30 py-4">&nbsp;</div>
      
      <Analytics />
    </div>
      

  );
}

export default AppRemarketing;
