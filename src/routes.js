const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

// sem controllers 
/*
routes.get('/', (req, res) => {
	/*
	Product.create({
		title: 'React Native',
		description: 'Build apps',
		url: 'https://alexgalhardo.com',
	});

	return res.send('Teste nodemon');
});
*/

// acessar /api/products

// LER TODOS OS DADOS CADASTRADOS
routes.get('/products', ProductController.index);

// BUSCAR DADO COM ID ESPECÍFICO
routes.get('/products/:id', ProductController.show);

// METODO CREATE
routes.post('/products', ProductController.create);

// UPDATE DADO
routes.put('/products/:id', ProductController.update);

// DELETE DADO
routes.delete('/products/:id', ProductController.delete);

module.exports = routes;