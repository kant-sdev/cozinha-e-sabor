import { Button } from '@/components/ui/button'
import { ChefHat } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function CallAction() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-orange-600 px-4 sm:px-6">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          {/* Headline - tamanhos responsivos */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Pronto para transformar sua experiência culinária?
          </h2>
          
          {/* Subheadline - espaçamento e tamanho ajustados */}
          <p className="text-base sm:text-lg md:text-xl text-orange-100 mb-6 sm:mb-8 mx-auto">
            Junte-se a outros entusiastas da culinária e descubra receitas exclusivas toda semana!
          </p>
          
          {/* Botão - full width em mobile */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link href="/receitas" className="w-full sm:w-auto">
              <Button 
                variant="outline" 
                size="lg"
                className="w-full border-2 border-white text-white bg-transparent hover:bg-white/10 hover:text-white font-bold py-6 sm:py-5 px-6 text-base sm:text-lg transition-colors duration-300"
              >
                <ChefHat className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                Comece Agora Gratuitamente
              </Button>
            </Link>
          </div>
          
          {/* Elemento de urgência opcional para desktop */}
          <p className="hidden sm:block text-sm text-orange-200 mt-4">
            Oferta especial por tempo limitado!
          </p>
        </div>
      </div>
    </section>
  )
}