import Image from "next/image";

import consagração from "../../public/consagracao.jpg";
import culto from "../../public/culto.jpg";
import biblia from "../../public/estudobiblico.webp";
import oração from "../../public/oracao.webp";

import Img from "../../public/image1.jpg";

export const EventSection = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">Eventos</h1>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-10 w-11/12 md:w-3/6">
          <Image
            data-aos="zoom-in-right"
            className="hidden md:flex w-full h-96"
            alt="jejum-Image"
            src={consagração}
            width={420}
            height={420}
          />

          <div
            data-aos="zoom-in-left"
            className="w-full items-center mt-4 md:mt-0 mb-4 md:mb-0 justify-center flex flex-col px-4 bg-none md:bg-neutral-900 rounded shadow-xl ease-in"
          >
            <h1 className="text-lg font-bold uppercase text-yellow-600">
              Jejum e consagração
            </h1>
            <p className="mt-4">Toda Terça-Feira</p>
          </div>

          <Image
            data-aos="zoom-in-right"
            className="flex md:hidden h-80"
            alt="consagração-image"
            src={consagração}
            width={420}
            height={420}
          />

          <div
            data-aos="zoom-in-left"
            className="w-full items-center mt-4 md:mt-0 mb-4 md:mb-0 justify-center flex flex-col px-4 bg-none md:bg-neutral-900 rounded shadow-xl ease-in"
          >
            <h1 className="text-lg font-bold uppercase text-yellow-600">
              Reunião de oração
            </h1>
            <p className="mt-4">Toda Sexta-Feira às 22H</p>
            <p>(Online)</p>
          </div>

          <Image
            className="h-80 md:h-96"
            data-aos="zoom-in-right"
            alt="oração-image"
            src={oração}
            width={420}
            height={420}
          />

          <Image
            data-aos="zoom-in-right"
            className="hidden md:flex h-90"
            alt="estudo-biblico"
            src={biblia}
            width={420}
            height={420}
          />

          <div
            data-aos="zoom-in-left"
            className="w-full items-center mt-4 md:mt-0 mb-4 md:mb-0 justify-center flex flex-col px-4 bg-none md:bg-neutral-900 rounded shadow-xl ease-in"
          >
            <h1 className="text-lg font-bold uppercase text-yellow-600">
              Estudo Bíblico
            </h1>
            <p className="mt-4">Terça-Feira - dia 14 ás 19H</p>
          </div>

          <Image
            data-aos="zoom-in-right"
            className="flex md:hidden h-80"
            alt="estudo-biblico"
            src={biblia}
            width={420}
            height={420}
          />

          <div
            data-aos="zoom-in-left"
            className="w-full items-center mt-4 md:mt-0 mb-4 md:mb-0 justify-center flex flex-col px-4 bg-none md:bg-neutral-900 rounded shadow-xl ease-in"
          >
            <h1 className="text-lg font-bold uppercase text-yellow-600">
              Culto todos os sábados
            </h1>
            <p>(Confira nossa agenda)</p>
            <p className="mt-4">
              Junte-se a nós para um culto especial nesta sexta-feira! Venha
              experimentar uma noite de louvor, oração e inspiração. Todos são
              bem-vindos para se juntar a nós enquanto buscamos crescer em nossa
              fé e nos conectarmos como uma comunidade. Esperamos vê-lo lá!
            </p>
          </div>
          <Image
            data-aos="zoom-in-right"
            className="h-80 md:h-96"
            alt="image"
            src={culto}
            width={420}
            height={420}
          />
        </div>
      </div>
    </div>
  );
};
