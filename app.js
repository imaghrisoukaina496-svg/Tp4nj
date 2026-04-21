const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
require('dotenv').config();

const productController = require('./controllers/productController');

const app = express();
const PORT = process.env.PORT || 3000;

// moteur de vues
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layout');

// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.get('/', (req, res) => {
  res.redirect('/products');
});

app.get('/products', productController.listProducts);
app.get('/products/new', productController.renderCreateForm);
app.post('/products/new', productController.createProduct);
app.get('/products/:id', productController.showProduct);
app.get('/products/:id/edit', productController.renderEditForm);
app.post('/products/:id/edit', productController.updateProduct);
app.post('/products/:id/delete', productController.deleteProduct);

// 404
app.use((req, res) => {
  res.status(404).render('error', {
    title: 'Page introuvable',
    message: 'La ressource demandée est indisponible.'
  });
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});