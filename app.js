const express = require ('express'); //requiero modulo express
const app = express(); //libreria express
const path = require('path');
app.use(express.static('public'));//link carpeta estatica  

//app.get('/', (req, res) => {
//    res.send('¡Hola mundo!');
//});

app.listen(3030, () => 
console.log(' Servidor Corriendo')); // levanto servidor

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'));
})