// components/LogoutButton.tsx
'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export function LogoutButton({ className }: { className?: string }) {
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem('token')

    document.cookie = 'token=; path=/; max-age=0' 

    router.replace('/login')
    router.refresh() 

    toast.success('Você saiu da sua conta')
  }

  return (
    <Button
      variant="ghost"
      onClick={handleLogout}
      className={`text-red-600 hover:bg-red-50 ${className}`}
      aria-label="Sair da conta"
    >
      <span className="hidden md:inline">Sair</span>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
      </svg>
    </Button>
  )
}