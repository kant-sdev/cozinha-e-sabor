import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ClockFading, LayoutDashboard, MessageSquareWarning } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function AboutRecipes() {
  return (
    <section className='w-full py-12 sm:py-16 md:py-20 bg-orange-100/50 px-4 sm:px-6'>
      <div className="container flex flex-col justify-center items-center space-y-8 sm:space-y-12">
        {/* Badge */}
        <Badge className='bg-gray-400/40 backdrop-blur-sm text-black text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-2 font-bold'>
          Receitas
        </Badge>

        {/* Text Content */}
        <div className='space-y-3 sm:space-y-4 flex flex-col justify-center items-center'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center w-full md:w-10/12 lg:w-7/12'>
            Explore Receitas Deliciosas e Fáceis de se Preparar
          </h2>
          <p className='text-sm sm:text-base md:text-lg text-gray-600 text-center w-full md:w-10/12 lg:w-8/12'>
            Descubra uma variedade de receitas que atendem a todos os gostos e ocasiões. Desde pratos rápidos até refeições elaboradas, temos tudo para inspirar sua culinária.
          </p>
        </div>

        {/* Cards Grid - agora responsiva */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full sm:w-11/12 lg:w-10/12 gap-4 sm:gap-6 md:gap-8'>
          <Card className='border-0 shadow-sm hover:shadow-md transition-shadow'>
            <CardHeader className='pb-2'>
              <div className='bg-orange-100 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto'>
                <ClockFading className='w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-orange-500' />
              </div>
            </CardHeader>
            <CardContent className='space-y-2 text-center sm:text-left'>
              <CardTitle className='text-lg sm:text-xl md:text-2xl'>Saiba Mais Sobre Nossa História</CardTitle>
              <CardDescription className='text-sm sm:text-base'>
                Conheça a nossa missão e os valores que nos guiam.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className='border-0 shadow-sm hover:shadow-md transition-shadow'>
            <CardHeader className='pb-2'>
              <div className='bg-orange-100 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto'>
                <MessageSquareWarning className='w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-orange-500' />
              </div>
            </CardHeader>
            <CardContent className='space-y-2 text-center sm:text-left'>
              <CardTitle className='text-lg sm:text-xl md:text-2xl'>Entre em Contato Conosco Facilmente</CardTitle>
              <CardDescription className='text-sm sm:text-base'>
                Estamos aqui para responder suas perguntas e ouvir suas sugestões.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className='border-0 shadow-sm hover:shadow-md transition-shadow'>
            <CardHeader className='pb-2'>
              <div className='bg-orange-100 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto'>
                <LayoutDashboard className='w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-orange-500' />
              </div>
            </CardHeader>
            <CardContent className='space-y-2 text-center sm:text-left'>
              <CardTitle className='text-lg sm:text-xl md:text-2xl'>Navegue pelo Nosso Conteúdo Exclusivo</CardTitle>
              <CardDescription className='text-sm sm:text-base'>
                Aproveite dicas e truques para aprimorar suas habilidades na cozinha.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Button */}
        <Link 
          href={'/'} 
          className='inline-block bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white font-bold px-8 sm:py-3 text-sm sm:text-base rounded-sm transition-colors duration-300 text-center text-md py-4'
        >
          Ver Mais
        </Link>
      </div>
    </section>
  )
}