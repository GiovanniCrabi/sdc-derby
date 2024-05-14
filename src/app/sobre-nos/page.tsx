import { HeaderInstitucional } from "@/components/headerInstitucional";

import image from "../../../public/estudobiblico.webp";

export default function SobreNos() {
  return (
    <div className="min-h-screen">
      <HeaderInstitucional
        image={image}
        title="Sobre Nós"
        subTitle="Nossa História"
      />
    </div>
  );
}
