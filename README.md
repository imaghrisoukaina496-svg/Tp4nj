# 📦 Gestion Stock App

Application web CRUD développée avec **Node.js, Express, MySQL et EJS** permettant de gérer un catalogue de produits.

---

## 🚀 Objectif

Cette application permet d’effectuer les opérations suivantes :

* ➕ Ajouter un produit
* 📋 Afficher la liste des produits
* 🔍 Consulter les détails d’un produit
* ✏️ Modifier un produit
* ❌ Supprimer un produit

---

## 🧰 Technologies utilisées

* **Node.js** — environnement serveur JavaScript
* **Express.js** — framework web
* **MySQL** — base de données relationnelle
* **EJS** — moteur de templates
* **dotenv** — gestion des variables d’environnement
* **express-ejs-layouts** — gestion des layouts

---

## 📁 Structure du projet

```
gestion-stock-app/
│
├── app.js
├── .env
├── package.json
├── config/
│   └── db.js
├── controllers/
│   └── productController.js
├── models/
│   └── Product.js
├── views/
│   ├── layout.ejs
│   ├── error.ejs
│   ├── partials/
│   │   ├── navbar.ejs
│   │   └── footer.ejs
│   └── products/
│       ├── index.ejs
│       ├── show.ejs
│       ├── new.ejs
│       └── edit.ejs
└── public/
    └── css/
        └── style.css
```

---

## ⚙️ Installation

### 1. Cloner le projet ou créer le dossier

```bash
git clone <url-du-projet>
cd gestion-stock-app
```

ou

```bash
mkdir gestion-stock-app
cd gestion-stock-app
```

---

### 2. Initialiser le projet

```bash
npm init -y
```

---

### 3. Installer les dépendances

```bash
npm install express mysql2 ejs express-ejs-layouts dotenv body-parser
```

---

## 🗄️ Configuration de la base de données

### 1. Créer la base

```sql
CREATE DATABASE gestion_stock;
USE gestion_stock;
```

### 2. Créer la table

```sql
CREATE TABLE produits (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(150) NOT NULL,
  prix DECIMAL(10,2) NOT NULL,
  description TEXT,
  date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 3. Ajouter des données (optionnel)

```sql
INSERT INTO produits (nom, prix, description) VALUES
('Clavier', 300.00, 'Clavier mécanique'),
('Souris', 150.00, 'Souris sans fil'),
('Écran', 1200.00, 'Écran Full HD');
```

---

## 🔐 Configuration des variables d’environnement

Créer un fichier `.env` à la racine :

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=gestion_stock
PORT=3000
```

---

## ▶️ Lancer l’application

```bash
node app.js
```

ou

```bash
npm start
```

Puis ouvrir dans le navigateur :

👉 http://localhost:3000

---

## 🧪 Fonctionnalités principales

| Fonction | Description                |
| -------- | -------------------------- |
| Create   | Ajouter un nouveau produit |
| Read     | Afficher les produits      |
| Update   | Modifier un produit        |
| Delete   | Supprimer un produit       |

---

## ⚠️ Problèmes fréquents

* ❌ Erreur MySQL → vérifier `.env`
* ❌ Page vide → vérifier la table et les données
* ❌ npm error → vérifier `package.json`

---

## 💡 Améliorations possibles

* 🔎 Ajouter une recherche
* 📄 Ajouter la pagination
* 🔐 Authentification utilisateur
* 🖼️ Upload d’images produits
* 🌐 API REST

---

https://github.com/user-attachments/assets/65f1d288-e073-4a2f-bf37-ef9a06a2f2f0

---

---
## 👨‍💻 Auteur
**SOUKAINA IMAGHRI**


Projet réalisé dans le cadre du module :
**Développement web full-stack avec JavaScript**

---

## 📄 Licence

Projet à usage pédagogique.
