import { HStack } from "@chakra-ui/react";
import { CardText } from "./cards";
import styles from "./css/componentes.module.css";

const cards = {
  1: {
    image: "/code.png",
    title: "Proyecto 1",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicin elit. Libero quibusdam tempore enim culpa corrupti hic quisquam voluptas aut sit assumenda.",
    tags: ["TS", "JS", "React"],
  },
  2: {
    image: "/code.png",
    title: "Proyecto 2",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicin elit. Libero quibusdam tempore enim culpa corrupti hic quisquam voluptas aut sit assumenda.",
    tags: ["TS", "JS", "React"],
  },
  3: [
    {
      title: "POS ChamanKing",
      description:
        "Desarrollo de una aplicación de punto de ventas para una tienda naturista, creada como parte de la materia de Desarrollo Móvil utilizando Android Studio. El proyecto consistió en colaborar con un negocio local, el cual asimilaba un cliente real, con el objetivo de analizar y satisfacer sus necesidades específicas mediante soluciones tecnológicas.",
      tags: ["XML", "Kotlin", "Firebase"],
      type: false,
      href: "https://github.com/3traisus/ChamanKingV2",
    },
    {
      title: "Dashboard Chamaking",
      description:
        "Desarrollo de un dashboard para la administración de una tienda naturista, creado como parte de la materia de Desarrollo con .NET. Este proyecto incluyó la implementación de un sistema CRUD completo, permitiendo la gestión eficiente de productos, clientes, ventas y demás información clave del negocio. Además, se diseñó con un enfoque en la usabilidad y la sencilles, asegurando que las necesidades operativas del cliente fueran atendidas de manera efectiva. La colaboración con el cliente permitió alinear las funcionalidades del sistema con sus procesos reales, garantizando una solución práctica y escalable.",
      tags: [".net", "C#", "html"],
      type: false,
      href: "https://github.com/3traisus/NatuKing",
    },
    {
      title: "Copilador",
      description:
        "Proyecto desarrollado durante la materia de Autómatas, enfocado en poner a prueba nuestras habilidades de lógica y análisis. El objetivo fue diseñar un lenguaje que simulara las características de un lenguaje de programación, cumpliendo con los componentes clave de gramática, léxico y análisis sintáctico. Además, se implementó un intérprete funcional para ejecutar instrucciones en este lenguaje, demostrando su capacidad práctica y validando su diseño a través de casos de uso específicos.",
      tags: ["java.awt", "Java"],
      type: false,
      href: "https://github.com/3traisus/Copilador",
    },
    {
      title: "Backend",
      description:
        "API desarrollada en Node.js y Express para el consumo de datos, pruebas de aplicaciones y middleware.",
      tags: ["Node.js", "Express", "JS"],
      type: false,
      href: "https://github.com/3traisus/BackendTutWithAWS",
    },
    {
      title: "Gestor de horarios",
      description:
        "Durante mi periodo residencial, desarrollé toda la lógica de programación, además de la creación de componentes, navegación, autenticación, peticiones HTTPS, estructura del proyecto y middleware.",
      tags: ["React Native", "Expo", "TS", "JS"],
      type: true,
      href: "",
    },
    {
      title: "Apps generales",
      description:
        "Durante mi periodo residencial, realicé varios ajustes y mejoras de diseño, además de la implementación de nuevas utilidades que ayudé a identificar.",
      tags: ["React Native", "Expo", "TS", "JS"],
      type: true,
      href: "",
    },
    {
      title: "Apps bancarias",
      description:
        "Durante mi periodo residencial, interactué con aplicaciones móviles bancarias que estaban obsoletas y necesitaban ser revitalizadas. Por ende, actualicé componentes, librerías, dependencias y navegación, además de ajustar los diseños.",
      tags: ["React Native", "Expo", "TS", "JS"],
      type: true,
      href: "",
    },
  ],
};
export function Project() {
  return (
    <div className={styles["container"]}>
      <h1 className={styles["text-title"]}>Proyectos</h1>
      {/* 
      <CardFull
        image={cards[1].image}
        title={cards[1].title}
        description={cards[1].description}
        tags={cards[1].tags}
      />
      <div className="hidden md:block">
        <CardThin
          image={cards[2].image}
          title={cards[2].title}
          description={cards[2].description}
          tags={cards[2].tags}
        />
      </div>
      <div className="md:hidden">
        <CardFull
          image={cards[2].image}
          title={cards[2].title}
          description={cards[2].description}
          tags={cards[2].tags}
        />
      </div>
      */}
      <HStack className="flex flex-wrap ">
        {cards[3].map((item, index) => (
          <CardText
            key={index}
            title={item.title}
            description={item.description}
            tags={item.tags}
            type={item.type}
            href={item.href}
          />
        ))}
      </HStack>
    </div>
  );
}
