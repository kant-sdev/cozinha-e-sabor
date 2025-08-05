import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronRight, CookingPot, Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function SeekBenefits() {
  return (
    <section className='w-full py-12 sm:py-20 bg-gray-50 flex justify-center'>
      <div className="container px-4 sm:px-6">
        {/* Layout mobile: conteúdo acima, imagem abaixo */}
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12 lg:items-center">
          {/* Text Content - agora vem primeiro no mobile */}
          <div className='space-y-6 sm:space-y-8 order-1 lg:order-none'>
            <Badge className='bg-orange-200 text-black text-sm px-3 py-1 sm:px-4 sm:py-2 font-bold'>
              Sabor
            </Badge>

            <div className='space-y-3 sm:space-y-4'>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900'>
                Descubra nossos Benefícios
              </h2>
              <p className='text-base sm:text-lg text-gray-600'>
                O Cozinha & Sabor torna a culinária acessível e divertida. Encontre receitas detalhadas e inspiradoras com facilidade.
              </p>
            </div>

            {/* Cards Grid - agora em coluna única para mobile */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
              <Card className='border-0 shadow-sm hover:shadow-md transition-shadow'>
                <CardHeader className='pb-2'>
                  <div className='bg-orange-100 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center'>
                    <Search className='w-4 h-4 sm:w-5 sm:h-5 text-orange-500' />
                  </div>
                </CardHeader>
                <CardContent className='space-y-2'>
                  <CardTitle className='text-base sm:text-lg'>Fácil de Usar</CardTitle>
                  <CardDescription className='text-sm sm:text-base'>
                    Navegação intuitiva que simplifica a busca por receitas deliciosas.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className='border-0 shadow-sm hover:shadow-md transition-shadow'>
                <CardHeader className='pb-2'>
                  <div className='bg-orange-100 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center'>
                    <CookingPot className='w-4 h-4 sm:w-5  text-orange-500' />
                  </div>
                </CardHeader>
                <CardContent className='space-y-2'>
                  <CardTitle className='text-base sm:text-lg'>Receitas Detalhadas</CardTitle>
                  <CardDescription className='text-sm sm:text-base'>
                    Instruções claras e ingredientes listados para cada receita.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            {/* Buttons - ajustados para mobile */}
            <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4'>
              <Link href={'/'} className='w-full sm:w-auto'>
                <Button className='w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white font-bold px-4 sm:px-6 text-sm sm:text-base text-md py-6'>
                  Explorar
                </Button>
              </Link>

              <Link
                href="/"
                className="group inline-flex items-center justify-center sm:justify-start gap-1 text-orange-600 hover:text-orange-700 font-medium text-sm sm:text-base transition-colors relative px-2 hover:font-semibold sm:hover:font-bold"
              >
                <span className="relative after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-orange-600 group-hover:after:w-full after:transition-all after:duration-300 text-md py-6">
                  Buscar
                </span>
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </Link>
            </div>
          </div>

          {/* Image - ajustes para mobile */}
          <div className='order-0 lg:order-none'>
            <Image
              src={'/images/seek-benefits-image.jpg'}
              alt='Imagem de pratos feitos'
              width={600}
              height={400}
              className='rounded-lg object-cover shadow-lg w-full h-auto'
              priority={false}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}