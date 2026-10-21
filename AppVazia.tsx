import React from 'react';
import { Analytics } from '@vercel/analytics/react';

// ============================================================
// Checkout (link Hotmart atual, com repasse de UTMs/SCK)
// ============================================================
const CHECKOUT_BASE = 'https://pay.hotmart.com/G105627121L?off=5dr75y3y&checkoutMode=10';

function buildCheckoutUrl(): string {
  if (typeof window === 'undefined') return CHECKOUT_BASE;

  let url: URL;
  try {
    url = new URL(CHECKOUT_BASE);
  } catch {
    return CHECKOUT_BASE;
  }

  const allowed = new Set([
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_term',
    'utm_content',
    'utm_id',
    'gclid',
    'fbclid',
    'wbraid',
    'gbraid',
    'msclkid',
    'src',
    'sck',
  ]);

  const incoming = new URLSearchParams(window.location.search);
  const hash = window.location.hash || '';
  const hashQueryIndex = hash.indexOf('?');
  if (hashQueryIndex !== -1) {
    const hashParams = new URLSearchParams(hash.slice(hashQueryIndex));
    hashParams.forEach((value, key) => {
      if (!incoming.has(key)) incoming.set(key, value);
    });
  }

  incoming.forEach((value, key) => {
    if ((allowed.has(key) || key.startsWith('utm_')) && !url.searchParams.has(key)) {
      url.searchParams.set(key, value);
    }
  });

  const source = ['sck', 'src', 'utm_source', 'utm_campaign', 'utm_medium', 'utm_content', 'utm_term']
    .map((key) => incoming.get(key))
    .filter(Boolean)
    .join('|');

  if (source) {
    if (!url.searchParams.has('sck')) url.searchParams.set('sck', source);
    if (!url.searchParams.has('src')) url.searchParams.set('src', source);
  }

  return url.toString();
}

// ============================================================
// DS-01 · Editorial Minimal — constantes literais dos tokens
// ============================================================
const C = {
  ink: 'text-[#141414]',
  ink70: 'text-[#141414]/[0.70]',
  ink60: 'text-[#141414]/[0.60]',
  ink55: 'text-[#141414]/[0.55]',
  ink45: 'text-[#141414]/[0.45]',
  ink40: 'text-[#141414]/[0.40]',
  ink30: 'text-[#141414]/[0.30]',
};

const HAIR = 'border-[#141414]/[0.08]';

const SH_LG = 'shadow-[0_0_0_1px_rgba(20,20,20,0.06),0_16px_32px_-16px_rgba(20,20,20,0.30)]';

const ACCENT = {
  blue: { tint: 'bg-[#DFE9FB]', text: 'text-[#1F4A94]', solid: '#3B7BE8', panel: 'bg-[#EEF3FC]' },
  green: { tint: 'bg-[#DFF2E6]', text: 'text-[#1D5E3A]', solid: '#2E9B5F', panel: 'bg-[#EEF6F0]' },
  coral: { tint: 'bg-[#FDE3DD]', text: 'text-[#8C2F20]', solid: '#E8604C', panel: 'bg-[#FCEFEA]' },
  purple: { tint: 'bg-[#EBE4FB]', text: 'text-[#4A3294]', solid: '#7A5AE0', panel: 'bg-[#F4F0FC]' },
  amber: { tint: 'bg-[#FBEFD9]', text: 'text-[#7A4B08]', solid: '#D98B1A', panel: 'bg-[#FCF6EA]' },
} as const;

type AccentName = keyof typeof ACCENT;

// Tipografia
const T = {
  displayXl: 'text-[40px] sm:text-[52px] lg:text-[68px] font-semibold leading-[1.06] tracking-[-0.05em]',
  displayL: 'text-[34px] sm:text-[42px] lg:text-[52px] font-semibold leading-[1.05] tracking-[-0.035em]',
  h2: 'text-[32px] sm:text-[38px] lg:text-[48px] font-semibold leading-[1.05] tracking-[-0.035em]',
  price: 'text-[48px] sm:text-[56px] font-semibold leading-none tracking-[-0.045em]',
  h3Card: 'text-[18px] font-semibold leading-[28px] tracking-[-0.015em]',
  h3Lista: 'text-[16px] font-semibold leading-[1.3] tracking-[-0.01em]',
  lead: 'text-[18px] leading-[1.55]',
  sub: 'text-[15px] sm:text-[16px] leading-[1.5]',
  body: 'text-[14px] sm:text-[15px] leading-[1.5]',
  ui: 'text-[14px] font-medium leading-[21px]',
};

// CTA
const CTA = 'QUERO MINHAS FERRAMENTAS';

