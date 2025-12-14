'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Главная', href: '/' },
  { name: 'Каталог', href: '/catalog' },
  { name: 'О нас', href: '/about' },
  { name: 'Контакты', href: '/contact' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-[rgb(192_213_206)] shadow-sm border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center min-w-fit">
            <Link href="/" className="text-2xl font-semibold tracking-wider text-[#2D3436]">
              ДОМОСТРОЙ
            </Link>
          </div>

          {/* Center Navigation Menu */}
          <div className="flex-1 flex justify-center">
            <div className="flex space-x-12">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`inline-flex items-center px-1 py-2 text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? 'text-[#D8A318] border-b-2 border-[#D8A318]'
                      : 'text-[#636E72] hover:text-[#2D3436] hover:border-b-2 hover:border-[#D8A318]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex items-center min-w-fit">
            <button className="text-sm font-medium text-[#2D3436] hover:text-[#D8A318] transition-colors">
              Заказать проект
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
