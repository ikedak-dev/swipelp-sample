import Image from "next/image";

type Props = {
  file_name: string;
  alt: string;
};

export const ImageLayout = ({ file_name, alt }: Props) => {
  return (
    <div className="w-full h-full relative overflow-clip">
      <Image
        src={`/images/${file_name}`}
        alt={alt}
        fill
        className="object-contain"
      />
    </div>
  );
};
