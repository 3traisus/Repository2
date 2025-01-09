import {
  Aboutme,
  BannerStart,
  Certifacte,
  HeaderSocial,
  History,
  Project,
  Skills,
} from "./components";

export default function Home() {
  return (
    <div className="grid grid-rows-[100px_1fr] font ">
      {" "}
      {/*font-[family-name:var(--font-geist-sans)]*/}
      <header className="flex row-start-1">
        <HeaderSocial />
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <section id="inicio">
          <BannerStart />
        </section>
        <section id="about">
          <Aboutme />
        </section>
        <section id="history">
          <History />
        </section>
        <section id="project">
          <Project />
        </section>
        <section id="certificate">
          <Certifacte />
        </section>
        <section id="skills">
          <Skills />
        </section>
      </main>
    </div>
  );
}
