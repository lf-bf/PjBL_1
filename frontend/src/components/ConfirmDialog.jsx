function ConfirmDialog({ isOpen, title, message, confirmLabel = 'Confirmar', cancelLabel = 'Cancelar', confirmStyle = 'danger', onConfirm, onCancel }) {
  if (!isOpen) return null;

  const confirmClass =
    confirmStyle === 'danger'
      ? 'bg-red-600 hover:bg-red-700 text-white'
      : 'bg-yellow-500 hover:bg-yellow-600 text-white';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-sm mx-4 p-6">
        {title && <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>}
        {message && <p className="text-gray-600 text-sm mb-6">{message}</p>}
        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm"
          >
            {cancelLabel}
          </button>
          <button
            onClick={onConfirm}
            className={`px-4 py-2 rounded text-sm font-medium ${confirmClass}`}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDialog;
