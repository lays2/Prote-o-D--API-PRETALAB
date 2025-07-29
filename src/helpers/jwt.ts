import jwt from "jsonwebtoken";
const secret = process.env.JWT_SECRET as string;

export function generateToken(payload: object): string{
    return jwt.sign(payload, secret, { expiresIn: '1h' });
}

export function verifyToken(token: string): any{
    return jwt.verify(token, secret);
}