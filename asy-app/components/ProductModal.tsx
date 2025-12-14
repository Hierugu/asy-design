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

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
          onClick={onClose}
        />

        {/* Modal */}
        <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
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
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-2">
                    {product.category === 'furniture' ? 'Мебель' : 'Декор'}
                  </span>
                  {product.inStock ? (
                    <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold ml-2">
                      В наличии
                    </span>
                  ) : (
                    <span className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold ml-2">
                      Нет в наличии
                    </span>
                  )}
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h2>

                <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Характеристики</h3>
                  
                  {product.dimensions && (
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-700 mb-2">Размеры:</h4>
                      <ul className="text-gray-600 space-y-1">
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
                      <h4 className="font-medium text-gray-700 mb-2">Материалы:</h4>
                      <p className="text-gray-600">{product.materials.join(', ')}</p>
                    </div>
                  )}
                </div>

                <div className="border-t pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-bold text-blue-600">
                      {product.price.toLocaleString('ru-RU')} ₽
                    </span>
                  </div>
                  
                  <button
                    disabled={!product.inStock}
                    className={`w-full py-3 rounded-lg font-semibold text-lg transition-colors ${
                      product.inStock
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {product.inStock ? 'Добавить в корзину' : 'Нет в наличии'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
