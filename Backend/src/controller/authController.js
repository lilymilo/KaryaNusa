import { supabase } from '../config/supabaseClient.js';

export const register = async (req, res) => {
  const { email, password, full_name, shop_name, role } = req.body;

  // 1. Sistem auth supabase
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (authError) return res.status(400).json({ error: authError.message });

  // 2. Jika berhaasil, ambil ID-nya dan masukkan ke tabel profiles
  if (authData.user) {
    const { error: profileError } = await supabase
      .from('profiles')
      .insert([
        { 
          id: authData.user.id, // ID dari Auth
          full_name: full_name, 
          shop_name: shop_name, 
          role: role || 'seller' // Default jadi seller untuk tes kamu
        }
      ]);

    if (profileError) return res.status(400).json({ error: profileError.message });
  }

  res.status(201).json({ message: "Registrasi Berhasil!", user: authData.user });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) return res.status(400).json({ error: error.message });

  res.json({
    message: "Login Berhasil. Selamat datang :)",
    token: data.session.access_token,
    user: data.user
  });
};

// Mengambil data akun yang sedang login
export const getAccount = async (req, res) => {
  try {
    // req.user didapatkan dari middleware 'protect' yang sudah kita buat
    const { data: profile, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', req.user.id)
      .single();

    if (error) throw error;

    res.json({
      message: "Data profil berhasil diambil",
      user: {
        email: req.user.email,
        ...profile
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Logout (Keluar dari sesi)
export const logout = async (req, res) => {
  const { error } = await supabase.auth.signOut();
  
  if (error) return res.status(400).json({ error: error.message });
  
  res.json({ message: "Berhasil Logout. Selamat tinggal :(" });
};