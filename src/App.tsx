// App.tsx
export default function App() {
  return (
    <div className="min-h-screen bg-[#fffadc] font-['Poppins']">
      {/* Encabezado */}
      <div className="bg-[#b6f500] text-center py-2 transition-all duration-1000 hover:text-[#7daa03] hover:scale-110">
        <h1 className="text-[#b6f500] hover:text-[#7daa03] transition-colors duration-1000">
          zoyeras
        </h1>
      </div>

      {/* Enlaces sociales */}
      <div className="flex justify-center py-4">
        <ul className="flex space-x-4">
          <li>
            <a
              target="_blank"
              href="https://portafolio-xi-three-59.vercel.app/"
              rel="noopener noreferrer"
            >
              <img
                src="https://tinyurl.com/27gueta5"
                alt="Icon portfolio"
                className="w-12 h-12"
              />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://tinyurl.com/24r9e5aa"
              rel="noopener noreferrer"
            >
              <img
                src="https://tinyurl.com/22scjmj9"
                alt="linkedin"
                className="w-12 h-12"
              />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="cv_SamuelLoaiza.pdf"
              rel="noopener noreferrer"
            >
              <img
                src="https://tinyurl.com/2av5qnoo"
                alt="HV"
                className="w-12 h-12"
              />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/Zoyeras"
              rel="noopener noreferrer"
            >
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Fgithub%2Fgithub_PNG80.png&f=1&nofb=1&ipt=b97e8485855e54671bbf44a3b4d485be045d19cd1decdf481285a576dc037c53"
                alt="github"
                className="w-12 h-12"
              />
            </a>
          </li>
        </ul>
      </div>

      {/* Imagen de perfil */}
      <div className="flex justify-center my-4">
        <img
          src="imagenes/ImagenMia2.0.png"
          alt="miCara"
          className="w-80 h-80 md:w-96 md:h-96 rounded-full border-4 border-[#b6f500] cursor-pointer"
        />
      </div>

      {/* Información personal */}
      <div className="text-center text-[#7daa03] my-4">
        <h1 className="text-2xl font-bold">Samuel David Loaiza Ocampo</h1>
        <h2 className="text-xl">Desarrollador Web Junior</h2>
        <h3 className="text-lg">19 años</h3>
      </div>

      {/* Información adicional */}
      <div className="text-center text-[#7daa03] my-4">
        <p>Bosa, El Recreo Bogotá</p>
        <p>loaizaocampos@gmail.com</p>
        <p className="max-w-md mx-auto">
          Joven apasionado por la tecnologia en busqueda de trabajo para
          continuar aprendiendo
        </p>
      </div>

      {/* Frase */}
      <p className="text-right text-[#7daa03] mt-8 mr-4 italic">
        "Que el mundo entero dude pero nunca yo"-Alhan
      </p>
    </div>
  );
}
