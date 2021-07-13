const database = require("../models");

class VendasController{
    static async acessaTodasvendas(req,res) {
        try {
            const todasVendas = await database.Vendas.findAll()
            return res.status(200).json(todasVendas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async acessaVenda(req,res) {
        const { id } = req.params
        try {
            const umaVenda = await database.Vendas.findOne( 
                {where: 
                    {id:Number(id) }
                })
            return res.status(200).json(umaVenda)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaVenda(req,res){
        const novaVenda = req.body
        try {
            const atualizacaoDiscos = await database.Discos.findOne({
                where: {
                    id: Number(novaVenda.Discos_Id)
                }
            }).then(Discos => {
                if(Discos.quantidadeEstoque >= novaVenda.quantidades) {
                    Discos.decrement('quantidadeEstoque',{ by: novaVenda.quantidades})
                    console.log(atualizacaoDiscos)
                } else {
                    console.log(`Failed. ${Discos.quantidadeEstoque} no estoque`)
                }
            })  
            const novoVendaAdicionada = await database.Vendas.create(novaVenda)
        return res.status(200).json(novoVendaAdicionada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaVenda (req,res){
        const novaInfo = req.body
        const { id } = req.params
        try {
            await database.Vendas.update(novaInfo, {
                where: {
                    id:Number(id)
                }
            })
            const vendaAtualizada = await database.Vendas.findOne({
                where: {
                    id:Number(id)
                }
            })
            return res.status(200).json(vendaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async apagaVenda(req,res){
        const { id } = req.params
        try {
            await database.Vendas.destroy( {
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

module.exports = VendasController