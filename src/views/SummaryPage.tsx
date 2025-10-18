import { useLocation, useNavigate } from "react-router-dom";
import SummaryCard from "../components/SummaryCard";
import NavBar from "../components/NavBar";
import Steps from "../components/Steps";
import ReturnButton from "../components/ReturnButton";
import { useEffect, useState } from "react";

export default function SummaryPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { plan, user } = location.state || {};

  const [validData, setValidData] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (!userData) {
      navigate("/", { replace: true });
      return;
    }
    if (!plan || !user) {
      navigate("/plans", { replace: true });
      return;
    }
    setValidData(true);
  }, [navigate, plan, user]);

  if (!validData) return null;

  const fullName = `${user.name} ${user.lastName}`;

  return (
    <>
      <NavBar />
      <div className="sticky top-0 z-20 bg-white">
        <Steps currentStep={2} />
      </div>
      <section className="w-full overflow-hidden h-full md:p-0 p-6">
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-start md:pt-16 md:pb-28 md:px-32 w-full">
          <div className="hidden md:flex mb-4">
            <ReturnButton
              handleBack={() => navigate("/plans", { replace: true })}
              Text="Volver"
            />
          </div>

          <h2 className="mt-2 mb-12 text-[32px] md:text-[40px] text-center self-center md:self-auto leading-12 tracking-[-.6px] font-semibold text-black">
            Resumen del seguro
          </h2>
          <SummaryCard
            fullName={fullName}
            document={user.document}
            phone={user.phone}
            planName={plan.name}
            planPrice={plan.priceDiscounted || plan.price}
          />
        </div>
      </section>
    </>
  );
}
