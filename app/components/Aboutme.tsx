import styles from "./css/componentes.module.css";
export function Aboutme() {
  return (
    <div className={styles["container"]}>
      <h1 className={styles["text-title"]}>Sobre mi</h1>
      <p className="ml-4 mt-4 text-wrap text-normal-content text-gray-500">
        Soy un egresado en ingeniería en sistemas computacionales, desde chico
        me intereso el mundo de las tegnologias al empezar la prepa tuve mi
        primera oportunidad de estudiar este mundo
        {". "}
        <span className="text-red-400">
          Especializado en aplicaciones moviles y web
        </span>
        {". "}
        Mi objetivo es contribuir en proyectos que me reten a mejorar mis
        habilidades mientras aporto a mi equipo de trabajo.{" "}
      </p>
    </div>
  );
}
