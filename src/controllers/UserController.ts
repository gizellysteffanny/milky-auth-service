import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import { userRepository } from '../repositories/userRepository';
import { BadRequestError, UnauthorizedError } from '../helpers/api-errors';
import { User } from '../entities/User';
import { groupsAllowedValidator } from '../validators/groups-allowed.validator';

export class UserController {
  async create(request: Request, response: Response) {
    const { name, email, password, groupsAllowed } = request.body as User;

    if (!groupsAllowedValidator(groupsAllowed)) {
      const error = new UnauthorizedError('Invalid groups allowed');
      return response.status(error.statusCode).json({ message: error.message });
    }
    
    const userExists = await userRepository.exist({ where: { email } });
    if (userExists) {
      const error = new BadRequestError('User email already exists');
      return response.status(error.statusCode).json({ message: error.message });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = userRepository.create({
      name,
      email,
      password: hashedPassword,
      groupsAllowed,
    });
    
    await userRepository.save(user);
    
    const { password: _, id: _id, ...userCreated } = user;
    return response.status(201).json(userCreated);
  }
  
  async getProfile(request: Request, response: Response) {
    return response.status(200).json(request.user);
  }
}