export function TextNav({
  text,
  href,
  selected,
  setter,
}: {
  text: string;
  href: string;
  selected: boolean;
  setter: (id: string) => void;
}) {
  return (
    <a
      className={`group flex items-center font-semibold text-[24px] w-fit opacity-85 ${
        selected ? "text-nav-color-select" : "text-gray-nav hover:text-gray-600"
      }`}
      href={href}
      onClick={() => setter}
    >
      <div
        className={`w-12 h-[2px] mr-4 opacity-85 ${
          selected
            ? "bg-nav-color-select"
            : "bg-gray-nav group-hover:bg-gray-600"
        }`}
      />
      {text}
    </a>
  );
}
