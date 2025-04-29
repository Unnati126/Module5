const { fetchAllProducts, fetchProductById } = require('../services/productService');

exports.getAllProducts = async (req, res) => {
  try {
    const data = await fetchAllProducts();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch products' });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await fetchProductById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Product not found' });
  }
};
