import { FaCheck } from "react-icons/fa";

interface UserPlanProps {
  name: string;
  description: string;
  image: string;
  selected: boolean;
  onSelect: () => void;
}

export default function UserPlan({
  name,
  description,
  image,
  selected,
  onSelect,
}: UserPlanProps) {
  return (
    <div
      onClick={onSelect}
      className={`relative w-full md:max-w-64 flex flex-col justify-between cursor-pointer rounded-3xl shadow-[0_1px_24px_0_rgba(174,172,243,.251)] pt-4 pl-6 pr-6 pb-10 transition-all duration-300 ${
        selected ? "ring-2 ring-black" : "ring-1 ring-transparent"
      }`}
    >
      <div className="ml-auto top-4 right-4">
        <div
          className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all ${
            selected
              ? "bg-[#389E0D] border-[#389E0D]"
              : "border-[#B0B3C6] bg-white"
          }`}
        >
          {selected && <FaCheck className="text-white text-xs" />}
        </div>
      </div>

      <div className="w-12 h-12 mb-2">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain rounded-xl"
        />
      </div>

      <div className="text-left">
        <h3 className="font-bold text-[20px]">{name}</h3>
        <p className="text-[12px] mt-2 text-gray-700 leading-5">
          {description}
        </p>
      </div>
    </div>
  );
}
