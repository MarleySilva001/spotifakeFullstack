import Express from 'express';

const app = Express()

app.get('/pegar', function (req, res) {
    res.send('enviar esta mensagem')
})

app.get('/pegar2', function(req,res){
    res.send('Mensagem 2')
})

app.listen(8000)