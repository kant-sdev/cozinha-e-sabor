import { NextResponse } from 'next/server';
import db from '@/lib/db';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  try {
    const { username, email, phone, password } = await request.json() as {
      username: string;
      email: string;
      phone?: string;
      password: string;
    };

    // Validação
    if (!username || !email || !password) {
      return NextResponse.json(
        { message: 'Username, email e password são obrigatórios' },
        { status: 400 }
      );
    }

    // Verifica se usuário existe
    const userExists = await new Promise((resolve, reject) => {
      db.get(
        'SELECT id FROM users WHERE username = ? OR email = ?',
        [username, email],
        (err, row) => {
          if (err) reject(err);
          resolve(row);
        }
      );
    });

    if (userExists) {
      return NextResponse.json(
        { message: 'Username ou email já existem' },
        { status: 409 }
      );
    }

    // Hash da senha (usando password_hash)
    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(password, salt);

    // Insere no banco (usando password_hash)
    const result = await new Promise<{ id: number }>((resolve, reject) => {
      db.run(
        'INSERT INTO users (username, email, phone, password_hash) VALUES (?, ?, ?, ?)',
        [username, email, phone || null, password_hash],
        function(err) {
          if (err) reject(err);
          resolve({ id: this.lastID });
        }
      );
    });

    return NextResponse.json(
      {
        message: 'Registro bem-sucedido',
        userId: result.id
      },
      { status: 201 }
    );

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