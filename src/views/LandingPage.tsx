import { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Modal from "../components/Modal";

export default function LandingPage() {
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
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
    let newValue = value;

    if (name === "documento") {
      newValue = value.replace(/\D/g, "").slice(0, 8);
    }
    if (name === "celular") {
      newValue = value.replace(/\D/g, "").slice(0, 9);
    }

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : newValue,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    const newErrors: any = {};

    if (!/^\d{8}$/.test(formData.documento)) {
      newErrors.documento = "El documento ingresado no es válido";
    }

    if (!/^\d{9}$/.test(formData.celular)) {
      newErrors.celular = "El celular ingresado no es válido";
    }

    if (!formData.privacidad) {
      newErrors.privacidad = "Debes aceptar la Política de Privacidad";
    }
    if (!formData.comunicaciones) {
      newErrors.comunicaciones = "Debes aceptar la Política de Comunicaciones";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Formulario válido ✅");
    }
  };

  return (
    <>
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
          className="absolute left-0 bottom-0 md:w-[40%] lg:w-[27%] select-none pointer-events-none hidden md:block"
        />
        <img
          src="src/assets/blur-asset.png"
          alt=""
          className="absolute right-0 top-0 md:w-[40%] lg:w-[27%] select-none pointer-events-none hidden md:block"
        />

        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-start px-6 md:px-4 w-full">
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
                  <span className="inline-block bg-gradient-to-r from-[#00f4e2] to-[#00ff7f] text-black text-xs font-bold px-2 py-1 rounded w-fit">
                    Seguro Salud Flexible
                  </span>
                  <h1 className="text-[28px] font-bold text-gray-900 leading-tight mt-1 text-left">
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
              <span className="inline-block bg-gradient-to-r from-[#00f4e2] to-[#00ff7f] text-black text-sm font-bold px-2 py-1 rounded mb-4">
                Seguro Salud Flexible
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Creado para ti y tu familia
              </h1>
            </div>

            <p className="text-black text-sm md:text-base text-left">
              Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
              asesoría 100% online.
            </p>

            <form className="flex flex-col gap-3 mt-6" onSubmit={handleSubmit}>
              <div>
                <div className="flex">
                  <select
                    name="tipoDocumento"
                    className="border border-gray-300 border-r-0 rounded-l-lg pl-2 text-lm flex-1"
                    defaultValue="DNI"
                  >
                    <option>DNI</option>
                    <option>RUC</option>
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
                      className={`border rounded-r-lg px-3 py-4 text-sm w-full focus:outline-none peer ${
                        errors.documento
                          ? "border-red-500"
                          : "border-gray-300 focus:border-black"
                      }`}
                    />
                    <label
                      htmlFor="documento"
                      className={`absolute left-3 text-gray-500 text-sm transition-all bg-white px-1 pointer-events-none
                        ${
                          formData.documento
                            ? "top-1 text-xs text-black"
                            : "top-1/2 -translate-y-1/2 text-gray-400"
                        } peer-focus:top-1 peer-focus:text-xs peer-focus:text-black`}
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
                    className={`border rounded-lg px-3 py-4 text-sm w-full focus:outline-none peer ${
                      errors.celular
                        ? "border-red-500"
                        : "border-gray-300 focus:border-black"
                    }`}
                  />
                  <label
                    htmlFor="celular"
                    className={`absolute left-3 text-gray-500 text-sm transition-all bg-white px-1 pointer-events-none
                      ${
                        formData.celular
                          ? "top-1 text-xs text-black"
                          : "top-1/2 -translate-y-1/2 text-gray-400"
                      } peer-focus:top-1 peer-focus:text-xs peer-focus:text-black`}
                  >
                    Celular
                  </label>
                </div>
                {errors.celular && (
                  <p className="text-red-500 text-xs mt-1 text-left">
                    {errors.celular}
                  </p>
                )}
              </div>

              <div className="flex flex-col items-start gap-2 text-xs">
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
                      errors.comunicaciones ? "border-red-500" : "border-black"
                    }`}
                  />
                  Acepto la Política de Comunicaciones Comerciales
                </label>
              </div>

              <p
                className="text-xs text-black cursor-pointer underline font-bold text-left"
                onClick={() => setShowModal(true)}
              >
                Aplican Términos y Condiciones.
              </p>

              <button
                type="submit"
                className="bg-black font-bold text-lg text-white py-3 cursor-pointer rounded-full mt-6 hover:bg-white hover:text-black hover:border transition w-full md:w-1/2 self-center md:self-start"
              >
                Cotiza aquí
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />

      {showModal && (
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          title="Aplican Términos y Condiciones"
          description="Encontrarás información importante sobre tus derechos y obligaciones al utilizar nuestros servicios."
        />
      )}
    </>
  );
}
