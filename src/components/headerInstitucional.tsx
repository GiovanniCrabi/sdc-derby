import Image, { StaticImageData } from "next/image";

type HeaderInstitucionalProps = {
  image: StaticImageData;
  title: string;
  subTitle: string;
};
export const HeaderInstitucional = ({
  image,
  subTitle,
  title,
}: HeaderInstitucionalProps) => {
  return (
    <div className="relative h-96">
      <Image alt="" src={image} fill className="object-cover opacity-40" />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white mb-2">{title}</h1>
        <p className="text-xl text-white">{subTitle}</p>
      </div>
    </div>
  );
};
