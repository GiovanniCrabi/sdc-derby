interface FraseProps {
  id: number;
  frase: string;
}

export const frases: FraseProps[] = [
  {
    id: 1,
    frase:
      "Uma comunidade que vive, prega e canta o verdadeiro evangelho de Jesus Cristo.",
  },
  {
    id: 2,
    frase: "Um lugar onde os jovens são apaixonados pela presença de Deus.",
  },
  { id: 3, frase: "Um ambiente onde Jesus é o centro." },
  { id: 4, frase: "Uma comunidade disposta a amar a Deus acima de tudo." },
  {
    id: 5,
    frase:
      "Um espaço onde o Espírito Santo é o guia e orientador de nossa missão.",
  },
  {
    id: 6,
    frase:
      "Uma família que começa primeiramente nos lares, em lares saudáveis.",
  },
  { id: 7, frase: "Um lugar onde a adoração é um estilo de vida." },
  {
    id: 8,
    frase: "Uma comunidade onde a comunhão uns com os outros é gratificante.",
  },
  { id: 9, frase: "Um ambiente onde é puro prazer estar presente." },
  { id: 10, frase: "Uma comunidade Generosa em sua totalidade." },
  {
    id: 11,
    frase:
      "Um espaço onde a cultura do Reino de Deus é a base para a transformação da sociedade.",
  },
  {
    id: 12,
    frase:
      "Uma família de povos, línguas e nações. Uma comunidade de Multiculturalidade.",
  },
  {
    id: 13,
    frase:
      "Um lugar que convida a todo homem, mulher e criança com um caloroso 'BEM VINDO A CASA!'.",
  },
  {
    id: 14,
    frase:
      "Um farol que ilumina, trazendo a glória de Deus e esperança à humanidade.",
  },
  {
    id: 15,
    frase:
      "Uma comunidade onde cada membro é um servo (voluntário), porque entendemos que essa é a natureza de Deus – servir.",
  },
  {
    id: 16,
    frase:
      "Um refúgio para os cansados, oprimidos, decepcionados e magoados pelo legalismo e pela religiosidade.",
  },
  {
    id: 17,
    frase:
      "Uma liderança unificada em seu compromisso com a autenticidade, credibilidade e qualidade de coração.",
  },
  {
    id: 18,
    frase:
      "Um espaço que serve a todas as pessoas com amor, excelência e coração, independentemente de raça, sexo, cor ou nacionalidade.",
  },
  {
    id: 19,
    frase:
      "Uma comunidade que influencia o mundo através da poderosa mensagem de Jesus Cristo.",
  },
  {
    id: 20,
    frase:
      "Um lugar onde as pessoas têm a alegria e o prazer de dizer: EU TENHO UM SANTUÁRIO!",
  },
  {
    id: 21,
    frase:
      "Um lugar que AMA, SERVE E INFLUENCIA. Eu vejo um santuário, e esse é o SANTUÁRIO DE CRISTO.",
  },
];

interface TextoProps {
  title: string;
  paragrafos: ParagrafoProps[];
}

export interface ParagrafoProps {
  id: number;
  text: string;
}

export const paragrafosHistoria: TextoProps = {
  title: "História da Igreja: A Jornada da Fé",
  paragrafos: [
    {
      id: 1,
      text: " Em uma pequena cidade chamada Rio Tinto, no coração de Portugal, erguia-se uma humilde igreja. Inicialmente, ela mal podia conter seus membros e visitantes, mas após uma série de mobilizações evangelísticas nas redondezas, a congregação cresceu exponencialmente. O ano era 2011 e, diante desse crescimento, os líderes da igreja sentiram a necessidade de expandir suas instalações. Decidiram, então, 'alargar as estacas' e, em setembro daquele mesmo ano, o novo templo estava pronto para acomodar mais de 150 pessoas.",
    },

    {
      id: 2,
      text: " Nesse ínterim, a igreja não apenas crescia em número, mas também em maturidade espiritual. Os fiéis estavam mais unidos do que nunca, fortalecidos pela sua fé e pelo propósito comum de espalhar o evangelho. E em meio a esse crescimento, havia um líder que se destacava: Pastor Adeildo Silva.",
    },

    {
      id: 3,
      text: "Nascido em 1976, em Senador Canedo, Goiânia, Pastor Adeildo sentiu o chamado do Espírito Santo desde tenra idade. Seu coração ardia por levar a mensagem de Cristo aos confins da Terra. Em 2008, ele seguiu esse chamado até Portugal, onde inaugurou a Igreja em Rio Tinto. Sua missão, porém, não se limitava a uma única congregação. Sob a orientação divina, ele fundou o Ministério Santuário de Cristo, que se espalhou por vários países, incluindo Índia, Filipinas, Inglaterra e, é claro, Portugal. ",
    },

    {
      id: 4,
      text: " Para Pastor Adeildo, missões não eram apenas grandes feitos ou atos de heroísmo. Eram simplesmente uma questão de obediência. Ele entendia que o amor ao próximo não conhecia fronteiras geográficas. O próximo poderia estar a quilômetros de distância, mas ainda era próximo. E assim, ele e sua igreja embarcaram em diversas jornadas missionárias, levando consigo não apenas palavras, mas amor, compaixão e esperança. ",
    },
  ],
};

export const paragrafosMissoes: TextoProps = {
  title: "O Chamado das Missões",
  paragrafos: [
    {
      id: 1,
      text: "Missões. Uma palavra que evoca imagens de bravura, sacrifício e heroísmo. No entanto, para aqueles que verdadeiramente entendem sua essência, missões são simplesmente uma resposta à voz que ecoa dentro do coração de todo cristão: a voz do Mestre que disse 'Ide por todo o mundo e pregai o Evangelho a toda criatura'.",
    },

    {
      id: 2,
      text: "Para nós, membros do Ministério Santuário de Cristo, liderado pelo incansável Pastor Adeildo Silva, missões não são apenas uma escolha, mas uma obrigação sagrada. O amor ao próximo transcende barreiras físicas e culturais. Ele nos impele a alcançar os perdidos, não importa onde estejam.",
    },

    {
      id: 3,
      text: "Nossa jornada missionária nos levou a terras distantes como a Índia, onde as cores vibrantes e os aromas exóticos nos envolveram, e as Filipinas, onde a calorosa hospitalidade dos habitantes nos acolheu. Da Inglaterra à nossa amada Portugal, espalhamos as boas novas do Evangelho, levando luz às trevas e esperança aos corações aflitos.",
    },

    {
      id: 4,
      text: "Não nos chamem de heróis, pois não somos. Somos simplesmente instrumentos nas mãos do Altíssimo, cumprindo o mandamento deixado pelo próprio Jesus Cristo. Somos servos obedientes, guiados pelo amor que transcende todas as fronteiras.",
    },

    {
      id: 4,
      text: "Que possamos continuar a obedecer ao chamado das missões, pois é através delas que demonstramos verdadeiramente nossa fé e amor ao próximo. Até aqui, o Senhor nos sustentou, e confiamos que Ele continuará a nos guiar em nossa jornada de fé e serviço.",
    },
  ],
};
