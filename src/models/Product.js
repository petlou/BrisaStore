import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const ProductSchema = new mongoose.Schema({
  nomeProduto: {
    type: String,
    required: true
  },
  descProduto: {
    type: String,
    required: false
  },
  preco: {
    type: Number,
    required: true
  },
  quantidade: {
    type: Number,
    required: false
  },
  imagem: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
});

ProductSchema.plugin(mongoosePaginate);
mongoose.model('Product', ProductSchema);