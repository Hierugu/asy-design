'use client';

import { Product } from '@/types/product';
import Image from 'next/image';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const [imageError, setImageError] = useState(false);
  const hasImage = product.image && !imageError;

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
    <div
      onClick={() => onClick(product)}
      className="bg-[var(--background-content)] rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col"
    >
      <div className="relative h-64 bg-gray-200 overflow-hidden flex items-center justify-center">
        {hasImage ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover w-full h-full"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex items-center justify-center text-gray-400">
            <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
          </div>
        )}
        {!product.inStock && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Нет в наличии
          </div>
        )}
        {product.inStock && (
          <div className="absolute top-2 right-2 bg-[#D8A318] text-[#2D3436] px-3 py-1 rounded-full text-sm font-medium">
            В наличии
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-[#2D3436]">{product.name}</h3>
          <span className="text-sm text-[#2D3436] bg-[#D8A318] px-2 py-1 rounded">
            {categoryLabel[product.category] ?? product.category}
          </span>
        </div>
        <p className="text-[var(--foreground-secondary)] text-sm mb-4 line-clamp-2 leading-relaxed flex-grow">
          {product.shortDescription}
        </p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-2xl font-semibold text-[#D8A318]">
            {product.price.toLocaleString('ru-RU')} ₽
          </span>
          <button className="bg-[#2D3436] text-white px-4 py-2 rounded-lg hover:bg-[#1a1d1f] transition-colors text-sm font-medium">
            Подробнее
          </button>
        </div>
      </div>
    </div>
  );
}
