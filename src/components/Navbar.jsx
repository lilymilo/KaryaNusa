import Button from './Button';

function Navbar({ currentRoute, onNavigate, walletAddress, onConnect }) {

  const navLinks = [
    { id: 'home',    label: 'Beranda'     },
    { id: 'jobs',    label: 'Lowongan'    },
    { id: 'shop',    label: 'Marketplace' },
    { id: 'profile', label: 'Profil'      },
  ];

  return (
    <nav className='sticky top-0 z-50 bg-gray-950/80 backdrop-blur-xl border-b border-gray-800/50'>
      <div className='max-w-6xl mx-auto px-4 h-16 flex items-center justify-between'>

        {/* LOGO */}
        <button
          onClick={() => onNavigate('home')}
          className='font-black text-white text-lg'
        >
          Chain<span className='text-cyan-400'>Work</span>
        </button>

        {/* LINK NAVIGASI - Desktop */}
        <div className='hidden md:flex items-center gap-1'>
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                currentRoute === link.id
                  ? 'bg-cyan-500/10 text-cyan-400'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* WALLET BUTTON */}
        {walletAddress ? (
          <div className='text-xs text-gray-300 font-mono bg-gray-800 px-3 py-1.5 rounded-xl'>
            {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
          </div>
        ) : (
          <Button variant='primary' onClick={onConnect}>
            Connect Wallet
          </Button>
        )}

      </div>
    </nav>
  );
}

export default Navbar;