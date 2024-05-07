import Link from "next/link";
import { ReactNode } from "react";

type CardContactProps = {
  title: string;
  text: string;
  href: string;
  icon: ReactNode;
  color?: string;
};

export const CardContact = (props: CardContactProps) => {
  return (
    <div
      data-aos="zoom-out"
      className="flex flex-col items-center justify-center p-2 mt-8 bg-gray-100 rounded shadow-xl ease-in w-72 h-72"
    >
      <div className={`text-2xl ${props.color}`}>{props.icon} </div>

      <h1 className="mt-4 text-black text-lg uppercase">{props.title}</h1>

      <div className="w-9/12 h-[1px] bg-white mt-4" />

      <Link
        href={props.href}
        target="_blank"
        className="mt-4 text-black opacity-60 space-y-4 flex items-center justify-center"
      >
        {props.text}
      </Link>
    </div>
  );
};
