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
    <div className="relative h-96 z-20">
      <Image
        data-aos="zoom-in"
        alt="image"
        src={image}
        fill
        className="object-cover bg-cover"
        style={{ opacity: 0.4, background: "none" }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1
          data-aos="zoom-in-right"
          className="text-4xl font-bold text-white mb-2"
        >
          {title}
        </h1>
        <p data-aos="zoom-in-left" className="text-xl text-white">
          {subTitle}
        </p>
      </div>
    </div>
  );
};
