import * as A from "@radix-ui/react-accordion";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { useRef } from "react";

export default function Accordion() {
  return (
    <A.Root type="single" className="w-[300px] rounded-md" collapsible>
      <AccordionItem value="item1">
        <h2>Option 1</h2>
      </AccordionItem>

      <AccordionItem value="item2">
        <h2>Option 2</h2>
      </AccordionItem>
    </A.Root>
  );
}

function AccordionItem({
  children,
  value,
}: {
  children: React.ReactNode;
  value: string;
}) {
  console.log("rendered");
  return (
    <A.Item
      value={value}
      className="bg-red-200 mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10"
    >
      <A.Header>
        <A.Trigger className="flex items-center gap-1 duration-300 h-[45px] flex-1 justify-between group bg-green-200 px-5 text-[15px] leading-none text-violet11 w-full">
          {children}
          <ChevronRightIcon
            className="group-data-[state='open']:rotate-90 transition-transform duration-300"
            aria-hidden
          />
        </A.Trigger>
      </A.Header>

      <A.Content className="text-mauve11 bg-green-300 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]">
        <p className="px-5 py-[15px]">
          inside contents Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. In nemo fuga ut ratione vel temporibus praesentium voluptate.
          Repellendus voluptatum provident in similique sequi, exercitationem
          aliquid maxime nesciunt iste animi corrupti.
        </p>
      </A.Content>
    </A.Item>
  );
}

Accordion.Item = AccordionItem;
