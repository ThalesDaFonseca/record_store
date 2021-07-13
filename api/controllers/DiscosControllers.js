const database = require("../models");

class DiscosController{
    static async acessaTodosDiscos(req,res) {
        try {
            const todosDiscos = await database.Discos.findAll()
            return res.status(200).json(todosDiscos)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async acessaDiscos(req,res) {
        const { id } = req.params
        try {
            const umDisco = await database.Discos.findOne( 
                {where: 
                    {id:Number(id) }
                })
            return res.status(200).json(umDisco)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async adicionaDisco(req,res){
        const novoDisco = req.body
        try {
            const novoDiscoCriado = await database.Discos.create(novoDisco)
        return res.status(200).json(novoDiscoCriado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaDisco (req,res){
        const novaInfo = req.body
        const { id } = req.params
        try {
            await database.Discos.update(novaInfo, {
                where: {
                    id:Number(id)
                }
            })
            const discoAtualizado = await database.Discos.findOne({
                where:{
                    id:Number(id)
                }
            })
            return res.status(200).json(discoAtualizado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async apagaDisco(req,res){
        const { id } = req.params
        try {
            await database.Discos.destroy( {
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

module.exports = DiscosController