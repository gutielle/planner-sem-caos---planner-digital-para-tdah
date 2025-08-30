
import React, { useState, useRef } from 'react';

// --- Reusable Icon Component ---
const CheckIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  </svg>
);

const ChevronLeftIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
);

const ChevronRightIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
);

// --- Page Section Components ---

const Header: React.FC = () => (
  <header className="py-5 px-4 sm:px-6">
    <div className="text-center">
      <a href="#" className="text-white text-2xl font-bold tracking-wider">Planner Sem Caos</a>
    </div>
  </header>
);

// Você pode substituir estas imagens por suas próprias imagens locais
// Coloque suas imagens na pasta public/images/planner/ com proporção 2667:2000 (2667x2000px)
const plannerImages = [
  { src: "/images/planner/planner-daily.jpg", alt: "Visualização da página de planejamento diário do Planner Sem Caos." },
  { src: "/images/planner/planner-weekly.jpg", alt: "Visualização da página de planejamento semanal do Planner Sem Caos." },
  { src: "/images/planner/planner-habits.jpg", alt: "Visualização do rastreador de hábitos do Planner Sem Caos." },
  { src: "/images/planner/planner-braindump.jpg", alt: "Visualização da seção de despejo de ideias (brain dump) do Planner Sem Caos." },
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToImage = (index: number) => {
    imageRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  };

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? plannerImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    scrollToImage(newIndex);
  };
  
  const handleNext = () => {
    const newIndex = currentIndex === plannerImages.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    scrollToImage(newIndex);
  };

  return (
    <section className="text-center pt-8 sm:pt-12 pb-6 sm:pb-8">
      <div className="px-4 sm:px-6">
        <h1 className="text-4xl sm:text-5xl font-black text-[#FF4757] leading-tight">
          Finalmente, um Planner Feito para o Cérebro Adulto com TDAH.
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#666666]">
          Pare de lutar contra seu cérebro e comece a trabalhar com ele. Nosso planner digital ajuda você a domar o caos, gerenciar prioridades e finalmente concluir suas tarefas.
        </p>
      </div>
      <div className="mt-8 relative">
        <div className="overflow-x-auto hide-scrollbar snap-x snap-mandatory flex gap-4 px-4 sm:px-6">
          {plannerImages.map((image, index) => (
            <div 
              key={index}
              ref={el => { imageRefs.current[index] = el; }}
              className="w-11/12 md:w-4/5 flex-shrink-0 rounded-lg shadow-lg snap-center overflow-hidden aspect-[2667/2000]">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <button 
          onClick={handlePrev} 
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/50 backdrop-blur-sm rounded-full p-3 ml-1 sm:ml-2 text-[#FF4757] hover:bg-white transition-colors"
          aria-label="Imagem anterior"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <button 
          onClick={handleNext} 
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/50 backdrop-blur-sm rounded-full p-3 mr-1 sm:mr-2 text-[#FF4757] hover:bg-white transition-colors"
          aria-label="Próxima imagem"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

const PromoPricing: React.FC = () => (
  <section className="px-4 sm:px-6 py-8 sm:py-10 text-center bg-gray-50 border-y border-gray-100">
    <h2 className="text-2xl font-bold text-[#333333] mb-6">Comece a Organizar Sua Vida Hoje!</h2>
    <div className="bg-white text-[#333333] rounded-lg shadow-xl max-w-sm mx-auto p-8 border border-gray-200 transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <h3 className="text-2xl font-bold text-[#FF4757]">ACESSO VITALÍCIO</h3>
      <p className="text-lg mt-2">Pagamento único. Sem assinaturas.</p>
      <div className="my-6">
        <span className="text-2xl font-semibold line-through text-gray-400">R$ 98,00</span>
        <span className="text-4xl sm:text-5xl font-black text-[#333333] ml-2">R$ 19<span className="text-2xl sm:text-3xl align-top">,90</span></span>
      </div>
      <p className="text-sm text-gray-600 -mt-4 mb-6">Planner com mais de 50 páginas</p>
      <ul className="space-y-3 text-left mb-8">
        <li className="flex items-center"><CheckIcon className="w-5 h-5 mr-2 text-[#FF4757] flex-shrink-0" /><span>Planner em PDF para Impressão</span></li>
        <li className="flex items-center"><CheckIcon className="w-5 h-5 mr-2 text-[#FF4757] flex-shrink-0" /><span>Acesso a todas as futuras atualizações</span></li>
      </ul>
      <a 
        href="https://pay.hotmart.com/B101638408P"
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-[#FF4757] text-white font-bold text-lg uppercase w-full py-4 px-10 rounded-md shadow-lg transform hover:scale-[1.02] transition-transform duration-300 ease-in-out"
      >
        GARANTIR MEU PLANNER
      </a>
    </div>
  </section>
);


const Features: React.FC = () => (
    <section className="px-4 sm:px-6 py-8 sm:py-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#FF4757] mb-8 text-center">Projetado para Ajudar Você a Prosperar</h2>
      <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
        <div>
          <h3 className="text-xl font-semibold text-[#FF4757] mb-3">O Que Vem Dentro</h3>
          <ul className="space-y-2 text-[#333333]">
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-[#FF4757] flex-shrink-0 mt-1" /><span>Planners de Prioridades Diárias e Semanais</span></li>
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-[#FF4757] flex-shrink-0 mt-1" /><span>Layouts Flexíveis e Não Datados</span></li>
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-[#FF4757] flex-shrink-0 mt-1" /><span>Rastreadores de Hábitos e Humor</span></li>
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-[#FF4757] flex-shrink-0 mt-1" /><span>Seções para Despejo de Ideias (Brain Dump)</span></li>
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-[#FF4757] flex-shrink-0 mt-1" /><span>Páginas para Detalhamento de Projetos</span></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-[#FF4757] mb-3">Benefícios para o Seu Cérebro</h3>
          <ul className="space-y-2 text-[#333333]">
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-[#FF4757] flex-shrink-0 mt-1" /><span>Reduza a sobrecarga com uma estrutura clara.</span></li>
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-[#FF4757] flex-shrink-0 mt-1" /><span>Mantenha-se motivado com rastreadores visuais.</span></li>
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-[#FF4757] flex-shrink-0 mt-1" /><span>Abrace a criatividade com espaço para anotações.</span></li>
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-[#FF4757] flex-shrink-0 mt-1" /><span>Crie rotinas que realmente funcionam.</span></li>
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
  <section className="px-4 sm:px-6 py-8 sm:py-10 bg-gray-50">
    <h2 className="text-2xl sm:text-3xl font-bold text-[#FF4757] mb-8 text-center">A Transformação é Real</h2>
    <div className="max-w-2xl mx-auto space-y-8">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <p className="italic text-base sm:text-lg text-[#333333] relative">
            <span className="text-4xl sm:text-5xl text-[#FF4757] opacity-20 absolute -top-2 -left-2 sm:-top-4 sm:-left-4 font-serif">“</span>
            {testimonial.quote}
          </p>
          <p className="font-semibold text-right mt-4 text-[#FF4757]">- {testimonial.author}</p>
        </div>
      ))}
    </div>
  </section>
);

const WhoAmI: React.FC = () => (
  <section className="px-4 sm:px-6 py-8 sm:py-10 bg-white">
    <h2 className="text-2xl sm:text-3xl font-bold text-[#FF4757] mb-8 text-center">Uma Ferramenta Criada por Alguém que Entende</h2>
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="md:w-1/3 flex justify-center">
        <img 
          src="/images/creator/profile.jpg" 
          alt="Mariana Costa, educadora TDAH e criadora do Planner Sem Caos." 
          className="rounded-full w-40 h-40 object-cover shadow-lg"
        />
      </div>
      <div className="md:w-2/3 text-center md:text-left text-[#333333]">
        <p className="text-base sm:text-lg mb-4">
          "Olá! Eu sou a Juliana, educadora especializada em TDAH. Por anos, minha mesa era um mar de post-its e cadernos pela metade. Como uma adulta com TDAH, a organização tradicional nunca funcionou para mim. Era frustrante e me fazia sentir inadequada."
        </p>
        <p className="text-base sm:text-lg mb-4">
          "Sou dedicada a criar ferramentas e recursos que ajudem pessoas neurodivergentes a prosperar. Sabemos, por experiência própria, como pode ser desafiador encontrar sistemas que realmente funcionem, e estou aqui para mudar isso."
        </p>
        <p className="text-base sm:text-lg">
          "Criei o <strong>Planner Sem Caos</strong> porque precisava de uma ferramenta que se adaptasse ao meu cérebro, e não o contrário. Minha esperança é que ele te ajude a encontrar a mesma clareza e controle que ele me trouxe."
        </p>
        <p className="font-semibold text-right mt-4 text-[#FF4757]">- Juliana C.</p>
      </div>
    </div>
  </section>
);

const WhyICreated: React.FC = () => (
  <section className="px-4 sm:px-6 py-8 sm:py-10 bg-gray-50">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#FF4757] mb-6">
        Por Que Criei Este Planner
      </h2>
      <div className="text-base sm:text-lg text-[#333333] space-y-4">
        <p>
          Você já lutou com a consistência, pulou dias ou se sentiu muuuito culpado(a) quando um planner simplesmente não "pegava"? É, eu também 🫶.
        </p>
        <p>
          Planners tradicionais não levam em conta a forma como nossos cébros com TDAH pensam. Eles são construídos com 'produtividade' e 'eficiência' no centro, em vez de nos ajudar a entender QUEM somos e então trabalhar com nossa fiação única.
        </p>
        <p>
          Por isso, criei este planner para ser flexível e tolerante, permitindo que você o use conforme seu cérebro precisa. Chega de espirais de vergonha e culpa. Ele evolui com você, apoiando sua criatividade, motivação e natureza espontânea sem a pressão de "manter o ritmo".
        </p>
      </div>
    </div>
  </section>
);

const Pricing: React.FC = () => (
  <section id="pricing" className="bg-[#FF4757] text-white text-center px-4 sm:px-6 py-10 sm:py-12">
    <h2 className="text-2xl sm:text-3xl font-bold">Pronto para Retomar Seu Foco?</h2>
    <p className="mt-2 mb-8 text-base sm:text-lg max-w-lg mx-auto">
      Invista em você. Adquira a ferramenta definitiva que está ajudando centenas de adultos com TDAH a transformar o caos em clareza.
    </p>
    <div className="bg-white text-[#333333] rounded-lg shadow-2xl max-w-sm mx-auto p-8">
      <h3 className="text-2xl font-bold text-[#FF4757]">ACESSO VITALÍCIO</h3>
      <p className="text-lg mt-2">Pagamento único. Sem assinaturas.</p>
      <div className="my-6">
        <span className="text-2xl font-semibold line-through text-gray-400">R$ 98,00</span>
        <span className="text-4xl sm:text-5xl font-black text-[#333333] ml-2">R$ 19<span className="text-2xl sm:text-3xl align-top">,90</span></span>
      </div>
      <p className="text-sm text-gray-600 -mt-4 mb-6">Planner com mais de 50 páginas</p>
      <ul className="space-y-3 text-left mb-8">
        <li className="flex items-center"><CheckIcon className="w-5 h-5 mr-2 text-[#FF4757] flex-shrink-0" /><span>Planner em PDF para Impressão</span></li>
        <li className="flex items-center"><CheckIcon className="w-5 h-5 mr-2 text-[#FF4757] flex-shrink-0" /><span>Acesso a todas as futuras atualizações</span></li>
      </ul>
      <a 
        href="https://pay.hotmart.com/B101638408P"
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-[#FF4757] text-white font-bold text-lg uppercase w-full py-4 px-10 rounded-md shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
      >
        GARANTIR MEU PLANNER
      </a>
    </div>
  </section>
);

const FAQ: React.FC = () => (
  <section className="px-4 sm:px-6 py-8 sm:py-10 bg-white">
    <h2 className="text-2xl sm:text-3xl font-bold text-[#FF4757] mb-8 text-center">
      Perguntas Frequentes
    </h2>
    <div className="max-w-2xl mx-auto space-y-6 text-left">
      <div>
        <h3 className="font-semibold text-base sm:text-lg text-[#333333]">
          Como funciona o planner?
        </h3>
        <p className="mt-1 text-sm sm:text-base text-[#666666]">
          Você receberá um arquivo PDF de alta qualidade no tamanho A4 e A5 pronto para ser impresso em casa ou em uma gráfica. Você pode imprimir as páginas que precisar, quantas vezes quiser. Recomendamos imprimir em papel de gramatura média a alta para maior durabilidade.
        </p>
      </div>
      <div className="border-t pt-6">
        <h3 className="font-semibold text-base sm:text-lg text-[#333333]">
          É um pagamento único ou uma assinatura?
        </h3>
        <p className="mt-1 text-sm sm:text-base text-[#666666]">
          É um pagamento 100% único! Você compra uma vez e tem acesso vitalício ao planner e a todas as futuras atualizações, sem nenhuma taxa recorrente.
        </p>
      </div>
      <div className="border-t pt-6">
        <h3 className="font-semibold text-base sm:text-lg text-[#333333]">
          Como receberei o planner após a compra?
        </h3>
        <p className="mt-1 text-sm sm:text-base text-[#666666]">
          Imediatamente após a confirmação do pagamento, você receberá um e-mail com um link para baixar seu planner em PDF. O processo é instantâneo.
        </p>
      </div>
      <div className="border-t pt-6">
        <h3 className="font-semibold text-base sm:text-lg text-[#333333]">
          E se não funcionar para mim?
        </h3>
        <p className="mt-1 text-sm sm:text-base text-[#666666]">
          Temos uma garantia de satisfação de 7 dias. Se você sentir que o planner não atendeu às suas expectativas, basta nos contatar dentro de 7 dias para um reembolso total, sem complicações.
        </p>
      </div>
      <div className="border-t pt-6">
        <h3 className="font-semibold text-base sm:text-lg text-[#333333]">
          Preciso ter diagnóstico de TDAH para usar?
        </h3>
        <p className="mt-1 text-sm sm:text-base text-[#666666]">
          Não, o planner foi desenvolvido para ajudar qualquer pessoa que se identifique com os desafios do TDAH, mesmo sem diagnóstico formal. As estratégias são úteis para qualquer pessoa que busca melhorar seu foco e organização.
        </p>
      </div>
    </div>
  </section>
);


const Footer: React.FC = () => (
  <footer className="bg-[#FF4757] text-white text-center px-4 sm:px-6 py-6 border-t border-white/20">
    <p className="font-bold text-lg">Planner Sem Caos</p>
    <p className="text-sm mt-2 opacity-80">
      &copy; {new Date().getFullYear()} Planner Sem Caos. Todos os Direitos Reservados.
    </p>
    <p className="text-xs mt-4 opacity-80 max-w-md mx-auto">
      Investi anos de trabalho na pesquisa e design deste planner com a minha equipe. Por favor, respeite os criadores e apoie o trabalho original.
    </p>
    <div className="text-xs mt-4 opacity-60 space-x-4">
      <a href="#" className="underline hover:opacity-80 transition-opacity">Termos de Serviço</a>
      <a href="#" className="underline hover:opacity-80 transition-opacity">Política de Privacidade</a>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen bg-[#7B68EE] font-sans text-[#333333] antialiased">
      <Header />
      <main className="max-w-screen-md mx-auto shadow-2xl">
        <div className="bg-white">
          <Hero />
          <PromoPricing />
          <Features />
          <Testimonial />
          <WhoAmI />
          <WhyICreated />
        </div>
        <Pricing />
        <FAQ />
        <Footer />
      </main>
      <div className="text-center text-xs text-white/50 py-4">&nbsp;</div>
    </div>
  );
}

export default App;
