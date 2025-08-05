'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { MobileNavLink } from './mobile-navlink'
import { MobileNavButton } from '../Button/mobile-nav-button'
import { MobileRegisterButton } from '../Button/mobile-register-button'
import { NavLink } from './navlink'
import { NavButton } from '../Button/nav-button'
import { RegisterButton } from '../Button/register-button'

export default function HeaderDefault() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='sticky top-0 z-50 w-full py-4 bg-stone-900/95 backdrop-blur-md transition-colors'>
      <div className="container flex items-center justify-between px-4">
        {/* Logo */}
        <h2 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
          Cozinha & Sabor
        </h2>

        {/* Menu Hamburger (Mobile) */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu Desktop (hidden on mobile) */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            <NavLink href="#">Receitas</NavLink>
            <NavLink href="#">Sobre Nós</NavLink>
          </div>

          <div className="flex gap-4">
            <NavButton href="/">Entrar</NavButton>
            <RegisterButton href="/">Cadastrar-me</RegisterButton>
          </div>
        </div>
      </div>

      {/* Mobile Menu (shown when isOpen is true) */}
      {isOpen && (
        <div className="md:hidden bg-stone-800 backdrop-blur-md absolute top-full left-0 w-full px-4 py-6 space-y-6">
          <div className="flex flex-col gap-6">
            <MobileNavLink href="#" onClick={() => setIsOpen(false)}>
              Receitas
            </MobileNavLink>
            <MobileNavLink href="#" onClick={() => setIsOpen(false)}>
              Sobre Nós
            </MobileNavLink>
          </div>

          <div className="flex flex-col gap-4 pt-6">
            <MobileNavButton href="/" onClick={() => setIsOpen(false)} classname='bg-none border-none text-md py-6'>
              Entrar
            </MobileNavButton>
            <MobileRegisterButton href="/" onClick={() => setIsOpen(false)}>
              Cadastrar-me
            </MobileRegisterButton>
          </div>
        </div>
      )}
    </header>
  )
}