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

export const cultura: ParagrafoProps[] = [
  {
    id: 1,
    text: "Bem-vindos ao Santuário de Cristo, um refúgio espiritual onde a fé se encontra com a comunhão e o amor se manifesta em ação. Em nosso santuário, buscamos seguir os ensinamentos de Jesus Cristo, que nos chamou a amar a Deus sobre todas as coisas e ao próximo como a nós mesmos.",
  },
  {
    id: 2,
    text: "No Santuário de Cristo, acreditamos que cada indivíduo é uma preciosa criação de Deus, dotada de dignidade e valor inestimáveis. Assim, acolhemos a todos, sem distinção de raça, gênero, orientação sexual ou status social. Aqui, cada pessoa é recebida com amor e respeito, convidada a compartilhar sua jornada espiritual e a encontrar conforto, orientação e apoio.",
  },
  {
    id: 3,
    text: "Em nosso santuário, buscamos viver de acordo com os princípios do evangelho, praticando a compaixão, a generosidade e a justiça em todas as áreas de nossas vidas. Procuramos ser uma luz na comunidade, estendendo a mão aos necessitados, defendendo os oprimidos e trabalhando pela paz e reconciliação.",
  },
  {
    id: 4,
    text: "No Santuário de Cristo, a adoração é central em nossas vidas. Reunimo-nos regularmente para louvar a Deus, celebrar sua graça e buscar sua orientação. Em nossos cultos, encontramos inspiração nas Escrituras Sagradas, na oração e na música, fortalecendo nossa fé e renovando nosso compromisso com o serviço e o amor ao próximo.",
  },
  {
    id: 5,
    text: "Juntos, como uma família espiritual, nos encorajamos mutuamente, compartilhamos nossas alegrias e tristezas, e nos apoiamos em tempos de necessidade. No Santuário de Cristo, somos uma comunidade unida pelo amor de Deus e pelo desejo de seguir os passos de Jesus Cristo, nosso Salvador e Senhor.",
  },
  {
    id: 6,
    text: "Seja você um visitante pela primeira vez ou um membro de longa data, convidamos você a se juntar a nós no Santuário de Cristo, onde todos são bem-vindos, todos são amados e todos são chamados a viver uma vida de fé, esperança e amor.",
  },
];

export const donation: ParagrafoProps[] = [
  {
    id: 1,
    text: "Somos o Santuário de Cristo, uma comunidade dedicada à generosidade. Como santuário, firmamos a convicção de que a generosidade é um princípio vital em nossa jornada cristã. Entendemos que Deus nos convoca a expressar generosidade não apenas em nossas palavras e ações, mas também em nossas ofertas financeiras.",
  },
  {
    id: 2,
    text: "Para nós, a oferta vai além de uma simples contribuição; é uma oportunidade de adoração a Deus e um investimento no avanço do Seu reino. Ao ofertarmos, honramos e depositamos a nossa confiança em Deus.",
  },
  {
    id: 3,
    text: "No Santuário de Cristo, promovemos e incentivamos ativamente a generosidade, acreditando que Deus abençoa abundantemente aqueles que dão com um coração grato. Portanto, encorajamos você a abraçar a generosidade em suas ofertas, confiando que Deus atenderá todas as suas necessidades.",
  },
  {
    id: 4,
    text: "Além disso, como comunidade, assumimos o compromisso de estender a generosidade para além das ofertas, manifestando-a em nossas ações e palavras. Buscamos constantemente ajudar os necessitados e espalhar o amor de Deus para todos ao nosso redor.",
  },
  {
    id: 5,
    text: "Convidamos você a se unir a nós nessa jornada de generosidade, seja através de suas ofertas, ações benevolentes ou palavras edificantes. Juntos, podemos impactar positivamente a vida das pessoas e honrar a Deus com tudo o que temos e somos.",
  },
];
