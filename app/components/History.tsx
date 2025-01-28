import styles from "./css/componentes.module.css";
import {
  Text,
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineItem,
  TimelineRoot,
  TimelineTitle,
} from "@chakra-ui/react";
import { MdSchool } from "react-icons/md";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Historial",
  description: "Mis pasos como profesionista",
};

export function History() {
  return (
    <div className={styles["container"]}>
      <h1 className={styles["text-title"]}>Historial</h1>
      <TimelineRoot>
        <TimelineItem>
          <TimelineConnector>
            <MdSchool />
          </TimelineConnector>
          <TimelineContent>
            <TimelineTitle className="text-normal-content">
              Periodo Universitario
            </TimelineTitle>
            <TimelineDescription>Agosto 2019 a Agosto 2024</TimelineDescription>
            <Text className="text-gray-500">
              Durante mi etapa universitaria aprendi de la mano varios
              profesionales del area, los cuales con el cumplimiento de las
              competencias necesarias me aportaran varias habilidades que van
              mas alla de solo saber programar algunas de estas las veras en mis{" "}
              <a className="text-color-mostaza" href={"#history"}>
                habilidades blandas
              </a>{" "}
              ademas de realizar varios proyectos con los cuales demostra
              capacidad para trabajar en equipo y resolver problemas con los
              cuales nos enfrentamos algunos de estos estaran mis{" "}
              <a className="text-color-mostaza" href={"#project"}>
                proyectos
              </a>
              .
            </Text>
            <Text className="text-gray-500"></Text>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector>
            <HiBuildingOffice2 />
          </TimelineConnector>
          <TimelineContent>
            <TimelineTitle className="text-normal-content">
              Residencias profesionales
            </TimelineTitle>
            <TimelineDescription>Enero 2024 a Agosto 2024</TimelineDescription>
            <Text className="text-gray-500">
              Descripción de tareas y responsabilidades: Participé en el
              desarrollo de aplicaciones móviles innovadoras donde me encargaba
              desde la navegacion, inicio de sesion y creacion de componentes
              reutilizables, traer datos desde el servidor con consultas https
              con axios y en la mejorar la experiencia del usuario. Colaboré con
              diseñadores y otros desarrolladores para crear soluciones,
              técnicas eficientes y escalables. Realicé mantenimiento y
              actualizaciones regulares de las aplicaciones, asegurando la
              optimizacion de las tegnologias usadas.
            </Text>
          </TimelineContent>
        </TimelineItem>
      </TimelineRoot>
    </div>
  );
}
