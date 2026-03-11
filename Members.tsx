import React from 'react';

export default function Members() {
  return (
    <div className="min-h-screen bg-creme-papel font-sans text-verde-musgo antialiased">
      <main className="max-w-screen-md mx-auto shadow-2xl">
        <div className="bg-creme-papel px-4 sm:px-6 py-8 sm:py-10">
          <header className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-verde-musgo">Área de Membros</h1>
            <p className="mt-3 text-base sm:text-lg text-verde-musgo/80 max-w-2xl mx-auto">
              Acesse e baixe o conteúdo que você adquiriu. Salve este link e compartilhe apenas com quem tem acesso autorizado.
            </p>
          </header>

          <section aria-labelledby="downloads" className="space-y-6">
            <h2 id="downloads" className="sr-only">Downloads e Acesso</h2>

            <div className="grid gap-8 sm:grid-cols-2">
              {/* Planner Sem Caos (Digital) */}
              <article className="rounded-lg border border-terracota/10 bg-rosa-aquarela p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-terracota">Planner Sem Caos (Digital)</h3>
                <p className="mt-2 text-sm text-verde-musgo/70">Arquivos principais do planner e modelos.</p>
                <div className="mt-4 flex gap-3">
                  <a
                    href="https://drive.google.com/drive/folders/1ZM8NATB4b0XOOEZr48NsCkGrdmbB01cg?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border border-terracota text-terracota font-semibold text-sm uppercase px-4 py-2 rounded-md hover:bg-pessego-suave hover:text-white transition-colors"
                  >
                    Ver no Drive
                  </a>
                </div>
              </article>

              {/* Pacote de Bônus */}
              <article className="rounded-lg border border-terracota/10 bg-rosa-aquarela p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-terracota">Pacote de Bônus</h3>
                <p className="mt-2 text-sm text-verde-musgo/70">Modelos e rastreadores extras incluídos na sua compra.</p>
                <div className="mt-4 flex gap-3">
                  <a
                    href="https://drive.google.com/drive/folders/1VjJjWj6wVah3mjnpwMdJyTwGYAXKxRjG?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border border-terracota text-terracota font-semibold text-sm uppercase px-4 py-2 rounded-md hover:bg-pessego-suave hover:text-white transition-colors"
                  >
                    Ver no Drive
                  </a>
                </div>
              </article>

              {/* Atualizações e Versões */}
              <article className="rounded-lg border border-terracota/10 bg-rosa-aquarela p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-terracota">Atualizações e Versões</h3>
                <p className="mt-2 text-sm text-verde-musgo/70">Últimos lançamentos e histórico de versões.</p>
              </article>
            </div>
          </section>

          <section className="mt-8">
            <div className="rounded-lg border border-terracota/10 bg-rosa-aquarela p-6 shadow-lg">
              <h3 className="text-lg font-bold text-terracota">Precisa de ajuda com o acesso?</h3>
              <p className="mt-2 text-sm text-verde-musgo/80">
                Se você comprou com um e-mail diferente ou não encontra seus links, fale com o suporte e restauraremos seu acesso.
              </p>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-verde-musgo/70">
                <li>
                  E-mail: <a className="text-terracota underline" href="mailto:contato@plannersemcaos.com">contato@plannersemcaos.com</a>
                </li>
                <li>
                  Inclua o número do pedido e o e-mail da compra para agilizar o atendimento.
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
