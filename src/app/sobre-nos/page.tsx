import { HeaderInstitucional } from "@/components/headerInstitucional";

import image from "../../../public/estudobiblico.webp";
import { paragrafosHistoria, paragrafosMissoes } from "@/contents/contents";

export const metadata = {
  title: "Sobre Nós - SDC",
};

export default function SobreNos() {
  return (
    <div className="min-h-screen">
      <HeaderInstitucional
        image={image}
        title="Sobre Nós"
        subTitle="Nossa História"
      />

      <div className="bg-white text-gray-500 flex flex-col justify-center items-center px-8 md:px-40 py-16">
        <h1 data-aos="fade-right" className="font-extrabold text-3xl">
          {paragrafosHistoria.title}
        </h1>

        {paragrafosHistoria.paragrafos.map((text) => (
          <div
            key={text.id}
            className="mt-6 flex-col justify-center items-start"
          >
            <p data-aos="zoom-in" className="">
              {text.text}{" "}
            </p>
          </div>
        ))}

        <h1 data-aos="fade-left" className="mt-16 font-extrabold text-3xl">
          {paragrafosMissoes.title}
        </h1>

        {paragrafosMissoes.paragrafos.map((missoes) => (
          <div
            key={missoes.id}
            className="mt-6 flex-col justify-center items-start"
          >
            <p data-aos="zoom-in" className="">
              {missoes.text}{" "}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
