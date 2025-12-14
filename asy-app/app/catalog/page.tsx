'use client';

import { useMemo, useState } from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import ProductModal from '@/components/ProductModal';
import { Product } from '@/types/product';

export default function CatalogPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  type CategoryFilter =
    | 'all'
    | 'tables'
    | 'beds'
    | 'shelving'
    | 'chairs'
    | 'mirrors'
    | 'sofas'
    | 'rugs'
    | 'lamps';

  const [filter, setFilter] = useState<CategoryFilter>('all');

  const categoryOptions: { key: CategoryFilter; label: string }[] = [
    { key: 'all', label: 'Все товары' },
    { key: 'tables', label: 'Столы' },
    { key: 'beds', label: 'Кровати' },
    { key: 'shelving', label: 'Стеллажи' },
    { key: 'chairs', label: 'Стулья' },
    { key: 'mirrors', label: 'Зеркала' },
    { key: 'sofas', label: 'Диваны' },
    { key: 'rugs', label: 'Ковры' },
    { key: 'lamps', label: 'Лампы' },
  ];

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

  const countsByCategory = useMemo(() => {
    const counts: Record<CategoryFilter, number> = {
      all: products.length,
      tables: 0,
      beds: 0,
      shelving: 0,
      chairs: 0,
      mirrors: 0,
      sofas: 0,
      rugs: 0,
      lamps: 0,
    };

    products.forEach((p) => {
      counts.all += 0; // all already set to length
      counts[p.category as Exclude<CategoryFilter, 'all'>] += 1;
    });

    return counts;
  }, []);

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
        <div className="mb-8 flex gap-4 flex-wrap">
          {categoryOptions.map((option) => (
            <button
              key={option.key}
              onClick={() => setFilter(option.key)}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                filter === option.key
                  ? 'bg-[#2D3436] text-white'
                  : 'bg-[rgb(192_213_206)] text-[#2D3436] hover:bg-[rgb(192_213_206)]'
              }`}
            >
              {option.label} ({option.key === 'all' ? products.length : countsByCategory[option.key]})
            </button>
          ))}
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
