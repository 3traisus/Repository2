import { FaGithub, FaLinkedin } from "react-icons/fa";
export function HeaderSocial() {
  return (
    <div className="flex w-full lg:max-w-[1024px] justify-end">
      <FaLinkedin className="w-[32px] h-[32px] mr-2" />
      <FaGithub className="w-[32px] h-[32px]" />
    </div>
  );
}
