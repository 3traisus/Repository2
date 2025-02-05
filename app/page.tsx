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
    <div className="w-full h-full flex flex-col items-center pb-8 ">
      {/*font-[family-name:var(--font-geist-sans)]*/}
      <section id="begin" className="flex w-full justify-center">
        <BannerStart />
      </section>
      <section id="about" className="flex-1 max-w-[1024px] ">
        <Aboutme />
      </section>
      <section id="history" className="flex-1 max-w-[1024px] ">
        <History />
      </section>
      <section id="skills" className="flex-1 max-w-[1024px] ">
        <Skills />
      </section>
      <section id="project" className="flex-1 max-w-[1024px] ">
        <Project />
      </section>
      <section id="certificate" className="flex-1 max-w-[1024px] ">
        <Certifacte />
      </section>
    </div>
  );
}
