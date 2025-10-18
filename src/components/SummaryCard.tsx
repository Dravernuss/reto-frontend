interface SummaryCardProps {
  fullName: string;
  document: string;
  phone: string;
  planName: string;
  planPrice: number;
}

export default function SummaryCard({
  fullName,
  document,
  phone,
  planName,
  planPrice,
}: SummaryCardProps) {
  return (
    <div className="bg-white shadow-[0_1px_24px_0_rgba(174,172,243,.251)] rounded-3xl pt-6 pb-6 pl-8 pr-8 w-full mx-auto">
      {/* Título */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[10px] font-bold leading-4 -tracking-normal uppercase text-[#141938]">
          Precios calculados para:
        </span>
      </div>

      {/* Nombre del usuario */}
      <div className="flex items-center gap-2 mb-4">
        <img src="/images/user-icon.svg" alt="user" className="w-5 h-5" />
        <h2 className="text-lg md:text-xl font-[900] text-[#141938]">
          {fullName}
        </h2>
      </div>

      <hr className="border-gray-200 mb-4" />

      {/* Datos de pago */}
      <div className="mb-4">
        <h3 className="font-[800] text-[#141938] mb-1">Responsable de pago</h3>
        <p className="text-sm text-gray-700">DNI: {document}</p>
        <p className="text-sm text-gray-700 mt-1">Celular: {phone}</p>
      </div>

      {/* Plan elegido */}
      <div>
        <h3 className="font-[800] text-[#141938] mb-1">Plan elegido</h3>
        <p className="text-sm text-gray-700">{planName}</p>
        <p className="text-sm text-gray-700 mt-1">
          Costo del Plan: ${planPrice} al mes
        </p>
      </div>
    </div>
  );
}
