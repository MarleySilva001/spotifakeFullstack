import { User } from "../db.js"

const pegar_usuario = async (req, res) => {
    /* const id_requisicao = req.params.id
    const usuario = await User.findByPk(id_requisicao)
    if(!usuario) {
        res.status(402).send('id não encontrado')
        return
    }
    res.send(usuario) */
    const { email } = req.params
    const usuario = await User.findOne({ where: { email: email } })
    if(!usuario) {
        res.status(403).send('usuario não encontrado')
        return
    }
    res.status(200).send(usuario)
}

export { pegar_usuario }