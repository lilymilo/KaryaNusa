function DetailPage({ job, onBack }) {
  const jobData = job || {
    title: 'Kasir & Admin Toko',
    company: 'Warung Bu Dewi',
    location: 'Jakarta Selatan',
    type: 'Full-time',
    salary: 'Rp 2,5jt–3,2jt',
    experience: '1–2 th pengalaman',
    avatar: 'WD',
    avatarBg: 'bg-blue-500',
    description: 'Kami mencari kasir & admin yang ramah, jujur, dan berpengalaman di bidang F&B atau retail untuk bergabung bersama tim kami di Jakarta Selatan.',
    requirements: [
      'Min. lulusan SMA/SMK sederajat',
      'Pengalaman kasir minimal 1 tahun',
      'Bisa menggunakan aplikasi kasir',
      'Jujur, teliti, dan ramah',
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HEADER */}
      <div className="bg-white px-4 pt-10 pb-4 flex items-center gap-3 border-b border-gray-100">
        <button onClick={onBack} className="text-gray-600 text-xl">←</button>
        <h2 className="font-bold text-gray-800">Detail Lowongan 💼</h2>
      </div>

      {/* INFO UTAMA */}
      <div className="bg-white mx-4 mt-4 rounded-2xl p-5 shadow-sm">
        <div className={`w-16 h-16 ${jobData.avatarBg} rounded-2xl flex items-center justify-center mx-auto mb-3`}>
          <span className="text-white font-black text-xl">{jobData.avatar}</span>
        </div>
        <h1 className="text-center font-black text-gray-800 text-xl mb-1">{jobData.title}</h1>
        <p className="text-center text-gray-500 text-sm mb-3">{jobData.company} • {jobData.location}</p>
        <div className="flex justify-center gap-2 flex-wrap">
          <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-medium">{jobData.type}</span>
          <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">{jobData.salary}</span>
          <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full font-medium">{jobData.experience}</span>
        </div>
      </div>

      {/* DESKRIPSI */}
      <div className="mx-4 mt-4 bg-white rounded-2xl p-5 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-2">Deskripsi Pekerjaan</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{jobData.description}</p>
      </div>

      {/* PERSYARATAN */}
      <div className="mx-4 mt-4 bg-white rounded-2xl p-5 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-3">Persyaratan</h3>
        <div className="space-y-2">
          {jobData.requirements.map((req, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5">●</span>
              <span className="text-gray-600 text-sm">{req}</span>
            </div>
          ))}
        </div>
      </div>

      {/* VERIFIKASI */}
      <div className="mx-4 mt-4 bg-green-50 border border-green-200 rounded-2xl p-4">
        <div className="flex items-start gap-2">
          <span className="text-green-600">✓</span>
          <div>
            <p className="text-green-700 font-bold text-sm">Terverifikasi KaryaNusa</p>
            <p className="text-green-600 text-xs mt-0.5">Usaha ini sudah diverifikasi identitasnya</p>
          </div>
        </div>
      </div>

      {/* TOMBOL LAMAR */}
      <div className="mx-4 mt-6 mb-8">
        <button className="w-full bg-blue-700 hover:bg-blue-600 text-white font-bold py-4 rounded-2xl transition-all shadow-lg text-lg">
          Lamar Sekarang
        </button>
      </div>

    </div>
  );
}

export default DetailPage;