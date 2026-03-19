function Footer() {
  return (
    <footer className='border-t border-gray-800 bg-gray-950 mt-20 py-10 px-4'>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row
                       items-center justify-between gap-4'>
        <span className='text-gray-400 text-sm'>
          ChainWork &copy; 2025 — Powered by Blockchain
        </span>
        <div className='flex gap-6 text-xs text-gray-600'>
          <span>Verifikasi Ijazah</span>
          <span>Lowongan Kerja</span>
          <span>Marketplace</span>
        </div>
      </div>
    </footer>
  );
}
 
export default Footer;
