import { Header } from "@/components/header";
import Image from "next/image";

import AgendaPhoto from "../../../public/agenda.jpeg";

export const metadata = {
  title: "Agenda",
};

export default function Agenda() {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="px-6 md:px-24 py-12">
        <Image alt="agenda-mes" src={AgendaPhoto} className="mb-10" />
      </div>
    </div>
  );
}
