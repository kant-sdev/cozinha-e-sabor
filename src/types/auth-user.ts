// types/register.ts
export interface Register {
  username: string;
  email: string;
  phone?: string | null;  
  password_hash: string;   
  created_at: string; 
}