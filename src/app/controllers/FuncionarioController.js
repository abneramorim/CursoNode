import Funcionario from '../models/Funcionario';

class FuncionarioController {
    static async store(req, res) {

        const {nome, sexo} = req.body;

        const funcionario = await Funcionario.create({
            nome, 
            sexo
        });

        return res.json({result: funcionario});
    }

    static async index(req, res) {
        const funcionarios = await Funcionario.findAll();
        
        return res.json({result: funcionarios})
    }

    static async remove(req, res) {

        const {id} = req.params;

        await Funcionario.destroy({where: {id}});

        return res.json({result: 'OK'});

    }

    static async update(req, res) {

        const {id} = req.params;
        const {nome, sexo} = req.body;

        await Funcionario.update({
            nome, 
            sexo
        }, {where: {id}});

        const funcionario = await Funcionario.findByPk(id);

        return res.json({result: funcionario});

    }

    static async select(req, res) {
        const {id} = req.params;

        const funcionario = await Funcionario.findByPk(id);

        if(funcionario == null){
            return res.json({result: "ID não encontrado"});
        }

        return res.json({result: funcionario});
    }
}

export default FuncionarioController;