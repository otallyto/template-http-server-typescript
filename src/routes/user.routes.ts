import { Router } from 'express';

const userRoutes = Router();

userRoutes.get('/', (req, res) => {
  res.send('<h1>User routes</h1>');
});

export default userRoutes;
