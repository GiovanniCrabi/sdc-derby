import { Card } from "./card";
import { Divider } from "./divider";

export const AboutUs = () => {
  return (
    <div className="mt-16 flex flex-col items-center justify-center">
      <h1 data-aos="fade-right" className="text-4xl font-bold">
        {" "}
        Quem somos?{" "}
      </h1>

      <Divider />

      <div className="relative mx-auto px-4 sm:px-6 max-w-7xl pt-10 md:pt-20 w-1/1 pb-14">
        <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
          <Card
            title="A Igreja"
            text="Após várias mobilizações evangelisticas nas redondezas de Rio Tinto a nossa pequena igreja não era mais capaz de comportar os membros e visitantes. Em 2011 'alargamos as nossas estacas' e em Setembro ja conseguiamos suportar mais de 150 pessoas no nosso templo. Hoje a nossa igreja cresce em número e em maturidade espiritual. Até aqui o Senhor nos sustentou!"
          />
          <Card
            title="O Pastor Presidente"
            text="Pastor Adeildo Silva, nascido em 1976 em Senador Canedo- Goiânia, orientado pelo Espirito Santo embarcou rumo a Portugal para cumprir a grande comissão que Jesus Cristo nos ordenou 'Ide por todo o mundo e pregai o Evangelho a toda a criatura'. Em 2008 Pastor Adeildo inaugurou a Igreja em Rio Tinto e hoje, é o presidente do ministério Santuário de Cristo que já está espalhado em vários países como India, Filipinas, Inglaterra e Portugal"
          />
          <Card
            title="Missões"
            text="Missões são vistas como grandes feitos, são tidas como atos de heroísmo mas na verdade não passam de simples e pura OBEDIÊNCIA. O amor ao próximo é um mandamento muito conhecido, mas o próximo é também aquele que está longe... a quilómetros de distância! Então, não somos hérois porque fazemos missões, nós fazemos missões porque somos cristãos."
          />
        </div>
      </div>
    </div>
  );
};
