
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
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    headline: "Organize, Respire e Brilhe: Checklist de Limpeza",
    description: "Esse checklist vai deixar sua rotina de limpeza mais organizada, leve e eficiente, economizando tempo e mantendo sua casa impecável.",
    image: "/images/bonus/cleaning-checklist.jpg",
    aspectRatio: "2000/1414", // landscape
    pages: "+3 Páginas"
  },
  {
      headline: "O Segredo Escondido Dentro de Você",
      description: "Esse guia visual ajuda a identificar sentimentos escondidos, entender melhor as próprias emoções e dar os primeiros passos rumo ao autoconhecimento e bem-estar.",
      image: "/images/bonus/emotional-iceberg.jpg",
      aspectRatio: "1414/2000", // portrait
      pages: "+29 Páginas"
    },
  {
      headline: "Coleção Premium de Exercícios Emocionais",
      description: "Esse workbook é um companheiro de jornada, ajudando você a desenvolver mais autoconsciência, aceitação e bem-estar emocional.",
      image: "/images/bonus/emotions-workbook.jpg",
      aspectRatio: "2000/1414", // landscape
      pages: "+10 Páginas"
    },
  {
      headline: "Exercícios Prontos para Explorar o TDAH",
      description: "Este guia foi criado para guiar você em exercícios e atividades que ajudam a explorar o TDAH de forma mais profunda, promovendo autoconhecimento, organização e crescimento pessoal.",
      image: "/images/bonus/tdah-adventures.jpg",
      aspectRatio: "1414/2000", // portrait
      pages: "+26 Páginas"
    },
    {
      headline: "Do Caos à Consciência: Diário de Sintomas",
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



// Validity notice with clean, subtle styling and micro-interaction
const ValidityNotice: React.FC = () => (
  <div className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 rounded-md p-3 shadow-sm mx-auto">
    <svg className="w-4 h-4 text-[#FF4757] animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" strokeWidth="2" />
      <path d="M12 7v5l3 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <span className="text-xs font-bold text-[#FF4757] tracking-wide uppercase">BÔNUS LIMITADO</span>
    <span className="text-xs text-gray-600">Válido até hoje às 23h59</span>
  </div>
);

const Pricing: React.FC = () => (
  <section id="pricing" className="bg-[#FF4757] text-white text-center px-4 sm:px-6 py-10 sm:py-12">
    <h2 className="text-2xl sm:text-3xl font-bold mb-4">Adquira Seu Planner</h2>
    <div className="mt-2 mb-8 text-base sm:text-lg max-w-lg mx-auto space-y-4">
      <p className="text-xl sm:text-2xl font-bold">Se Você Continuar Ignorando os Sinais...</p>
      <p className="text-lg sm:text-xl font-semibold">...a oportunidade acabará sumindo.</p>
      <p>A vida está o tempo todo te enviando sinais — chances de agir, momentos para agarrar, lições para aprender. Mas se você ficar esperando, ficar hesitando, essas janelas vão se fechar. Quanto mais você ignora os sinais, mais difícil se torna avançar.</p>
      <p>Você sabe que os sinais estão lá, te impulsionando a agir.</p>
      <p>Então, por que não dar o passo agora, antes que seja tarde demais?</p>
      <p>Não espere até que o arrependimento seja sua única companhia. Se você está pronto para começar a agir de acordo com os sinais e transformar sua vida...</p>
      <p>Adquira o Planner Sem Caos para TDAH hoje e junte-se aos campeões!</p>
      <p>Mais de 800 pessoas já se beneficiaram de nossos livros e publicações.</p>
      <p>Você terá todas as diretrizes para se tornar disciplinado, inteligente e organizado, e dar todos os passos necessários para mudar sua vida. Um atalho para o crescimento!</p>
      <p>É um sinal, e é a sua hora de evoluir.</p>
    </div>
    
    <div className="flex justify-center max-w-md mx-auto">
      {/* Plano Premium */}
      <div className="bg-white text-[#333333] rounded-lg shadow-xl p-8 border-2 border-[#FF4757] relative w-full">
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#FF4757] text-white px-4 py-1 rounded-full text-sm font-bold">
          MAIS POPULAR
        </div>
        
        {/* Limited Time Badge */}
        <div className="absolute -top-3 -right-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold transform rotate-12">
          65% OFF
        </div>
        
        <h3 className="text-2xl font-bold text-[#FF4757] mb-2">PREMIUM</h3>
        
        <p className="text-lg mb-2">Pagamento único. Sem assinaturas.</p>
          <img 
            src="/images/cover/cover-ebook.jpg" 
            alt="Capa do eBook Planner Sem Caos"
            className="w-full max-w-[240px] mx-auto my-4 block rounded-none shadow-none ring-0 outline-none border-0 bg-white"
            style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
            loading="lazy"
          />
        

        
        <div className="my-6">
          <span className="text-2xl font-semibold line-through text-gray-400">R$ 98,00</span>
          <span className="text-4xl sm:text-5xl font-black text-[#333333] ml-2">R$ 29<span className="text-2xl sm:text-3xl align-top">,90</span></span>
        </div>
        <p className="text-sm text-gray-600 -mt-4 mb-4">Planner com mais de 170 páginas</p>
        

        <ul className="space-y-3 text-left mb-6">
          <li className="flex items-center"><CheckIcon className="w-5 h-5 mr-2 text-[#FF4757] flex-shrink-0" /><span>Acesse e preencha de onde quiser, no celular, tablet ou computador</span></li>
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
               <span>Organize, Respire e Brilhe: Checklist de Limpeza</span>
             </li>
             <li className="flex items-center">
               <CheckIcon className="w-4 h-4 mr-2 text-[#FF4757] flex-shrink-0" />
               <span>O Segredo Escondido Dentro de Você</span>
             </li>
             <li className="flex items-center">
               <CheckIcon className="w-4 h-4 mr-2 text-[#FF4757] flex-shrink-0" />
               <span>Coleção Premium de Exercícios Emocionais</span>
             </li>
             <li className="flex items-center">
               <CheckIcon className="w-4 h-4 mr-2 text-[#FF4757] flex-shrink-0" />
               <span>Exercícios Prontos para Explorar o TDAH</span>
             </li>
             <li className="flex items-center">
               <CheckIcon className="w-4 h-4 mr-2 text-[#FF4757] flex-shrink-0" />
               <span>Do Caos à Consciência: Diário de Sintomas</span>
             </li>
           </ul>
           
           {/* Validity Notice */}
           <div className="mt-4 text-center">
             <ValidityNotice />
           </div>
        </div>

        
        <a 
          href="https://pay.hotmart.com/B101638408P?off=eoj8cz98&checkoutMode=10"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-[#FF4757] text-white font-bold text-lg uppercase w-full py-4 px-6 rounded-md shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out animate-pulse"
        >
          GARANTIR MEU PLANNER
        </a>
        
        {/* Risk Reversal */}
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">🛡️ Garantia de 30 dias ou seu dinheiro de volta</p>
          <p className="text-xs text-gray-400 mt-1">Compra 100% segura e protegida</p>
        </div>
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
          Temos uma garantia de satisfação de 30 dias. Se você sentir que o planner não atendeu às suas expectativas, basta nos contatar dentro de 30 dias para um reembolso total, sem complicações.
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

const WhatsAppButton: React.FC = () => (
  <a
    href="https://wa.me/5511964606571?text=Olá! Tenho interesse no Planner Sem Caos. Gostaria de saber mais informações."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20BA5A] transition-all duration-300 hover:scale-110 z-50"
    aria-label="Falar no WhatsApp"
  >
    <svg
      className="w-6 h-6"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
    </svg>
  </a>
);

function App({ showBlackFridayImages = false }: { showBlackFridayImages?: boolean }) {
  return (
    <div className="min-h-screen bg-[#7B68EE] font-sans text-[#333333] antialiased">
      <Header />
      <main className="max-w-screen-md mx-auto shadow-2xl">
        <div className="bg-white">
          <Hero />
          <ScienceBasedSection />

      <Features />
      {showBlackFridayImages && (
          <section className="px-4 sm:px-6 py-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/images/black-friday/00.jpg"
                  alt="Capa do Planner Sem Caos - ferramenta de organização para TDAH."
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/images/black-friday/01.jpg"
                  alt="Visualização da página de planejamento diário do Planner Sem Caos."
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/images/black-friday/02.jpg"
                  alt="Visualização do rastreador de hábitos do Planner Sem Caos."
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </section>
        )}
          
          
          
          <Bonus />
        </div>
        <Pricing />
        <div className="bg-white">
          <Testimonial />
          {/* Galeria de Imagens do Planner (movida abaixo de Feedbacks) */}
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
                       src="/images/inside-product/check in-de-saude-mental.jpg" 
                       alt="Check In de Saúde Mental" 
                       className="w-full h-96 object-contain bg-white"
                     />
                     <div className="p-4">
                       <h3 className="font-bold text-lg text-[#333333]">Check In de Saúde Mental</h3>
                     </div>
                   </div>
                   
                   <div className="flex-shrink-0 w-80 bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                     <img 
                       src="/images/inside-product/como-priorizar-sua-vida.jpg" 
                       alt="Como Priorizar Sua Vida" 
                       className="w-full h-96 object-contain bg-white"
                     />
                     <div className="p-4">
                       <h3 className="font-bold text-lg text-[#333333]">Como Priorizar Sua Vida</h3>
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
                       src="/images/inside-product/mude-sua-mente-mude-sua-vida.jpg" 
                       alt="Mude Sua Mente Mude Sua Vida" 
                       className="w-full h-96 object-contain bg-white"
                     />
                     <div className="p-4">
                       <h3 className="font-bold text-lg text-[#333333]">Mude Sua Mente Mude Sua Vida</h3>
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
                       src="/images/inside-product/rastreador-de-habitos.jpg" 
                       alt="Rastreador de Hábitos" 
                       className="w-full h-96 object-contain bg-white"
                     />
                     <div className="p-4">
                       <h3 className="font-bold text-lg text-[#333333]">Rastreador de Hábitos</h3>
                     </div>
                   </div>
                   
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
              
              <div className="mt-8 text-center">
                <p className="text-gray-600 text-sm">← Deslize para ver mais páginas →</p>
              </div>
            </div>
          </section>
          <WhoAmI />
    
        </div>
        <FAQ />
        
        <Pricing />
        <Footer />
      </main>
      <div className="text-center text-xs text-white/50 py-4">&nbsp;</div>

      <WhatsAppButton />
      <Analytics />
    </div>
  );
}

export default App;
