// App.tsx
import { useState, useEffect } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "cv_SamuelLoaiza.pdf";
    link.download = "CV_Samuel_Loaiza.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-[#fffadc] text-gray-800"
      } font-['Poppins']`}
    >
      {/* Botón modo oscuro/claro */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-full ${
            darkMode
              ? "bg-yellow-400 text-gray-900"
              : "bg-gray-800 text-yellow-400"
          } transition-all duration-300 hover:scale-110`}
          aria-label="Toggle dark mode"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>

      {/* Encabezado con animación */}
      <div
        className={`bg-[#b6f500] text-center py-3 transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
        }`}
      >
        <h1
          className={`text-3xl font-bold transition-colors duration-1000 ${
            darkMode
              ? "text-gray-900 hover:text-[#7daa03]"
              : "text-[#b6f500] hover:text-[#7daa03]"
          }`}
        >
          zoyeras
        </h1>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Imagen de perfil con efecto */}
          <div
            className={`flex justify-center transition-all duration-700 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <div
              className={`relative rounded-full p-1 ${
                darkMode
                  ? "bg-gradient-to-r from-[#b6f500] to-[#7daa03]"
                  : "bg-gradient-to-r from-[#b6f500] to-[#7daa03]"
              } transition-all duration-500 hover:rotate-3`}
            >
              <img
                src="imagenes/ImagenMia2.0.png"
                alt="miCara"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white cursor-pointer transition-all duration-500 hover:scale-105"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-[#b6f500] to-[#7daa03] rounded-full blur-md opacity-50 -z-10 transition-all duration-500 hover:opacity-70"></div>
            </div>
          </div>

          {/* Información personal */}
          <div
            className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl max-w-md transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            } ${
              darkMode
                ? "bg-gray-800/80 text-white"
                : "bg-white/80 text-gray-800"
            }`}
          >
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-[#7daa03]">
                Samuel David Loaiza Ocampo
              </h1>
              <h2 className="text-xl text-[#7daa03] mt-2">
                Desarrollador Web Junior
              </h2>
              <div className="w-16 h-1 bg-[#b6f500] mx-auto my-3"></div>
              <h3 className="text-lg">19 años</h3>
            </div>

            <div className="space-y-3">
              <p className="flex items-center">
                <span className="mr-2">📍</span> Bosa, El Recreo Bogotá
              </p>
              <p className="flex items-center">
                <span className="mr-2">📧</span> loaizaocampos@gmail.com
              </p>
              <p className="mt-4 text-center italic">
                "Joven apasionado por la tecnología en búsqueda de trabajo para
                continuar aprendiendo"
              </p>
            </div>

            {/* Botón de descarga de CV */}
            <div className="mt-6 flex justify-center">
              <button
                onClick={downloadCV}
                className="px-6 py-2 bg-[#b6f500] text-gray-900 rounded-full font-medium transition-all duration-300 hover:bg-[#7daa03] hover:text-white hover:shadow-lg flex items-center"
              >
                <span className="mr-2">📄</span> Descargar CV
              </button>
            </div>
          </div>
        </div>

        {/* Enlaces sociales mejorados */}
        <div
          className={`mt-12 transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h3 className="text-center text-xl font-semibold mb-6 text-[#7daa03]">
            Conectemos
          </h3>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <a
                target="_blank"
                href="https://portafolio-xi-three-59.vercel.app/"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-4 rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-lg bg-white/80 backdrop-blur-sm"
              >
                <img
                  src="https://tinyurl.com/27gueta5"
                  alt="Icon portfolio"
                  className="w-14 h-14 mb-2"
                />
                <span className="text-sm font-medium">Portfolio</span>
              </a>

              <a
                target="_blank"
                href="https://tinyurl.com/24r9e5aa"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-4 rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-lg bg-white/80 backdrop-blur-sm"
              >
                <img
                  src="https://tinyurl.com/22scjmj9"
                  alt="linkedin"
                  className="w-14 h-14 mb-2"
                />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>

              <a
                target="_blank"
                href="cv_SamuelLoaiza.pdf"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-4 rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-lg bg-white/80 backdrop-blur-sm"
              >
                <img
                  src="https://cv-kappa-rust.vercel.app/"
                  alt="HV"
                  className="w-14 h-14 mb-2"
                />
                <span className="text-sm font-medium">Hoja de Vida</span>
              </a>

              <a
                target="_blank"
                href="https://github.com/Zoyeras"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-4 rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-lg bg-white/80 backdrop-blur-sm"
              >
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Fgithub%2Fgithub_PNG80.png&f=1&nofb=1&ipt=b97e8485855e54671bbf44a3b4d485be045d19cd1decdf481285a576dc037c53"
                  alt="github"
                  className="w-14 h-14 mb-2"
                />
                <span className="text-sm font-medium">GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Habilidades */}
        <div
          className={`mt-12 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h3 className="text-center text-xl font-semibold mb-6 text-[#7daa03]">
            Habilidades
          </h3>
          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center gap-3 max-w-2xl">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Tailwind",
                "Node.js",
                "Git",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-[#b6f500] text-gray-900 rounded-full text-sm font-medium transition-all duration-300 hover:bg-[#7daa03] hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Frase con animación */}
      <div
        className={`text-center mt-16 mb-8 px-4 transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-[#7daa03] text-lg italic inline-block px-6 py-3 rounded-xl bg-white/80 backdrop-blur-sm">
          "Que el mundo entero dude pero nunca yo" - Alhan
        </p>
      </div>
    </div>
  );
}
