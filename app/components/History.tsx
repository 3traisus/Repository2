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

export function History() {
  return (
    <div className="w-full pt-8 px-8 lg:max-w-[1024px]">
      <h1 className={styles["text-title"]}>Historial</h1>

      <TimelineRoot maxW="400px">
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              debitis in quasi ad magni beatae accusantium pariatur eaque earum
              minima?
            </Text>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              debitis in quasi ad magni beatae accusantium pariatur eaque earum
              minima?
            </Text>
          </TimelineContent>
        </TimelineItem>
      </TimelineRoot>
    </div>
  );
}
