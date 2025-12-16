'use client';

import { Product } from '@/types/product';
import { useEffect, useState } from 'react';
import Image from 'next/image';

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
          className="fixed inset-0 bg-black/20 backdrop-blur-md transition-opacity"
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
              <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
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

                  {(product.typeName || product.countryOfOrigin || (product.style && product.style.length) || (product.colors && product.colors.length)) && (
                    <div className="mb-4">
                      <h4 className="font-medium text-[#2D3436] mb-2">Общая информация:</h4>
                      <ul className="text-[#636E72] space-y-1">
                        {product.typeName && <li>Тип: {product.typeName}</li>}
                        {product.countryOfOrigin && <li>Страна производства: {product.countryOfOrigin}</li>}
                        {product.style && product.style.length > 0 && (
                          <li>Стиль: {product.style.join(', ')}</li>
                        )}
                        {product.colors && product.colors.length > 0 && (
                          <li>Цвет: {product.colors.join(', ')}</li>
                        )}
                      </ul>
                    </div>
                  )}

                  {(product.upholsteryMaterial || product.frameMaterial || product.legMaterial || product.finishMaterial || product.fixtureMaterial || (product.composition && product.composition.length > 0)) && (
                    <div className="mb-4">
                      <h4 className="font-medium text-[#2D3436] mb-2">Материалы и состав:</h4>
                      <ul className="text-[#636E72] space-y-1">
                        {product.upholsteryMaterial && <li>Материал обивки: {product.upholsteryMaterial}</li>}
                        {product.frameMaterial && <li>Материал каркаса/рамы: {product.frameMaterial}</li>}
                        {product.legMaterial && <li>Материал ножек: {product.legMaterial}</li>}
                        {product.finishMaterial && <li>Материал отделки: {product.finishMaterial}</li>}
                        {product.fixtureMaterial && <li>Материал арматуры: {product.fixtureMaterial}</li>}
                        {product.composition && product.composition.length > 0 && (
                          <li>Состав: {product.composition.join(', ')}</li>
                        )}
                      </ul>
                    </div>
                  )}

                  {(product.mechanism || typeof product.liftingMechanism === 'boolean' || typeof product.hasStorage === 'boolean' || product.maxLoadKg || product.lampType) && (
                    <div className="mb-4">
                      <h4 className="font-medium text-[#2D3436] mb-2">Функции и параметры:</h4>
                      <ul className="text-[#636E72] space-y-1">
                        {product.mechanism && <li>Механизм: {product.mechanism}</li>}
                        {typeof product.liftingMechanism === 'boolean' && (
                          <li>Подъемный механизм: {product.liftingMechanism ? 'есть' : 'нет'}</li>
                        )}
                        {typeof product.hasStorage === 'boolean' && (
                          <li>Ящик для хранения: {product.hasStorage ? 'есть' : 'нет'}</li>
                        )}
                        {product.maxLoadKg && <li>Максимальная нагрузка: {product.maxLoadKg} кг</li>}
                        {product.lampType && <li>Тип лампы: {product.lampType}</li>}
                      </ul>
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
