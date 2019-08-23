const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');


// iniciando o app
const app = express();
// permita que eu envie dados para minha aplicação com formato
// de json
app.use(express.json());
app.use(cors());

// iniciando o DB
mongoose.connect(
	"mongodb://localhost:27017/nodeapi", 
	{ useNewUrlParser: true }
);
// require('./src/models/Product'); // sem require-dir
requireDir('./src/models'); // com require-dir

// primeira rota
// sem routes.js
// create 
// const Product = mongoose.model('Product');
/*
app.get('/', (req, res) => {
	Product.create({
		title: 'React Native',
		description: 'Build apps',
		url: 'https://alexgalhardo.com',
	});

	return res.send('Teste nodemon');
});
*/

// Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);