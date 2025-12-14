'use client';

import { Product } from '@/types/product';
import { useEffect } from 'react';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  const categoryLabel: Record<Product['category'], string> = {
    tables: 'Столы',
    beds: 'Кровати',
    shelving: 'Стеллажи',
    chairs: 'Стулья',
    mirrors: 'Зеркала',
    sofas: 'Диваны',
    rugs: 'Ковры',
    lamps: 'Лампы',
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
          onClick={onClose}
        />

        {/* Modal */}
        <div className="relative bg-[rgb(192_213_206)] rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[#636E72] hover:text-[#2D3436] z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Image */}
              <div className="relative h-96 bg-gray-200 rounded-lg">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Details */}
              <div>
                <div className="mb-4">
                  <span className="inline-block bg-[#C9DAD2] text-[#2D3436] px-3 py-1 rounded-full text-sm font-medium mb-2">
                    {categoryLabel[product.category] ?? product.category}
                  </span>
                  {product.inStock ? (
                    <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium ml-2">
                      В наличии
                    </span>
                  ) : (
                    <span className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium ml-2">
                      Нет в наличии
                    </span>
                  )}
                </div>

                <h2 className="text-3xl font-semibold text-[#2D3436] mb-4">{product.name}</h2>

                <p className="text-[#636E72] mb-6 leading-relaxed">{product.description}</p>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-[#2D3436] mb-3">Характеристики</h3>
                  
                  {product.dimensions && (
                    <div className="mb-4">
                      <h4 className="font-medium text-[#2D3436] mb-2">Размеры:</h4>
                      <ul className="text-[#636E72] space-y-1">
                        <li>Ширина: {product.dimensions.width} см</li>
                        <li>Высота: {product.dimensions.height} см</li>
                        {product.dimensions.depth && (
                          <li>Глубина: {product.dimensions.depth} см</li>
                        )}
                      </ul>
                    </div>
                  )}

                  {product.materials && product.materials.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-medium text-[#2D3436] mb-2">Материалы:</h4>
                      <p className="text-[#636E72]">{product.materials.join(', ')}</p>
                    </div>
                  )}
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-semibold text-[#D8A318]">
                      {product.price.toLocaleString('ru-RU')} ₽
                    </span>
                  </div>
                  
                  {product.manufacturerUrl ? (
                    <a
                      href={product.manufacturerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full py-3 rounded-lg font-medium text-lg text-center transition-colors ${
                        product.inStock
                          ? 'bg-[#2D3436] text-white hover:bg-[#1a1d1f]'
                          : 'bg-gray-300 text-[#636E72] cursor-not-allowed pointer-events-none'
                      }`}
                    >
                      {product.inStock ? 'Перейти на сайт производителя' : 'Нет в наличии'}
                    </a>
                  ) : (
                    <button
                      disabled={!product.inStock}
                      className={`w-full py-3 rounded-lg font-medium text-lg transition-colors ${
                        product.inStock
                          ? 'bg-[#2D3436] text-white hover:bg-[#1a1d1f]'
                          : 'bg-gray-300 text-[#636E72] cursor-not-allowed'
                      }`}
                    >
                      {product.inStock ? 'Перейти на сайт производителя' : 'Нет в наличии'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
