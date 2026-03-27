import { useState } from 'react';

const Register = () => {

  const [formData, setFormData] = useState({
    namaLengkap: '',
    email: '',
    password: '',
    peran: 'Freelancer' 
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data siap dikirim ke API:", formData);
  
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Buat Akun</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          name="namaLengkap"
          placeholder="Nama Lengkap" 
          onChange={handleChange}
          className="w-full p-2 border rounded" 
        />
        <input 
          name="email" 
          type="email"
          placeholder="Email" 
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="w-full bg-karya-green text-white py-2 rounded">
          Daftar Sekarang
        </button>
      </form>
    </div>
  );
};

export default Register;