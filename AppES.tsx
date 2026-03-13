
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
      <a href="#" className="text-verde-musgo text-2xl font-bold tracking-wider">Mi Día Sin Caos</a>
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
        <h1 className="text-4xl sm:text-5xl font-black text-verde-musgo leading-tight">
          Finalmente, un Planner Hecho para el Cerebro con TDAH.
        </h1>
        <p className="mt-4 text-base sm:text-lg text-verde-musgo/80">
          Deja de luchar contra tu cerebro y empieza a trabajar con él. Nuestro planner digital te ayuda a domar el caos, gestionar prioridades y finalmente completar tus tareas.
        </p>
      </div>
      <div className="mt-8 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto aspect-[2667/2000]">
          <img
            src="/images/es/hero.jpg"
            alt="Portada del Mi Día Sin Caos - herramienta de organización para TDAH"
            className="w-full h-full object-cover rounded-xl shadow-xl border-4 border-black"
          />
        </div>
      </div>
    </section>
  );
  };

const ScienceBasedSection: React.FC = () => (
  <section className="px-4 sm:px-6 py-12 sm:py-16 bg-rosa-aquarela">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-verde-musgo mb-6">
        Nuestros planners son modernos y basados en la ciencia
      </h2>
      <p className="text-lg text-verde-musgo/80 mb-8 max-w-3xl mx-auto leading-relaxed">
        Descubre cómo funciona tu cerebro con TDAH, con páginas que explican hábitos inconscientes y neurobiología, además de recomendaciones de lectura para profundizar.
      </p>
      <div className="max-w-md mx-auto mb-8">
        <img 
          src="/images/es/brainstorming.jpg" 
          alt="Páginas del planner mostrando contenido basado en ciencia sobre TDAH"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
      <p className="text-lg text-verde-musgo/80 mb-8 max-w-3xl mx-auto leading-relaxed">
        Modelos inéditos para TDAH que he creado, como la Flor de Loto del Hiperfoco, la Regla de Ahorro 10&10, el Planner de Foco para Llamadas, el Carrito de Compras de 24 Horas, el Checklist de Compras por Impulso, la Planificación DIV/CON, los Pétalos del Poder de la Productividad ¡y mucho más!
      </p>
      <div className="max-w-md mx-auto mb-8">
         <img 
           src="/images/es/metas.jpg" 
           alt="Páginas del planner mostrando modelos únicos creados para TDAH"
           className="w-full h-auto rounded-lg shadow-md"
         />
       </div>
       <p className="text-lg text-verde-musgo/80 mb-8 max-w-3xl mx-auto leading-relaxed">
         Tips, consejos y coaching para ayudarte a enfocarte en tus fortalezas y crear hábitos y rutinas que cuiden de ti y funcionen junto con tu cerebro, en vez de en su contra.
       </p>
       <div className="max-w-md mx-auto mb-8">
          <img 
            src="/images/es/dificultades.jpg" 
            alt="Páginas del planner con tips y coaching para TDAH"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <p className="text-lg text-verde-musgo/80 mb-8 max-w-3xl mx-auto leading-relaxed">
          Diseño y estructura únicos que te dan total flexibilidad para personalizar el planner totalmente para tu vida, rutina y trabajo.
        </p>
        <div className="max-w-md mx-auto">
          <img 
            src="/images/es/desafio.jpg" 
            alt="Páginas del planner mostrando diseño flexible y personalizable"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );






