import { Card, Heading, Tag } from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { IoLink } from "react-icons/io5";

export function CardText({
  title,
  description,
  tags,
  type,
  href,
}: {
  title: string;
  description: string;
  tags: string[];
  type: boolean;
  href: string;
}) {
  return (
    <Card.Root className="group flex-1 min-h-[278px] min-w-[250px]  self-start bg-[#0b121c] hover:bg-[linear-gradient(90deg,_rgba(2,0,36,1)_0%,_rgba(37,67,62,1)_35%,_rgba(5,158,189,1)_100%)]">
      {/*group-hover:max-w-[50%]*/}
      {/*md:flex-1  */}
      <Card.Header>
        <Heading
          className={`flex items-center text-[18px] min-[463px]:text-[24px] w-fit truncate ${!type ? "cursor-pointer" : ""}`}
        >
          {type && (
            <>
              <HiBuildingOffice2 size={16} className="mr-4" />
              {title}
            </>
          )}

          {!type && (
            <>
              <a href={href} target={"_blank"}>
                {title}
              </a>
              <IoLink size={16} className="ml-4" />
            </>
          )}
        </Heading>
      </Card.Header>
      <Card.Body color="fg.muted">
        <p
          className="text-[14px] min-[463px]:text-text-card line-clamp-5 group-hover:line-clamp-none" /*line-clamp-1 hover:line-clamp-none*/
        >
          {description}
        </p>
      </Card.Body>
      <Card.Footer
        gap="2"
        className="flex flex-row justify-center max-[632px]:flex-wrap"
      >
        {tags.map((item, index) => (
          <Tag.Root key={index} className="py-2 px-4">
            <Tooltip content={item}>
              <button>
                <Tag.Label className="text-tags-title">
                  {String(item).toUpperCase()}
                </Tag.Label>
              </button>
            </Tooltip>
          </Tag.Root>
        ))}
      </Card.Footer>
    </Card.Root>
  );
}

/*<div className="flex flex-1 group bg-cyan-200">
      {/*group hover:flex-auto hover:justify-center 
    </div>
*/
/*
<Card.Root className="flex-1 h-full min-w-[250px] bg-[#0b121c]">
      {/*md:flex-1  */
/*<Card.Header>
        <Heading
          className="text-[18px] min-[463px]:text-normal-title w-fit"
          size="md"
        >
          {title}
        </Heading>
      </Card.Header>
      <Card.Body color="fg.muted">
        <p
          className="text-[14px] min-[463px]:text-text-card " /*line-clamp-1 hover:line-clamp-none*/
/*>
          {description}
        </p>
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
*/
