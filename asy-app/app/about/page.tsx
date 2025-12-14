export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[rgb(178_199_192)] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold text-[#2D3436] mb-8">О нас</h1>
        
        <div className="bg-[rgb(192_213_206)] rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold text-[#2D3436] mb-4">Домострой</h2>
          <p className="text-[#636E72] leading-relaxed mb-4">
            Домострой — это не просто интернет-каталог, а комплексная экосистема, посвящённая импортозамещению в сфере строительства, отделки и обустройства дома.
          </p>
          <p className="text-[#636E72] leading-relaxed mb-4">
            Мы объединяем на одной площадке лучших российских производителей материалов и мебели, чтобы вы могли легко найти, сравнить и приобрести всё необходимое для создания идеального пространства.
          </p>
          
          <h3 className="text-xl font-semibold text-[#2D3436] mb-4 mt-6">Наши цели:</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-[#2D3436] mb-2">Поддержка отечественных производителей</h4>
              <p className="text-[#636E72] leading-relaxed">
                Мы помогаем российским заводам и мастерским выйти на широкую аудиторию, рассказывая об их качестве, инновациях и преимуществах.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-[#2D3436] mb-2">Осознанный выбор для покупателя</h4>
              <p className="text-[#636E72] leading-relaxed">
                Мы предоставляем полную, проверенную информацию о товарах, помогая вам сделать информированную покупку без компромиссов в качестве.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-[#2D3436] mb-2">Создание единого рынка</h4>
              <p className="text-[#636E72] leading-relaxed">
                Мы формируем прозрачный и удобный рынок российских товаров для дома, где легко найти именно то, что нужно.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[rgb(192_213_206)] rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-[#2D3436]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#2D3436]">Качество</h3>
            </div>
            <p className="text-[#636E72] leading-relaxed">
              Работаем только с проверенными российскими производителями и гарантируем высокое качество каждого товара.
            </p>
          </div>

          <div className="bg-[rgb(192_213_206)] rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-[#2D3436]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#2D3436]">Прозрачность</h3>
            </div>
            <p className="text-[#636E72] leading-relaxed">
              Полная информация о производстве, материалах и процессах. Никаких скрытых условий.
            </p>
          </div>

          <div className="bg-[rgb(192_213_206)] rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-[#2D3436]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#2D3436]">Консультации</h3>
            </div>
            <p className="text-[#636E72] leading-relaxed">
              Наши эксперты помогут подобрать товары под ваш проект и бюджет.
            </p>
          </div>

          <div className="bg-[rgb(192_213_206)] rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-[#2D3436]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#2D3436]">Импортозамещение</h3>
            </div>
            <p className="text-[#636E72] leading-relaxed">
              Поддерживаем российскую экономику, выбирая лучшие отечественные решения.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}