const Features: React.FC = () => (
    <section className="px-4 sm:px-6 py-8 sm:py-10 bg-creme-papel">
      <h2 className="text-2xl sm:text-3xl font-bold text-verde-musgo mb-8 text-center">Diseñado para Ayudarte a Prosperar</h2>
      <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
        <div>
          <h3 className="text-xl font-semibold text-terracota mb-3">Lo Que Viene Dentro</h3>
          <ul className="space-y-2 text-verde-musgo">
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-dourado flex-shrink-0 mt-1" /><span>Planificaciones diarias, semanales y mensuales – organiza todo de forma simple y clara</span></li>
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-dourado flex-shrink-0 mt-1" /><span>Listas y trackers prácticos – nunca más olvides lo importante</span></li>
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-dourado flex-shrink-0 mt-1" /><span>Hábitos saludables – define y alcanza tus metas con orientación paso a paso</span></li>
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-dourado flex-shrink-0 mt-1" /><span>Autocuidado en foco – trackers para cuidar de ti todos los días</span></li>
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-dourado flex-shrink-0 mt-1" /><span>Control financiero fácil – sigue tu presupuesto y finanzas sin estrés</span></li>
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-dourado flex-shrink-0 mt-1" /><span>Casa en orden – herramientas para organizar el día a día del hogar</span></li>
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-dourado flex-shrink-0 mt-1" /><span>Mente tranquila – técnicas basadas en evidencias para calmar y enfocar</span></li>
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-dourado flex-shrink-0 mt-1" /><span>¡Y mucho más!</span></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-terracota mb-3">Beneficios para tu Cerebro</h3>
          <ul className="space-y-2 text-verde-musgo">
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-dourado flex-shrink-0 mt-1" /><span>Reduce la sobrecarga con una estructura clara.</span></li>
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-dourado flex-shrink-0 mt-1" /><span>Mantente motivado con rastreadores visuales.</span></li>
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-dourado flex-shrink-0 mt-1" /><span>Abraza la creatividad con espacio para notas.</span></li>
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-dourado flex-shrink-0 mt-1" /><span>Crea rutinas que realmente funcionen.</span></li>
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-dourado flex-shrink-0 mt-1" /><span>Mejora el enfoque con técnicas adaptadas al TDAH.</span></li>
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-dourado flex-shrink-0 mt-1" /><span>Disminuye la ansiedad con planificación estructurada.</span></li>
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-dourado flex-shrink-0 mt-1" /><span>Aumenta la autoestima celebrando pequeñas conquistas.</span></li>
             <li className="flex items-start"><CheckIcon className="w-5 h-5 mr-2 text-dourado flex-shrink-0 mt-1" /><span>Desarrolla autodisciplina con herramientas prácticas.</span></li>
          </ul>
        </div>
      </div>
    </section>
);

const bonusItems = [
  {
    headline: "Ejercicios Listos para Explorar el TDAH",
    description: "Esta guía fue creada para guiarte en ejercicios y actividades que ayudan a explorar el TDAH de forma más profunda, promoviendo autoconocimiento, organización y crecimiento personal.",
    image: "/images/es/aventuras.jpg",
    aspectRatio: "1414/2000", // portrait
    pages: "+26 Páginas"
  },
  {
    headline: "El Secreto Escondido Dentro de Ti",
    description: "Esta guía visual ayuda a identificar sentimientos ocultos, entender mejor las propias emociones y dar los primeros pasos hacia el autoconocimiento y el bienestar.",
    image: "/images/es/mental-es.jpg",
    aspectRatio: "1545/2000", // portrait
    pages: "+29 Páginas"
  },
  {
    headline: "Organiza, Respira y Brilla: Checklist de Limpieza",
    description: "Este checklist dejará tu rutina de limpieza más organizada, ligera y eficiente, ahorrando tiempo y manteniendo tu casa impecable.",
    image: "/images/es/checklist.jpg",
    aspectRatio: "2000/1414", // landscape
    pages: "+3 Páginas"
  },
  {
    headline: "Colección Premium de Ejercicios Emocionales",
    description: "Este workbook es un compañero de viaje, ayudándote a desarrollar más autoconciencia, aceptación y bienestar emocional.",
    image: "/images/es/sentimientos.jpg",
    aspectRatio: "2000/1414", // landscape
    pages: "+10 Páginas"
  },
  {
    headline: "Del Caos a la Conciencia: Diario de Síntomas",
    description: "Con él, podrás completar diariamente tus síntomas y, al final del mes, tener una visión clara de tu progreso y de los puntos que merecen más atención.",
    image: "/images/es/rastreador.jpg",
    aspectRatio: "2000/1414", // landscape
    pages: "+5 Páginas"
  }
];

