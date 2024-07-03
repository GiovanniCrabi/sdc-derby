import { HeaderInstitucional } from "@/components/headerInstitucional";

import image from "../../../public/doacao.png";

import qr from '../../../public/qr.png'
import Image from "next/image";
import { donation } from "@/contents/contents";
import Link from "next/link";

export const metadata = {
  title: "Generosidade - SDC",
};

export default function Cultura() {
  return (
    <div className="">
      <div className="relative h-[40rem] z-20">
        <Image
          data-aos="zoom-in"
          alt="image"
          src={image}
          fill
          className="object-cover bg-cover"
          style={{ opacity: 0.2, background: "none" }}
        />
        <div className="absolute inset-0 flex flex-col px-8 md:px-40 py-24">
          <h1
            data-aos="zoom-out"
            className="uppercase text-5xl md:text-6xl font-black text-white/50 mb-12"
          >
            generosidade
          </h1>
          <div
            data-aos="zoom-in"
            className="flex flex-col md:flex-row justify-between"
          >
            <div className="space-y-1">
              <h1
                data-aos="zoom-in-right"
                className="text-2xl md:text-3xl font-bold text-white mb-6"
              >
                Doação Bancária
              </h1>

              <p className="text-xl">
                {" "}
                <span className="font-bold"> Payee Name: </span> Comunidade
                Santuário De Cristo{" "}
              </p>
              <p className="text-xl"> Derbyshire</p>
              <p className="text-xl">
                {" "}
                <span className="font-bold"> Sort Code: </span> 309950{" "}
              </p>
              <p className="text-xl">
                <span className="font-bold">Account Number:</span> 82424760{" "}
              </p>
              <p className="text-xl">
                <span className="font-bold">Account Type:</span> Business
              </p>
            </div>

            <div className="flex flex-col items-center mt-12 md:mt-0">
              <h1
                data-aos="zoom-in-right"
                className="text-2xl md:text-3xl font-bold text-white mb-6"
              >
                Doação OnLine
              </h1>

              <Image src={qr} alt="qr-image" className="bg-white border-2 rounded-md w-40 h-40"/>

              <Link href="https://pay.sumup.com/b2c/QV7CKC0B" target="_blank">
                <button
                  className={`mt-6 border-2 border-yellow-400 text-white font-bold py-2 px-4 hover:py-3 hover:px-5 rounded ease-in duration-300`}
                >
                  Click Aqui
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white text-gray-500 flex flex-col justify-center items-center px-8 md:px-40 py-16 space-y-4">
        <h1
          data-aos="fade-right"
          className="text-gray-500 font-bold text-2xl mb-4"
        >
          Somos uma Igreja Generosa
        </h1>
        {donation.map((text) => (
          <p key={text.id} data-aos="zoom-out">
            {text.text}
          </p>
        ))}
      </div>
    </div>
  );
}
