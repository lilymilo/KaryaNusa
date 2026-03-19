function HomePage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-blue-700 flex flex-col items-center justify-center px-6">

      {/* LOGO */}
      <div className="mb-8 text-center">
        <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl">
          <span className="text-blue-700 font-black text-3xl">KN</span>
        </div>
        <h1 className="text-4xl font-black text-white">
          Karya<span className="text-green-400">Nusa</span>
        </h1>
        <p className="text-blue-200 text-sm mt-2">Platform Kerja UMKM Indonesia</p>
        <p className="text-blue-300 text-xs mt-1">Terpercaya & Mudah</p>
      </div>

      {/* STATISTIK */}
      <div className="flex gap-10 mb-12">
        {[
          { value: '12K+', label: 'Lowongan' },
          { value: '8K+',  label: 'UMKM'     },
          { value: '50K+', label: 'Pekerja'  },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-white font-black text-2xl">{stat.value}</div>
            <div className="text-blue-200 text-xs mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* TOMBOL */}
      <div className="w-full max-w-xs flex flex-col gap-3">
        <button
          onClick={() => onNavigate('jobs')}
          className="w-full bg-green-400 hover:bg-green-300 text-gray-900 font-bold py-3 rounded-2xl transition-all shadow-lg"
        >
          Mulai Mencari Kerja
        </button>
        <button
          onClick={() => onNavigate('jobs')}
          className="w-full text-blue-200 hover:text-white text-sm text-center py-2 transition-all"
        >
          Saya pemilik UMKM 🏪
        </button>
      </div>

    </div>
  );
}

export default HomePage;
