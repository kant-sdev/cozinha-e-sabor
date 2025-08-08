'use client'

import LoginForm from '@/components/layout/Forms/login-form'
import { useAuth } from '@/hooks/useAuth'
import React from 'react'

export default function Page() {

  useAuth(true)

  return (
    <div className="min-h-screen bg-orange-50 flex flex-col">
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <LoginForm />
        </div>
      </main>
      <footer className="text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} Cozinha & Sabor. Todos os direitos reservados.
      </footer>
    </div>
  )
}