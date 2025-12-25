import Image from 'next/image';

export default function HeroAbout() {
  const goals = [
    'Поддержка отечественных производителей: мы помогаем российским заводам и мастерским выйти на широкую аудиторию, рассказывая об их качестве, инновациях и преимуществах.',
    'Осознанный выбор для покупателя: мы предоставляем полную, проверенную информацию о товарах, помогая вам сделать информированную покупку без компромиссов в качестве.',
    'Создание единого рынка: мы формируем прозрачный и удобный рынок российских товаров для дома, где легко найти именно то, что нужно.',
  ];

  return (
    <section className="py-16 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md h-96 bg-gray-300 rounded-2xl overflow-hidden">
              <Image
                src="/img/0.JPG"
                alt="Домострой — команда и производство"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 384px, 100vw"
                priority
              />
            </div>
          </div>

          {/* Right Column - Text */}
          <div className="max-w-lg">
            <h2 className="text-4xl font-semibold text-[#2D3436] mb-6">О нас</h2>
            
            <div className="space-y-4 mb-8 text-[var(--foreground)] leading-relaxed">
              <p>
                Домострой — это не просто интернет-каталог, а комплексная экосистема, посвящённая импортозамещению в сфере строительства, отделки и обустройства дома.
              </p>
              <p>
                Мы объединяем на одной площадке лучших российских производителей материалов и мебели, чтобы вы могли легко найти, сравнить и приобрести всё необходимое для создания идеального пространства.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#2D3436] mb-4">Наши цели:</h3>
              <ul className="space-y-4">
                {goals.map((goal, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#D8A318] mr-3 mt-1 shrink-0">•</span>
                    <span className="text-[var(--foreground)] text-sm leading-relaxed">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}