const Bonus: React.FC = () => (
  <section className="px-4 sm:px-6 py-8 sm:py-10 bg-rosa-aquarela">
    <h2 className="text-2xl sm:text-3xl font-bold text-verde-musgo mb-8 text-center">Bonos Exclusivos Incluidos</h2>
    <div className="space-y-8">
      {bonusItems.map((bonus, index) => (
        <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6 md:gap-8`}>
          <div className="md:w-1/2">
            <div className={`rounded-lg overflow-hidden shadow-lg`} style={{ aspectRatio: bonus.aspectRatio }}>
              <img
                src={bonus.image}
                alt={`Imagen ilustrativa del bono: ${bonus.headline}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-3 flex justify-center">
              <span className="bg-terracota text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                {bonus.pages}
              </span>
            </div>
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-terracota mb-4">{bonus.headline}</h3>
            <p className="text-base sm:text-lg text-verde-musgo leading-relaxed">{bonus.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const testimonials = [
  {
    quote: "Ya intenté todos los planners que existen, pero ninguno funcionó. Mi Día Sin Caos es diferente. Es flexible, no me hace sentir culpable por saltarme un día, y la sección de 'descarga de ideas' es una salvación. Finalmente estoy al día con mis plazos y me siento mucho menos ansioso.",
    author: "Alex P."
  },
  {
    quote: "La mejor parte es que no tiene fechas. Puedo empezar a usarlo en cualquier momento del año sin desperdiciar páginas. Es perfecto para mis picos de motivación. ¡Finalmente un sistema que se adapta a mí!",
    author: "Julia M."
  },
  {
    quote: "El diseño es lindo y funcional. No está sobrecargado con secciones innecesarias. Me ayuda a enfocarme en lo que realmente importa en el día. Mi productividad mejoró mucho desde que empecé a usarlo.",
    author: "Lucas F."
  }
];

const Testimonial: React.FC = () => (
  <section className="px-4 sm:px-6 py-8 sm:py-10 bg-creme-papel">
    <h2 className="text-2xl sm:text-3xl font-bold text-verde-musgo mb-8 text-center">La Transformación es Real</h2>
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
    <h2 className="text-2xl sm:text-3xl font-bold text-verde-musgo mb-8 text-center">Una Herramienta Creada por Alguien que Entiende</h2>
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="md:w-1/3 flex justify-center">
        <img 
          src="/images/creator/profile.jpg" 
          alt="Mariana Costa, educadora TDAH y creadora de Mi Día Sin Caos." 
          className="rounded-full w-40 h-40 object-cover shadow-lg border-4 border-rosa-aquarela"
        />
      </div>
      <div className="md:w-2/3 text-center md:text-left text-verde-musgo">
        <p className="text-base sm:text-lg mb-4">
          "¡Hola! Soy Juliana, educadora especializada en TDAH. Por años, mi mesa era un mar de post-its y cuadernos a medio usar. Como adulta con TDAH, la organización tradicional nunca funcionó para mí. Era frustrante y me hacía sentir inadecuada."
        </p>
        <p className="text-base sm:text-lg mb-4">
          "Me dedico a crear herramientas y recursos que ayuden a personas neurodivergentes a prosperar. Sabemos, por experiencia propia, lo desafiante que puede ser encontrar sistemas que realmente funcionen, y estoy aquí para cambiar eso."
        </p>
        <p className="text-base sm:text-lg">
          "Creé el <strong>Mi Día Sin Caos</strong> porque necesitaba una herramienta que se adaptara a mi cerebro, y no al revés. Mi esperanza es que te ayude a encontrar la misma claridad y control que me trajo a mí."
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
    <span className="text-xs font-bold text-terracota tracking-wide uppercase">BONO LIMITADO</span>
    <span className="text-xs text-verde-musgo/60">Válido hasta hoy a las 23:59</span>
  </div>
);


const Pricing: React.FC = () => (
  <section id="pricing" className="text-verde-musgo text-center px-4 sm:px-6 py-10 sm:py-12 bg-creme-papel">
    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-verde-musgo">Adquiere Tu Planner 👇</h2>
    <div className="mt-2 mb-8 text-base sm:text-lg max-w-lg mx-auto space-y-4 text-verde-musgo/80">
      <p>Pasaste todo el 2025 intentando.</p>
      <p>Recomenzar no necesita ser doloroso - Puede ser ligero, visual y a tu ritmo - incluso con TDAH</p>
      <p>En este Año Nuevo, haz este recomienzo más accesible.</p>
      <p>Tendrás todas las directrices para volverte disciplinado, inteligente y organizado, y dar todos los pasos necesarios para cambiar tu vida. ¡Un atajo para el crecimiento!</p>
      <p>Mi Día Sin Caos con valor especial. Aprovecha mientras está activo.</p>
    </div>
    
    <div className="flex justify-center max-w-md mx-auto">
      {/* Plano Premium */}
      <div className="bg-rosa-aquarela text-verde-musgo rounded-lg shadow-xl p-8 border-2 border-terracota relative w-full">
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-terracota text-white px-4 py-1 rounded-full text-sm font-bold">
          MÁS POPULAR
        </div>
        
        {/* Limited Time Badge */}
        <div className="absolute -top-3 -right-3 bg-terracota text-white px-3 py-1 rounded-full text-xs font-bold transform rotate-12">
          65% OFF
        </div>
        
        
        <p className="text-lg mb-2 text-verde-musgo/80">Pago único. Sin suscripciones.</p>
          <img 
            src="/images/es/notebook.jpg" 
            alt="Portada del eBook Mi Día Sin Caos"
            className="w-full max-w-[240px] mx-auto my-4 block"
            loading="lazy"
          />
        

        
        <div className="my-6">
          <span className="text-2xl font-semibold line-through text-verde-musgo/40">US$ 28.29</span>
          <span className="text-4xl sm:text-5xl font-black text-verde-musgo ml-2">US$ 9<span className="text-2xl sm:text-3xl align-top">.90</span></span>
        </div>
        <p className="text-sm text-verde-musgo/60 -mt-4 mb-4">Planner con más de 170 páginas</p>
        

        <ul className="space-y-3 text-left mb-6">
          <li className="flex items-center"><CheckIcon className="w-5 h-5 mr-2 text-dourado flex-shrink-0" /><span>Accede y completa desde donde quieras, en el celular, tablet o computadora</span></li>
          <li className="flex items-center"><CheckIcon className="w-5 h-5 mr-2 text-dourado flex-shrink-0" /><span>Planner en PDF para Impresión</span></li>
          <li className="flex items-center"><CheckIcon className="w-5 h-5 mr-2 text-dourado flex-shrink-0" /><span>Diseños Flexibles y Sin Fechas</span></li>
          <li className="flex items-center"><CheckIcon className="w-5 h-5 mr-2 text-dourado flex-shrink-0" /><span>+170 Maneras de hacer que las cosas sucedan</span></li>
          <li className="flex items-center"><CheckIcon className="w-5 h-5 mr-2 text-dourado flex-shrink-0" /><span>Imprime cuantas veces quieras</span></li>
          <li className="flex items-center"><CheckIcon className="w-5 h-5 mr-2 text-dourado flex-shrink-0" /><span>Actualizaciones gratis para siempre</span></li>
        </ul>
        
        <div className="bg-creme-papel border border-terracota/20 rounded-lg p-4 mb-6 shadow-inner">
          <h4 className="text-lg font-bold text-terracota mb-3 text-center">🎁 BONOS INCLUIDOS</h4>
          <ul className="space-y-2 text-sm text-left">
             <li className="flex items-center">
               <CheckIcon className="w-4 h-4 mr-2 text-dourado flex-shrink-0" />
               <span>Ejercicios Listos para Explorar el TDAH</span>
             </li>
             <li className="flex items-center">
               <CheckIcon className="w-4 h-4 mr-2 text-dourado flex-shrink-0" />
               <span>El Secreto Escondido Dentro de Ti</span>
             </li>
             <li className="flex items-center">
               <CheckIcon className="w-4 h-4 mr-2 text-dourado flex-shrink-0" />
               <span>Organiza, Respira y Brilla: Checklist de Limpieza</span>
             </li>
             <li className="flex items-center">
               <CheckIcon className="w-4 h-4 mr-2 text-dourado flex-shrink-0" />
               <span>Colección Premium de Ejercicios Emocionales</span>
             </li>
             <li className="flex items-center">
               <CheckIcon className="w-4 h-4 mr-2 text-dourado flex-shrink-0" />
               <span>Del Caos a la Conciencia: Diario de Síntomas</span>
             </li>
           </ul>
           
           {/* Validity Notice */}
           <div className="mt-4 text-center">
             <ValidityNotice />
           </div>
        </div>

        <a 
          href={(function() {
            const base = "https://pay.hotmart.com/U104856610K?off=j4uza5hf&checkoutMode=10";
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
          OBTENER MI PLANNER
        </a>
        
        {/* Risk Reversal */}
        <div className="mt-4 text-center">
          <p className="text-xs text-verde-musgo/60">🛡️ Garantía de 30 días o te devolvemos tu dinero</p>
          <p className="text-xs text-verde-musgo/40 mt-1">Compra 100% segura y protegida</p>
        </div>
      </div>
    </div>
  </section>
);

const FAQ: React.FC = () => (
  <section className="px-4 sm:px-6 py-8 sm:py-10 bg-rosa-aquarela">
    <h2 className="text-2xl sm:text-3xl font-bold text-verde-musgo mb-8 text-center">
      Preguntas Frecuentes
    </h2>
    <div className="max-w-2xl mx-auto space-y-6 text-left">
      <div>
        <h3 className="font-semibold text-base sm:text-lg text-terracota">
          ¿Cómo funciona el planner?
        </h3>
        <p className="mt-1 text-sm sm:text-base text-verde-musgo/80">
          Recibirás un archivo PDF de alta calidad en tamaño A4 y A5 listo para imprimir en casa o en una gráfica. Puedes imprimir las páginas que necesites, cuantas veces quieras. Recomendamos imprimir en papel de gramaje medio a alto para mayor durabilidad.
        </p>
      </div>
      <div className="border-t border-terracota/10 pt-6">
        <h3 className="font-semibold text-base sm:text-lg text-terracota">
          ¿Es un pago único o una suscripción?
        </h3>
        <p className="mt-1 text-sm sm:text-base text-verde-musgo/80">
          ¡Es un pago 100% único! Compras una vez y tienes acceso de por vida al planner y a todas las futuras actualizaciones, sin ninguna tarifa recurrente.
        </p>
      </div>
      <div className="border-t border-terracota/10 pt-6">
        <h3 className="font-semibold text-base sm:text-lg text-terracota">
          ¿Cómo recibiré el planner después de la compra?
        </h3>
        <p className="mt-1 text-sm sm:text-base text-verde-musgo/80">
          Inmediatamente después de la confirmación del pago, recibirás un correo electrónico con un enlace para descargar tu planner en PDF. El proceso es instantáneo.
        </p>
      </div>
      <div className="border-t border-terracota/10 pt-6">
        <h3 className="font-semibold text-base sm:text-lg text-terracota">
          ¿Y si no funciona para mí?
        </h3>
        <p className="mt-1 text-sm sm:text-base text-verde-musgo/80">
          Tenemos una garantía de satisfacción de 30 días. Si sientes que el planner no cumplió tus expectativas, solo contáctanos dentro de los 30 días para un reembolso total, sin complicaciones.
        </p>
      </div>
      <div className="border-t border-terracota/10 pt-6">
        <h3 className="font-semibold text-base sm:text-lg text-terracota">
          ¿Necesito tener diagnóstico de TDAH para usarlo?
        </h3>
        <p className="mt-1 text-sm sm:text-base text-verde-musgo/80">
          No, el planner fue desarrollado para ayudar a cualquier persona que se identifique con los desafíos del TDAH, incluso sin diagnóstico formal. Las estrategias son útiles para cualquier persona que busque mejorar su enfoque y organización.
        </p>
      </div>
    </div>
  </section>
);


const Footer: React.FC = () => (
  <footer className="bg-verde-musgo text-creme-papel text-center px-4 sm:px-6 py-8 border-t border-terracota/20">
    <p className="font-bold text-xl tracking-tight">Mi Día Sin Caos</p>
    <p className="text-sm mt-2 opacity-70">
      &copy; {new Date().getFullYear()} Mi Día Sin Caos. Todos los Derechos Reservados.
    </p>
    <p className="text-xs mt-6 opacity-50 max-w-md mx-auto leading-relaxed">
      Invertí años de trabajo en la investigación y diseño de este planner con mi equipo. Por favor, respeta a los creadores y apoya el trabajo original.
    </p>
    <div className="text-xs mt-6 opacity-60 space-x-6">
      <a href="#" className="hover:text-rosa-aquarela transition-colors">Términos de Servicio</a>
      <a href="#" className="hover:text-rosa-aquarela transition-colors">Política de Privacidad</a>
    </div>
  </footer>
);



function App({ showBlackFridayImages = false }: { showBlackFridayImages?: boolean }) {
  return (
    <div className="min-h-screen bg-creme-papel font-sans text-verde-musgo antialiased">
      <Header />
      <main className="max-w-screen-md mx-auto shadow-2xl bg-creme-papel">
        <div className="bg-creme-papel">
          <Hero />
          <ScienceBasedSection />

      <Features />
      {showBlackFridayImages && (
          <section className="px-4 sm:px-6 py-6 bg-creme-papel">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-lg overflow-hidden shadow-lg border border-terracota/10">
                  <img
                    src="/images/black-friday/planner2026.png"
                    alt="Visualização do Planner 2026"
                    className="w-full h-auto object-cover"
                  />
                </div>
            </div>
          </section>
        )}


          <Pricing />
          <Bonus />
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

export default App;
