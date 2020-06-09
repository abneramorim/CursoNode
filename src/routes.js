import {Router} from 'express';

import FuncionarioController from './app/controllers/FuncionarioController';

const routes = new Router();

routes.get('/', (req, res) => {
    res.send('Safadin Safadin');
});

routes.get('/funcionarios', FuncionarioController.index);
routes.get('/funcionarios/:id', FuncionarioController.select);
routes.post('/funcionarios', FuncionarioController.store);
routes.delete('/funcionarios/:id', FuncionarioController.remove);
routes.put('/funcionarios/:id', FuncionarioController.update);

export default routes;