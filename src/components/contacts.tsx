import { MdLocationOn, MdOutlineEmail } from "react-icons/md";
import { CardContact } from "./cardContact";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import { Divider } from "./divider";
import Link from "next/link";
import ContactForm from "./formsContact";

export const Contacts = () => {
  return (
    <div className="pt-10 bg-white w-full flex flex-col justify-center items-center">
      <div className="relative mx-auto px-4 sm:px-6 max-w-7xl pt-10 w-1/1 pb-24">
        <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
          <CardContact
            href="https://maps.app.goo.gl/ujwaZrBTcCxcAWWo7"
            icon={<MdLocationOn />}
            text="1, The Old Maltings"
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
            href={`tel:07456944667`}
            icon={<FaPhoneAlt />}
            text="07456944667"
            title="telefone"
            color="text-yellow-400"
          />
        </div>
      </div>

      <div className="w-full mb-20 flex flex-col justify-center items-center">
        <h1 className="text-black  font-bold text-3xl">
          Nos envie uma mensagem
        </h1>
        <ContactForm />
      </div>
    </div>
  );
};
