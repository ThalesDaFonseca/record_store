const database = require("../models");

class ClienteController{
    static async acessaTodosClientes(req,res) {
        try {
            const todosClientes = await database.Clientes.findAll()
            return res.status(200).json(todosClientes)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async acessaCliente(req,res) {
        const { id } = req.params
        try {
            const umCliente = await database.Cliente.findOne( 
                {where: 
                    {id:Number(id) }
                })
            return res.status(200).json(umCliente)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaCliente(req,res){
        const novoCliente = req.body
        try {
            const novoClienteCriado = await database.Clientes.create(novoCliente)
            return res.status(200).json(novoClienteCriado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaCliente(req,res){
        const novaInfo = req.body
        const { id } = req.params
        try {
            await database.Clientes.update(novaInfo, {
                where: {
                    id:Number(id)
                }
            })
            const clienteAtualizado = await database.Clientes.findOne({
                where:{
                    id:Number(id)
                }
            })
            return res.status(200).json(clienteAtualizado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async apagaCliente(req,res){
        const { id } = req.params
        try {
            await database.Clientes.destroy( {
                where: {
                    id:Number(id)
                }
            })
            return res.status(200).json({ mensagem: `id ${id} foi deletado`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = ClienteController