// src/services/authService.ts
import { httpClient } from '@/services/httpClient';

interface LoginResponse {
  token: string;
  user: {
    id: string;
    username: string;
    email: string;
    phone?: string;
  };
}

export interface Register {
  username: string;
  email: string;
  phone?: string | null;
  password: string;
}

export const authService = {
  async login(username: string, password: string): Promise<LoginResponse> {
    try {
      const response = await httpClient.post<LoginResponse>('/auth/login', {
        username: username,
        password: password,
      });
      console.log(response.data)
      document.cookie = `token=${response.data.token}; path=/; max-age=${60 * 60 * 2}`; // 7 dias

      return response.data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },
  async register(data: Register): Promise<void> {
    try {
      await httpClient.post('/auth/register', data);
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  },
};