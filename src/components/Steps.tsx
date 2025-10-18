import { useNavigate } from "react-router-dom";
import ReturnButton from "./ReturnButton";

interface StepsProps {
  currentStep: number;
}

export default function Steps({ currentStep }: StepsProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (currentStep === 1) {
      localStorage.removeItem("userData");
      navigate("/", { replace: true });
    } else if (currentStep === 2) {
      navigate("/plans", { replace: true });
    }
  };

  return (
    <div className="w-full bg-[#EDEFFC] h-14">
      <div className="hidden md:flex items-center justify-center h-full gap-4">
        <div className="flex items-center gap-4">
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[0.75rem] font-mono  ${
              currentStep >= 1
                ? "bg-[#4F4FFF] text-white"
                : "bg-none border-1 border-[#7981B2] text-[#7981B2] opacity-75"
            }`}
          >
            1
          </div>
          <span
            className={`font-medium ${
              currentStep >= 1 ? "text-black" : "text-[#7981B2] opacity-75"
            }`}
          >
            Planes y coberturas
          </span>
        </div>

        <div>
          <img src="src/assets/line-progress.svg" alt="separator" />
        </div>

        <div className="flex items-center gap-4">
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[0.75rem] font-mono ${
              currentStep >= 2
                ? "bg-[#4F4FFF] text-white"
                : "bg-none border-1 border-[#7981B2] text-[#7981B2] opacity-75"
            }`}
          >
            2
          </div>
          <span
            className={`font-medium  ${
              currentStep >= 2 ? "text-black" : "text-[#7981B2] opacity-75"
            }`}
          >
            Resumen
          </span>
        </div>
      </div>

      <div className="md:hidden flex flex-row justify-around items-center gap-2 px-4 py-4 h-full">
        <ReturnButton handleBack={handleBack} Text="" />
        <div className="text-[0.63rem] font-bold text-black">
          PASO {currentStep} DE 2
        </div>
        <div className="w-4/5 h-1.5 bg-[#D7DBF5] rounded-full overflow-hidden">
          <div
            className={`h-full bg-[#4F4FFF] transition-all duration-500`}
            style={{ width: `${(currentStep / 2) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
