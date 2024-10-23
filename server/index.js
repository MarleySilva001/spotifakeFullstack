import Express from 'express';
import { User, criarTabelas } from './db.js'
import bcryptjs from 'bcryptjs'

const app = Express()
app.use(Express.json())

// app.get('/pegar', function (req, res) {
//     res.send('enviar esta mensagem')
// })

// app.get('/pegar2', function (req, res) {
//     res.send('Mensagem 2')
// })

//criarTabelas() --> usar so uma vez já que com o 'force: true' ele sempre apaga a tabela existente e cria uma nova do zero
app.post('/registro', async function (req, res) {
    // verificar se todos os campos foram enviados
    try {
        const { nome, sobrenome, email, senha, dataNascimento } = req.body
        if (!nome || !sobrenome || !email || !senha || !dataNascimento) {
            res.status(406).send('todos os campos devem ser preenchidos')
            return
        }
        
        if( await User.findOne({where:{email:email}})){
            res.status(400).send('usuario ja existente no sistema')
            return
        }

        const senhaSegura = bcryptjs.hashSync(senha, 10)
        const novoUsuario = User.create({
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            senha: senhaSegura,
            dataNascimento: dataNascimento,
        })
        res.status(201).send('ok usuario criado')
    } catch (erro) {
        console.log(erro)
    }
})

app.listen(8000)