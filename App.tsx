
import React from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';

// --- Reusable Icon Component ---
const CheckIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  </svg>
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
  { src: "/images/planner/planner-cover.jpg", alt: "Capa do Planner Sem Caos - ferramenta de organização para TDAH." },
  { src: "/images/planner/planner-daily.jpg", alt: "Visualização da página de planejamento diário do Planner Sem Caos." },
  { src: "/images/planner/planner-weekly.jpg", alt: "Visualização da página de planejamento semanal do Planner Sem Caos." },
  { src: "/images/planner/planner-habits.jpg", alt: "Visualização do rastreador de hábitos do Planner Sem Caos." },
  { src: "/images/planner/planner-braindump.jpg", alt: "Visualização da seção de despejo de ideias (brain dump) do Planner Sem Caos." },
];

const Hero: React.FC = () => {
  return (
    <section className="text-center pt-8 sm:pt-12 pb-6 sm:pb-8">
      <div className="px-4 sm:px-6">
        <h1 className="text-4xl sm:text-5xl font-black text-[#FF4757] leading-tight">
          Finalmente, um Planner Feito para o Cérebro com TDAH.
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#666666]">
          Pare de lutar contra seu cérebro e comece a trabalhar com ele. Nosso planner digital ajuda você a domar o caos, gerenciar prioridades e finalmente concluir suas tarefas.
        </p>
      </div>
      <div className="mt-8 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto aspect-[2667/2000]">
          <img
            src="/images/planner/planner-cover.jpg"
            alt="Capa do Planner Sem Caos - ferramenta de organização para TDAH."
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
  };

const ScienceBasedSection: React.FC = () => (
  <section className="px-4 sm:px-6 py-12 sm:py-16 bg-white">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#333333] mb-6">
        Nossos planners são modernos e baseados em ciência
      </h2>
      <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
        Descubra como funciona o seu cérebro com TDAH, com páginas que explicam hábitos inconscientes e neurobiologia, além de dicas de leitura para se aprofundar
      </p>
      <div className="max-w-md mx-auto mb-8">
        <img 
          src="/images/planner/planner-habits.jpg" 
          alt="Páginas do planner mostrando conteúdo baseado em ciência sobre TDAH"
          className="w-full h-auto"
        />
      </div>
      <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
        Modelos inéditos para TDAH que eu criei, como a Flor de Lótus do Hiperfoco, a Regra de Poupança 10&10, o Planner de Foco para Ligações, o Carrinho de Compras de 24 Horas, o Checklist de Compras por Impulso, o Planejamento DIV/CON, as Pétalas do Poder da Produtividade e muito mais!
      </p>
      <div className="max-w-md mx-auto mb-8">
         <img 
           src="/images/planner/planner-daily.jpg" 
           alt="Páginas do planner mostrando modelos únicos criados para TDAH"
           className="w-full h-auto"
         />
       </div>
       <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
         Dicas, conselhos e coaching para te ajudar a focar nos seus pontos fortes e criar hábitos e rotinas que cuidem de você e funcionem junto com o seu cérebro, em vez de contra ele.
       </p>
       <div className="max-w-md mx-auto mb-8">
          <img 
            src="/images/planner/planner-weekly.jpg" 
            alt="Páginas do planner com dicas e coaching para TDAH"
            className="w-full h-auto"
          />
        </div>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Design e estrutura únicos que te dão total flexibilidade para personalizar o planner totalmente para a sua vida, rotina e trabalho.
        </p>
        <div className="max-w-md mx-auto">
          <img 
            src="/images/planner/planner-braindump.jpg" 
            alt="Páginas do planner mostrando design flexível e personalizável"
            className="w-full h-auto"
          />
        </div>
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
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-[#FF4757] flex-shrink-0 mt-1" /><span>Planejamentos diários, semanais e mensais – organize tudo de forma simples e clara</span></li>
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-[#FF4757] flex-shrink-0 mt-1" /><span>Listas e trackers práticos – nunca mais esqueça o que é importante</span></li>
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-[#FF4757] flex-shrink-0 mt-1" /><span>Hábitos saudáveis – defina e alcance suas metas com orientação passo a passo</span></li>
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-[#FF4757] flex-shrink-0 mt-1" /><span>Autocuidado em foco – trackers para cuidar de você todos os dias</span></li>
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-[#FF4757] flex-shrink-0 mt-1" /><span>Controle financeiro fácil – acompanhe orçamento e finanças sem stress</span></li>
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-[#FF4757] flex-shrink-0 mt-1" /><span>Casa em ordem – ferramentas para organizar o dia a dia do lar</span></li>
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-[#FF4757] flex-shrink-0 mt-1" /><span>Mente tranquila – técnicas baseadas em evidências para acalmar e focar</span></li>
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-[#FF4757] flex-shrink-0 mt-1" /><span>E muito mais!!</span></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-[#FF4757] mb-3">Benefícios para o Seu Cérebro</h3>
          <ul className="space-y-2 text-[#333333]">
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-[#FF4757] flex-shrink-0 mt-1" /><span>Reduza a sobrecarga com uma estrutura clara.</span></li>
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-[#FF4757] flex-shrink-0 mt-1" /><span>Mantenha-se motivado com rastreadores visuais.</span></li>
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-[#FF4757] flex-shrink-0 mt-1" /><span>Abrace a criatividade com espaço para anotações.</span></li>
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-[#FF4757] flex-shrink-0 mt-1" /><span>Crie rotinas que realmente funcionam.</span></li>
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-[#FF4757] flex-shrink-0 mt-1" /><span>Melhore o foco com técnicas adaptadas ao TDAH.</span></li>
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-[#FF4757] flex-shrink-0 mt-1" /><span>Diminua a ansiedade com planejamento estruturado.</span></li>
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-[#FF4757] flex-shrink-0 mt-1" /><span>Aumente a autoestima celebrando pequenas conquistas.</span></li>
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-[#FF4757] flex-shrink-0 mt-1" /><span>Desenvolva autodisciplina com ferramentas práticas.</span></li>
          </ul>
        </div>
      </div>
    </section>
);

const bonusItems = [
  {
    headline: "Checklist de Limpeza Imprimível",
    description: "Esse checklist vai deixar sua rotina de limpeza mais organizada, leve e eficiente, economizando tempo e mantendo sua casa impecável.",
    image: "/images/bonus/cleaning-checklist.jpg",
    aspectRatio: "2000/1414", // landscape
    pages: "+3 Páginas"
  },
  {
      headline: "Mapa das Profundezas Ocultas",
      description: "Esse guia visual ajuda a identificar sentimentos escondidos, entender melhor as próprias emoções e dar os primeiros passos rumo ao autoconhecimento e bem-estar.",
      image: "/images/bonus/emotional-iceberg.jpg",
      aspectRatio: "1414/2000", // portrait
      pages: "+29 Páginas"
    },
  {
      headline: "Workbook \"Navegando pelas Emoções\"",
      description: "Esse workbook é um companheiro de jornada, ajudando você a desenvolver mais autoconsciência, aceitação e bem-estar emocional.",
      image: "/images/bonus/emotions-workbook.jpg",
      aspectRatio: "2000/1414", // landscape
      pages: "+10 Páginas"
    },
  {
      headline: "TDAH Aventuras",
      description: "Este guia foi criado para guiar você em exercícios e atividades que ajudam a explorar o TDAH de forma mais profunda, promovendo autoconhecimento, organização e crescimento pessoal.",
      image: "/images/bonus/tdah-adventures.jpg",
      aspectRatio: "1414/2000", // portrait
      pages: "+26 Páginas"
    },
    {
      headline: "Rastreador de Sintomas do TDAH",
      description: "Com ele, você poderá preencher diariamente seus sintomas e, ao final do mês, ter uma visão clara do seu progresso e dos pontos que merecem mais atenção.",
      image: "/images/bonus/symptom-tracker.jpg",
      aspectRatio: "2000/1414", // landscape
      pages: "+5 Páginas"
    }
  ];

const Bonus: React.FC = () => (
  <section className="px-4 sm:px-6 py-8 sm:py-10 bg-gray-50">
    <h2 className="text-2xl sm:text-3xl font-bold text-[#FF4757] mb-8 text-center">Bônus Exclusivos Inclusos</h2>
    <div className="space-y-8">
      {bonusItems.map((bonus, index) => (
        <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6 md:gap-8`}>
          <div className="md:w-1/2">
            <div className={`rounded-lg overflow-hidden shadow-lg`} style={{ aspectRatio: bonus.aspectRatio }}>
              <img
                src={bonus.image}
                alt={`Imagem ilustrativa do bônus: ${bonus.headline}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-3 flex justify-center">
              <span className="bg-[#FF4757] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                {bonus.pages}
              </span>
            </div>
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-[#FF4757] mb-4">{bonus.headline}</h3>
            <p className="text-base sm:text-lg text-[#333333] leading-relaxed">{bonus.description}</p>
          </div>
        </div>
      ))}
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



const Pricing: React.FC = () => (
  <section id="pricing" className="bg-[#FF4757] text-white text-center px-4 sm:px-6 py-10 sm:py-12">
    <h2 className="text-2xl sm:text-3xl font-bold mb-4">Escolha Seu Plano</h2>
    <p className="mt-2 mb-8 text-base sm:text-lg max-w-lg mx-auto">
      Invista em você. Adquira a ferramenta definitiva que está ajudando centenas de adultos com TDAH a transformar o caos em clareza.
    </p>
    
    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {/* Plano Básico */}
      <div className="bg-white text-[#333333] rounded-lg shadow-xl p-8 border border-gray-200">
        <h3 className="text-2xl font-bold text-[#FF4757] mb-2">BÁSICO</h3>
        <p className="text-lg mb-4">Pagamento único. Sem assinaturas.</p>
        <div className="my-6">
          <span className="text-4xl sm:text-5xl font-black text-[#333333]">R$ 24<span className="text-2xl sm:text-3xl align-top">,90</span></span>
        </div>
        <p className="text-sm text-gray-600 -mt-4 mb-6">Planner com mais de 170 páginas</p>
        <ul className="space-y-3 text-left mb-8">
          <li className="flex items-center"><CheckIcon className="w-5 h-5 mr-2 text-[#FF4757] flex-shrink-0" /><span>Planner em PDF para Impressão</span></li>
          <li className="flex items-center"><CheckIcon className="w-5 h-5 mr-2 text-[#FF4757] flex-shrink-0" /><span>Layouts Flexíveis e Não Datados</span></li>
          <li className="flex items-center"><CheckIcon className="w-5 h-5 mr-2 text-[#FF4757] flex-shrink-0" /><span>+170 Maneiras de fazer as coisas acontecerem</span></li>
          <li className="flex items-center"><CheckIcon className="w-5 h-5 mr-2 text-[#FF4757] flex-shrink-0" /><span>Imprima quantas vezes quiser</span></li>
          <li className="flex items-center"><CheckIcon className="w-5 h-5 mr-2 text-[#FF4757] flex-shrink-0" /><span>Atualizações grátis para sempre</span></li>
        </ul>
        <a 
          href="https://pay.hotmart.com/B101638408P?off=s0940n0k&checkoutMode=10"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-[#FF4757] text-white font-bold text-lg uppercase w-full py-4 px-6 rounded-md shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          ESCOLHER BÁSICO
        </a>
      </div>

      {/* Plano Premium */}
      <div className="bg-white text-[#333333] rounded-lg shadow-xl p-8 border-2 border-[#FF4757] relative">
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#FF4757] text-white px-4 py-1 rounded-full text-sm font-bold">
          MAIS POPULAR
        </div>
        <h3 className="text-2xl font-bold text-[#FF4757] mb-2">PREMIUM</h3>
        <p className="text-lg mb-4">Pagamento único. Sem assinaturas.</p>
        <div className="my-6">
          <span className="text-2xl font-semibold line-through text-gray-400">R$ 98,00</span>
          <span className="text-4xl sm:text-5xl font-black text-[#333333] ml-2">R$ 34<span className="text-2xl sm:text-3xl align-top">,90</span></span>
        </div>
        <p className="text-sm text-gray-600 -mt-4 mb-6">Planner com mais de 170 páginas</p>
        <ul className="space-y-3 text-left mb-6">
          <li className="flex items-center"><CheckIcon className="w-5 h-5 mr-2 text-[#FF4757] flex-shrink-0" /><span>Planner em PDF para Impressão</span></li>
          <li className="flex items-center"><CheckIcon className="w-5 h-5 mr-2 text-[#FF4757] flex-shrink-0" /><span>Layouts Flexíveis e Não Datados</span></li>
          <li className="flex items-center"><CheckIcon className="w-5 h-5 mr-2 text-[#FF4757] flex-shrink-0" /><span>+170 Maneiras de fazer as coisas acontecerem</span></li>
          <li className="flex items-center"><CheckIcon className="w-5 h-5 mr-2 text-[#FF4757] flex-shrink-0" /><span>Imprima quantas vezes quiser</span></li>
          <li className="flex items-center"><CheckIcon className="w-5 h-5 mr-2 text-[#FF4757] flex-shrink-0" /><span>Atualizações grátis para sempre</span></li>
        </ul>
        
        <div className="bg-[#FFF5F5] border border-[#FF4757] rounded-lg p-4 mb-6">
          <h4 className="text-lg font-bold text-[#FF4757] mb-3 text-center">🎁 BÔNUS INCLUSOS</h4>
          <ul className="space-y-2 text-sm text-left">
             <li className="flex items-center">
               <CheckIcon className="w-4 h-4 mr-2 text-[#FF4757] flex-shrink-0" />
               <span>Checklist de Limpeza Imprimível</span>
             </li>
             <li className="flex items-center">
               <CheckIcon className="w-4 h-4 mr-2 text-[#FF4757] flex-shrink-0" />
               <span>Mapa das Profundezas Ocultas</span>
             </li>
             <li className="flex items-center">
               <CheckIcon className="w-4 h-4 mr-2 text-[#FF4757] flex-shrink-0" />
               <span>Workbook "Navegando pelas Emoções"</span>
             </li>
             <li className="flex items-center">
               <CheckIcon className="w-4 h-4 mr-2 text-[#FF4757] flex-shrink-0" />
               <span>TDAH Aventuras</span>
             </li>
             <li className="flex items-center">
               <CheckIcon className="w-4 h-4 mr-2 text-[#FF4757] flex-shrink-0" />
               <span>Rastreador de Sintomas do TDAH</span>
             </li>
           </ul>
        </div>
        <a 
          href="https://pay.hotmart.com/B101638408P?off=eoj8cz98&checkoutMode=10"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-[#FF4757] text-white font-bold text-lg uppercase w-full py-4 px-6 rounded-md shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          ESCOLHER PREMIUM
        </a>
      </div>
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
          <ScienceBasedSection />

      <Features />
          <Bonus />
        </div>
        <Pricing />
        <div className="bg-white">
          <Testimonial />
          <WhoAmI />
    
        </div>
        <FAQ />
        
        {/* Galeria de Imagens do Planner */}
        <section className="bg-white py-12 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#333333] mb-4">Veja o que tem dentro do seu Planner</h2>
             <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
               Explore algumas páginas cuidadosamente desenvolvidas para organizar sua rotina e potencializar sua produtividade.
             </p>
            
            <div className="overflow-x-auto pb-4">
              <div className="flex space-x-6 min-w-max px-4">
                 <div className="flex-shrink-0 w-80 bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                   <img 
                     src="/images/inside-product/rastreador-de-pagamentos-de-dividas.jpg" 
                     alt="Rastreador de Pagamentos de Dívidas" 
                     className="w-full h-96 object-contain bg-white"
                   />
                   <div className="p-4">
                      <h3 className="font-bold text-lg text-[#333333]">Rastreador de Pagamentos de Dívidas</h3>
                    </div>
                 </div>
                 
                 <div className="flex-shrink-0 w-80 bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                   <img 
                      src="/images/inside-product/controle-de-medicacao.jpg" 
                      alt="Controle de Medicação" 
                      className="w-full h-96 object-contain bg-white"
                    />
                   <div className="p-4">
                      <h3 className="font-bold text-lg text-[#333333]">Controle de Medicação</h3>
                    </div>
                 </div>
                 
                 <div className="flex-shrink-0 w-80 bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                   <img 
                      src="/images/inside-product/desafio-do-labirinto-TDAH.jpg" 
                      alt="Desafio do Labirinto TDAH" 
                      className="w-full h-96 object-contain bg-white"
                    />
                   <div className="p-4">
                      <h3 className="font-bold text-lg text-[#333333]">Desafio do Labirinto TDAH</h3>
                    </div>
                 </div>
                 
                 <div className="flex-shrink-0 w-80 bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                   <img 
                      src="/images/inside-product/minha-jornada-alimentar.jpg" 
                      alt="Minha Jornada Alimentar" 
                      className="w-full h-96 object-contain bg-white"
                    />
                   <div className="p-4">
                      <h3 className="font-bold text-lg text-[#333333]">Minha Jornada Alimentar</h3>
                    </div>
                 </div>
                 
                 <div className="flex-shrink-0 w-80 bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                   <img 
                      src="/images/inside-product/planner-diario-do-escritorio.jpg" 
                      alt="Planner Diário do Escritório" 
                      className="w-full h-96 object-contain bg-white"
                    />
                   <div className="p-4">
                      <h3 className="font-bold text-lg text-[#333333]">Planner Diário do Escritório</h3>
                    </div>
                 </div>
                 
                 <div className="flex-shrink-0 w-80 bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                   <img 
                      src="/images/inside-product/rastreador-de-senhas.jpg" 
                      alt="Rastreador de Senhas" 
                      className="w-full h-96 object-contain bg-white"
                    />
                   <div className="p-4">
                      <h3 className="font-bold text-lg text-[#333333]">Rastreador de Senhas</h3>
                    </div>
                 </div>
                 
                 <div className="flex-shrink-0 w-80 bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                   <img 
                      src="/images/inside-product/registro-de-medidas.jpg" 
                      alt="Registro de Medidas" 
                      className="w-full h-96 object-contain bg-white"
                    />
                   <div className="p-4">
                      <h3 className="font-bold text-lg text-[#333333]">Registro de Medidas</h3>
                    </div>
                 </div>
                 
                 <div className="flex-shrink-0 w-80 bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                   <img 
                      src="/images/inside-product/visao-geral-da-poupanca.jpg" 
                      alt="Visão Geral da Poupança" 
                      className="w-full h-96 object-contain bg-white"
                    />
                   <div className="p-4">
                      <h3 className="font-bold text-lg text-[#333333]">Visão Geral da Poupança</h3>
                    </div>
                 </div>
               </div>
            </div>
            
            <div className="mt-6 text-sm text-gray-500">
              ← Deslize para ver mais páginas →
            </div>
          </div>
        </section>
        
        <Pricing />
        <Footer />
      </main>
      <div className="text-center text-xs text-white/50 py-4">&nbsp;</div>
      <SpeedInsights />
      <Analytics />
    </div>
  );
}

export default App;
