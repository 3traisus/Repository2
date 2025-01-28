import { Card, Heading, HStack } from "@chakra-ui/react";
import Image from "next/image";
import { ReactElement } from "react";
export function CardCertificate({
  imagePlatform,
  imageCertificate,
  title,
  platform,
  description,
  href,
}: {
  imagePlatform: ReactElement;
  imageCertificate: string;
  title: string;
  platform: string;
  description: string;
  href: string;
}) {
  return (
    <Card.Root className="group min-h-[300px] max-h-[300px] mb-4 md:max-w-[49%] md:min-w-[250px] bg-[#0b121c] hover:bg-[linear-gradient(90deg,_rgba(2,0,36,1)_0%,_rgba(37,67,62,1)_35%,_rgba(5,158,189,1)_100%)] hover:max-h-full ">
      <Card.Header className="flex flex-row">
        <div className="flex w-[50px] items-center justify-center">
          {imagePlatform}
        </div>
        <HStack>
          <div>
            <Heading
              className="text-[18px] w-fit min-[1210px]:text-normal-title"
              size="md"
            >
              {title}
            </Heading>
            <Heading className="text-[16px] w-fit text-color-mostaza" size="md">
              {platform}
            </Heading>
          </div>
        </HStack>
      </Card.Header>
      <Card.Body color="fg.muted">
        <p
          className="text-[14px] min-[463px]:text-text-card line-clamp-2 group-hover:line-clamp-none" /*line-clamp-1 hover:line-clamp-none*/
        >
          {description}
        </p>
      </Card.Body>
      <Card.Footer
        gap="2"
        className="flex flex-row justify-center items-center"
      >
        <Image
          width={150}
          height={75}
          src={imageCertificate}
          //src={"/code.png"}
          alt="Iamgen de la plataforma"
          className="mr-4"
        />
        <Heading
          className="text-[14px] min-[1210px]:text-[16px] font-bold w-fit cursor-pointer underline underline-offset-1"
          size="md"
        >
          <a href={href} target="_blank">
            ver certificado
          </a>
        </Heading>
      </Card.Footer>
    </Card.Root>
  );
}
