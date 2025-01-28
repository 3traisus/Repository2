import { Card, Heading, HStack, Text } from "@chakra-ui/react";
import { ReactElement } from "react";

interface data {
  image: (ReactElement | undefined)[];
  tools: string[];
}

export function CardSkills({ title, data }: { title: string; data: data }) {
  const images = data.image;
  const tools = data.tools;

  return (
    <div className="w-fit">
      <Heading className="text-[18px]" textAlign={"center"}>
        {title}
      </Heading>
      <HStack>
        {images.map((item, index) => (
          <Card.Root
            key={index}
            className="w-[100px] h-[150px] bg-[#0b121c] hover:bg-[linear-gradient(90deg,_rgba(2,0,36,1)_0%,_rgba(37,67,62,1)_35%,_rgba(5,158,189,1)_100%)]
            min-[510px]:w-[140px] 
            " //min-[510px]:min-w-[140px] min-w-[100px]
          >
            {/*0d1c19 */}
            <Card.Body className={`flex items-center justify-center`}>
              {item || <></>}
              <Text
                className={`font-bold text-[18px] min-[510px]:truncate max-[510px]:text-[14px]`}
              >
                {tools[index]}
              </Text>
            </Card.Body>
          </Card.Root>
        ))}
      </HStack>
    </div>
  );
}

/*
        
*/

/*
<Card.Root className="w-full md:w-[30%] min-[463px]:w-[49%] group">
      <Card.Header>
        <Center>
          <Heading
            className="text-[18px] font-bold underline decoration-1 w-full text-center line-clamp-1 group-hover:line-clamp-none"
            size="md"
          >
            {title}
          </Heading>
        </Center>
      </Card.Header>
      <Card.Body className="flex flex-row  justify-evenly py-4">
        {image.map((item, index) => (
          <Image
            key={index}
            w={50}
            h={50}
            minH={50}
            src={item}
            alt="Iamgen de la plataforma"
          />
        ))}
      </Card.Body>
    </Card.Root>


    <Card.Root>
      <Card.Header>
        <Heading size="3xl" letterSpacing="tight">
          {title}
        </Heading>
      </Card.Header>
    </Card.Root>
*/

/*
    <Tabs.Root defaultValue="lenguajes">
      <Tabs.List>
        <Tabs.Trigger value="lenguajes">
          <LuUser />
          Lenguajes
        </Tabs.Trigger>
        <Tabs.Trigger value="frontend">
          <LuFolder />
          Frontend
        </Tabs.Trigger>
        <Tabs.Trigger value="backend">
          <LuSquareCheck />
          Backend
        </Tabs.Trigger>
        <Tabs.Trigger value="frameworks">
          <LuUser />
          Frameworks
        </Tabs.Trigger>
        <Tabs.Trigger value="database">
          <LuFolder />
          Database
        </Tabs.Trigger>
        <Tabs.Trigger value="herramientas">
          <LuSquareCheck />
          Herramientas y librerias
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="lenguajes">Manage your team members</Tabs.Content>
      <Tabs.Content value="frontend">Manage your projects</Tabs.Content>
      <Tabs.Content value="backend">
        Manage your tasks for freelancers
      </Tabs.Content>
      <Tabs.Content value="frameworks">Manage your team members</Tabs.Content>
      <Tabs.Content value="database">Manage your projects</Tabs.Content>
      <Tabs.Content value="herramientas">
        Manage your tasks for freelancers
      </Tabs.Content>
    </Tabs.Root>
*/
