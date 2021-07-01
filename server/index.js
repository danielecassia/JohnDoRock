const app = require('./config/express-config');

const User = require('./users/model/User.js');

app.get('/', (req, res) => {
    res.send('<h1>Main page!</h1>');
});

app.listen(3000, 'localhost', () => console.log('servidor rodando!'));