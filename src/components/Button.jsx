function Button({ variant = 'primary', children, onClick, disabled = false, loading = false }) {
  const base = 'inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';
  const variants = {
    primary:   'bg-cyan-500 hover:bg-cyan-400 text-gray-950',
    secondary: 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700',
    ghost:     'hover:bg-gray-800 text-gray-300 hover:text-white',
    danger:    'bg-red-500/20 text-red-400 border border-red-500/30',
  };
  return (
    <button
      className={`${base} ${variants[variant]}`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading && (
        <span className='w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin' />
      )}
      {children}
    </button>
  );
}

export default Button;