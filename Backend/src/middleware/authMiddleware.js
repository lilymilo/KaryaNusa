import { supabase } from '../config/supabaseClient.js';

export const protect = async (req, res, next) => {
  // 1. Ambil token dari header 'Authorization'
  // Formatnya biasanya: "Bearer <token_panjang_banget>"
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ 
      error: 'Akses ditolak! Kamu harus login dulu untuk melakukan aksi ini.' 
    });
  }

  try {
    // 2. Verifikasi token ke Supabase Auth
    const { data: { user }, error } = await supabase.auth.getUser(token);

    if (error || !user) {
      return res.status(401).json({ error: 'Token tidak valid atau sudah expired.' });
    }

    // 3. (OPSIONAL) Cek apakah user adalah 'seller' di tabel profiles
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single();

    if (profileError || profile.role !== 'seller') {
      return res.status(403).json({ 
        error: 'Akses dilarang! Hanya akun dengan role Seller yang bisa mengelola produk.' 
      });
    }

    // 4. Jika semua oke, simpan data user ke req dan lanjut ke controller
    req.user = user;
    next();
    
  } catch (err) {
    res.status(500).json({ error: 'Terjadi kesalahan pada sistem keamanan.' });
  }
};