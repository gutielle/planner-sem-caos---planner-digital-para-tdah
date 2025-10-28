import React from 'react';

export default function Members() {
  return (
    <div className="min-h-screen bg-[#7B68EE] font-sans text-[#333333] antialiased">
      <main className="max-w-screen-md mx-auto shadow-2xl">
        <div className="bg-white px-4 sm:px-6 py-8 sm:py-10">
          <header className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#FF4757]">Área de Membros</h1>
            <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Acesse e baixe o conteúdo que você adquiriu. Salve este link e compartilhe apenas com quem tem acesso autorizado.
            </p>
          </header>

          <section aria-labelledby="downloads" className="space-y-6">
            <h2 id="downloads" className="sr-only">Downloads e Acesso</h2>

            <div className="grid gap-8 sm:grid-cols-2">
              {/* Planner Sem Caos (Digital) */}
              <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-[#FF4757]">Planner Sem Caos (Digital)</h3>
                <p className="mt-2 text-sm text-gray-600">Arquivos principais do planner e modelos.</p>
                <div className="mt-4 flex gap-3">
                  <a
                    href="https://drive.google.com/drive/folders/1ZM8NATB4b0XOOEZr48NsCkGrdmbB01cg?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border border-[#FF4757] text-[#FF4757] font-semibold text-sm uppercase px-4 py-2 rounded-md hover:bg-[#FFF5F5] transition-colors"
                  >
                    Ver no Drive
                  </a>
                </div>
              </article>

              {/* Pacote de Bônus */}
              <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-[#FF4757]">Pacote de Bônus</h3>
                <p className="mt-2 text-sm text-gray-600">Modelos e rastreadores extras incluídos na sua compra.</p>
                <div className="mt-4 flex gap-3">
                  <a
                    href="https://drive.google.com/drive/folders/1VjJjWj6wVah3mjnpwMdJyTwGYAXKxRjG?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border border-[#FF4757] text-[#FF4757] font-semibold text-sm uppercase px-4 py-2 rounded-md hover:bg-[#FFF5F5] transition-colors"
                  >
                    Ver no Drive
                  </a>
                </div>
              </article>

              {/* Atualizações e Versões */}
              <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-[#FF4757]">Atualizações e Versões</h3>
                <p className="mt-2 text-sm text-gray-600">Últimos lançamentos e histórico de versões.</p>
              </article>
            </div>
          </section>

          <section className="mt-8">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-lg">
              <h3 className="text-lg font-bold text-[#FF4757]">Precisa de ajuda com o acesso?</h3>
              <p className="mt-2 text-sm text-gray-600">
                Se você comprou com um e-mail diferente ou não encontra seus links, fale com o suporte e restauraremos seu acesso.
              </p>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-gray-700">
                <li>
                  E-mail: <a className="text-[#FF4757] underline" href="mailto:contato@plannersemcaos.com">contato@plannersemcaos.com</a>
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