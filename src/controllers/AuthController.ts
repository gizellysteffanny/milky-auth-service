import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { User } from '../entities/User';
import { userRepository } from '../repositories/userRepository';
import { BadRequestError } from '../helpers/api-errors';
import { JWT_SECRET } from '../config/config';

export class AuthController {
  async login(request: Request, response: Response) {
    const { email, password } = request.body as User;
    
    const userFound = await userRepository.findOne({ where: { email } });
    if (!userFound) {
      const error = new BadRequestError('User email or password incorrect');
      return response.status(error.statusCode).json({ message: error.message });
    }
    
    const passwordMatch = await bcrypt.compare(password, userFound.password);
    if (!passwordMatch) {
      const error = new BadRequestError('User email or password incorrect');
      return response.status(error.statusCode).json({ message: error.message });
    }
    
    const token = jwt.sign({ id: userFound.id }, JWT_SECRET, { expiresIn: '8h' });
    return response.status(200).json({ token });
  }
}