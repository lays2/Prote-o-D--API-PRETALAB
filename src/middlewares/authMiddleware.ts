import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../helpers/jwt';

// Extende a interface Request para incluir a propriedade 'user'
declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ message: 'Token não informado' });

  const token = authHeader.split(' ')[1];
  try {
    const decoded = verifyToken(token);
    req.user = decoded; // você pode usar interface extendida aqui se quiser
    next();
  } catch {
    return res.status(403).json({ message: 'Token inválido' });
  }
}
