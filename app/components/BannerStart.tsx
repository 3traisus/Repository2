import { Text } from "@chakra-ui/react";
import Image from "next/image";

export function BannerStart() {
  return (
    <div className="flex-1 relative">
      <Image
        height={514}
        width={1400}
        src={"/background.png"}
        alt="imagen de fondo"
      />
      {/*<div className="absolute top-[50px] px-4 w-full flex flex-col min-[450px]:top-[120px] md:top-[220px] md:px-0 min-[1400px]:top-[300px]">*/}
      <div className="flex flex-wrap justify-center left-[2.5%] top-[40%] absolute  w-[95%]">
        <Text className="truncate text-[24px] text-center md:text-[48px] md:w-full md:mb-[-32px]  min-[530px]:text-[36px] min-[530px]:-mb-4">
          Frontend and Backend developer
        </Text>
        <Text className="truncate text-[24px] font-luckiestGuy text-color-mostaza text-center md:text-[48px] md:w-full  min-[530px]:text-[36px]">
          Jesus Eduardo Nuñez Ramirez
        </Text>
        <a
          className="rounded self-center font text-[24px] bg-gray-nav w-fit p-4 cursor-pointer max-[560px]:hidden"
          href="/CV_JesusEduardoNuñezRamirez.pdf"
          target="_blank"
        >
          Descargar CV
        </a>
      </div>
    </div>
  );
}
