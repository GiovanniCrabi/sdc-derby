import { MdLocationOn, MdOutlineEmail } from "react-icons/md";
import { CardContact } from "./cardContact";
import { FaPhoneAlt } from "react-icons/fa";

export const Contacts = () => {
  return (
    <div className="py-20 bg-white w-full flex flex-col justify-center items-center">
      <h1 data-aos="fade-left" className="text-4xl font-bold text-black">
        Contato
      </h1>

      <div className="flex flex-col md:flex-row gap-x-12 gap-y-6 md:gap-y-0">
        <CardContact
          href="https://maps.app.goo.gl/ujwaZrBTcCxcAWWo7"
          icon={<MdLocationOn />}
          text="52, Dean Street"
          title="endereço"
          color="text-red-900"
        />

        <CardContact
          href={`mailto:sdcderby@gmail.com`}
          icon={<MdOutlineEmail />}
          text="sdcderby@gmail.com"
          title="E-Mail"
          color="text-yellow-400"
        />

        <CardContact
          href={`tel:07429565888`}
          icon={<FaPhoneAlt />}
          text="07429565888"
          title="telefone"
          color="text-yellow-400"
        />
      </div>
    </div>
  );
};
