import Image from "next/image";
import footerBgImage from "../../public/oracao.webp";
import Logo from "../../public/subImage.png";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: `url(${footerBgImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        bottom: 0,
        width: "100%",
      }}
      className="py-12"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:items-start">
        {/* Primeira coluna: Logo e mensagem */}
        <div className="w-full flex flex-col items-center justify-center">
          <Image
            src={Logo}
            alt="Logo"
            width={250}
            height={150}
            className="mb-1"
          />
          <p className="text-gray-300 mb-4">Faça parte da família</p>
        </div>
        {/* Segunda coluna: Contato */}
        <div className="w-full flex flex-col items-center mb-4">
          <h3 className="text-white font-semibold mb-4 text-3xl">Contato</h3>
          <div className="text-start">
            <p className="text-gray-300 mb-2">
              {" "}
              <span className="font-bold"> Endereço: </span> 1, The Old Maltings
            </p>
            <p className="text-gray-300 mb-2">
              {" "}
              <span className="font-bold"> Telefone: </span> 07456944667
            </p>
            <p className="text-gray-300">
              {" "}
              <span className="font-bold"> Email: </span> sdcderby@gmail.com
            </p>
          </div>
        </div>
        {/* Terceira coluna: Redes sociais */}
        <div className="w-full flex flex-col items-center">
          <h3 className="text-white font-semibold mb-4 text-3xl mt-4">
            Redes Sociais
          </h3>
          <ul className="flex space-x-4">
            <li>
              <Link
                href="https://www.facebook.com/sdcderbyshire"
                target="_blank"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaFacebook className="text-4xl" />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaYoutube className="text-4xl" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/sdc.church.derby"
                target="_blank"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaInstagram className="text-4xl" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
