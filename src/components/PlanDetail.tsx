interface PlanDetailProps {
  name: string;
  price: number;
  description: string[];
  image: string;
  isRecommended?: boolean;
  priceDiscounted?: number | null;
}

export default function PlanDetail({
  name,
  price,
  description,
  image,
  isRecommended,
  priceDiscounted,
}: PlanDetailProps) {
  return (
    <div
      className={`relative flex flex-col rounded-3xl shadow-[0_1px_12px_#aeacf359] pt-17 px-8 pb-12.75 w-72 bg-white transition-all duration-300 hover:scale-[1.02]`}
    >
      {isRecommended && (
        <div className="absolute top-9 left-8">
          <span className="bg-[#7DF0BA] text-black text-xs font-bold px-2 py-0.5 rounded-[6px]">
            Plan recomendado
          </span>
        </div>
      )}

      <div className="flex justify-between items-start mb-6 border-b-1 border-gray-300">
        <div>
          <h3 className="text-[24px] font-bold text-gray-900 leading-8">
            {name}
          </h3>
          <div className="text-[12px] leading-1 tracking-[-.6px] mt-6 text-[#7981B2] font-bold uppercase">
            Costo del plan
          </div>
          {priceDiscounted ? (
            <div className="text-2xl font-light mb-6 text-[#141938]">
              <span className="text-[14px] text-[#7981B2]  line-through">
                ${price} antes
              </span>
              <p className="text-xl leading-1 mt-2 font-bold text-black">
                ${priceDiscounted} al mes
              </p>
            </div>
          ) : (
            <div className="text-2xl font-bold text-[#141938] leading-1 mt-4 mb-6">
              ${price} <span className="text-base font-medium">al mes</span>
            </div>
          )}
        </div>
        <img src={image} alt={name} className="w-14 h-14" />
      </div>

      <ul className="mb-6 flex flex-col gap-6 text-[16px] text-gray-800">
        {description.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-black text-[16px] font-bold">•</span>
            {item}
          </li>
        ))}
      </ul>

      <button className="mt-auto bg-[#FF1C44] text-white font-semibold text-lg py-3.5 rounded-full hover:bg-white hover:text-red-600 hover:border-b-red-600 hover:border-1 transition-colors">
        Seleccionar Plan
      </button>
    </div>
  );
}
