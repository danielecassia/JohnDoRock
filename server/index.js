const app = require('./config/express-config');

const User = require('./users/model/User.js');

app.post('/', (req, res) => {
    res.json(req.body);
});

app.post('/cadastro', (req, res) => {
    res.json(req.body);
});

//trocar aluno para cargo depois da conexão com o banco
app.get('/home', (req, res) => {
    res.send('<h1>Página Home Usuários</h1>');
});

app.get('/home/aluno', (req, res) => {
    res.send('<h1>Página Home Aluno</h1>');
});

app.get('/home/professor', (req, res) => {
    res.send('<h1>Página Home Professor</h1>');
});

app.post('/home/admin', (req, res) => {
    res.json(req.body);
});

app.post('/perfil', (req, res) => {
    res.json(req.body);
});

app.post('/perfil/aluno', (req, res) => {
    res.json(req.body);
});

app.post('/perfil/professor', (req, res) => {
    res.json(req.body);
});

app.post('/perfil/admin', (req, res) => {
    res.json(req.body);
});


app.listen(3000, 'localhost', () => console.log('servidor rodando!'));

