const Product = require('../models/Product');

exports.listProducts = async (req, res) => {
  try {
    const produits = await Product.getAll();
    res.render('products/index', {
      title: 'Catalogue des produits',
      produits
    });
  } catch (error) {
    res.status(500).render('error', {
      title: 'Erreur',
      message: 'Impossible de récupérer les produits.'
    });
  }
};

exports.showProduct = async (req, res) => {
  try {
    const produit = await Product.getById(req.params.id);

    if (!produit) {
      return res.status(404).render('error', {
        title: 'Introuvable',
        message: 'Ce produit n’existe pas.'
      });
    }

    res.render('products/show', {
      title: 'Détail du produit',
      produit
    });
  } catch (error) {
    res.status(500).render('error', {
      title: 'Erreur',
      message: 'Erreur lors de l’affichage du produit.'
    });
  }
};

exports.renderCreateForm = (req, res) => {
  res.render('products/new', {
    title: 'Nouveau produit'
  });
};

exports.createProduct = async (req, res) => {
  try {
    const { nom, prix, description } = req.body;
    await Product.add({ nom, prix, description });
    res.redirect('/products');
  } catch (error) {
    res.status(500).render('error', {
      title: 'Erreur',
      message: 'Le produit n’a pas pu être ajouté.'
    });
  }
};

exports.renderEditForm = async (req, res) => {
  try {
    const produit = await Product.getById(req.params.id);

    if (!produit) {
      return res.status(404).render('error', {
        title: 'Introuvable',
        message: 'Produit non trouvé.'
      });
    }

    res.render('products/edit', {
      title: 'Modification',
      produit
    });
  } catch (error) {
    res.status(500).render('error', {
      title: 'Erreur',
      message: 'Impossible de charger le formulaire.'
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { nom, prix, description } = req.body;
    await Product.update(req.params.id, { nom, prix, description });
    res.redirect('/products');
  } catch (error) {
    res.status(500).render('error', {
      title: 'Erreur',
      message: 'La modification a échoué.'
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.remove(req.params.id);
    res.redirect('/products');
  } catch (error) {
    res.status(500).render('error', {
      title: 'Erreur',
      message: 'La suppression a échoué.'
    });
  }
};