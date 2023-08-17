import { Router } from 'express';

import { UserController } from './controllers/UserController';
import { AuthController } from './controllers/AuthController';
import { authMiddleware } from './middlewares/authMiddleware';

const routes = Router();

routes.post('/users', new UserController().create);
routes.post('/login', new AuthController().login);

routes.use(authMiddleware);
routes.get('/profile', new UserController().getProfile);
export default routes;