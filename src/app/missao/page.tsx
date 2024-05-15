import { IoHeart } from "react-icons/io5";
import image from "../../../public/estudobiblico.webp";

import { HeaderInstitucional } from "@/components/headerInstitucional";
import { BiDonateHeart } from "react-icons/bi";
import { FaHandHoldingHeart, FaPeopleArrows } from "react-icons/fa";

export const metadata = {
  title: "Missão - SDC",
};

export default function SobreNos() {
  return (
    <div className="">
      <HeaderInstitucional
        image={image}
        title="Nossa Missão"
        subTitle="AMAR – SERVIR – INFLUENCIAR"
      />

      <div className="w-full py-10 md:py-20 px-8 md:px-36 bg-white">
        <h1 className="text-gray-500">
          {" "}
          Nossa Missão é viver o supremo mandamento: AMAR a Deus acima de tudo,
          AMAR as pessoas como Cristo nos AMOU e nos ensinou a Amar, SERVIR
          todas as pessoas com amor, excelência e coração, independentemente de
          sua raça, sexo, cor ou nacionalidade, e INFLUENCIAR o mundo através da
          mensagem poderosa de Cristo. Em resumo, nossa Missão se Resume em 3
          palavras:{" "}
        </h1>

        <div className="pl-6 md:px-8">
          <p className="text-gray-500 mt-8">
            <span className="font-extrabold"> Amor: </span> Buscamos amar a Deus
            de todo o nosso coração, alma e mente, reconhecendo Sua soberania e
            bondade em nossas vidas. Desejamos compartilhar esse amor
            incondicional com todos ao nosso redor, seguindo o exemplo de Jesus
            Cristo, que deu sua vida por nós.
          </p>

          <p className="text-gray-500 mt-8">
            <span className="font-extrabold"> Servir: </span> Comprometemo-nos a
            servir a humanidade com humildade e compaixão, seguindo os passos do
            nosso Salvador, que veio não para ser servido, mas para servir.
            Buscamos oportunidades para estender nossas mãos em ajuda e
            encorajamento, mostrando o amor prático de Deus em ação.
          </p>

          <p className="text-gray-500 mt-8">
            <span className="font-extrabold"> Influência: </span> Reconhecemos o
            chamado para ser luz do mundo e sal da terra, levando a esperança
            transformadora do Evangelho a todos os lugares onde somos enviados.
            Comprometemo-nos a viver vidas que glorifiquem a Deus e a proclamar
            Sua verdade em palavras e ações, impactando positivamente nossa
            sociedade e cultura.
          </p>
        </div>

        <h1 className="text-gray-500 mt-8">
          Assim, nossa Missão transcende fronteiras e limitações, impulsionada
          pela fé, esperança e amor que encontramos em Cristo Jesus. Que cada
          ação, cada palavra e cada pensamento reflita a beleza e o poder dessa
          Missão, revelando o amor redentor de Deus a um mundo faminto por Sua
          graça e misericórdia.
        </h1>

        <div className="mt-8 space-y-12 md:space-y-0 md:mt-32 flex flex-col md:flex-row items-center justify-center md:gap-16">
          <div className="flex flex-col items-center justify-center">
            <IoHeart className="text-yellow-500 text-5xl" />

            <h1 className="text-yellow-500 text-5xl">Amor</h1>
          </div>

          <div className="flex flex-col items-center justify-center">
            <FaHandHoldingHeart className="text-yellow-500 text-5xl" />

            <h1 className="text-yellow-500 text-5xl">Servir</h1>
          </div>

          <div className="flex flex-col items-center justify-center">
            <FaPeopleArrows className="text-yellow-500 text-5xl" />

            <h1 className="text-yellow-500 text-5xl">Influenciar</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
