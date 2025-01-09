import styles from "./css/text.module.css";

export function TextNav({ text, href }: { text: string; href: string }) {
  return (
    <a
      className={styles["text-nav"]} //"flex items-center heading-primary" +
      href={href}
    >
      <div className="w-14 h-[3px] mr-4 bg-gray-nav" />
      {text}
    </a>
  );
}
