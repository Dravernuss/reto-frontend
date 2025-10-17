import { useState } from "react";
import { FaCheck } from "react-icons/fa";

interface UserPlanProps {
  name: string;
  description: string;
  image: string;
  selected?: boolean;
  onSelect?: () => void;
}

export default function UserPlan({
  name,
  description,
  image,
  selected = false,
  onSelect,
}: UserPlanProps) {
  const [isSelected, setIsSelected] = useState(selected);

  const handleSelect = () => {
    setIsSelected(true);
    if (onSelect) onSelect();
  };

  return (
    <div
      onClick={handleSelect}
      className={`relative w-full md:max-w-64 flex flex-col justify-between cursor-pointer rounded-3xl shadow-[0_1px_32px_#aeacf359] pt-4 pl-6 pr-6 pb-10 transition-all duration-300 ${
        isSelected ? "ring- ring-black" : "ring-1 ring-transparent"
      }`}
    >
      {/* Radio personalizado alineado a la derecha */}
      <div className="ml-auto top-4 right-4">
        <div
          className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all ${
            isSelected
              ? "bg-[#389E0D] border-[#389E0D]"
              : "border-[#B0B3C6] bg-white"
          }`}
        >
          {isSelected && <FaCheck className="text-white text-xs" />}
        </div>
      </div>

      {/* Imagen */}
      <div className="w-12 h-12 mb-2">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain rounded-xl"
        />
      </div>

      {/* Texto */}
      <div className="text-left">
        <h3 className="font-bold text-[20px] ">{name}</h3>
        <p className="text-[12px] mt-2 text-gray-700">{description}</p>
      </div>
    </div>
  );
}
