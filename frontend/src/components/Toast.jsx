import { useEffect } from 'react';

function Toast({ message, type = 'error', onClose }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  const styles = {
    error: 'bg-red-600',
    success: 'bg-green-600',
  };

  return (
    <div
      className={`fixed top-4 right-4 z-50 ${styles[type]} text-white px-5 py-3 rounded shadow-lg flex items-center gap-3 max-w-sm animate-fade-in`}
      role="alert"
    >
      <span className="flex-1 text-sm">{message}</span>
      <button
        onClick={onClose}
        className="text-white font-bold text-xl leading-none hover:opacity-75"
        aria-label="Fechar"
      >
        &times;
      </button>
    </div>
  );
}

export default Toast;
