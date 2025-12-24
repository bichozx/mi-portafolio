export default function Button({ children, href, onClick, className = "" }) {
  const base = "inline-block px-5 py-2 rounded-lg font-medium transition";
  if (href) {
    return (
      <a href={href} className={`${base} bg-indigo-500 hover:bg-indigo-600 text-white ${className}`} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={`${base} bg-indigo-500 hover:bg-indigo-600 text-white ${className}`}>
      {children}
    </button>
  );
}
