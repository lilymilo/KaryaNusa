import { useState, useEffect } from 'react';

function JobsPage({ onNavigate }) {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const categories = ['Semua', 'Kuliner', 'Retail', 'Jasa', 'Teknologi'];

  // Data dummy lowongan
  const dummyJobs = [
    {
      id: 1,
      title: 'Kasir & Admin Toko',
      company: 'Warung Bu Dewi',
      location: 'Jakarta Selatan',
      type: 'Full-time',
      tag: 'Bisa nego',
      tagColor: 'bg-green-100 text-green-700',
      salary: 'Rp 2,5jt–3,2jt',
      time: '3 jam lalu',
      avatar: 'WD',
      avatarBg: 'bg-blue-500',
    },
    {
      id: 2,
      title: 'Operator Jahit & QC',
      company: 'Konveksi Maju Jaya',
      location: 'Bandung',
      type: 'Part-time',
      tag: 'Pengalaman 1th',
      tagColor: 'bg-orange-100 text-orange-700',
      salary: 'Rp 1,8jt–2,4jt',
      time: '5 jam lalu',
      avatar: 'MJ',
      avatarBg: 'bg-green-500',
    },
    {
      id: 3,
      title: 'Staff Gudang',
      company: 'Toko Elektronik Jaya',
      location: 'Surabaya',
      type: 'Full-time',
      tag: 'Bisa nego',
      tagColor: 'bg-green-100 text-green-700',
      salary: 'Rp 2,0jt–2,8jt',
      time: '1 hari lalu',
      avatar: 'TE',
      avatarBg: 'bg-purple-500',
    },
  ];

  // useEffect: simulasi fetch data
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setJobs(dummyJobs);
      setLoading(false);
    }, 800);
  }, []);

  // Filter berdasarkan search
  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(search.toLowerCase()) ||
    job.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HEADER */}
      <div className="bg-blue-700 px-4 pt-10 pb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-blue-200 text-sm">Selamat pagi 👋</p>
            <h2 className="text-white font-black text-xl">Budi Santoso</h2>
            <p className="text-blue-200 text-xs mt-0.5">Ada 23 lowongan baru di sekitar kamu</p>
          </div>
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">BS</span>
          </div>
        </div>

        {/* SEARCH BAR */}
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          <input
            type="text"
            placeholder="Cari lowongan atau nama usaha..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-3 rounded-2xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
      </div>

      <div className="px-4 py-4">

        {/* STATISTIK */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          {[
            { value: '23', label: 'Lowongan Baru' },
            { value: '5',  label: 'Lamaran Aktif' },
            { value: '3',  label: 'Dilihat HRD'   },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl p-3 text-center shadow-sm">
              <div className="text-blue-700 font-black text-xl">{stat.value}</div>
              <div className="text-gray-500 text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* KATEGORI */}
        <h3 className="font-bold text-gray-800 mb-3">Kategori</h3>
        <div className="flex gap-2 overflow-x-auto pb-2 mb-5">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-blue-700 text-white'
                  : 'bg-white text-gray-600 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* REKOMENDASI */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-800">Rekomendasi</h3>
          <button className="text-blue-600 text-sm">Lihat semua</button>
        </div>

        {/* JOB LIST */}
        {loading ? (
          <div className="space-y-3">
            {[1,2,3].map(i => (
              <div key={i} className="bg-white rounded-2xl p-4 animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                <div className="h-3 bg-gray-200 rounded w-1/2" />
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {filteredJobs.map(job => (
              <button
                key={job.id}
                onClick={() => onNavigate && onNavigate('detail', job)}
                className="w-full bg-white rounded-2xl p-4 shadow-sm text-left hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-gray-800 text-sm">{job.title}</span>
                    </div>
                    <p className="text-gray-500 text-xs mb-2">{job.company} • {job.location}</p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full">{job.type}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${job.tagColor}`}>{job.tag}</span>
                    </div>
                  </div>
                  <div className={`w-10 h-10 ${job.avatarBg} rounded-xl flex items-center justify-center ml-3 flex-shrink-0`}>
                    <span className="text-white font-bold text-xs">{job.avatar}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-blue-700 font-bold text-sm">{job.salary}</span>
                  <span className="text-gray-400 text-xs">{job.time}</span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* BOTTOM NAV */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex justify-around py-3 px-4">
        {[
          { icon: '🏠', label: 'Beranda',  active: true  },
          { icon: '🔖', label: 'Cari',     active: false },
          { icon: '📋', label: 'Lamaran',  active: false },
          { icon: '👤', label: 'Profil',   active: false },
        ].map(nav => (
          <button key={nav.label} className="flex flex-col items-center gap-1">
            <span className="text-xl">{nav.icon}</span>
            <span className={`text-xs ${nav.active ? 'text-blue-700 font-bold' : 'text-gray-400'}`}>
              {nav.label}
            </span>
            {nav.active && <div className="w-1 h-1 bg-blue-700 rounded-full" />}
          </button>
        ))}
      </div>

    </div>
  );
}

export default JobsPage;