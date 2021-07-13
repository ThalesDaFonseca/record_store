const database = require("../models");

class DiscosVendasController{
    static async acessaTodosDiscosVendas(req,res) {
        try {
            const todosDiscosVendas = await database.DiscosVendas.findAll()
            return res.status(200).json(todosDiscosVendas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async acessaDiscosVendas(req,res) {
        const { id } = req.params
        try {
            const umDiscoVenda = await database.DiscosVendas.findOne( 
                {where: 
                    {id:Number(id) }
                })
            return res.status(200).json(umDiscoVenda)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async adicionaDiscoVenda(req,res){
        const novoDiscoVenda = req.body
        try {
            const novoDiscoVendasCriado = await database.DiscosVendas.create(novoDiscoVenda)
        return res.status(200).json(novoDiscoVendasCriado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaDiscoVenda (req,res){
        const novaInfo = req.body
        const { id } = req.params
        try {
            await database.DiscosVendas.update(novaInfo, {
                where: {
                    id:Number(id)
                }
            })
            const discoVendaAtualizado = await database.DiscosVendas.findOne({
                where:{
                    id:Number(id)
                }
            })
            return res.status(200).json(discoVendaAtualizado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async apagaDiscoVenda(req,res){
        const { id } = req.params
        try {
            await database.DiscosVendas.destroy( {
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

module.exports = DiscosVendasController