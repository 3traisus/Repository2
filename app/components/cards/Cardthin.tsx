import { Box, Card, Image, Tag } from "@chakra-ui/react";
//import Image from "next/image";

export function CardThin({
  image,
  title,
  description,
  tags,
}: {
  image: string;
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <Card.Root
      flexDirection="row"
      overflow="hidden"
      className="w-full mb-4 bg-[#0b121c] hover:bg-[linear-gradient(90deg,_rgba(2,0,36,1)_0%,_rgba(37,67,62,1)_35%,_rgba(5,158,189,1)_100%)]"
    >
      <Image
        src={image}
        maxH={250}
        maxW={"30%"}
        //objectFit="cover"
        //width={400}
        //height={250}
        className="w-[400px]"
        alt="Caffe Latte"
      />
      <Box>
        <Card.Body>
          <Card.Title className="text-[18px] min-[463px]:text-normal-title w-fit">
            {title}
          </Card.Title>
          <Card.Description
            className="text-[14px] min-[463px]:text-text-card " /*line-clamp-1 hover:line-clamp-none*/
          >
            {description}
          </Card.Description>
        </Card.Body>
        <Card.Footer gap="2">
          {tags.map((item, index) => (
            <Tag.Root key={index} className="py-2 px-4">
              <Tag.Label className="text-tags-title">
                {String(item).toUpperCase()}
              </Tag.Label>
            </Tag.Root>
          ))}
        </Card.Footer>
      </Box>
    </Card.Root>
  );
}
