const express = require('express');
const connectDB = require('./db.js');
const Item = require('./model.js');
const bodyParser = require('body-parser');

const app = express() 
connectDB();

app.use((express.static('public')))
app.use(bodyParser.json());

app.set('view engine','ejs');
app.set('views','views'); 

// declare routes
//const someRoute = require('./routes/...')

app.use(express.json()) 

// enable routes
// app.use('/',someRoute);

app.post('/post', async (req,res) => {
    console.log('post')
    console.log(req.body);
    await Item.create(req.body)
    .then(item => res.send('added'))
    .catch(err => res.status(400).json({error:'cant add'}));
});


const PORT = 8080;

app.listen(PORT, () =>
{   
    console.log(`listening on ${PORT}`);
});