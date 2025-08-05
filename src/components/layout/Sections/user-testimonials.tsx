import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { testimonials } from '@/data/testemonials'
import { Star } from 'lucide-react'

export default function UserTestimonials() {
  return (
    <section className='w-full py-12 sm:py-16 md:py-20 bg-gray-50 px-4 sm:px-6'>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Depoimentos de Usuários
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            A experiência foi transformadora e enche de sabor a mesa!
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 1,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-1">
            {testimonials.map((testimonial) => (
              <CarouselItem 
                key={testimonial.id} 
                className="pl-1 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1 h-full">
                  <Card className='h-full p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow'>
                    <CardContent className="flex flex-col p-0">
                      {/* Rating */}
                      <div className="flex mb-3 sm:mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" 
                          />
                        ))}
                      </div>
                      
                      {/* Comment */}
                      <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 italic min-h-[80px] sm:min-h-[100px]">
                        "{testimonial.comment}"
                      </p>
                      
                      {/* User Info */}
                      <div className="flex items-center gap-3 sm:gap-4 mt-auto">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                            {testimonial.user.name.charAt(0)}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium sm:font-semibold text-sm sm:text-base">
                            {testimonial.user.name}
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-500">
                            {testimonial.user.role}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation - hidden on mobile */}
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
        
        {/* Mobile indicators */}
        <div className="flex justify-center gap-2 mt-6 sm:hidden">
          {testimonials.slice(0, 3).map((_, i) => (
            <div 
              key={i} 
              className="w-2 h-2 rounded-full bg-gray-300"
            />
          ))}
        </div>
      </div>
    </section>
  )
}