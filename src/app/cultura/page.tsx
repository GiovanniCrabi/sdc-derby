import { HeaderInstitucional } from "@/components/headerInstitucional";

import image from "../../../public/culto.jpg";
import {
  cultura,
  paragrafosHistoria,
  paragrafosMissoes,
} from "@/contents/contents";

export const metadata = {
  title: "Nossa Cultura - SDC",
};

export default function Cultura() {
  return (
    <div className="">
      <HeaderInstitucional
        image={image}
        title="Cultura"
        subTitle="Nossa Cultura"
      />

      <div className="bg-white text-gray-500 flex flex-col justify-center items-center px-8 md:px-40 py-16">
        {cultura.map((text) => (
          <div
            key={text.id}
            className="mt-6 flex-col justify-center items-start"
          >
            <p data-aos="zoom-in" className="">
              {text.text}{" "}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
