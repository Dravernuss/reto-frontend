export default function ReturnButton({
  handleBack,
  Text,
}: {
  handleBack: () => void;
  Text?: string;
}) {
  return (
    <div
      className="flex items-center gap-2 cursor-pointer group select-none"
      onClick={handleBack}
    >
      <div className="border-2 border-[#4F4FFF] rounded-full w-5 h-5 flex items-center justify-center text-[#4F4FFF] transition-colors duration-200">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="chevron-left"
          className="w-2 h-2"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
          ></path>
        </svg>
      </div>
      {Text && (
        <p className="font-semibold text-[#4F4FFF] text-[18px] group-hover:underline transition-all duration-200">
          {Text}
        </p>
      )}
    </div>
  );
}
