export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#C9DAD2] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold text-[#2D3436] mb-8">Контакты</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-2xl font-semibold text-[#2D3436] mb-6">Как с нами связаться</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#C9DAD2] rounded-full flex items-center justify-center mr-4 shrink-0">
                    <svg className="w-5 h-5 text-[#2D3436]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#2D3436] mb-1">Телефон</h3>
                    <p className="text-[#636E72]">+7 (495) 123-45-67</p>
                    <p className="text-[#636E72]">+7 (800) 555-35-35</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#C9DAD2] rounded-full flex items-center justify-center mr-4 shrink-0">
                    <svg className="w-5 h-5 text-[#2D3436]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#2D3436] mb-1">Email</h3>
                    <p className="text-[#636E72]">info@asydesign.ru</p>
                    <p className="text-[#636E72]">sales@asydesign.ru</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#C9DAD2] rounded-full flex items-center justify-center mr-4 shrink-0">
                    <svg className="w-5 h-5 text-[#2D3436]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#2D3436] mb-1">Адрес</h3>
                    <p className="text-[#636E72]">г. Москва, ул. Примерная, д. 123</p>
                    <p className="text-[#636E72]">БЦ "Современный", офис 456</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#C9DAD2] rounded-full flex items-center justify-center mr-4 shrink-0">
                    <svg className="w-5 h-5 text-[#2D3436]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#2D3436] mb-1">Режим работы</h3>
                    <p className="text-[#636E72]">Пн-Пт: 9:00 - 20:00</p>
                    <p className="text-[#636E72]">Сб-Вс: 10:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold text-[#2D3436] mb-6">Напишите нам</h2>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#2D3436] mb-1">
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D8A318] focus:border-transparent"
                  placeholder="Иван Иванов"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#2D3436] mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D8A318] focus:border-transparent"
                  placeholder="ivan@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#2D3436] mb-1">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D8A318] focus:border-transparent"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#2D3436] mb-1">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D8A318] focus:border-transparent resize-none"
                  placeholder="Ваше сообщение..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#2D3436] text-white py-3 rounded-lg font-medium hover:bg-[#1a1d1f] transition-colors"
              >
                Отправить сообщение
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
