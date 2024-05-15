import Image from "next/image";
import footerBgImage from "../../public/oracao.webp";
import Logo from "../../public/subImage.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
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
      className="py-6 md:py-16"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:items-start">
        {/* Primeira coluna: Logo e mensagem */}
        <div className="w-full flex flex-col items-center justify-center">
          <Image src={Logo} alt="Logo" width={250} height={150} />
          <p className="text-gray-300 mb-1">Faça parte da família</p>
        </div>
        {/* Segunda coluna: Contato */}
        <div className="w-full flex flex-col items-center mb-1">
          <h3 className="text-white font-semibold mb-1 text-3xl">Contato</h3>
          <div className="flex flex-col justify-center items-center">
            <Link
              href="https://maps.app.goo.gl/ujwaZrBTcCxcAWWo7"
              className=" hover:underline hover:underline-offset-2 text-gray-300 mb-1"
            >
              {" "}
              1, The Old Maltings
            </Link>
            <Link
              href={`tel:07456944667`}
              className=" hover:underline hover:underline-offset-2 text-gray-300 mb-1"
            >
              {" "}
              07456944667
            </Link>
            <Link
              href={`mailto:sdcderby@gmail.com`}
              className=" hover:underline hover:underline-offset-2 text-gray-300"
            >
              {" "}
              sdcderby@gmail.com
            </Link>
          </div>
        </div>
        {/* Terceira coluna: Redes sociais */}
        <div className="w-full flex flex-col items-center">
          <h3 className="text-white font-semibold mb-1 text-3xl mt-4">
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
