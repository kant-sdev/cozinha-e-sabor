import { NextResponse } from 'next/server';
import db from '@/lib/db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '@/types/auth-user';

const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key';

export async function POST(request: Request) {
  const { username, password } = await request.json() as { username: string; password: string };

  if (!username || !password) {
    return NextResponse.json({ message: 'Usuário e senha são obrigatórios' }, { status: 400 });
  }

  try {
    // Busca o usuário no banco
    const user = await new Promise<User | undefined>((resolve, reject) => {
      db.get(
        'SELECT id, username, email, phone, password_hash FROM users WHERE username = ?', 
        [username], 
        (err, row: User) => {
          if (err) reject(err);
          resolve(row);
        }
      );
    });

    if (!user) {
      return NextResponse.json({ message: 'Usuário ou senha inválidos' }, { status: 401 });
    }

    // Verifica a senha - agora usando password_hash
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordValid) {
      return NextResponse.json({ message: 'Usuário ou senha inválidos' }, { status: 401 });
    }

    // Gera o token JWT com os dados relevantes
    const token = jwt.sign(
      { 
        id: user.id, 
        username: user.username,
        email: user.email 
      }, 
      SECRET_KEY, 
      { expiresIn: '1h' }
    );

    return NextResponse.json({ 
      message: 'Login bem-sucedido', 
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        phone: user.phone
      } 
    }, { status: 200 });

  } catch (error) {
    return NextResponse.json(
      { 
        message: 'Erro no servidor', 
        error: error instanceof Error ? error.message : String(error) 
      }, 
      { status: 500 }
    );
  }
}