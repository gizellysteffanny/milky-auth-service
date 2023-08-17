import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { JWT_SECRET } from '../config/config';
import { UnauthorizedError } from '../helpers/api-errors';
import { userRepository } from '../repositories/userRepository';

export const authMiddleware = async (request: Request, response: Response, next: NextFunction) => {
  const { authorization } = request.headers;
  
  if (!authorization) {
    const error = new UnauthorizedError('Not authorized');
    return response.status(error.statusCode).json({ message: error.message });
  }
  
  const [, token] = authorization.split(' ');
  const { id } = jwt.verify(token, JWT_SECRET) as { id: number };
  
  const userFound = await userRepository.findOne({ where: { id } });
  if (!userFound) {
    const error = new UnauthorizedError('Not authorized');
    return response.status(error.statusCode).json({ message: error.message });
  }
  
  const { password: _, id: _id, ...user } = userFound;
  
  request.user = user;
  
  next();
};