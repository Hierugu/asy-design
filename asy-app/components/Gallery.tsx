export default function Gallery() {
  const images = [
    { id: 1, title: 'Современный интерьер' },
    { id: 2, title: 'Классический дизайн' },
    { id: 3, title: 'Минималистичное пространство' },
  ];

  return (
    <section className="py-16 bg-[rgb(192_213_206)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {images.map((image) => (
            <div
              key={image.id}
              className="aspect-square bg-gray-300 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
