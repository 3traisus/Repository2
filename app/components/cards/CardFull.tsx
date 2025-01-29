import { Card, Tag } from "@chakra-ui/react";
import Image from "next/image";
import { IoLink } from "react-icons/io5";
export function CardFull({
  image,
  title,
  description,
  tags,
  href,
}: {
  image: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
}) {
  return (
    <Card.Root
      /*maxW="sm"*/ overflow="hidden"
      className="mb-4 bg-[#0b121c] hover:bg-[linear-gradient(90deg,_rgba(2,0,36,1)_0%,_rgba(37,67,62,1)_35%,_rgba(5,158,189,1)_100%)]"
    >
      <Image
        src={image}
        width={1024}
        height={350}
        alt="Screenshots of the dashboard project showing desktop version"
      />
      <Card.Body gap="2" className="items-center px-4">
        <Card.Title className="flex flex-row text-[18px] min-[463px]:text-normal-title w-fit">
          <a href={href} target={"_blank"} className="cursor-pointer">
            {title}
          </a>
          <IoLink size={16} className="ml-4" />
        </Card.Title>
        <Card.Description
          className="text-[14px] min-[463px]:text-text-card " /*line-clamp-1 hover:line-clamp-none*/
        >
          {description}
        </Card.Description>
      </Card.Body>
      <Card.Footer gap="2" className="flex flex-row justify-center">
        {tags.map((item, index) => (
          <Tag.Root key={index} className="py-2 px-4">
            <Tag.Label className="text-tags-title">
              {String(item).toUpperCase()}
            </Tag.Label>
          </Tag.Root>
        ))}
      </Card.Footer>
    </Card.Root>
  );
}
