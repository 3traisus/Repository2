"use client";

import Image from "next/image";
import { TextNav } from "./text";
import { useState, useEffect, useRef } from "react";

// Define las secciones de manera centralizada
const SECTIONS = [
  { id: "inicio", text: "Inicio" },
  { id: "about", text: "Sobre mi" },
  { id: "history", text: "Historial" },
  { id: "project", text: "Proyectos" },
  { id: "certificate", text: "Certificados" },
  { id: "skills", text: "Habilidades" },
];

export default function SideNav() {
  const [activeSection, setActiveSection] = useState<string>("inicio");
  const [isManualSelection, setIsManualSelection] = useState<boolean>(false); // Bandera para evitar conflictos
  const observerRef = useRef<IntersectionObserver | null>(null); // Referencia al IntersectionObserver

  // Actualiza la sección activa al cambiar el hash en la URL
  useEffect(() => {
    const handleHashChange = () => {
      if (!isManualSelection) {
        setActiveSection(window.location.hash.substring(1) || "inicio");
      }
      setIsManualSelection(false); // Reinicia la bandera después del cambio
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [isManualSelection]);

  // Observa el scroll y actualiza la sección activa
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (!isManualSelection) {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const sectionId = entry.target.id;
              setActiveSection(sectionId);
              history.replaceState(null, "", `#${sectionId}`);
            }
          });
        }
      },
      {
        root: null, // Usa el viewport completo
        threshold: 0.6, // 60% visible para considerarse activa
      },
    );

    const observer = observerRef.current;

    // Observar cada sección
    SECTIONS.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      // Limpia observadores
      SECTIONS.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, [isManualSelection]);

  const handleMenuClick = (id: string) => {
    setIsManualSelection(true); // Indica que la selección es manual
    setActiveSection(id);
    history.replaceState(null, "", `#${id}`);
    // Opcional: si quieres desplazarte manualmente
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="
        flex flex-col 
        place-items-center
        pt-24
        w-full h-screen 
        font-[family-name:var(--font-roboto)]
      "
    >
      <Image
        src="/me.png"
        width={175}
        height={175}
        alt="Picture of the author"
        className="opacity-75"
      />
      <nav className="flex flex-col flex-wrap w-full pt-16">
        {SECTIONS.map(({ id, text }) => (
          <TextNav
            key={id}
            selected={activeSection === id}
            href={`#${id}`}
            text={text}
            onClick={() => handleMenuClick(id)} // Maneja el clic manual
          />
        ))}
      </nav>
    </div>
  );
}
