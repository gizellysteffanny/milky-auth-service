import express from 'express';

import { AppDataSource } from './config/database';
import { PORT } from './config/config';
import routes from './routes';
import { errorMiddleware } from './middlewares/error';

AppDataSource.initialize().then(() => {
  const app = express();
  
  app.use(express.json());
  app.use(routes);
  
  app.use(errorMiddleware);
  
  return app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
});