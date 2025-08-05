import { Button } from '@/components/ui/button'
import { ArrowRight, ChefHatIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function HeroSection() {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center bg-[url('/images/landing-page-hero.jpg')] bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-black/60 before:z-10 flex justify-center w-full">
      <div className="container relative z-20 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto space-y-4 sm:space-y-6 text-white text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 sm:px-4 sm:py-2 rounded-full">
            <ChefHatIcon className="w-5 h-5 sm:w-6 sm:h-6 text-orange-300" />
            <span className="text-sm sm:text-base font-medium">Receitas Simples</span>
          </div>

          {/* Título */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug sm:leading-tight">
            Descubra <span className="text-orange-300">receitas deliciosas</span> do mundo todo e prepare refeições incríveis em casa
          </h1>

          {/* Subtítulo */}
          <p className="text-base sm:text-lg text-gray-100 opacity-90 max-w-md mx-auto">
            Receitas testadas e aprovadas por chefs experientes — sabor garantido!
          </p>

          {/* Botão CTA */}
          <div className="pt-2 sm:pt-4">
            <Link href={'/'} className="inline-block w-full sm:w-auto">
              <Button className="group bg-gradient-to-r from-orange-500 to-orange-300 hover:from-orange-600 hover:to-orange-400 font-bold text-white px-6 sm:px-8 sm:py-6 text-base sm:text-lg transition-all duration-300 ease-in-out w-full max-w-xs sm:max-w-none text-md py-6">
                <div className="flex justify-center sm:justify-between gap-2 items-center w-full">
                  <span className="transform transition-transform duration-300 translate-x-0 group-hover:translate-x-1 sm:group-hover:translate-x-2">
                    Ver Receitas
                  </span>
                  <ArrowRight className="w-5 h-5 transform transition-transform duration-300 translate-x-0 group-hover:translate-x-1 sm:group-hover:translate-x-2" />
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}