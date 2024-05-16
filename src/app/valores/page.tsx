import { Contacts } from "@/components/contacts";
import { HeaderInstitucional } from "@/components/headerInstitucional";

import image from "../../../public/consagracao.jpg";

export const metadata = {
  title: "Nossos Valores - SDC",
};

const valoresItens = [
  "Amar a Deus",
  "Amar a Palavra de Deus",
  "Viver em Família",
  "Amar as Pessoas",
  "Generosidade",
  "Servir",
  "Excelência",
];

const beliveItens = [
  "A Bíblia é a Palavra de Deus. Precisa, imutável, eficaz e aplicável à nossa vida diária.",
  "Em um Deus Eterno que é o Criador de todas as coisas: Deus Pai, Filho e Espírito Santo.",
  "Jesus é o centro de tudo. Dele, Por Ele, Para Ele, e somente nele somos salvos pela graça.",
  "Cremos no Espírito Santo como Deus e nos dons espirituais para edificação da igreja e serviço dos cristãos.",
  "A Cultura do Reino de Deus é a base para a transformação da sociedade.",
  "A Igreja é a fonte de Esperança do Mundo, pois somente ela tem a palavra que transforma e influencia o mundo: A palavra da Verdade, JESUS!",
  "A igreja não é constituída pelos dons e talentos de alguns, mas pelo sacrifício de todos.",
  "Cremos que o Amor é a fonte inesgotável de uma vida cristã.",
  "Nenhum sonho é grande demais para Deus.",
  "A igreja não existe para nos servir, mas Nós somos a igreja e nós existimos para servir cada pessoa com Amor de Deus.",
  "O que une as pessoas é muito maior do que aquilo que as separam.",
  "A excelência em tudo que fazemos honra a Deus e inspira pessoas.",
  "A Generosidade verdadeira é a junção do sacrifício e da alegria.",
  "Precisamos ser fiéis na missão e o propósito que Deus nos confiou.",
];

export default function NossosValores() {
  return (
    <div>
      <HeaderInstitucional
        image={image}
        title="Valores"
        subTitle="Nossos Valores"
      />

      <div className="w-full bg-white py-20 px-6 md:px-24 space-y-6">
        <h1
          data-aos="fade-left"
          className="text-center text-3xl font-bold text-gray-500"
        >
          NOSSOS VALORES
        </h1>
        <h1 data-aos="fade-right" className="text-gray-500">
          Os valores formam um conjunto de características e princípios éticos
          dá SANTUÁRIO DE CRISTO, norteando aspectos morais e de conduta da
          nossa igreja:
        </h1>
        <ul data-aos="zoom-in" className="list-disc  ml-4  ">
          {valoresItens.map((item, index) => (
            <li key={index} className="mb-2 text-yellow-400">
              <span className="font-bold text-gray-500">{item}</span>
            </li>
          ))}
        </ul>

        <h1
          data-aos="fade-left"
          className="text-center text-3xl font-bold text-gray-500 my-12"
        >
          O QUE ACREDITAMOS
        </h1>
        <h1 data-aos="fade-right" className="text-gray-500">
          A SANTUÁRIO DE CRISTO, representada pelos seus pastores seniores, por
          sua liderança, por seus membros e voluntários, acredita que:
        </h1>
        <ul data-aos="zoom-in" className="list-disc  ml-4  ">
          {beliveItens.map((item, index) => (
            <li key={index} className="mb-2 text-yellow-400">
              <span className="font-bold text-gray-500">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
