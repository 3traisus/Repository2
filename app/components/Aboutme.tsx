import styles from "./css/componentes.module.css";
export function Aboutme() {
  return (
    <div className={styles["container"]}>
      <h1 className={styles["text-title"]}>Sobre mi</h1>
      <p className="ml-4 mt-4 text-wrap text-normal-content text-gray-500">
        Soy egresado de Ingeniería en Sistemas Computacionales. Mi primera
        motivación para adentrarme en este mundo llegó en forma de consola; para
        ser más exacto, una PlayStation 2 y, más adelante, una Wii. Durante la
        preparatoria, tuve la oportunidad de cursar la materia de programación,
        lo que me permitió descubrir mi gusto por codificar y razonar procesos
        lógicos. Ver cómo cada línea de código transformaba una idea en realidad
        era una experiencia increíblemente satisfactoria. Hoy, gracias a ese
        rumbo que tomé, tengo el orgullo de decir que soy desarrollador Frontend
        y Backend.
        {". "}
        <span className="text-color-mostaza">
          Especializado en aplicaciones moviles y web
        </span>
        {". "}
        Hoy en día, busco contribuir a proyectos que representen un desafío y me
        permitan mejorar mis habilidades, trabajando junto a los mejores.
      </p>
    </div>
  );
}
