import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#D8A318] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-semibold text-[#2D3436] mb-6">
              ASY Design
            </h1>
            <p className="text-xl text-[#2D3436] mb-8 max-w-2xl mx-auto leading-relaxed">
              Создаем уют и комфорт в вашем доме с нашей коллекцией мебели и декора
            </p>
            <Link
              href="/catalog"
              className="inline-block bg-[#2D3436] text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-[#1a1d1f] transition-colors"
            >
              Перейти к каталогу
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center text-[#2D3436] mb-12">
            Почему выбирают нас
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#C9DAD2] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#2D3436]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#2D3436] mb-2">Качество</h3>
              <p className="text-[#636E72] leading-relaxed">Только проверенные материалы и производители</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#C9DAD2] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#2D3436]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#2D3436] mb-2">Быстрая доставка</h3>
              <p className="text-[#636E72] leading-relaxed">Доставим ваш заказ в кратчайшие сроки</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#C9DAD2] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#2D3436]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#2D3436] mb-2">Индивидуальный подход</h3>
              <p className="text-[#636E72] leading-relaxed">Поможем подобрать идеальный вариант</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#D8A318] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-[#2D3436] mb-4">
            Готовы преобразить свой дом?
          </h2>
          <p className="text-lg text-[#2D3436] mb-8 leading-relaxed">
            Ознакомьтесь с нашим каталогом и найдите идеальные решения
          </p>
          <Link
            href="/catalog"
            className="inline-block bg-white text-[#2D3436] px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Смотреть каталог
          </Link>
        </div>
      </section>
    </main>
  );
}

