import Link from "next/link";
import Image from "next/image";
import HeroAbout from "@/components/HeroAbout";
import AudienceSection from "@/components/AudienceSection";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Hero Section */}
      <section className="bg-[var(--background)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="text-center">
              <h1 className="text-5xl font-semibold text-[#2D3436] mb-6">
                ДОМОСТРОЙ
              </h1>
              <p className="text-xl text-[#2D3436] mb-8 leading-relaxed">
                Платформа для создания красивого и функционального дома. Качественные материалы, проверенные производители и честные цены.
              </p>
              <button className="text-base font-medium text-[#2D3436] hover:text-[#D8A318] transition-colors">
                Заказать проект
              </button>
            </div>

            {/* Right Column - Image */}
            <div className="flex justify-center">
              <Image
                src="/hand.png"
                alt="Домострой"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
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