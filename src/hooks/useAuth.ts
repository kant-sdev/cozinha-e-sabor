// hooks/useAuth.ts
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function useAuth(redirectIfAuthenticated = false) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (redirectIfAuthenticated && token) {
      router.push('/painel');
    } else if (!redirectIfAuthenticated && !token) {
      router.push('/login');
    }
  }, [router, redirectIfAuthenticated]);
}