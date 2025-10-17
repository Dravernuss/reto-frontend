import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PlansPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (!userData) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  return (
    <section className="w-full h-screen flex items-center justify-center">
      <h1 className="text-2xl font-bold">Planes disponibles</h1>
    </section>
  );
}
