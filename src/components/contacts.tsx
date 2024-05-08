import { MdLocationOn, MdOutlineEmail } from "react-icons/md";
import { CardContact } from "./cardContact";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import { Divider } from "./divider";
import Link from "next/link";

export const Contacts = () => {
  return (
    <div className="pt-20 bg-white w-full flex flex-col justify-center items-center">
      <h1 data-aos="fade-left" className="text-4xl font-bold text-black">
        Contato
      </h1>

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

      <div className="bg-gradient-to-tr from-gray-200 via-black to-black h-36 w-full flex justify-center items-center">
        <div className="flex justify-center items-center gap-6">
          <Link href="#">
            <FaInstagram className="text-4xl text-yellow-400" />
          </Link>

          <Link href="#">
            <FaFacebook className="text-4xl text-yellow-400" />
          </Link>

          <Link href="#">
            <FaYoutube className="text-4xl text-yellow-400" />
          </Link>
        </div>
      </div>
    </div>
  );
};
