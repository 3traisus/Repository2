"use client";
import { Button, HStack } from "@chakra-ui/react";
import { CardCertificate } from "./cards";
import styles from "./css/componentes.module.css";
import { useEffect, useState } from "react";
import { GrOracle } from "react-icons/gr";
import { SiPlatzi, SiUdemy } from "react-icons/si";

const cards = [
  {
    imagePlatform: <SiPlatzi size={25} />,
    imageCertificate: "/ComunicacionEfectiva.png",
    platform: "Platzi",
    title: "Comunicación Efectiva",
    href: "https://platzi.com/p/jesus6441/",
    description:
      "Certificado donde aprendí a relacionarme de mejor manera con las personas de mi entorno, además de mantener una postura adecuada.",
  },
  {
    imagePlatform: <SiPlatzi size={25} />,
    imageCertificate: "/Intro-react-native.png",
    platform: "Platzi",
    title: "Introducción a React Native",
    href: "https://platzi.com/p/jesus6441/",
    description:
      "Curso introductorio de React Native, donde conocí algunas características básicas que desconocía en su momento.",
  },
  {
    imagePlatform: <SiPlatzi size={25} />,
    imageCertificate: "/OKRS.png",
    platform: "Platzi",
    title: "OKR",
    href: "https://platzi.com/p/jesus6441/",
    description:
      "Curso donde aprendí a desempeñar mi rol dentro de una empresa, así como también a apoyar en los objetivos de la misma.",
  },
  {
    imagePlatform: <SiPlatzi size={25} />,
    imageCertificate: "/Progra-basica.png",
    platform: "Platzi",
    title: "Programación Básica",
    href: "https://platzi.com/p/jesus6441/",
    description:
      "Curso donde repasé algunos temas ya aprendidos en la universidad. Algunos de esos temas incluyen Programación Orientada a Objetos y Estructurada, además de cuestiones teóricas sobre las tecnologías utilizadas.",
  },
  {
    imagePlatform: <SiUdemy size={25} />,
    imageCertificate: "/FullStack-app.jpg",
    platform: "Udemy",
    title: "Full Stack App",
    href: "https://www.udemy.com/certificate/UC-e1e8a369-0d29-47ae-a2c6-c0781641d154",
    description:
      "Curso donde desarrollé paso a paso una app full stack, profundizando en el desarrollo móvil con React Native, Expo, Axios, AsyncStorage, Node.js y otras tecnologías.",
  },

  {
    imagePlatform: <GrOracle size={25} />,
    imageCertificate: "/Aprender.png",
    platform: "Alura",
    title: "Aprender a Aprender",
    href: "https://app.aluracursos.com/certificate/jesusnuez021/aprender-a-aprender-tecnicas-autodesarrollo",
    description:
      "Curso introductorio en Alura para aprender sobre análisis de datos con IA o backend con IA. En este curso me vi reflejado en algunos aspectos al querer aprender y también descubrí cómo manejar conductas que me agobiaban.",
  },
  {
    imagePlatform: <GrOracle size={25} />,
    imageCertificate: "/LinkedIn.png",
    platform: "Alura",
    title: "LinkedIn",
    href: "https://app.aluracursos.com/certificate/jesusnuez021/linkedin-hacer-perfil-trabaje-por-ti",
    description:
      "Curso introductorio en Alura para aprender sobre análisis de datos con IA o backend con IA. En este curso aprendí a mejorar mi perfil de LinkedIn.",
  },
  {
    imagePlatform: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="-0.505 1.958 2317.999 739"
      >
        <path fill="#FE0000" d="M-.504 1.958h2317.999v739h-2318v-739z" />
        <path
          fill="#FFF"
          d="M439 118c-1.303 11.515-.758 23.86 2.554 33.83 4.46 13.426 10.629 23.104 33.344 52.656 23.969 31.183 31.64 42.485 37.344 58.656 4.663 13.22 4.76 20.857 2.76 32.857 21 4 55.42 15.15 78.49 28.986 21.4 13.16 36.958 30.226 42.656 46.78 3.37 9.795 3.233 24.976-.344 34.47-3.435 9.118-8.145 16.73-15.094 24.344-27.62 30.256-82.31 51.988-148.188 58.906-14.572 1.53-50.283 2.619-62.531 1.906-88.002-5.121-158.767-35.526-178.905-76.844-8.376-17.183-8.171-31.976.656-48.97 7.278-14.011 27.228-31.326 50.688-44.03 22.568-10.865 43.756-18.984 66.468-25.375 1.104 14.826 29.998 50.266 39.563 62.813 20.856 27.3 29.106 40.32 35 50.75 3.54 6.264 5.54 10.264 4.54 22.188 0 0 8.026-7.266 11.054-13.438 3.918-7.985 5.316-16.09 4.563-26.5-.907-12.541-3.037-20.225-9.031-32.5-5.827-11.935-14.18-24.007-30.063-43.5-22.426-27.523-30.73-42.644-34.156-62.281-3.803-21.797 2.323-44.965 14.875-56.25 2.73-2.455 7.125-4.844 7.125-4.844s-.375 5.617-.375 12c0 13.5 1.54 20.528 6.719 30.813 6.432 12.77 15.332 24.709 42.625 57.188 24.155 28.744 31.656 43.348 31.656 61.594 0 4.284.009 8.795.009 8.795s6.38-4.866 9.335-9.326c9.364-14.136 10.848-36.187 3.719-55.72-4.887-13.39-12.805-25.574-36.22-55C426.004 213 416.003 189 416.003 169s4.34-39.08 22.999-51zM886.753 412.5c.539-6.681.029-13.255-.7-16.763-2.87-13.786-13.042-27.641-27.772-37.824-4.466-3.088-17.882-10.038-31.757-16.454-27.803-12.855-35.61-17.491-42.527-25.253-6.78-7.606-9.284-14.36-9.35-25.206-.043-7.22.364-9.403 2.7-14.5 7.56-16.481 26.448-25.25 48.404-22.47 12.947 1.64 19.73 4.533 27.358 11.669 7.979 7.463 12.04 16.107 14.237 30.3l.654 8h12l-1-55-4-1c-3.022-.754-22.952-4.545-33.5-5.876-15.753-1.987-22.138-2.222-31.405-1.152-17.962 2.07-32.817 8.888-44.026 20.2-11.416 11.523-16.956 23.752-17.816 39.329-.883 15.977 4.218 29.208 15.632 40.55 9.58 9.519 13.667 11.979 43.275 26.063 37.893 18.023 46.466 23.349 52.212 36.888 4.986 11.75 5.35 24.945.187 35.5-13.195 26.975-54.723 34.009-80.573 13.68-9.652-7.591-16.73-19.091-19.03-30.93l-1.215-6.25-10.24-.002 1.825 52.66s19.682 5.29 28.857 6.267c6.935.737 13.844 2.076 20.818 2.076 14 0 20.487 1.837 35-3C850 469 883 459 886.753 412.5zM979 326c16 0 30 7 36.647 17.33 6.285 9.767 6.354 18.159 6.354 23.67v76c0 9 6.52 11.899 15.928 8.736L1045 449v10l-35.01 15.298c-4.063 1.81-6.841-2.328-8.781-9.97l-2.21-7.328-5.821 4.548C984.938 467.988 974 474 958 474c-15.104.064-25-2-34.822-17.671-4.6-9.054-5.095-21.228-1.22-30 4.495-10.171 13.399-15.387 50.782-29.844L998 387v-7c0-26-7-34-16-39-7.24-4.021-16.846-2.98-26 3-7.57 4.945-9.87 13.288-5.98 21.86 3.003 6.617 1.97 4.54 1.97 4.75l-20.531 10.845s-3.547-6.08-4.563-9.406c-4.716-15.457 1.339-24.175 24.53-36.938 12.128-6.672 19.259-9.111 27.574-9.111zm19 72s-32.908 13.893-39.227 17.11c-5.053 2.574-10.844 7.162-12.771 10.89-2.511 4.855-2.093 13.724 1 19 2.9 4.953 6.414 8.997 11 11 1.649.722 7.149 1.98 11 2 7.803.043 16.03-3.224 24.428-10.201l4.572-3.798V398zM1101 326v26.906l6.876-6.5C1122.774 332.32 1137 326 1148 326c25 0 48 22 47 53v72c0 8 2 13 10 13h13v10h-69v-10h10c8 0 11-5 11-13v-72c0-15-5.504-22.504-10-27-6-6-13.295-7.687-24-7-8.32.534-16.841 4.934-26.625 12.844L1103 363v93c0 5 2 8 7 8h13v10h-68v-10h9c8 0 14-5 14-13v-77c0-20-6-26-23-17l-.001-10.688c11-3.313 31-13.313 42-20.313h4zM1294 474c9 0 11.114-1 19.5-8.076L1330 452l-4-7-7.356 3.92C1307.658 454.775 1299 456 1288 451c-9.373-4.261-15-19-15-27v-80.964l46-.037 5-14h-51v-46h-5c-12 22-30 43-52 56v4h32v81c0 19 7 33 18 41 10.437 7.592 17 9 28 9zM1400 326c16 0 30 7 36.648 17.33 6.284 9.767 6.353 18.159 6.353 23.67v76c0 9 6.52 11.899 15.928 8.736L1466 449v10l-35.01 15.298c-4.062 1.81-6.84-2.328-8.781-9.97l-2.21-7.328-5.821 4.548C1405.938 467.988 1395 474 1379 474c-15.104.064-25-2-34.821-17.671-4.6-9.054-5.095-21.228-1.22-30 4.494-10.171 13.398-15.387 50.782-29.844L1419 387v-7c0-26-7-34-16-39-7.24-4.021-16.845-2.98-26 3-7.57 4.945-9.868 13.288-5.978 21.86 3.002 6.617 1.969 4.54 1.969 4.75l-20.531 10.845s-3.548-6.08-4.563-9.406c-4.717-15.457 1.338-24.175 24.53-36.938 12.127-6.672 19.258-9.111 27.573-9.111zm19 72s-32.908 13.893-39.227 17.11c-5.053 2.574-10.845 7.162-12.772 10.89-2.51 4.855-2.093 13.724 1 19 2.902 4.953 6.414 8.997 11 11 1.649.722 7.149 1.98 11 2 7.804.043 16.03-3.224 24.429-10.201L1419 444V398zM1522 326v26.906l6.876-6.5C1543.774 332.32 1558 326 1569 326c25 0 48 22 47 53v72c0 8 2 13 10 13h13v10h-69v-10h10c8 0 11-5 11-13v-72c0-15-5.504-22.504-10-27-6-6-13.295-7.687-24-7-8.32.534-16.841 4.934-26.625 12.844L1524 363v93c0 5 2 8 7 8h13v10h-68v-10h9c8 0 14-5 14-13v-77c0-20-6-26-23-17l-.001-10.688c11-3.313 31-13.313 42-20.313h4zM1819 457v-10c-11 5-16 5-19.763 2.454C1793.85 445.808 1794 439 1794 439V219h-3c-14.476 9.178-32 18-47 23v11c8-3 13.988-4.584 19-2 3.277 1.806 5 4 5 9v74.767l-5.871-2.371c-11.784-4.76-17.87-5.865-32.13-5.837-11.934.023-14.43.337-21.52 2.705-32.884 10.98-53.922 43.099-52.19 79.677.99 20.923 7.048 37.348 20.712 49.06 14 12 26 16 40 16 19 0 30.009-3.793 43.776-13.135 4.224-2.865 8.224-5.865 8.224-5.865 1 10 3.44 16 7 21L1819 457zm-103.67-1.791c-18.681-6.674-32.26-29.711-34.014-57.71-2.192-34.997 17.206-59.5 47.107-59.5 12.565 0 22.214 3.444 33.837 12.075l5.76 4.277-.521 89.872-6.413 3.878c-10.904 6.593-16.168 8.144-29.087 8.572-9.342.312-12.47.036-16.668-1.464zM1926.5 472.502c8.313-2.203 19.5-6.501 32.5-14.501v-10c-11 8-28.433 12.973-44 13-16.892.029-30-5-39-15-13.278-14.755-17-27.001-19.296-57.001H1962s0-15-6-29c-4.113-9.596-8-17-19-24-10.3-6.553-24.206-9.334-36-9.41-12.27-.078-14.17.158-20.835 2.592-31.132 11.363-52.32 43.607-49.722 75.663 2.513 31.012 20.63 55.876 47.985 65.856 12.107 4.417 34.97 5.274 48.072 1.8zM1869 349c7-7 15-11 28-11 12 0 20 3 28 11 6 6 9 11 10.28 28h-78.552C1858 365 1862 356 1869 349zM2021 326v33c5.263-9.054 10-15 19-24 6.944-6.944 16-9 23-9 5 0 18 4 18 4v30h-5c-2-8-9-12-19-12-13 0-21.5 5.25-26.75 13.125S2023 373 2023 390v66c0 5 2 8 7 8h13v10h-68v-10h9c8 0 14-5 14-13v-77c0-22-8-21-22-15v-10c13-5 29-12 41-23h4z"
        />
      </svg>
    ),
    imageCertificate: "/Intro-aws.png",
    platform: "Santander",
    title: "Introduccion AWS",
    href: "",
    description:
      "Curso introductorio en Santander con colaboracion de aws, nos presentaron acerca de sus tegnologias y como podriamos dar uso de estas ademas de las ventajas de usar aws",
  },
];

export function Certifacte() {
  const [active, setActive] = useState<boolean>(true);

  useEffect(() => {
    console.log("active", active);
  }, [active]);

  return (
    <div className={styles["container"]}>
      <h1 className={styles["text-title"]}>Certificados</h1>
      <HStack className="flex-wrap">
        {cards.map((item, index) => {
          return index < 4 || !active ? (
            <CardCertificate
              key={index}
              imagePlatform={item.imagePlatform}
              imageCertificate={item.imageCertificate}
              platform={item.platform}
              title={item.title}
              description={item.description}
              href={item.href}
            />
          ) : (
            <div key={index}></div>
          );
        })}
      </HStack>
      <HStack className="justify-center">
        <Button
          className={"cursor-pointer underline underline-offset-8"}
          onClick={() => setActive(!active)}
        >
          {active ? "ver mas" : "ver menos"}
        </Button>
      </HStack>
    </div>
  );
}
