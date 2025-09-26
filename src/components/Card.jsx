export function Card({ className = '', children, ...props }) {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}