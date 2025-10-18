import { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [generalError, setGeneralError] = useState("");

  const [formData, setFormData] = useState({
    tipoDocumento: "DNI",
    documento: "",
    celular: "",
    privacidad: false,
    comunicaciones: false,
  });

  const [errors, setErrors] = useState({
    documento: "",
    celular: "",
    privacidad: "",
    comunicaciones: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    let newValue: string | boolean = value;

    if (name === "tipoDocumento") {
      newValue = value;
      setFormData((prev) => ({
        ...prev,
        tipoDocumento: String(newValue),
        documento: "",
      }));
      setErrors((prev) => ({ ...prev, documento: "" }));
      return;
    }

    if (name === "documento") {
      const maxLength = formData.tipoDocumento === "DNI" ? 8 : 10;
      newValue = value.replace(/\D/g, "").slice(0, maxLength);
    }

    if (name === "celular") {
      newValue = value.replace(/\D/g, "").slice(0, 20);
    }

    setErrors((prev) => ({ ...prev, [name]: "" }));
    if (name === "documento" || name === "celular") {
      setGeneralError("");
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : newValue,
    }));
  };

  const validateForm = () => {
    const newErrors: any = {};
    const { tipoDocumento, documento, celular, privacidad, comunicaciones } =
      formData;

    if (tipoDocumento === "DNI" && !/^\d{8}$/.test(documento)) {
      newErrors.documento = "*El documento ingresado no es válido";
    }
    if (tipoDocumento === "RUC" && !/^\d{10}$/.test(documento)) {
      newErrors.documento = "*El documento ingresado no es válido";
    }

    if (!/^\d{9,10}$/.test(celular)) {
      newErrors.celular = "*El celular ingresado no es válido";
    }

    if (!privacidad) {
      newErrors.privacidad = "Debes aceptar la Política de Privacidad";
    }
    if (!comunicaciones) {
      newErrors.comunicaciones = "Debes aceptar la Política de Comunicaciones";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    const { tipoDocumento, documento, celular } = formData;

    if (
      !(
        tipoDocumento === "DNI" &&
        documento === "30216147" &&
        celular === "5130216147"
      )
    ) {
      setGeneralError("El usuario ingresado no existe");
      return;
    } else {
      setGeneralError("");
    }

    try {
      setLoading(true);
      const response = await fetch(
        "https://rimac-front-end-challenge.netlify.app/api/user.json"
      );
      if (!response.ok)
        throw new Error("Error al obtener los datos del usuario");
      const userData = await response.json();
      const updatedUserData = {
        ...userData,
        document: "30216147",
        phone: "5130216147",
      };
      localStorage.setItem("userData", JSON.stringify(updatedUserData));

      navigate("/plans", { replace: true });
    } catch (err) {
      console.error(err);
      alert("Ocurrió un error al obtener los datos del usuario.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-[#F8F9FF] min-h-screen flex flex-col">
        <NavBar />
        <section className="w-full overflow-hidden md:pt-18 pt-0 flex items-center">
          <img
            src="src/assets/blur-asset-left2.png"
            alt=""
            className="absolute left-0 bottom-0 w-[100%] select-none pointer-events-none md:hidden"
          />
          <img
            src="src/assets/blur-asset1.png"
            alt=""
            className="absolute right-0 top-0 w-[70%] select-none pointer-events-none md:hidden"
          />
          <img
            src="src/assets/blur-asset-left.png"
            alt=""
            className="absolute left-0 bottom-0 md:w-[40%] lg:w-[30%] select-none pointer-events-none hidden md:block"
          />
          <img
            src="src/assets/blur-asset.png"
            alt=""
            className="absolute right-0 top-0 md:w-[40%] lg:w-[20%] select-none pointer-events-none hidden md:block"
          />

          <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-start px-6 md:px-4 w-full pb-24">
            <div className="hidden md:block max-w-34 md:max-w-120 w-fit h-auto justify-center md:justify-start">
              <img
                src="src/assets/familia.webp"
                alt="Familia feliz"
                className="rounded-3xl shadow-lg w-3/4 md:w-[460px]"
              />
            </div>

            <div className="w-full md:max-w-88 text-center md:text-left flex flex-col justify-start lg:ml-32 md:ml-17.5">
              <div className="block md:hidden w-full">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex flex-col">
                    <span className="inline-block bg-gradient-to-r from-[#00f4e2] to-[#00ff7f] text-xs font-semibold px-2 py-0.5 tracking-[.4px] rounded w-fit">
                      Seguro Salud Flexible
                    </span>
                    <h1 className="text-[28px] md:text-[32px] font-bold text-gray-900 leading-tight mt-1 text-left">
                      Creado para ti y tu familia
                    </h1>
                  </div>
                  <img
                    src="src/assets/familia.webp"
                    alt="Familia"
                    className="w-34 h-40 object-cover rounded-lg shadow-md ml-4"
                  />
                </div>
                <hr className="border-gray-300 mb-4" />
              </div>

              <div className="hidden md:block mb-4">
                <span className="inline-block bg-gradient-to-r from-[#00f4e2] to-[#00ff7f] text-black text-[12px] font-semibold tracking-[.4px] px-2 py-1 rounded mb-4">
                  Seguro Salud Flexible
                </span>
                <h1 className="font-brsonoma font-bold text-[28px] md:text-[32px] text-gray-900 leading-tight">
                  Creado para ti y tu familia
                </h1>
              </div>

              <h1 className=" text-black text-sm text-left">
                Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe
                nuestra asesoría 100% online.
              </h1>

              <form
                className="flex flex-col gap-3 mt-6"
                onSubmit={handleSubmit}
              >
                <div>
                  <div className="flex">
                    <select
                      name="tipoDocumento"
                      onChange={handleChange}
                      value={formData.tipoDocumento}
                      className="border border-gray-500 border-r-0 rounded-l-lg pl-2 text-lm flex-1 focus:outline-none"
                    >
                      <option value="DNI">DNI</option>
                      <option value="RUC">RUC</option>
                    </select>

                    <div className="relative flex-[2]">
                      <input
                        type="text"
                        inputMode="numeric"
                        name="documento"
                        id="documento"
                        value={formData.documento}
                        onChange={handleChange}
                        placeholder=" "
                        className={`border rounded-r-lg px-4 py-4 text-[16px] w-full focus:outline-none peer ${
                          errors.documento
                            ? "border-red-500"
                            : "border-gray-500 focus:border-black"
                        }`}
                      />
                      <label
                        htmlFor="documento"
                        className="absolute text-sm pl-2 text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                      >
                        Nro. de documento
                      </label>
                    </div>
                  </div>
                  {errors.documento && (
                    <p className="text-red-500 text-xs mt-1 text-left">
                      {errors.documento}
                    </p>
                  )}
                </div>

                <div>
                  <div className="relative">
                    <input
                      type="text"
                      inputMode="numeric"
                      name="celular"
                      id="celular"
                      value={formData.celular}
                      onChange={handleChange}
                      placeholder=" "
                      className={`border rounded-lg px-4 py-4 text-[16px] w-full focus:outline-none peer ${
                        errors.celular
                          ? "border-red-500"
                          : "border-gray-500 focus:border-black"
                      }`}
                    />
                    <label
                      htmlFor="celular"
                      className="absolute text-sm pl-2 text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                    >
                      Celular
                    </label>
                  </div>
                  {errors.celular && (
                    <p className="text-red-500 text-xs mt-1 text-left">
                      {errors.celular}
                    </p>
                  )}
                  {generalError && (
                    <p className="text-red-500 text-xs mt-1 text-left">
                      {generalError}
                    </p>
                  )}
                </div>

                <div className="flex flex-col items-start gap-4 mt-2 text-[11px]">
                  <label
                    className={`flex items-center gap-2 ${
                      errors.privacidad ? "text-red-500" : "text-black"
                    }`}
                  >
                    <input
                      type="checkbox"
                      name="privacidad"
                      checked={formData.privacidad}
                      onChange={handleChange}
                      className={`appearance-none w-5 h-5 border rounded-sm bg-white checked:bg-black checked:after:content-['✓'] checked:after:text-white checked:after:flex checked:after:items-center checked:after:justify-center ${
                        errors.privacidad ? "border-red-500" : "border-black"
                      }`}
                    />
                    Acepto la Política de Privacidad
                  </label>

                  <label
                    className={`flex items-center gap-2 ${
                      errors.comunicaciones ? "text-red-500" : "text-black"
                    }`}
                  >
                    <input
                      type="checkbox"
                      name="comunicaciones"
                      checked={formData.comunicaciones}
                      onChange={handleChange}
                      className={`appearance-none w-5 h-5 border rounded-sm bg-white checked:bg-black checked:after:content-['✓'] checked:after:text-white checked:after:flex checked:after:items-center checked:after:justify-center ${
                        errors.comunicaciones
                          ? "border-red-500"
                          : "border-black"
                      }`}
                    />
                    Acepto la Política de Comunicaciones Comerciales
                  </label>
                </div>

                <span
                  className="text-[11px] mt-1 text-black cursor-pointer underline font-semibold text-left"
                  onClick={() => setShowModal(true)}
                >
                  Aplican Términos y Condiciones.
                </span>

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-black font-bold text-[20px] text-white pl-10 pr-10 pt-5 pb-5 cursor-pointer rounded-full mt-3 hover:bg-white hover:text-black hover:border transition w-full md:w-[200px] self-center md:self-start"
                >
                  {loading ? "Verificando..." : "Cotiza aquí"}
                </button>
              </form>
            </div>
          </div>
        </section>

        <Footer />
      </div>
      {showModal && (
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          title="Aplican Términos y Condiciones"
          description="Encontrarás información importante sobre tus derechos y obligaciones al utilizar nuestros servicios..."
        />
      )}
    </>
  );
}
