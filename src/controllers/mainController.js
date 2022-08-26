const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		res.render("index",{productos:products})
	},
	search: (req, res) => {
		const search = res.query.keywords;
		
		const resultado = products.filter(p => p.name == search)

		res.render("results", {productos:resultado})
	},
};

module.exports = controller;
