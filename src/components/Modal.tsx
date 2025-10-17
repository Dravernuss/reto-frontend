interface BuyModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  description,
}: BuyModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-xl max-w-md w-[90%] p-6 relative transition-all transform scale-100 hover:scale-[1.01]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black cursor-pointer"
        >
          ✕
        </button>
        <h2 className="text-center text-base font-bold mb-3">{title}</h2>
        <hr className="border-gray-200 mb-4" />
        <p className="text-sm text-gray-700 leading-relaxed text-justify">
          {description}
        </p>
      </div>
    </div>
  );
}
