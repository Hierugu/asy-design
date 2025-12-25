import Image from 'next/image';

export default function Gallery() {
  const images = [
    { id: 1, title: 'Современный интерьер', src: '/img/1.JPG' },
    { id: 2, title: 'Классический дизайн', src: '/img/2.JPG' },
    { id: 3, title: 'Минималистичное пространство', src: '/img/3.JPG' },
  ];

  return (
    <section className="py-16 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative aspect-square bg-gray-300 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 320px, 100vw"
                priority={image.id === 1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
