import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react'
import Link from 'next/link'

export default function FooterDefault() {
  return (
    <footer className="w-full bg-stone-900/90 text-white px-4 sm:px-6">
      <div className="container py-8 sm:py-12">
        {/* Main Footer Content - now stacked on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and tagline - full width on mobile */}
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-xl font-extrabold bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
              Cozinha & Sabor
            </h2>
            <p className="text-white text-sm sm:text-base">
              Transformando ingredientes em experiências memoráveis
            </p>

            {/* Social icons */}
            <div className="flex gap-3 sm:gap-4 pt-2">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Youtube, href: "#" }
              ].map((Social, index) => (
                <Link 
                  key={index}
                  href={Social.href} 
                  className="text-white hover:text-orange-500 transition-colors"
                  aria-label={`Link para ${Social.icon.name}`}
                >
                  <Social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Links - 2 columns on mobile */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-semibold text-base sm:text-lg">Receitas Fáceis</h3>
            <ul className="space-y-1 sm:space-y-2">
              {['Café da Manhã', 'Almoço Rápido', 'Jantares', 'Sobremesas'].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-white text-sm sm:text-base hover:text-orange-500 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-semibold text-base sm:text-lg">Recursos</h3>
            <ul className="space-y-1 sm:space-y-2">
              {['Dicas de Cozinha', 'Blog de Receitas', 'Guias de Culinária', 'Planos de Refeições'].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-white text-sm sm:text-base hover:text-orange-500 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-semibold text-base sm:text-lg">Empresa</h3>
            <ul className="space-y-1 sm:space-y-2">
              {['Sobre Nós', 'Contato', 'Carreiras', 'Parceiros'].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-white text-sm sm:text-base hover:text-orange-500 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom footer - stacked on mobile */}
        <div className="pt-6 sm:pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-white text-center sm:text-left">
            © 2025 Cozinha & Sabor. Todos os direitos reservados.
          </p>
          <div className="flex gap-3 sm:gap-4 flex-wrap justify-center">
            {['Política de Privacidade', 'Termos de Serviço', 'Configurações de Cookies'].map((item) => (
              <Link 
                key={item}
                href="#" 
                className="text-xs sm:text-sm text-white hover:text-orange-500 transition-colors underline"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}