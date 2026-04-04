import { supabase } from '../config/supabaseClient.js';

// 1. GET all product
export const getProducts = async (req, res) => {
  const { data, error } = await supabase.from('products').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

// 2. Add product
export const createProduct = async (req, res) => {
  const { name, price, description } = req.body;
  const { data, error } = await supabase
    .from('products')
    .insert([{ name, price, description }])
    .select();

  if (error) return res.status(500).json({ error: error.message });
  res.status(201).json(data[0]);
};

// 3. Update Product
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, description } = req.body;
  const { data, error } = await supabase
    .from('products')
    .update({ name, price, description })
    .eq('id', id)
    .select();

  if (error) return res.status(500).json({ error: error.message });
  res.json({ message: "Produk berhasil diupdate", data: data[0] });
};

// 4. DELETE product
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const { error } = await supabase
    .from('products')
    .delete()
    .eq('id', id);

  if (error) return res.status(500).json({ error: error.message });
  res.json({ message: "Produk berhasil dihapus" });
};