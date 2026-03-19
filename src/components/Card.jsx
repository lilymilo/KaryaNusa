function Card({ children, className = '', hover = true }) {
  return (
    <div
      className={`
        bg-gray-900 border border-gray-800 rounded-2xl p-5
        ${hover ? 'hover:border-cyan-500/40 hover:shadow-lg transition-all duration-300' : ''}
        ${className}
      `}
    >
      {children}  {/* apapun yang ditulis di antara <Card>...</Card> */}
    </div>
  );
}
 
export default Card;
