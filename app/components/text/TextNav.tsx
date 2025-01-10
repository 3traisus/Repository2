export function TextNav({
  text,
  href,
  selected,
}: {
  text: string;
  href: string;
  selected: boolean;
}) {
  return (
    <a
      className={`flex items-center font-semibold text-[32px]  ${selected ? "text-nav-color-select" : "text-gray-nav"}`} //"flex items-center heading-primary" +
      href={href}
    >
      <div
        className={`w-14 h-[3px] mr-4 ${selected ? "bg-nav-color-select" : "bg-gray-nav"}`}
      />
      {text}
    </a>
  );
}
