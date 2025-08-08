'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { authService } from '@/services/login-service'
import { zodResolver } from '@hookform/resolvers/zod'
import { ChefHat, Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

const loginSchema = z.object({
  username: z.string().min(3, 'Inform um nome de usuário válido'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
})

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  async function onSubmit(data: z.infer<typeof loginSchema>) {
    setIsLoading(true)
    try {
      const res = await authService.login(data.username, data.password);
      localStorage.setItem('token', res.token);

      // Adiciona o token nos cookies também
      document.cookie = `token=${res.token}; path=/; max-age=${60 * 60 * 2}`;

      router.push('/painel');
      toast.success('Login realizado com sucesso!');
    } catch (error) {
      toast.error('Credenciais inválidas');
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="shadow-lg">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <ChefHat className="h-12 w-12 text-orange-500" />
        </div>
        <CardTitle className="text-2xl font-bold text-gray-900">
          Bem-vindo de volta!
        </CardTitle>
        <CardDescription className="text-gray-600">
          Entre na sua conta para acessar suas receitas favoritas
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...loginForm}>
          <form
            onSubmit={loginForm.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            {/* Campo Email */}
            <FormField
              control={loginForm.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm text-gray-900 font-bold">Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Nome de usuário"
                      className="w-full rounded-xs"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Campo Senha com toggle */}
            <FormField
              control={loginForm.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm text-gray-900 font-bold">Senha</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="Digite sua senha"
                        type={showPassword ? 'text' : 'password'}
                        className="w-full pr-10 rounded-xs"
                        {...field}
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-600 to-orange-400 text-white font-bold cursor-pointer py-2.5"
              disabled={isLoading}
            >
              {isLoading ? 'Entrando...' : 'Entrar'}

            </Button>

            <p className='text-sm'>Ainda não possui conta? <Link href={'/register'} className='text-blue-500'>Criar Conta</Link></p>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
