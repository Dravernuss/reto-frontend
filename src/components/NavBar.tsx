import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Modal from "./Modal";

export default function NavBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="top-0 w-full z-50 h-14 md:h-16">
        <div className="max-w-6xl h-14 md:h-16 mx-auto px-7 lg:px-4 flex justify-between items-center">
          <img src="src/assets/logo.svg" alt="Rimac logo" />
          <div className="flex items-center">
            <p
              onClick={() => setIsModalOpen(true)}
              className="hidden pr-5 text-sm text-black bg-none cursor-pointer hover:underline md:inline-block family-brsonoma"
            >
              ¡Compra por este medio!
            </p>
            <Link
              to="tel:0114116001"
              className="font-bold text-base flex items-center text-black hover:underline"
            >
              <FaPhoneAlt className="mr-2" />
              (01) 411 6001
            </Link>
          </div>
        </div>
      </header>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Compra por este medio"
        description="Esta opción te permite comprar de manera segura y conveniente en línea. Descubre las ventajas y comienza tu experiencia de compra en nuestra plataforma."
      />
    </>
  );
}
