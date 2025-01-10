import styles from "./css/componentes.module.css";
export function Aboutme() {
  return (
    <div className="w-full pt-8 px-8 lg:max-w-[1024px]">
      <h1 className={styles["text-title"]}>Sobre mi</h1>
      <p className="ml-4 mt-4 text-wrap text-normal-content text-gray-500">
        Soy un egresado en ingeniería en sistemas computacionales apasionado por
        el desarrollo de aplicaciones y soluciones tecnológicas innovadoras.
        <span className="text-red-400">
          Especializado en aplicaciones moviles y web
        </span>
        {". "}
        Mi objetivo es contribuir en proyectos que me reten a mejorar mis
        habilidades y ser de utilidad a mi equipo de trabajo.{" "}
      </p>
    </div>
  );
}
