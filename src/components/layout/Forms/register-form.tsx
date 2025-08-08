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

const registerSchema = z.object({
  username: z.string().min(3, 'Informe um nome de usuário válido').max(20, 'O nome de usuário deve ter no máximo 20 caracteres').regex(/^[a-zA-Z0-9_]+$/, 'O nome de usuário deve conter apenas letras, números e underscores'),
  email: z.string().email('Informe um e-mail válido'),
  phone: z.string().regex(/^\d{10,15}$/, 'O telefone deve ter 10 ou 15 dígitos').optional().or(z.literal('')),
  password: z.string()
    .min(6, 'A senha deve ter pelo menos 6 caracteres')
    .regex(/[A-Z]/, 'Deve conter pelo menos uma letra maiúscula')
    .regex(/[0-9]/, 'Deve conter pelo menos um número'),
})

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const registerForm = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: '',
      email: '',
      phone: '',
      password: ''
    }
  })

  async function onSubmit(data: z.infer<typeof registerSchema>) {
    setIsLoading(true);
    try {
      await authService.register(data);

      const loginRes = await authService.login(data.username, data.password);
      localStorage.setItem('token', loginRes.token);

      router.push('/painel');
      toast.success('Registro e login realizados com sucesso!');
    } catch (error) {
      toast.error('Erro no registro/login');
      console.error('Erro:', error);
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
          Criar nova conta
        </CardTitle>
        <CardDescription className="text-gray-600">
          Preencha os campos para se registrar
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...registerForm}>
          <form
            onSubmit={registerForm.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <FormField
              control={registerForm.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm text-gray-900 font-bold">Nome de usuário</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="seu_usuario"
                      className="w-full rounded-xs"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={registerForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm text-gray-900 font-bold">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="seu@email.com"
                      type="email"
                      className="w-full rounded-xs"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone (Opcional) */}
            <FormField
              control={registerForm.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm text-gray-900 font-bold">Telefone (Opcional)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="11999999999"
                      className="w-full rounded-xs"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={registerForm.control}
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
              {isLoading ? 'Aguarde...' : 'Cadastrar-me'}

            </Button>

            <p className='text-sm'>Já possui conta? <Link href={'/register'} className='text-blue-500'>Entrar</Link></p>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
