import { Router } from 'express';
import UserController from './app/controller/UserController';
import JustOneUserController from './app/controller/JustOneUserController';

const routes = new Router();

routes.post('/users', UserController.store); 
routes.get('/users', UserController.index); 
routes.get('/user/:id', JustOneUserController.index); 

export default routes;