import { Dispatch, SetStateAction, HTMLInputTypeAttribute } from "react";
interface IInputProps {
  id?: string;
  name: string;
  type: HTMLInputTypeAttribute | undefined;
  label: string;
  value: string;
  placeHolder: string;
  setValue: Dispatch<SetStateAction<string>>;
  messageError?: string;
  required?: boolean;
}

export function InputField({
  type,
  id,
  label,
  value,
  placeHolder,
  setValue,
  required = true,
}: IInputProps) {
  return (
    <fieldset className="flex flex-col group relative w-[90%]">
      <label htmlFor={id} className="py-px font-medium">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeHolder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="min-w-[300px] max-h-[90%] p-2 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 border-b-2 border-zinc-200 rounded transition-colors duration-200 hover:border-primary-400/40 focus:border-primary-300 focus:outline-none"
        required={required}
      />
    </fieldset>
  );
}
