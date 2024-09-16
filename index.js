const express = require('express');

const server = express();
server.use(express.json());

// localhost:3000/cursos
// req -> rqeuisição que vem
// res -> resposta que vai

const cursos = ['NodeJS', 'ReactJS', 'React Native'];


// Query Params = ?nome=Lucas
// Route Params  = /curso/2
// Request Body = {nome: 'Lucas'}
// EXEMPLO FUNCIONAMENTO QUERY E ROUTE PARAMS.

server.get('/cursos', (req, res) => {
    return res.json(cursos);
})

server.get('/cursos1/:id', (req, res) => {
    const nome = req.query.nome;
    const id = req.params.id;
    return res.json({curso: `Aprendendo ${nome} do curso de id ${id}`});
})

server.get('/cursos/:index', (req, res) => {
    const index = req.params.index;
    
    return res.json(cursos[index]);
})

server.post('/cursos', (req, res) => {
    // Extrai a propriedade name do objeto req.body: Em vez 
   // de acessar req.body.name diretamente, 
   //a desestruturação cria uma variável chamada name que contém o valor
   // da propriedade name do objeto req.body.
    // Atribui o valor da propriedade name à variável name: 
    // Se req.body é algo como { name: 'Matemática' }, então name será 
    //'Matemática'.
    const {name} = req.body;
    cursos.push(name);

    return res.json(cursos);
})

server.put('/cursos/:id', (req, res) => {
    const {id} = req.params;
    const {name} = req.body;

    cursos[id] = name;
    return res.json(cursos);
})

server.delete('/cursos/:id', (req, res) => {
    const {id} = req.params;

    // remova o curso que está na posição id
    cursos.splice(id, 1);
    return res.json(cursos);
})

server.listen(3000);