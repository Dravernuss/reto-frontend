import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Steps from "../components/Steps";
import ReturnButton from "../components/ReturnButton";
import UserPlan from "../components/UserPlan";
import PlanDetail from "../components/PlanDetail";
import calculateAge from "../utils/dateUtils";

export default function PlansPage() {
  const navigate = useNavigate();
  const storedUserData = localStorage.getItem("userData");
  const Username = storedUserData ? JSON.parse(storedUserData).name : "Usuario";
  const LastName = storedUserData ? JSON.parse(storedUserData).lastName : "";
  const Birthday = storedUserData ? JSON.parse(storedUserData).birthday : "";
  const userAge = Birthday ? calculateAge(Birthday) : null;

  const [plansData, setPlansData] = useState<any[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (!userData) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  const handleSelectPlan = async (planType: string) => {
    setSelectedPlan(planType);

    try {
      const res = await fetch(
        "https://rimac-front-end-challenge.netlify.app/api/plans.json"
      );
      const data = await res.json();

      let enhancedPlans = data.list.map((plan: any) => {
        const isRecommended = plan.name === "Plan en Casa y Clínica";
        const image =
          plan.name.toLowerCase().includes("clínica") ||
          plan.name.toLowerCase().includes("clinica")
            ? "src/assets/plan-clinic.svg"
            : "src/assets/plan-home.svg";

        return {
          ...plan,
          isRecommended: isRecommended,
          image,
        };
      });

      // 🔹 Aplicar lógica según selección
      if (planType === "me" && userAge !== null) {
        // Solo planes válidos según edad
        enhancedPlans = enhancedPlans.filter(
          (plan: any) => userAge >= plan.age
        );
      } else if (planType === "other") {
        // Agregar 5% de descuento
        enhancedPlans = enhancedPlans.map((plan: any) => ({
          ...plan,
          priceDiscounted: Number((plan.price * 0.95).toFixed(2)),
        }));
      }

      setPlansData(enhancedPlans);
      console.log("📦 Planos listos:", enhancedPlans);
    } catch (error) {
      console.error("❌ Error al obtener los planes:", error);
    }
  };

  return (
    <>
      <NavBar />

      {/* Sticky Steps */}
      <div className="sticky top-0 z-20 bg-white shadow-sm">
        <Steps currentStep={1} />
      </div>

      <section className="w-full overflow-hidden h-full md:p-0 p-6">
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-start md:pt-10 md:pb-2 md:px-32 w-full">
          {/* Botón volver */}
          <div className="hidden md:flex mb-4">
            <ReturnButton
              handleBack={() => navigate("/", { replace: true })}
              Text="Volver"
            />
          </div>

          {/* Título principal */}
          <h2 className="max-w-xl mx-0 md:mx-auto md:text-[2.5rem] font-semibold md:mt-11 text-[28px] leading-12 text-left md:text-center tracking-[-.6px] text-black">
            {Username} ¿Para quién deseas cotizar?
          </h2>
          <p className="max-w-xl mx-0 md:mx-auto text-black md:mt-2 mb-6">
            Selecciona la opción que se ajuste más a tus necesidades.
          </p>
        </div>

        {/* Opciones de tipo de cotización */}
        <div className="relative z-10 max-w-xl mx-auto flex flex-col md:flex-row justify-around gap-6 md:gap-2">
          <UserPlan
            name="Para mí"
            description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
            image="src/assets/plan-for-me.svg"
            selected={selectedPlan === "me"}
            onSelect={() => handleSelectPlan("me")}
          />
          <UserPlan
            name="Para alguien más"
            description="Realiza una cotización para uno de tus familiares o cualquier persona."
            image="src/assets/plan-for-other.svg"
            selected={selectedPlan === "other"}
            onSelect={() => handleSelectPlan("other")}
          />
        </div>

        {/* 🩺 Mostrar planes disponibles (debajo de las opciones) */}
        {plansData.length > 0 && (
          <div className="md:max-w-6xl mx-auto md:p-5 md:w-fit w-full overflow-x-hidden">
            {/* Versión escritorio (3 por fila) */}
            <div className="hidden md:grid grid-cols-3 gap-6">
              {plansData.map((plan) => (
                <PlanDetail
                  key={plan.name}
                  name={plan.name}
                  price={plan.price}
                  priceDiscounted={plan.priceDiscounted}
                  description={plan.description}
                  image={plan.image}
                  isRecommended={plan.isRecommended}
                />
              ))}
            </div>
            {/* Versión móvil (slider horizontal) */}
            <div className="md:hidden flex flex-nowrap gap-4 overflow-x-auto px-4 pr-12 py-6 snap-x snap-mandatory scrollbar-hide">
              {plansData.map((plan) => (
                <div key={plan.name} className="snap-center flex-shrink-0 w-72">
                  <PlanDetail
                    name={plan.name}
                    price={plan.price}
                    priceDiscounted={plan.priceDiscounted}
                    description={plan.description}
                    image={plan.image}
                    isRecommended={plan.isRecommended}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
