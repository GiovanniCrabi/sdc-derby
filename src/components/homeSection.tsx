import Image from "next/image";

import Image1 from "../../public/image1.jpg";
import ChurchName from "../../public/subImage.png";

export const HomeSection = () => {
  return (
    <div className="relative flex justify-center items-center">
      <Image
        data-aos="zoom-in"
        className="w-screen h-screen md:h-full"
        alt="image home"
        src={Image1}
        width={1621}
        height={1081}
        style={{ opacity: 0.3 }}
      />
      <div className="absolute text-center">
        <div className="flex flex-col items-center justify-center">
          <h1
            data-aos="fade-up"
            className="text-white font-bold text-4xl md:text-6xl"
          >
            He is the Only Way
          </h1>
          <p data-aos="fade-down" className="mt-2 md:mt-6">
            John 14:6
          </p>
          <Image
            data-aos="zoom-in"
            className="mt-4 md:mt-8 w-full h-24 md:w-full md:h-full"
            alt="church Name"
            src={ChurchName}
            width={435}
            height={146}
          />
        </div>
      </div>
    </div>
  );
};
