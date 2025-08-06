// types/user.ts
export interface User {
  id: number;
  username: string;
  email: string;
  phone?: string | null;  // Opcional porque pode ser NULL no banco
  password_hash: string;   // Note que o campo se chama password_hash na tabela
  created_at: string;      // TIMESTAMP é retornado como string
}