export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#C9DAD2] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold text-[#2D3436] mb-8">О нас</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold text-[#2D3436] mb-4">ASY Design</h2>
          <p className="text-[#636E72] leading-relaxed mb-4">
            Мы — команда профессионалов, которая помогает создавать уютные и стильные интерьеры. 
            Наша миссия — сделать качественную мебель и декор доступными для каждого дома.
          </p>
          <p className="text-[#636E72] leading-relaxed mb-4">
            С 2015 года мы работаем с лучшими производителями и отбираем только те товары, 
            которые сочетают в себе качество, функциональность и современный дизайн.
          </p>
          <p className="text-[#636E72] leading-relaxed">
            В нашем каталоге вы найдете широкий ассортимент мебели и декора для любого 
            стиля интерьера — от классики до минимализма.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#C9DAD2] rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-[#2D3436]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#2D3436]">Качество</h3>
            </div>
            <p className="text-[#636E72] leading-relaxed">
              Работаем только с проверенными поставщиками и гарантируем высокое качество каждого товара.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#C9DAD2] rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-[#2D3436]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#2D3436]">Быстрая доставка</h3>
            </div>
            <p className="text-[#636E72] leading-relaxed">
              Доставка по городу в течение 1-3 дней. Бережная транспортировка и профессиональная сборка.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#C9DAD2] rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-[#2D3436]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#2D3436]">Консультации</h3>
            </div>
            <p className="text-[#636E72] leading-relaxed">
              Наши специалисты помогут подобрать мебель и декор под ваш интерьер и бюджет.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#C9DAD2] rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-[#2D3436]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#2D3436]">Гибкие цены</h3>
            </div>
            <p className="text-[#636E72] leading-relaxed">
              Регулярные акции и специальные предложения. Система скидок для постоянных клиентов.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
