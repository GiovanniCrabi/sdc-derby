import { AboutUs } from "@/components/aboutUs";
import { Card } from "@/components/card";
import { CardContact } from "@/components/cardContact";
import { Contacts } from "@/components/contacts";
import { Divider } from "@/components/divider";
import { EventSection } from "@/components/eventSection";
import { Header } from "@/components/header";
import { HomeSection } from "@/components/homeSection";
import Image from "next/image";

import { MdLocationOn } from "react-icons/md";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <HomeSection />

      <AboutUs />

      <EventSection />
    </main>
  );
}
