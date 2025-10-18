export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="md:fixed relative bottom-0 w-full bg-black text-white p-6 md:p-0">
      <div className="max-w-6xl h-26.5 mx-auto px-7 lg:px-4">
        <div className="h-full grid grid-cols-1 md:grid-cols-2 items-center text-center md:text-left gap-2">
          {/* Logo responsive */}
          <div className="pb-5 md:pb-0 md:border-none border-b-2 border-gray-800">
            <picture className="flex justify-center md:justify-start">
              <source
                srcSet="src/assets/logo-white-res.svg"
                media="(max-width: 768px)"
              />
              <img
                src="src/assets/logo-white.svg"
                alt="Logo"
                className="md:h-10.5 h-5"
              />
            </picture>
          </div>

          <div className="flex justify-center md:justify-end items-center">
            <h1 className="text-sm text-white">
              © {year} RIMAC Seguros y Reaseguros.
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
}
