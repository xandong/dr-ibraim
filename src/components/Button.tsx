interface ButtonProps {
  disabled?: boolean;
  text: string;
}

export function Button({ text, disabled = false }: ButtonProps) {
  const isDisabled = disabled
    ? "bg-primary-600 cursor-not-allowed"
    : " bg-primary-400 hover:bg-primary-300 ";
  return (
    <button
      disabled={disabled}
      className={`${isDisabled} my-2 text-zinc-50 font-semibold py-3 px-10 transition-colors rounded`}
    >
      {text}
    </button>
  );
}
