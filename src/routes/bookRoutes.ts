import { Router, Request, Response } from 'express';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

let books: any[] = [];

router.post('/books', authMiddleware, (req: Request, res: Response) => {
  const book = req.body;
  books.push(book);
  res.status(201).json(book);
});

router.patch('/books/:id', authMiddleware, (req: Request, res: Response) => {
  const { id } = req.params;
  const updated = req.body;
  books[+id] = { ...books[+id], ...updated };
  res.json(books[+id]);
});

router.delete('/books/:id', authMiddleware, (req: Request, res: Response) => {
  const { id } = req.params;
  books.splice(+id, 1);
  res.status(204).send();
});

export default router;
