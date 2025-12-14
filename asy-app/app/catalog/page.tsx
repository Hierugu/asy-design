'use client';

import { useState } from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import ProductModal from '@/components/ProductModal';
import { Product } from '@/types/product';

export default function CatalogPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState<'all' | 'furniture' | 'decor'>('all');

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  const filteredProducts = filter === 'all'
    ? products
    : products.filter(p => p.category === filter);

  return (
    <main className="min-h-screen bg-[rgb(178_199_192)] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-semibold text-[#2D3436] mb-4">Каталог</h1>
          <p className="text-lg text-[#636E72] leading-relaxed">
            Выберите из нашей коллекции мебели и декора
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex gap-4">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              filter === 'all'
                ? 'bg-[#2D3436] text-white'
                : 'bg-white text-[#2D3436] hover:bg-gray-100'
            }`}
          >
            Все товары ({products.length})
          </button>
          <button
            onClick={() => setFilter('furniture')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              filter === 'furniture'
                ? 'bg-[#2D3436] text-white'
                : 'bg-white text-[#2D3436] hover:bg-gray-100'
            }`}
          >
            Мебель ({products.filter(p => p.category === 'furniture').length})
          </button>
          <button
            onClick={() => setFilter('decor')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              filter === 'decor'
                ? 'bg-[#2D3436] text-white'
                : 'bg-white text-[#2D3436] hover:bg-gray-100'
            }`}
          >
            Декор ({products.filter(p => p.category === 'decor').length})
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={handleProductClick}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#636E72] text-lg">Товары не найдены</p>
          </div>
        )}
      </div>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </main>
  );
}
