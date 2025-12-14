export default function AudienceSection() {
  const audiences = [
    {
      title: 'Для молодых семей',
      benefits: [
        'Скидки и спецпредложения',
        'Готовые решения для квартир',
        'Каталоги стилей',
        'Калькулятор бюджета',
        'Чек-листы ремонта',
      ],
    },
    {
      title: 'Для арендодателей',
      benefits: [
        'Прочная и практичная мебель',
        'Готовые комплекты для сдачи',
        'Консультации профессионалов',
        'Оптовые скидки',
        'Поддержка при замене',
      ],
    },
    {
      title: 'Для дизайнеров / начинающих',
      benefits: [
        'Эксклюзивные материалы',
        'Доступ к портфолио мастеров',
        'Сеть профессиональных партнеров',
        'Учебные ресурсы',
        'Коммьюнити и форум',
      ],
    },
  ];

  return (
    <section className="py-16 bg-[rgb(178_199_192)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div key={index} className="bg-[rgb(192_213_206)] rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-[#2D3436] mb-6">{audience.title}</h3>
              <ul className="space-y-3">
                {audience.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[#D8A318] mr-3 mt-1">✓</span>
                    <span className="text-[#636E72]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
