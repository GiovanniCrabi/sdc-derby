import { Contacts } from "@/components/contacts";
import { HeaderInstitucional } from "@/components/headerInstitucional";

import image from "../../../public/oracao.webp";

export default function Contato() {
  return (
    <div>
      <HeaderInstitucional
        image={image}
        title="Contato"
        subTitle="Estamos para SERVIR"
      />
      <Contacts />
    </div>
  );
}
