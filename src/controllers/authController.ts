import { Request, Response } from 'express';
import { login } from '../services/authService';

export function loginController(req: Request, res: Response): void {
  try {
    const { username, password } = req.body;
    const result = login(username, password);
    res.json(result);
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
}
