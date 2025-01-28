"use client";
import { Heading, HStack } from "@chakra-ui/react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
export function HeaderSocial() {
  const redirectToSocial = (url: string) => {
    window.open(url, "_blank"); // Abre la URL en una nueva pestaña
  };

  return (
    <div className="flex w-full h-[50px] max-w-[1024px] justify-end items-center">
      <HStack className="flex-1 justify-end space-x-16 h-fit text-[16px] font-bold ">
        <Link className="text-gray-400" href="/">
          portafolio
        </Link>
        <Link className="text-gray-400" href="/blog">
          blog
        </Link>
        <HStack>
          <FaLinkedin
            className="w-[32px] h-[32px] mr-2 cursor-pointer"
            onClick={() =>
              redirectToSocial("https://www.linkedin.com/in/3traisus/")
            }
          />
          <FaGithub
            className="w-[32px] h-[32px] cursor-pointer"
            onClick={() => redirectToSocial("https://github.com/3traisus")}
          />
          <a className="rounded self-center font text-[12px] bg-gray-nav w-fit p-1 cursor-pointer">
            Descargar CV
          </a>
        </HStack>
      </HStack>
    </div>
  );
}
