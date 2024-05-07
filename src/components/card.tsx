type CardProps = {
  title: string;
  text: string;
  dataAos?: string;
  dataAosDelay?: number;
};

export const Card = ({ text, title, dataAos, dataAosDelay }: CardProps) => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-delay={dataAosDelay}
      className="relative flex flex-col items-center p-6 bg-neutral-950 rounded shadow-xl ease-in h-96"
    >
      <h5 className="text-2xl font-bold leading-snug tracking-tight mb-1">
        {title}
      </h5>
      <p className="text-base mt-4 text-left dark:text-gray-300">{text}</p>
    </div>
  );
};
