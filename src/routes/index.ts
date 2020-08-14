import { Router } from 'express';
import userRoutes from './user.routes';

const routes = Router();

routes.get('/', (req, res) => {
  res.send('<h1>Express server</h1>');
});

routes.use('/user', userRoutes);

export default routes;
