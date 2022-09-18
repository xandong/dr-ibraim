import { Check, IconProps } from "phosphor-react";

interface ItemUnorderedProps {
  text: string;
  Icon?: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
}

export function ItemUnordered({ text, Icon }: ItemUnorderedProps) {
  return (
    <li className="flex gap-2 items-center py-1">
      <div className="text-success-default text-3xl ">
        {Icon ? <Icon /> : <Check weight="bold" />}
      </div>
      <span>{text}</span>
    </li>
  );
}
