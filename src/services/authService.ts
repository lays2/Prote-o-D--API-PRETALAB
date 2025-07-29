import bcrypt from 'bcryptjs';
import { generateToken } from '../helpers/jwt';

interface User {
  id: number;
  username: string;
  password: string;
}

// Banco fake
const users: User[] = [
  { id: 1, username: 'admin', password: bcrypt.hashSync('123456', 10) },
];

export function login(username: string, password: string): { token: string } {
  const user = users.find(u => u.username === username);
  if (!user || !bcrypt.compareSync(password, user.password)) {
    throw new Error('Credenciais inválidas');
  }

  const token = generateToken({ id: user.id, username: user.username });
  return { token };
}