// ============================================================
// Ícones ilustrados ("clay") — sprite SVG
// ============================================================
const ClaySprite: React.FC = () => (
  <svg width="0" height="0" aria-hidden="true" className="absolute">
    <defs>
      {/* calendário */}
      <symbol id="i-calendar" viewBox="0 0 36 36">
        <rect x="3" y="5" width="30" height="29" rx="9" fill={ACCENT.blue.solid} />
        <rect x="3" y="2.5" width="30" height="29" rx="9" fill={ACCENT.blue.tint} />
        <rect x="3.75" y="3.25" width="28.5" height="27.5" rx="8.25" fill="none" stroke={ACCENT.blue.solid} strokeWidth="1.5" />
        <rect x="9.5" y="10" width="17" height="14.5" rx="2.5" fill="#FFFFFF" />
        <rect x="9.5" y="10" width="17" height="4" rx="2" fill={ACCENT.blue.solid} opacity="0.35" />
        <rect x="13" y="16.5" width="4" height="3.5" rx="1" fill={ACCENT.blue.solid} />
        <rect x="19" y="16.5" width="4" height="3.5" rx="1" fill={ACCENT.blue.solid} opacity="0.35" />
      </symbol>
      {/* check */}
      <symbol id="i-check" viewBox="0 0 36 36">
        <rect x="3" y="5" width="30" height="29" rx="9" fill={ACCENT.green.solid} />
        <rect x="3" y="2.5" width="30" height="29" rx="9" fill={ACCENT.green.tint} />
        <rect x="3.75" y="3.25" width="28.5" height="27.5" rx="8.25" fill="none" stroke={ACCENT.green.solid} strokeWidth="1.5" />
        <path d="M11 17.5l4.5 4.5L25 12.5" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </symbol>
      {/* raio (foco) */}
      <symbol id="i-bolt" viewBox="0 0 36 36">
        <rect x="3" y="5" width="30" height="29" rx="9" fill={ACCENT.coral.solid} />
        <rect x="3" y="2.5" width="30" height="29" rx="9" fill={ACCENT.coral.tint} />
        <rect x="3.75" y="3.25" width="28.5" height="27.5" rx="8.25" fill="none" stroke={ACCENT.coral.solid} strokeWidth="1.5" />
        <path d="M19.5 8.5l-7 12h4.5l-1 7 7-12h-4.5z" fill="#FFFFFF" />
      </symbol>
      {/* relógio */}
      <symbol id="i-clock" viewBox="0 0 36 36">
        <rect x="3" y="5" width="30" height="29" rx="9" fill={ACCENT.purple.solid} />
        <rect x="3" y="2.5" width="30" height="29" rx="9" fill={ACCENT.purple.tint} />
        <rect x="3.75" y="3.25" width="28.5" height="27.5" rx="8.25" fill="none" stroke={ACCENT.purple.solid} strokeWidth="1.5" />
        <circle cx="18" cy="17" r="7.5" fill="#FFFFFF" />
        <path d="M18 12.5V17l3.5 2" fill="none" stroke={ACCENT.purple.solid} strokeWidth="2" strokeLinecap="round" />
      </symbol>
      {/* destaque */}
      <symbol id="i-spark" viewBox="0 0 36 36">
        <rect x="3" y="5" width="30" height="29" rx="9" fill={ACCENT.amber.solid} />
        <rect x="3" y="2.5" width="30" height="29" rx="9" fill={ACCENT.amber.tint} />
        <rect x="3.75" y="3.25" width="28.5" height="27.5" rx="8.25" fill="none" stroke={ACCENT.amber.solid} strokeWidth="1.5" />
        <path d="M18 8.5l2.1 5.4 5.4 2.1-5.4 2.1-2.1 5.4-2.1-5.4-5.4-2.1 5.4-2.1z" fill="#FFFFFF" />
      </symbol>
      {/* casa */}
      <symbol id="i-home" viewBox="0 0 36 36">
        <rect x="3" y="5" width="30" height="29" rx="9" fill={ACCENT.blue.solid} />
        <rect x="3" y="2.5" width="30" height="29" rx="9" fill={ACCENT.blue.tint} />
        <rect x="3.75" y="3.25" width="28.5" height="27.5" rx="8.25" fill="none" stroke={ACCENT.blue.solid} strokeWidth="1.5" />
        <path d="M11 17.5l7-6 7 6v6.5h-14z" fill="#FFFFFF" />
      </symbol>
      {/* coração */}
      <symbol id="i-heart" viewBox="0 0 36 36">
        <rect x="3" y="5" width="30" height="29" rx="9" fill={ACCENT.coral.solid} />
        <rect x="3" y="2.5" width="30" height="29" rx="9" fill={ACCENT.coral.tint} />
        <rect x="3.75" y="3.25" width="28.5" height="27.5" rx="8.25" fill="none" stroke={ACCENT.coral.solid} strokeWidth="1.5" />
        <path d="M18 25s-7-4.3-7-9a3.8 3.8 0 017-2.2A3.8 3.8 0 0125 16c0 4.7-7 9-7 9z" fill="#FFFFFF" />
      </symbol>
    </defs>
  </svg>
);

const Clay: React.FC<{ id: string; className?: string }> = ({ id, className = 'w-8 h-8' }) => (
  <svg className={`clay ${className}`} viewBox="0 0 36 36" aria-hidden="true">
    <use href={`#${id}`} />
  </svg>
);

// ============================================================
// Átomos
// ============================================================
const Eyebrow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="mono text-[12px] uppercase tracking-[0.08em] text-[#E8604C]">{children}</p>
);

const Tag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="mono inline-flex items-center h-[20px] px-[10px] rounded-full bg-[#141414] text-white text-[11px] uppercase tracking-[0.06em]">
    {children}
  </span>
);

