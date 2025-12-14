import Link from "next/link";
import HeroAbout from "@/components/HeroAbout";
import AudienceSection from "@/components/AudienceSection";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <main className="min-h-screen bg-[rgb(178_199_192)]">
      {/* Hero Section */}
      <section className="bg-[rgb(178_199_192)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-semibold text-[#2D3436] mb-6">
              ДОМОСТРОЙ
            </h1>
            <p className="text-xl text-[#2D3436] mb-8 max-w-2xl mx-auto leading-relaxed">
              Платформа для создания красивого и функционального дома. Качественные материалы, проверенные производители и честные цены.
            </p>
            <button className="text-base font-medium text-[#2D3436] hover:text-[#D8A318] transition-colors">
              Заказать проект
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <HeroAbout />

      {/* Audience Section */}
      <AudienceSection />

      {/* Gallery Section */}
      <Gallery />
    </main>
  );
}