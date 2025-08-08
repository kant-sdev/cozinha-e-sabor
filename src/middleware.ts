// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value || 
                request.headers.get('Authorization')?.replace('Bearer ', '')
  
  const isLoggedIn = !!token

  // Rotas protegidas (acessíveis apenas quando logado)
  const protectedRoutes = ['/painel']
  // Rotas de autenticação + raiz (acessíveis apenas quando NÃO logado)
  const guestOnlyRoutes = ['/', '/login', '/register']

  const { pathname } = request.nextUrl

  // Se usuário está logado e tenta acessar rota exclusiva para não-logados
  if (isLoggedIn && guestOnlyRoutes.some(route => pathname === route)) {
    return NextResponse.redirect(new URL('/painel', request.url))
  }

  // Se usuário não está logado e tenta acessar rota protegida
  if (!isLoggedIn && protectedRoutes.some(route => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}