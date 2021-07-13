const database = require("../models");

class ArtistaController{
    static async acessaTodosArtistas(req,res) {
        try {
            const todosArtistas = await database.Artistas.findAll()
            return res.status(200).json(todosArtistas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async acessaArtista(req,res) {
        const { id } = req.params
        try {
            const umArtista = await database.Artistas.findOne( 
                {where: 
                    {id:Number(id) }
                })
            return res.status(200).json(umArtista)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaArtista(req,res){
        const novoArtista = req.body
        try {
            const novoArtistaCriado = await database.Artistas.create(novoArtista)
            return res.status(200).json(novoArtistaCriado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaArtista(req,res){
        const novaInfo = req.body
        const { id } = req.params
        try {
            await database.Artistas.update(novaInfo, {
                where: {
                    id:Number(id)
                }
            })
            const artistaAtualizado = await database.Artistas.findOne({
                where:{
                    id:Number(id)
                }
            })
            return res.status(200).json(artistaAtualizado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async apagaArtista(req,res){
        const { id } = req.params
        try {
            await database.Artistas.destroy( {
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

module.exports = ArtistaController