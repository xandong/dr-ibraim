interface ItemListProps {
  indice: string;
  text: string;
}

export function ItemList({ indice, text }: ItemListProps) {
  return (
    <li className="p-4 text-center">
      <span className="lg:text-8xl md:text-7xl sm:text-6xl text-5xl font-bold italic">
        {indice}
      </span>
      <p className="sm:px-0 px-10 pt-2 pb-6 sm:text-start text-center">
        {text}
      </p>
    </li>
  );
}
