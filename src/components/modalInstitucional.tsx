import Link from "next/link";

export const ModalInstitucional = () => {
  return (
    <div className="w-48 absolute mt-12 left-auto bg-neutral-950 rounded-md shadow-md">
      <div className="h-[1px] bg-yellow-400 w-full" />
      <div className="px-4 py-2">
        <ul>
          <li>
            <Link
              href="/sobre-nos"
              className="text-white hover:text-gray-300 block py-2 hover:underline hover:underline-offset-2 ease-in duration-300"
            >
              Sobre nós
            </Link>
          </li>
          <li>
            <Link
              href="/visao"
              className="text-white hover:text-gray-300 block py-2 hover:underline hover:underline-offset-2 ease-in duration-300"
            >
              Nossa Visão
            </Link>
          </li>
          <li>
            <Link
              href="/missao"
              className="text-white hover:text-gray-300 block py-2 hover:underline hover:underline-offset-2 ease-in duration-300"
            >
              Nossa Missão
            </Link>
          </li>
          <li>
            <Link
              href="/valores"
              className="text-white hover:text-gray-300 block py-2 hover:underline hover:underline-offset-2 ease-in duration-300"
            >
              Nossos Valores
            </Link>
          </li>
          <li>
            <Link
              href="/cultura"
              className="text-white hover:text-gray-300 block py-2 hover:underline hover:underline-offset-2 ease-in duration-300"
            >
              Nossa Cultura
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