const PrimaryButton: React.FC<{ children: React.ReactNode; full?: boolean; className?: string }> = ({
  children,
  full = false,
  className = '',
}) => (
  <a
    href={buildCheckoutUrl()}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center h-10 px-5 rounded-full bg-[#141414] text-white ${T.ui} tracking-[0.02em] hover:bg-[#2A2A2A] transition-colors duration-150 ${
      full ? 'w-full h-[48px]' : ''
    } ${className}`}
  >
    {children}
  </a>
);

const BlueCheck: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const StepBadge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="mono inline-flex items-center justify-center w-[22px] h-[22px] rounded-full bg-[#141414] text-white text-[11px] shrink-0">
    {children}
  </span>
);

const SectionHeader: React.FC<{ eyebrow?: string; title: string; subtitle?: string }> = ({
  eyebrow,
  title,
  subtitle,
}) => (
  <div className="px-[20px] sm:px-[40px] pt-[64px] pb-[56px] text-center">
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    <h2 className={`mt-3 ${T.h2} ${C.ink} max-w-[720px] mx-auto`}>{title}</h2>
    {subtitle && <p className={`mt-4 ${T.sub} ${C.ink60} max-w-[560px] mx-auto`}>{subtitle}</p>}
  </div>
);

// ============================================================
// "Veja por dentro" — galeria das 12 páginas do planner
// ============================================================
const Gallery: React.FC = () => {
  const pages = [
    '/images/nova-versao/versao01.jpg',
    '/images/nova-versao/versao02.jpg',
    '/images/nova-versao/quando-eu-vou.jpg',
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
  const [canPrev, setCanPrev] = React.useState(false);
  const [canNext, setCanNext] = React.useState(true);

  const updateArrows = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
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
  }, []);

  const scrollByCard = (direction: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const amount = card ? card.clientWidth + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: direction * amount, behavior: 'smooth' });
  };

  const arrowClass = `absolute top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-11 h-11 rounded-full bg-white border ${HAIR} text-[#141414] shadow-[0_6px_16px_-10px_rgba(20,20,20,0.30)] transition-colors duration-150 hover:bg-[#141414] hover:text-white disabled:opacity-30 disabled:pointer-events-none`;

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => scrollByCard(-1)}
        disabled={!canPrev}
        aria-label="Páginas anteriores"
        className={`${arrowClass} left-0 sm:-left-5`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div
        ref={trackRef}
        className="hide-scrollbar flex gap-[16px] overflow-x-auto scroll-smooth snap-x snap-mandatory py-[4px]"
      >
        {pages.map((src, index) => (
          <figure key={src} className="snap-start shrink-0 w-[74%] sm:w-[46%] md:w-[31%]">
            <img
              src={src}
              alt={`Página ${index + 1} do Planner Sem Caos`}
              loading="lazy"
              className={`w-full h-auto rounded-[12px] bg-white ${SH_LG}`}
            />
          </figure>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scrollByCard(1)}
        disabled={!canNext}
        aria-label="Próximas páginas"
        className={`${arrowClass} right-0 sm:-right-5`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

// ============================================================
// Menu
// ============================================================
const Navbar: React.FC = () => {
  const links = [
    { label: 'O diagnóstico', href: '#espelho' },
    { label: 'O que tem na caixa', href: '#caixa' },
    { label: 'Bônus', href: '#bonus' },
    { label: 'Preço', href: '#preco' },
  ];

  const go = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const el = document.querySelector(href);
    if (!el) return;
    event.preventDefault();
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  };

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-[#141414]/[0.08]">
      <div className="h-16 px-[20px] sm:px-[40px] flex items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-[8px] shrink-0">
          <span className="w-[18px] h-[18px] rounded-[5px] bg-[#141414]" />
          <span className="text-[15px] font-semibold tracking-[-0.02em] text-[#141414]">Planner Sem Caos</span>
        </a>

        <nav className="hidden md:flex items-center gap-[28px]">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(event) => go(event, link.href)}
              className={`${T.ui} ${C.ink60} hover:text-[#141414] transition-colors duration-150`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

// ============================================================
// 1 · Q · Qualificar (topo)
// ============================================================
const Hero: React.FC = () => (
  <section className={`px-[20px] sm:px-[40px] pt-[64px] sm:pt-[96px] pb-[48px] sm:pb-[64px] border-b ${HAIR}`}>
    <div className="flex items-center justify-center gap-[8px] text-center">
      <span className="w-[6px] h-[6px] rounded-full bg-[#E8604C] shrink-0" />
      <p className="mono text-[12px] tracking-[0.02em] text-[#E8604C]">
        Para quem descobriu o TDAH depois de adulto(a), ou está desconfiando agora.
      </p>
    </div>

    <h1 className={`mt-[20px] ${T.displayXl} ${C.ink} max-w-[900px] mx-auto text-center`}>
      Você finalmente descobriu o nome. Agora faltam as ferramentas
      <Clay id="i-spark" className="inline-block w-[0.86em] h-[0.86em] align-[-0.12em] ml-[0.06em]" />
    </h1>

    <p className={`mt-[40px] ${T.lead} ${C.ink60} max-w-[620px] mx-auto text-center`}>
      O diagnóstico explica o passado. O Planner Sem Caos cuida do dia de amanhã: uma caixa de
      ferramentas sem datas, sem cobrança e sem perfeccionismo, para organizar o dia, destravar
      tarefas e voltar para o que importa, no seu ritmo.
    </p>

    <div className="mt-[40px] mx-auto max-w-[560px]">
      <img
        src="/images/cover/capa-mockup-novo.jpg"
        alt="Mockup do Planner Sem Caos"
        className="w-full h-auto"
      />
    </div>

    <div className="mt-[32px] flex flex-wrap items-center justify-center gap-[10px]">
      <PrimaryButton>{CTA}</PrimaryButton>
    </div>

    <div className={`mt-[40px] pt-[24px] border-t ${HAIR}`}>
      <p className={`mono text-[11px] uppercase tracking-[0.06em] ${C.ink40} text-center`}>Esta página é pra você se:</p>
      <div className="mt-[16px] mx-auto max-w-[880px] grid gap-[12px] sm:gap-[24px] sm:grid-cols-3">
        {[
          'recebeu o diagnóstico de TDAH depois de adulto(a), ou se reconhece em todos os sinais e está investigando',
          'passou anos ouvindo que era preguiça, falta de esforço ou “cabeça de vento”',
          'entendeu o porquê, mas a rotina continua exatamente igual.',
        ].map((item) => (
          <div key={item} className="flex items-start gap-[10px]">
            <BlueCheck className="w-[14px] h-[14px] mt-[4px] text-[#2E9B5F] shrink-0" />
            <p className={`text-[14px] leading-[1.5] ${C.ink70}`}>{item}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ============================================================
// Faixa "veja por dentro" + janela de app
// ============================================================
const DemoStrip: React.FC = () => (
  <section className="border-b border-[#141414]/[0.08]">
    <div className={`px-[20px] sm:px-[40px] py-[14px] border-b ${HAIR} flex flex-wrap items-center gap-[10px]`}>
      <Tag>veja por dentro</Tag>
      <span className={`text-[13px] ${C.ink55}`}>
        Nada de páginas bonitas para ficar com medo de estragar. Aqui é para riscar, rabiscar e
        recomeçar quando precisar.
      </span>
    </div>
    <div className="bg-white px-[20px] sm:px-[40px] py-[40px]">
      <Gallery />
    </div>
  </section>
);

// ============================================================
// 2 · U · Entender (o espelho)
// ============================================================
const Espelho: React.FC = () => (
  <section id="espelho" className="border-b border-[#141414]/[0.08]">
    <SectionHeader
      title="Quando o diagnóstico chega tarde, ele vem com duas coisas: alívio e uma pergunta."
    />

    <div className="grid md:grid-cols-2 border-t border-[#141414]/[0.08]">
      <div className="px-[20px] sm:px-[40px] py-[32px]">
        <p className={`${T.body} ${C.ink60} max-w-[520px]`}>
          Primeiro vem o alívio. Finalmente existe uma explicação para os anos de “preguiçosa(o)”,
          “desligada(o)” e “cabeça de vento”. Não era falta de esforço.
        </p>
      </div>
      <div className={`md:border-l border-t md:border-t-0 ${HAIR} bg-[#FCEFEA] px-[20px] sm:px-[40px] py-[32px]`}>
        <p className="text-[19px] sm:text-[22px] font-semibold tracking-[-0.02em] leading-snug text-[#141414]">
          Depois vem a pergunta: “E agora? O que eu faço depois de uma vida inteira com esses hábitos?”
        </p>
      </div>
    </div>

    <div className={`border-t ${HAIR} px-[20px] sm:px-[40px] py-[28px]`}>
      <p className={`${T.body} ${C.ink60} max-w-[720px]`}>
        Você já leu sobre TDAH, já assistiu aos vídeos, já sabe que precisa de rotina, de listas, de
        pausas. Saber, você sabe. O problema é que saber nunca organizou a sua terça-feira.
      </p>
    </div>

    <div className={`border-t ${HAIR} bg-[#EEF3FC] px-[20px] sm:px-[40px] py-[32px]`}>
      <p className="text-[17px] sm:text-[19px] font-medium leading-[1.5] text-[#141414] max-w-[760px]">
        Esse espaço tem nome:{' '}
        <span className="font-semibold">a lacuna do diagnóstico.</span> É a distância entre entender por
        que você é assim e saber o que fazer na terça-feira às 9h.
      </p>
    </div>

    <div className={`border-t ${HAIR} px-[20px] sm:px-[40px] py-[28px]`}>
      <p className={`${T.body} ${C.ink60} max-w-[760px]`}>
        Enquanto essa lacuna fica aberta, a vida continua no mesmo ritmo: prazo perdido, conta esquecida,
        projeto largado na metade e uma voz nova dizendo que agora você não tem mais desculpa.
      </p>
    </div>
  </section>
);

// ============================================================
// 3 · E · Educar (por que a agenda comum não resolve)
// ============================================================
const Educar: React.FC = () => {
  const motivos = [
    {
      title: 'Ela cobra todos os dias.',
      text: 'Agenda com data transforma uma semana difícil em páginas em branco, e página em branco vira motivo para largar.',
    },
    {
      title: 'Ela tem um formato só.',
      text: 'Mas o seu dia não é igual todo dia: tem dia de energia alta, dia de cabeça cheia e dia inteiro na rua.',
    },
    {
      title: 'Ela pede para você planejar, mas não ajuda quando você trava.',
      text: 'E saber o que fazer é diferente de conseguir começar.',
    },
  ];

  const viloes: { n: number; nome: string; descricao: string; antidotoNome: string; antidoto: string; imagem: string }[] = [
    {
      n: 1,
      nome: 'O Adiador',
      descricao: 'Sabe exatamente o que fazer e, mesmo assim, não começa.',
      antidotoNome: 'Cardápio de Empurrõezinhos.',
      antidoto: 'Escolha uma entrada de 2 minutos, um prato principal de 15 minutos e uma sobremesa, que é a sua recompensa.',
      imagem: '/images/nova-versao/versao03.jpg',
    },
    {
      n: 2,
      nome: 'As 47 Abas Abertas',
      descricao: 'A cabeça pensa em tudo ao mesmo tempo e não desliga.',
      antidotoNome: 'Gavetas da Mente.',
      antidoto: 'Guarde cada preocupação na sua gaveta (trabalho, casa, pessoas, saúde, dinheiro, ideias soltas) e escolha qual abrir primeiro.',
      imagem: '/images/viloes/gavetas-mente.jpg',
    },
    {
      n: 3,
      nome: 'O Incêndio',
      descricao: 'Tudo é urgente, tudo é para ontem.',
      antidotoNome: 'Meu Fogão de Tarefas.',
      antidoto: 'Coloque cada tarefa numa boca do fogão: fogo alto (faço agora), médio (faço em seguida), baixo (pode esperar) ou desligado (não é para hoje). Só uma panela no fogo alto por vez.',
      imagem: '/images/viloes/tarefas-fogao.jpg',
    },
  ];

  return (
    <section id="virada" className="border-b border-[#141414]/[0.08]">
      <SectionHeader
        title="Por que a agenda comum não funciona para uma cabeça que pensa rápido demais"
      />

      <div className="grid md:grid-cols-3 border-t border-[#141414]/[0.08]">
        {motivos.map((motivo, index) => (
          <div
            key={motivo.title}
            className={`px-[20px] sm:px-[40px] py-[32px] ${
              index > 0 ? `border-t md:border-t-0 md:border-l ${HAIR}` : ''
            }`}
          >
            <div className="flex items-start gap-[10px]">
              <StepBadge>{index + 1}</StepBadge>
              <h3 className={`${T.h3Card} ${C.ink}`}>{motivo.title}</h3>
            </div>
            <p className={`mt-[12px] ${T.body} ${C.ink55}`}>{motivo.text}</p>
          </div>
        ))}
      </div>

      <div className={`border-t ${HAIR}`}>
        <div className="px-[20px] sm:px-[40px] py-[40px]">
          <p className="text-[17px] sm:text-[19px] leading-[1.55] text-[#141414] max-w-[760px] mx-auto text-center">
            O Planner Sem Caos foi pensado ao contrário. Ele não é um caderno para preencher perfeitinho:
            é uma caixa de ferramentas. Você não segue uma ordem e não precisa usar tudo. Abre a página
            que resolve o problema de agora e fecha.
          </p>
        </div>

        <div className={`border-t ${HAIR} px-[20px] sm:px-[40px] py-[40px] bg-[#EEF3FC]`}>
          <p className={`text-[15px] font-medium leading-[1.45] ${C.ink} text-center`}>
            Os vilões do seu dia, e o antídoto de cada um.
          </p>
          <div className="mt-[20px] grid gap-[12px] xl:grid-cols-3">
            {viloes.map((v) => (
              <div key={v.nome} className={`overflow-hidden rounded-[10px] border ${HAIR} bg-white h-full flex flex-col`}>
                <div className="p-[14px]">
                  <p className={`text-[15px] font-semibold ${C.ink}`}>{v.nome}</p>
                  <p className={`mt-[6px] text-[13px] leading-[1.55] ${C.ink60}`}>{v.descricao}</p>
                  <p className={`mt-[10px] text-[13px] leading-[1.55] ${C.ink70}`}>
                    <span className="font-semibold text-[#1D5E3A]">Antídoto: {v.antidotoNome} </span>
                    {v.antidoto}
                  </p>
                </div>
                <img
                  src={v.imagem}
                  alt={`Página do planner, ${v.nome}`}
                  loading="lazy"
                  className="w-full h-auto mt-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`border-t ${HAIR} px-[20px] sm:px-[40px] py-[28px] text-center`}>
        <p className="text-[17px] sm:text-[19px] font-semibold tracking-[-0.02em] leading-snug text-[#141414] max-w-[720px] mx-auto">
          O diagnóstico te deu o manual de instruções. O planner te dá as ferramentas.
        </p>
      </div>
    </section>
  );
};

// ============================================================
// 4 · S · Estimular (o que tem na caixa)
// ============================================================
const Caixa: React.FC = () => {
  const groups: {
    icon: string;
    title: string;
    text: string;
    intro?: string;
    items?: string[];
  }[] = [
    {
      icon: 'i-calendar',
      title: 'Para o dia',
      text: '',
      intro: 'Você escolhe o formato que faz mais sentido para aquele dia.',
      items: [
        'Simples, com 3 prioridades',
        'Hora a hora',
        'Tudo que está na minha cabeça',
        'Com blocos de foco',
        'Manhã, tarde e noite com autocuidado',
        'Antes de sair / Ao voltar',
        'Meus Potes do Dia, para dias com energia diferente',
        'Meu Varal do Dia, para quem pensa melhor com imagens',
      ],
    },
    {
      icon: 'i-calendar',
      title: 'Para a semana',
      text: '',
      intro: 'Você escolhe a visão da semana que ajuda mais no momento.',
      items: [
        'Planner Semanal',
        'Minha Semana, por turnos',
        'Semana no Meu Ritmo, com a bateria de cada dia',
        'Meu Quadro da Semana, a fazer, fazendo, feito',
        'Uma Pedra de Cada Vez, para semanas pesadas',
        'As Peças da Minha Semana',
      ],
    },
    {
      icon: 'i-bolt',
      title: 'Para destravar',
      text: '',
      intro: 'Quando começar parece impossível, você abre a ferramenta certa para sair da inércia.',
      items: [
        'Por que Estou Adiando?',
        'Degraus da Tarefa',
        'Cardápio de Empurrõezinhos',
        'Meu Ritual de Largada, 3, 2, 1, já',
        'Só 5 Minutos',
      ],
    },
    {
      icon: 'i-spark',
      title: 'Para a cabeça cheia',
      text: '',
      intro: 'Quando está tudo misturado, essas páginas ajudam a clarear e organizar o que está na cabeça.',
      items: [
        'Filtro de Pensamentos',
        'Do Caos à Clareza',
        'O Fio da Meada',
        'Gavetas da Mente',
        'Estacionamento de Pensamentos',
      ],
    },
    {
      icon: 'i-clock',
      title: 'Para prazos e pedidos',
      text: '',
      intro: 'Quando tudo parece urgente, você ganha estrutura para priorizar, entender e executar.',
      items: [
        'Meu Fogão de Tarefas',
        'Painel de Prazos',
        'De Trás para Frente',
        'Tempo de Verdade',
        'Entendi o Pedido?',
        'Instruções em Passos',
      ],
    },
    {
      icon: 'i-check',
      title: 'Para impulsos e esquecimentos',
      text: '',
      intro: 'Essas páginas ajudam a reduzir decisões no impulso e esquecimentos do dia a dia.',
      items: [
        'Lista das 48 Horas',
        'Semáforo da Decisão',
        'Antes de Decidir',
        'Antes de Sair, chaves, carteira, remédio, fogão',
        'Quando Eu… Eu Vou…',
      ],
    },
    {
      icon: 'i-heart',
      title: 'Para objetivos, energia e pessoas',
      text: '',
      intro: 'Você também encontra páginas para acompanhar metas, energia e relações importantes.',
      items: [
        'No Alvo',
        'Minha Montanha',
        'Minha Ponte',
        'Barra de Progresso',
        'Meu Combustível',
        'Meus Círculos',
        'Manter Contato',
      ],
    },
  ];

  const combinados = [
    'Feito é melhor que perfeito.',
    'Pulou dias? Só recomece.',
    'Teste e ajuste: o planner se adapta a você, e não o contrário.',
  ];

  return (
    <section id="caixa" className="border-b border-[#141414]/[0.08]">
      <SectionHeader
        eyebrow="O que tem na caixa"
        title="Uma ferramenta para cada momento real do seu dia"
        subtitle="Você não segue uma ordem e não precisa usar tudo. Abre a página que resolve o problema de agora e fecha."
      />

      <div className="px-[20px] sm:px-[40px] pb-[48px]">
        <img
          src="/images/outros/mockup-planner-aberto-folheando.jpg"
          alt="Planner Sem Caos aberto, folheando as páginas"
          loading="lazy"
          decoding="async"
          className="block w-full h-auto mx-auto max-w-[720px] rounded-[12px]"
        />
      </div>

      <div className="grid sm:grid-cols-2 border-t border-[#141414]/[0.08]">
        {groups.map((group, index) => (
          <div
            key={group.title}
            className={`flex items-start gap-[14px] px-[20px] sm:px-[40px] py-[24px] border-b ${HAIR} ${
              index % 2 === 0 ? `sm:border-r ${HAIR}` : ''
            }`}
          >
            <Clay id={group.icon} className="w-8 h-8 shrink-0" />
            <div>
              <h3 className={`${T.h3Lista} ${C.ink}`}>{group.title}</h3>
              {group.intro ? (
                <>
                  <p className={`mt-[4px] text-[13px] leading-[1.55] ${C.ink55}`}>{group.intro}</p>
                  <div className="mt-[10px] flex flex-wrap gap-[8px]">
                    {group.items?.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center rounded-full border border-[#141414]/[0.08] px-[10px] py-[5px] text-[12px] leading-[1.35] text-[#141414]/[0.70]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </>
              ) : (
                <p className={`mt-[4px] text-[13px] leading-[1.55] ${C.ink55}`}>{group.text}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className={`px-[20px] sm:px-[40px] py-[28px] border-b ${HAIR} bg-[#EEF6F0]`}>
        <p className="mono text-[11px] uppercase tracking-[0.06em] text-[#1D5E3A]">começar é leve</p>
        <p className={`mt-[12px] text-[14px] sm:text-[15px] leading-[1.55] ${C.ink70} max-w-[820px]`}>
          Na primeira semana, você usa só duas páginas: uma para o dia e uma para a semana. E deixa à mão
          um kit de emergência (Filtro de Pensamentos e Só 5 Minutos) para os dias em que travar. Cada
          página tem uma ficha que explica para que serve, quando usar e traz um exemplo preenchido.
        </p>
      </div>

      <div className="grid md:grid-cols-3 border-b border-[#141414]/[0.08]">
        {combinados.map((text, index) => (
          <div
            key={text}
            className={`px-[20px] sm:px-[40px] py-[28px] ${
              index > 0 ? `border-t md:border-t-0 md:border-l ${HAIR}` : ''
            }`}
          >
            <span className={`mono text-[11px] ${C.ink40}`}>0{index + 1}</span>
            <p className={`mt-[10px] text-[15px] font-medium leading-[1.5] ${C.ink}`}>{text}</p>
          </div>
        ))}
      </div>

      <div className={`px-[20px] sm:px-[40px] py-[24px] border-b ${HAIR} flex flex-wrap items-center gap-[14px]`}>
        <Clay id="i-clock" className="w-8 h-8 shrink-0" />
        <p className={`text-[14px] leading-[1.55] ${C.ink55} max-w-[820px]`}>
          <span className={`font-semibold ${C.ink}`}>Formato: </span>
          PDF em A4. Imprima só as páginas que vai usar, quantas vezes quiser, ou preencha no tablet
          (GoodNotes, Notability ou Xodo). Sem datas: comece em qualquer dia do ano.
        </p>
      </div>

      <div className="grid sm:grid-cols-2">
        <div className={`px-[20px] sm:px-[40px] py-[28px] sm:border-r ${HAIR} border-b sm:border-b-0`}>
          <p className={`mono text-[10px] uppercase tracking-[0.06em] ${C.ink40}`}>antes</p>
          <p className={`mt-[10px] text-[15px] leading-[1.6] ${C.ink55}`}>
            Acordar sem saber por onde começar, e chegar à noite sem ter começado.
          </p>
        </div>
        <div className="px-[20px] sm:px-[40px] py-[28px]">
          <p className="mono text-[10px] uppercase tracking-[0.06em] text-[#2E9B5F]">depois</p>
          <p className={`mt-[10px] text-[15px] leading-[1.6] ${C.ink60}`}>
            Abrir uma página de manhã, saber o primeiro passo e ir dormir sabendo o que fica para
            amanhã.
          </p>
        </div>
      </div>
    </section>
  );
};

// ============================================================
// 4b · Bônus — capa desenhada + texto
// ============================================================
const CoverArt: React.FC<{ title: string; label: string; accent: AccentName }> = ({ title, label, accent }) => {
  const a = ACCENT[accent];
  return (
    <div
      className={`w-full aspect-[1/1.414] rounded-[6px] ${a.tint} relative overflow-hidden`}
      style={{ boxShadow: `inset 6px 0 0 rgba(20,20,20,0.10), var(--shadow-sm)` }}
    >
      <div className="p-[16px] pt-[22px]">
        <p className="mono text-[10px] uppercase tracking-[0.06em] text-[#141414]/[0.45]">{label}</p>
        <p className={`mt-[10px] text-[15px] font-semibold leading-[1.25] tracking-[-0.01em] ${a.text}`}>
          {title}
        </p>
        <div className="absolute bottom-[16px] left-[16px] right-[16px] space-y-[5px]">
          <span className="block h-[4px] rounded-full" style={{ background: a.solid }} />
          <span className="block h-[4px] w-[70%] rounded-full" style={{ background: a.solid, opacity: 0.45 }} />
          <span className="block h-[4px] w-[45%] rounded-full" style={{ background: a.solid, opacity: 0.25 }} />
        </div>
      </div>
    </div>
  );
};

const BonusCards: React.FC = () => {
  const bonuses: { title: string; label: string; text: string; accent: AccentName; imagem?: string }[] = [
    {
      title: 'O Imposto do TDAH',
      label: 'bônus 01',
      text: 'Descubra quanto o TDAH já te custou, em reais e em horas: uma checklist de vazamentos (conta esquecida com juros, compra por impulso, curso pago e largado, coisa perdida e comprada de novo, prazo estourado), uma trava simples para cada um, 15 minutos por semana para conferir e um placar do que você já deixou de perder.',
      accent: 'coral',
      imagem: '/images/novos-bonus/tdah-imposto.jpg',
    },
    {
      title: 'Mapa da Faxina',
      label: 'bônus 02',
      text: 'A casa dividida em zonas e limpa em rodadas de 15 minutos, com a ordem já decidida, para a faxina não virar um projeto de horas que você nem começa. Dá para dividir as zonas entre quem mora com você.',
      accent: 'blue',
      imagem: '/images/novos-bonus/mapa-faxina.jpg',
    },
    {
      title: 'Reescrevendo a Minha História',
      label: 'bônus 03',
      text: 'Páginas guiadas para revisitar os rótulos que você carregou por anos (“preguiçosa(o)”, “desligada(o)”, “cabeça de vento”) e escrever, ao lado de cada um, o que realmente estava acontecendo.',
      accent: 'purple',
      imagem: '/images/novos-bonus/minha-historia.jpg',
    },
    {
      title: 'Planner Sem Caos Kids',
      label: 'bônus 04',
      text: 'A versão para os pequenos, para organizar a rotina das crianças que têm os mesmos desafios que você. Porque, quando o diagnóstico chega, muitas vezes ele não chega só para um da casa.',
      accent: 'green',
      imagem: '/images/novos-bonus/kids.jpg',
    },
    {
      title: 'Como Contar para Quem Importa',
      label: 'bônus 05',
      text: 'Roteiros curtos para explicar o TDAH ao parceiro, à família e, se você quiser, no trabalho. Mais um espaço para combinar como essas pessoas podem ajudar, e o que não ajuda.',
      accent: 'amber',
      imagem: '/images/novos-bonus/paraquem-importa.jpg',
    },
    {
      title: 'Trabalho e Estudo sem Travar',
      label: 'bônus 06',
      text: 'Modelos para reuniões (o que foi decidido e o que eu preciso fazer depois), para responder e-mails acumulados e para estudar em blocos curtos, anotando o que distraiu.',
      accent: 'blue',
      imagem: '/images/novos-bonus/trabalho-estudos.jpg',
    },
  ];

  return (
    <section id="bonus" className="border-b border-[#141414]/[0.08]">
      <SectionHeader
        title="E, porque o TDAH não afeta só você, os 6 bônus também ajudam quem divide a casa, a rotina e a vida com você."
        subtitle="Tem página para você, para o seu parceiro e até para as crianças. Tudo em PDF, pronto para imprimir."
      />

      <div className="border-t border-[#141414]/[0.08]">
        {bonuses.map((bonus) => {
          const a = ACCENT[bonus.accent];
          return (
            <div
              key={bonus.title}
              className={`px-[20px] sm:px-[40px] py-[28px] border-b ${HAIR} ${a.panel}`}
            >
              <div className="grid gap-[24px] sm:grid-cols-[minmax(0,1fr)_240px] sm:items-center">
                <div className="min-w-0">
                  <p className={`mono text-[10px] uppercase tracking-[0.06em] ${a.text}`}>{bonus.label}</p>
                  <h3 className={`mt-[10px] text-[22px] sm:text-[26px] font-semibold leading-[1.1] tracking-[-0.02em] ${C.ink}`}>
                    {bonus.title}
                  </h3>
                  <p className={`mt-[10px] max-w-[580px] text-[14px] sm:text-[15px] leading-[1.65] ${C.ink60}`}>
                    {bonus.text}
                  </p>
                  <div className="mt-[16px] flex items-center gap-[10px]">
                    <span className="mono inline-flex items-center h-[20px] px-[10px] rounded-full bg-[#DFF2E6] text-[#1D5E3A] text-[11px] uppercase tracking-[0.06em]">
                      Grátis
                    </span>
                  </div>
                </div>
                <div className="w-full max-w-[240px] justify-self-center">
                  {bonus.imagem ? (
                    <img
                      src={bonus.imagem}
                      alt={bonus.title}
                      loading="lazy"
                      decoding="async"
                      className="block w-full h-auto"
                    />
                  ) : (
                    <CoverArt title={bonus.title} label={bonus.label} accent={bonus.accent} />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

// ============================================================
// 5 · T · Transição (oferta)
// ============================================================
const Pricing: React.FC = () => {
  const included = [
    'Planner Sem Caos completo, com todas as páginas',
    'Bônus 1 · O Imposto do TDAH',
    'Bônus 2 · Mapa da Faxina',
    'Bônus 3 · Reescrevendo a Minha História',
    'Bônus 4 · Planner Sem Caos Kids',
    'Bônus 5 · Como Contar para Quem Importa',
    'Bônus 6 · Trabalho e Estudo sem Travar',
    'Imprima quantas vezes quiser, ou preencha no tablet',
  ];

  return (
    <section id="preco" className="border-b border-[#141414]/[0.08]">
      <SectionHeader
        title="Duas páginas na primeira semana. É só isso que você precisa para começar."
      />

      <div className="grid md:grid-cols-2 border-t border-[#141414]/[0.08]">
        <div className="bg-[#FDE3DD] px-[20px] sm:px-[40px] py-[40px]">
          <p className="text-[14px] font-semibold text-[#8C2F20]">Planner Sem Caos completo + 6 bônus</p>

          <div className="mt-[28px] mx-auto max-w-[260px]">
            <img
              src="/images/cover/imagem-oferta.jpg"
              alt="Mockup do Planner Sem Caos"
              className="w-full h-auto"
            />
          </div>

          <div className="mt-[28px] flex items-end gap-[8px]">
            <span className={`${T.price} text-[#141414]`}>R$ 47</span>
            <span className={`text-[15px] ${C.ink55} mb-[6px]`}>/ sem assinatura</span>
          </div>
          <p className={`mt-[12px] text-[13px] ${C.ink45}`}>Você paga uma vez e usa para sempre.</p>

          <div className="mt-[32px]">
            <PrimaryButton full>{CTA}</PrimaryButton>
          </div>
          <p className={`mt-[12px] text-center text-[12px] ${C.ink40}`}>Compra 100% segura e protegida</p>
        </div>

        <div className={`md:border-l border-t md:border-t-0 ${HAIR} px-[20px] sm:px-[40px] py-[40px]`}>
          <p className={`mono text-[10px] uppercase tracking-[0.06em] ${C.ink40} mb-[16px]`}>
            o que está incluído
          </p>
          <div className="space-y-[12px]">
            {included.map((item) => (
              <div key={item} className="flex items-start gap-[10px]">
                <BlueCheck className="w-[14px] h-[14px] mt-[4px] text-[#2E9B5F] shrink-0" />
                <span className={`text-[14px] ${C.ink70}`}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`px-[20px] sm:px-[40px] py-[20px] border-t ${HAIR} flex items-center justify-center gap-[12px] text-center`}>
        <BlueCheck className="w-[14px] h-[14px] text-[#2E9B5F] shrink-0" />
        <p className={`text-[13px] ${C.ink55}`}>
          <span className={`font-semibold ${C.ink}`}>Você não arrisca nada.</span> Use o Planner Sem Caos
          por 30 dias. Se ele não ajudar a fechar a sua lacuna entre saber e fazer, é só mandar uma
          mensagem e devolvemos 100% do valor.
        </p>
      </div>
    </section>
  );
};

// ============================================================
// SEC-01 · Feedbacks · Mural com marca-texto
// ============================================================
const Feedbacks: React.FC = () => {
  const items: {
    nome: string;
    idade: string;
    foto: string;
    antes: string;
    destaque: string;
    depois?: string;
  }[] = [
    {
      nome: 'Marina',
      idade: '36 anos',
      foto: '/images/depoimentos/dep01.jpg',
      antes:
        'Descobri o TDAH aos 34 e passei meses só lendo sobre o assunto. O Só 5 Minutos foi a primeira coisa que me fez sair do lugar. Parece bobo, mas ',
      destaque: 'começar sem precisar terminar mudou tudo',
      depois: '.',
    },
    {
      nome: 'Rodrigo',
      idade: '41 anos',
      foto: '/images/depoimentos/dep02.jpg',
      antes:
        'O Fogão de Tarefas virou piada aqui em casa: só uma panela no fogo alto. Mas funciona. Pela primeira vez ',
      destaque: 'entreguei tudo do mês sem virar a noite',
      depois: '.',
    },
    {
      nome: 'Camila',
      idade: '21 anos',
      foto: '/images/depoimentos/dep03.jpg',
      antes: 'Comprei desconfiada, porque já tinha uma gaveta cheia de agendas abandonadas. Esse é ',
      destaque: 'o primeiro que eu largo e consigo voltar',
      depois: '.',
    },
    {
      nome: 'Renata',
      idade: '45 anos',
      foto: '/images/depoimentos/dep04.jpg',
      antes: 'O Antes de Sair fica colado na porta. Faz ',
      destaque: 'um mês que eu não volto para buscar a chave',
      depois: '.',
    },
    {
      nome: 'Patrícia',
      idade: '39 anos',
      foto: '/images/depoimentos/dep05.jpg',
      antes: 'Comecei a usar junto com a minha filha, que também tem TDAH. Virou ',
      destaque: 'nosso momento de domingo',
      depois: ': cada uma escolhe a sua página da semana.',
    },
    {
      nome: 'Larissa',
      idade: '29 anos',
      foto: '/images/depoimentos/dep06.jpg',
      antes: 'A culpa de fim de dia diminuiu muito. Tem dia que eu faço só uma coisa, mas ',
      destaque: 'é a coisa certa, e isso já basta',
      depois: '.',
    },
    {
      nome: 'Thiago',
      idade: '31 anos',
      foto: '/images/depoimentos/dep07.jpg',
      antes: 'A Lista das 48 Horas ',
      destaque: 'me salvou de umas três compras por impulso',
      depois:
        ' só no primeiro mês. Anotar e esperar dois dias é simples demais para funcionar, mas funciona.',
    },
    {
      nome: 'Aline',
      idade: '28 anos',
      foto: '/images/depoimentos/dep08.jpg',
      antes:
        'Meu marido sempre achou que era falta de vontade. Quando ele viu o planner aberto na mesa, com as panelas no fogo, ',
      destaque: 'entendeu como a minha cabeça funciona',
      depois: '.',
    },
  ];

  return (
    <section className="fb-section px-[20px] sm:px-[40px]">
      <h2 className="fb-title">O que acontece quando a cabeça finalmente ganha as ferramentas</h2>
      <p className="fb-subtitle">
        Quem usa o Planner Sem Caos conta como ficou a rotina depois que parou de recomeçar do zero.
      </p>

      <div className="fb-wall mx-auto max-w-[760px] mt-[40px]">
        {items.map((item, index) => (
          <div key={index} className="fb-item">
            <p className="fb-quote">
              <span className="fb-q">&ldquo;</span> {item.antes}
              <mark className="fb-mark">{item.destaque}</mark>
              {item.depois}
              <span className="fb-q">&rdquo;</span>
            </p>
            <div className="fb-author">
              <img className="fb-avatar" src={item.foto} alt="" loading="lazy" decoding="async" />
              <span className="fb-name">
                {item.nome}, {item.idade}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// ============================================================
// 6 · Perguntas frequentes
// ============================================================
const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => (
  <details className={`group border-t ${HAIR} py-[20px]`}>
    <summary className="flex items-center justify-between gap-[20px] cursor-pointer list-none [&::-webkit-details-marker]:hidden">
      <span className="text-[16px] font-medium text-[#141414]">{question}</span>
      <span className="text-[18px] leading-none text-[#141414]/[0.40] transition-transform duration-200 group-open:rotate-45">
        +
      </span>
    </summary>
    <p className="mt-[10px] max-w-[560px] text-[14px] leading-[1.6] text-[#141414]/[0.60]">{answer}</p>
  </details>
);

const FAQ: React.FC = () => {
  const items = [
    {
      question: '“Ainda não tenho diagnóstico, só desconfio. Serve pra mim?”',
      answer:
        'Serve. O planner foi feito para qualquer pessoa que sente que a mente pensa rápido demais, com ou sem diagnóstico.',
    },
    {
      question: '“Descobri com mais de 40 (ou 50, ou 60). Ainda faz sentido?”',
      answer:
        'Faz. Como as páginas não têm data, você começa no dia que decidir. E não precisa usar tudo: dá para começar com duas páginas.',
    },
    {
      question: '“Preciso usar todas as páginas?”',
      answer:
        'Não. O planner é uma caixa de ferramentas. Use só as páginas que ajudam você agora. Algumas talvez você nunca use, e está tudo bem.',
    },
    {
      question: '“E se eu largar, como larguei as outras agendas?”',
      answer:
        'Pegue uma página nova, escreva a data de hoje e recomece daqui. Não precisa compensar os dias que ficaram em branco.',
    },
    {
      question: '“Quanto tempo por dia eu preciso dedicar?”',
      answer:
        'Poucos minutos. Em um dia difícil, escrever uma única coisa que importa hoje já conta.',
    },
    {
      question: '“O planner substitui acompanhamento profissional?”',
      answer:
        'Não. Ele é uma ferramenta de organização para o dia a dia. Se você sente que a sua mente está atrapalhando muito a sua vida, procure um profissional de saúde.',
    },
    {
      question: '“Como recebo e como uso?”',
      answer:
        'Você recebe o PDF por e-mail logo após a confirmação do pagamento. Pode imprimir em A4 (em preto e branco, se quiser economizar tinta) ou usar no tablet.',
    },
  ];

  return (
    <section id="faq" className="border-b border-[#141414]/[0.08] px-[20px] sm:px-[40px] py-[64px]">
      <div className="max-w-[680px] mx-auto">
        <h2 className={`${T.h2} ${C.ink}`}>Ainda com dúvida?</h2>
        <div className="mt-[32px]">
          {items.map((item) => (
            <FaqItem key={item.question} question={item.question} answer={item.answer} />
          ))}
          <div className={`border-t ${HAIR}`} />
        </div>
      </div>
    </section>
  );
};

// ============================================================
// 7 · Fechamento
// ============================================================
const FinalCta: React.FC = () => (
  <section className={`relative border-b ${HAIR} px-[20px] sm:px-[40px] py-[64px] sm:py-[96px] text-center overflow-hidden`}>
    <Clay
      id="i-bolt"
      className="hidden md:block absolute top-[48px] left-[40px] w-[76px] h-[76px] rotate-[-10deg]"
    />
    <Clay
      id="i-spark"
      className="hidden md:block absolute bottom-[56px] left-[120px] w-[52px] h-[52px] rotate-[8deg]"
    />
    <Clay
      id="i-calendar"
      className="hidden md:block absolute top-[64px] right-[48px] w-[64px] h-[64px] rotate-[12deg]"
    />
    <Clay
      id="i-heart"
      className="hidden md:block absolute bottom-[48px] right-[132px] w-[56px] h-[56px] rotate-[-8deg]"
    />

    <h2 className={`${T.displayL} ${C.ink} max-w-[860px] mx-auto`}>
      Você passou anos sem saber o nome. Não precisa passar mais nenhum sem as ferramentas.
    </h2>
    <p className="mt-[20px] text-[22px] sm:text-[26px] font-semibold tracking-[-0.03em] text-[#141414]">
      Menos caos. Mais você.
    </p>

    <div className="mt-[32px] flex flex-wrap items-center justify-center gap-[10px]">
      <PrimaryButton>SIM, QUERO MINHAS FERRAMENTAS</PrimaryButton>
    </div>
    <p className={`mono mt-[16px] text-[11px] ${C.ink40}`}>
      pagamento único · acesso imediato · 30 dias de garantia
    </p>
  </section>
);

// ============================================================
// Rodapé
// ============================================================
const Footer: React.FC = () => (
  <footer className="px-[20px] sm:px-[40px]">
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-[32px] py-[40px] sm:py-[48px]">
      <div className="max-w-[280px]">
        <div className="flex items-center gap-[8px]">
          <span className="w-[18px] h-[18px] rounded-[5px] bg-[#141414]" />
          <span className="text-[15px] font-semibold tracking-[-0.02em] text-[#141414]">Planner Sem Caos</span>
        </div>
        <p className={`mt-[12px] text-[13px] leading-[1.6] ${C.ink55}`}>
          Um planner digital feito para o cérebro com TDAH. Use no tablet ou imprima e preencha à mão.
        </p>
      </div>

      <div>
        <p className={`mono text-[10.5px] uppercase tracking-[0.06em] ${C.ink40} mb-[12px]`}>produto</p>
        <div className="space-y-[8px]">
          {[
            { label: 'O diagnóstico', href: '#espelho' },
            { label: 'O que tem na caixa', href: '#caixa' },
            { label: 'Bônus inclusos', href: '#bonus' },
          ].map((link) => (
            <a key={link.label} href={link.href} className={`block text-[13px] ${C.ink60} hover:text-[#141414] transition-colors duration-150`}>
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div>
        <p className={`mono text-[10.5px] uppercase tracking-[0.06em] ${C.ink40} mb-[12px]`}>compra</p>
        <div className="space-y-[8px]">
          {[
            { label: 'Preço e oferta', href: '#preco' },
            { label: 'Garantia de 30 dias', href: '#preco' },
            { label: 'Perguntas frequentes', href: '#faq' },
          ].map((link) => (
            <a key={link.label} href={link.href} className={`block text-[13px] ${C.ink60} hover:text-[#141414] transition-colors duration-150`}>
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div>
        <p className={`mono text-[10.5px] uppercase tracking-[0.06em] ${C.ink40} mb-[12px]`}>legal</p>
        <div className="space-y-[8px]">
          <a href="#" className={`block text-[13px] ${C.ink60} hover:text-[#141414] transition-colors duration-150`}>
            Termos de Serviço
          </a>
          <a href="#" className={`block text-[13px] ${C.ink60} hover:text-[#141414] transition-colors duration-150`}>
            Política de Privacidade
          </a>
        </div>
      </div>
    </div>

    <div className={`border-t ${HAIR} py-[20px] flex flex-col sm:flex-row items-center justify-between gap-[8px]`}>
      <p className={`mono text-[11px] ${C.ink40}`}>&copy; {new Date().getFullYear()} Planner Sem Caos</p>
      <p className={`mono text-[11px] ${C.ink40}`}>
        Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook.
      </p>
    </div>
  </footer>
);

// ============================================================
// Página
// ============================================================
function AppVazia() {
  return (
    <div className="ds01 bg-white">
      <ClaySprite />
      <div
        className="bg-[#FFFFFF]"
        style={{
          paddingLeft: 'max(16px, env(safe-area-inset-left))',
          paddingRight: 'max(16px, env(safe-area-inset-right))',
        }}
      >
        <div className="mx-auto max-w-[1080px] bg-white border-x border-[#141414]/[0.08]">
          <Navbar />
          <Hero />
          <DemoStrip />
          <Espelho />
          <Educar />
          <Caixa />
          <BonusCards />
          <Pricing />
          <Feedbacks />
          <FAQ />
          <FinalCta />
          <Footer />
        </div>
      </div>
      <Analytics />
    </div>
  );
}

export default AppVazia;
