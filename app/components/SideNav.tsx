"use client"; // Asegúrate de no tener errores tipográficos
import Image from "next/image";
import { TextNav } from "./text";
import { useState, useEffect, useRef } from "react";

export default function SideNav() {
  const [activeSection, setActiveSection] = useState<string>("inicio");

  useEffect(() => {}, [activeSection]);

  const sections = useRef([
    "inicio",
    "about",
    "history",
    "project",
    "certificate",
    "skills",
  ]); // Define las secciones

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setActiveSection(sectionId);
            history.replaceState(null, "", `#${sectionId}`);
          }
        });
      },
      {
        root: null, // Viewport completo
        threshold: 0.6, // 60% visible para considerarse activa
      },
    );

    // Observar cada sección
    sections.current.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      // Limpiar observadores
      sections.current.forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);
  /*const [hash, setHash] = useState<string>();

  useEffect(() => {
    console.log(hash);
  }, [hash]);

  useEffect(() => {
    // Actualiza el hash inicial
    setHash(window.location.hash);
    console.log("x");

    // Escucha los cambios en el hash de la URL
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);

    // Limpia el evento al desmontar el componente
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);*/

  return (
    <div
      className="
            flex flex-col 
            place-items-center
            pt-36 
            w-full h-screen 
            font-[family-name:var(--font-roboto)]
        "
    >
      <Image
        src="/me.png"
        width={175}
        height={175}
        alt="Picture of the author"
      />
      <nav className="flex flex-col flex-wrap w-full ">
        <TextNav href="#inicio" text={"Inicio"} />
        <TextNav href="#about" text={"Sobre mi"} />
        <TextNav href="#history" text={"Historial"} />
        <TextNav href="#project" text={"Project"} />
        <TextNav href="#certificate" text={"Certificate"} />
        <TextNav href="#skills" text={"Habilidades"} />
      </nav>
    </div>
  );
}
