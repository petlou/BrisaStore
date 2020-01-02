import mongoose from 'mongoose';

const Product = mongoose.model('Product');

module.exports = {
  async index(req, res) {
    const produtos = await Product.find();

    return res.json(produtos);
  },

  async show(req, res) {
    const produtos = await Product.findById(req.params.id);

    return res.json(produtos);
  },

  async store(req, res) {
    const produtos = await Product.create(req.body);

    return res.json(produtos);
  },

  async update(req, res) {
    const produtos = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

    return res.json(produtos);
  },

  async destroy(req, res) {
    await Product.findByIdAndRemove(req.params.id);

    return res.send();
  }
};