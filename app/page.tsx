import {
  Aboutme,
  BannerStart,
  Certifacte,
  History,
  Project,
  Skills,
} from "./components";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col gap-8  pb-8 ">
      {/*font-[family-name:var(--font-geist-sans)]*/}
      <section id="begin" className="flex w-full justify-center">
        <BannerStart />
      </section>
      <section id="about" className="flex w-full justify-center">
        <Aboutme />
      </section>
      <section id="history" className="flex w-full justify-center">
        <History />
      </section>
      <section id="skills" className="flex w-full justify-center">
        <Skills />
      </section>
      <section id="project" className="flex w-full justify-center">
        <Project />
      </section>
      <section id="certificate" className="flex w-full justify-center">
        <Certifacte />
      </section>
    </div>
  );
}
