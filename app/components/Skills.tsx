import { Heading, HStack } from "@chakra-ui/react";
import { CardSkills } from "./cards";
import { FaReact } from "react-icons/fa"; //import Image from "next/image";
import {
  TbPointFilled,
  TbBrandReactNative,
  TbBrandNodejs,
} from "react-icons/tb";
import { IoLogoJavascript, IoLogoCss3, IoLogoFirebase } from "react-icons/io5";
import {
  SiTypescript,
  SiDjango,
  SiMysql,
  SiExpo,
  SiAxios,
  SiMongodb,
} from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import styles from "./css/componentes.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Habilidades",
  description: "Mis tegnologias y Aptitudes",
};

const cards = {
  1: {
    image: "/myAvatar.png",
    title: "",
    description:
      "Comunicativo, Pensamiento critico, Pensamiento logico, Pensamiento analitico, Proactivo, Adaptabilidad, Estructurado, Creativo, Trabajo en Equipo, AutoDitacta, Organizado, Resolucion de problemas ",
    tags: [],
  },
  2: [
    {
      title: "Framework",
      data: {
        image: [
          <RiNextjsFill size={75} key={0} />,
          <SiDjango size={75} key={0} />,
        ],
        tools: ["nextjs", "django"],
      },
    },
    {
      title: "Database",
      data: {
        image: [<SiMysql size={75} key={0} />, <SiMongodb size={75} key={0} />],
        tools: ["Mysql", "mongodb"],
      },
    },
    {
      title: "Frontend",
      data: {
        image: [
          <FaReact size={75} key={0} />,
          <TbBrandReactNative size={75} key={0} />,
          <IoLogoCss3 size={75} key={0} />,
        ],
        tools: ["react", "react-native", "css3"],
      },
    },
    {
      title: "Backend",
      data: {
        image: [
          <TbBrandNodejs size={75} key={0} />,
          undefined,
          <IoLogoFirebase size={75} key={0} />,
        ],
        tools: ["nodejs", "express", "firebase"],
      },
    },
    {
      title: "Lenguajes",
      data: {
        image: [
          <IoLogoJavascript
            //className="bg-yellow-300 fill-black"
            size={75}
            key={0}
          />,
          <SiTypescript size={75} key={0} />,
          <FaPython size={75} key={0} />,
        ],
        tools: ["javascript", "typeScript", "python"],
      },
    },
    {
      title: "Herramientas y librerias",
      data: {
        image: [
          <SiExpo size={75} key={0} />,
          undefined,
          <SiAxios size={75} key={0} />,
        ],
        tools: ["expo", "gluestack", "axios"],
      },
    },
  ],
};

export function Skills() {
  return (
    <div className={styles["container"]}>
      <h1 className={styles["text-title"]}>Habilidades</h1>
      <Heading className="text-[18px] min-[463px]:text-normal-title w-fit mb-4">
        Habilidades blandas
      </Heading>
      <ul className="flex flex-row flex-wrap text-normal-content text-gray-500 mb-4">
        <li className="flex flex-row items-center">
          <TbPointFilled /> Comunicativo
        </li>
        <li className="flex flex-row items-center">
          <TbPointFilled /> Pensamiento critico
        </li>
        <li className="flex flex-row items-center">
          <TbPointFilled /> Pensamiento logico
        </li>
        <li className="flex flex-row items-center">
          <TbPointFilled /> Pensamiento analitico
        </li>
        <li className="flex flex-row items-center">
          <TbPointFilled /> Proactivo
        </li>
        <li className="flex flex-row items-center">
          <TbPointFilled /> Adaptabilidad
        </li>
        <li className="flex flex-row items-center">
          <TbPointFilled /> Estructurado
        </li>
        <li className="flex flex-row items-center">
          <TbPointFilled /> Creativo
        </li>
        <li className="flex flex-row items-center">
          <TbPointFilled /> Trabajo en Equipo
        </li>
        <li className="flex flex-row items-center">
          <TbPointFilled /> AutoDitacta
        </li>
        <li className="flex flex-row items-center">
          <TbPointFilled /> Organizado
        </li>
        <li className="flex flex-row items-center">
          <TbPointFilled /> Resolucion de problemas
        </li>
      </ul>
      <HStack className="flex-1 flex-row flex-wrap justify-center space-x-4">
        {cards[2].map((item, index) => (
          <CardSkills key={index} title={item.title} data={item.data} />
        ))}
      </HStack>
    </div>
  );
}

/*
<div className="hidden min-[530px]:block">
        <CardThin
          image={cards[1].image}
          title=""
          description={cards[1].description}
          tags={[]}
        />
      </div>
      <div className="block min-[530px]:hidden">
        <CardFull
          image={cards[1].image}
          title=""
          description={cards[1].description}
          tags={[]}
        />
      </div>
<HStack className="justify-between flex-wrap">
        {cards[2].map((item, index) => (
          <CardSkills key={index} image={item.image} title={item.title} />
        ))}
      </HStack>
*/
