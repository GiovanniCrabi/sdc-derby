import { Header } from "@/components/header";
import Image from "next/image";

import AgendaPhoto from "../../../public/agenda.jpeg";

export const metadata = {
  title: "Impacta Devops",
};

export default function Agenda() {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="px-6 md:px-24 py-12 h-96">
        <Image alt="agenda-mes" src={AgendaPhoto} />
      </div>
    </div>
  );
}
