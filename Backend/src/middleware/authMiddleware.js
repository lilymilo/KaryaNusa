import { supabase } from '../config/supabaseClient.js';

export const protect = async (req, res, next) => {
  //Ambil token dari header 'Authorization'
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ 
      error: 'Akses ditolak! Kamu harus login dulu untuk melakukan aksi ini.' 
    });
  }

  try {
    //Verifikasi token ke Supabase Auth
    const { data: { user }, error } = await supabase.auth.getUser(token);

    if (error || !user) {
      return res.status(401).json({ error: 'Token tidak valid atau sudah expired.' });
    }

    //cek role user
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

    req.user = user;
    next();
    
  } catch (err) {
    res.status(500).json({ error: 'Terjadi kesalahan pada sistem keamanan.' });
  }
};