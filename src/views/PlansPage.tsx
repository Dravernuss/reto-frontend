import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Steps from "../components/Steps";
import ReturnButton from "../components/ReturnButton";
import UserPlan from "../components/UserPlan";

export default function PlansPage() {
  const navigate = useNavigate();
  const storedUserData = localStorage.getItem("userData");
  const Username = storedUserData ? JSON.parse(storedUserData).name : "Usuario";
  const LastName = storedUserData ? JSON.parse(storedUserData).lastName : "";
  const Birthday = storedUserData ? JSON.parse(storedUserData).birthday : "";

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (!userData) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  return (
    <>
      <NavBar />
      <Steps currentStep={1} />
      <section className="w-full overflow-hidden h-full md:p-0 p-6">
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-start md:pt-10 md:pb-2 md:pl-32 md:pr-32 w-full">
          <div className="hidden md:flex mb-4">
            <ReturnButton
              handleBack={() => navigate("/", { replace: true })}
              Text="Volver"
            />
          </div>
          <h2 className="max-w-xl mx-0 md:mx-auto md:text-[2.5rem] font-semibold md:mt-11 text-[28px] leading-12 text-left md:text-center tracking-[-.6px] text-black">
            {Username} ¿Para quién deseas cotizar?
          </h2>
          <p className="max-w-xl mx-0 md:mx-auto text-black md:mt-2 mb-6">
            Selecciona la opción que se ajuste más a tus necesidades.
          </p>
        </div>
        <div className="relative z-10 max-w-xl mx-auto flex flex-col md:flex-row justify-around gap-6 md:gap-2 pb-10">
          <UserPlan
            name="Para mí"
            description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
            image="src/assets/plan-for-me.svg"
          />
          <UserPlan
            name="Para alguien más"
            description="Realiza una cotización para uno de tus familiares o cualquier persona."
            image="src/assets/plan-for-other.svg"
          />
        </div>
      </section>
    </>
  );
}
