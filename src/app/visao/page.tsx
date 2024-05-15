import { HeaderInstitucional } from "@/components/headerInstitucional";

import image from "../../../public/estudobiblico.webp";
import { frases } from "@/contents/contents";

export const metadata = {
  title: "Nossa Visão - SDC",
};

export default function Visao() {
  return (
    <div className="min-h-screen">
      <HeaderInstitucional image={image} title="Visão" subTitle="Nossa Visão" />

      <div className="w-full h-full bg-white py-10 md:py-20 px-6 md:px-16 ">
        <h1 data-aos="zoom-in" className="text-black">
          A nossa visão é SER uma igreja relevante na Sociedade e para as
          famílias. A nossa visão frisa o que nós cremos e vemos como igreja.
          Segue a nossa declaração de visão da{" "}
          <span className="font-extrabold"> SANTUÁRIO DE CRISTO </span>{" "}
          SANTUÁRIO DE CRISTO – o “EU VEJO”:
        </h1>

        <div className="mt-12 mb-12">
          {frases.map((f) => (
            <div key={f.id} data-aos="zoom-in">
              <div
                className="mt-6 w-full md:w-11/12 bg-yellow-300 h-1 rounded-t-lg"
                data-aos="zoom-in"
              />
              <div
                data-aos="zoom-in"
                className="w-full md:w-11/12 py-4 px-6 md:px-16 bg-gray-100 "
              >
                <p data-aos="fade-down-left" className="text-gray-500">
                  {f.frase}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
