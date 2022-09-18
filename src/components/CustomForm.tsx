import { useState } from "react";
import { Navigate } from "react-router-dom";
import { InputField } from "../components/InputField";
import { optionsPlan } from "../db/options-plan";
import { Button } from "./Button";

interface CustomFormProps {
  status: "error" | "success" | "sending" | null;
  message: string | Error | null;
  onValidated: (formData: {
    EMAIL: string;
    MERGE1: string;
    MERGE2: string;
    MERGE4: string;
  }) => void;
}

export function CustomForm({ status, message, onValidated }: CustomFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [plan, setPlan] = useState("Nenhum");
  const [messageError, setMessageError] = useState("");

  console.log(message);

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();

    if (name != "") {
      if (email.search(/\S+@\S+\.\S+/) === 0) {
        if (phone.length > 10) {
          setMessageError("");

          return onValidated({
            EMAIL: email,
            MERGE1: name,
            MERGE2: plan,
            MERGE4: phone,
          });
        }
        return setMessageError("O telefone está incorreto.");
      }
      return setMessageError("Insira um Email válido.");
    }
    return setMessageError("Campo Nome é obrigatório.");
  }

  return (
    <>
      {status === "success" && <Navigate to="/success" />}
      <h3 className="text-xl text-primary-800 px-6">
        Preencha o formulário e venha conversar comigo.
      </h3>
      <form
        className="flex flex-col items-center gap-4 py-6 rounded-xl shadow-md text-primary-800 relative"
        onSubmit={handleSubmit}
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        target="_blank"
      >
        <span className="absolute top-4 right-6 text-sm text-cancel-default">
          * Campos obrigatórios
        </span>
        <InputField
          id="mce-FNAME"
          name="FNAME"
          type="text"
          label="Nome"
          placeHolder="Seu nome completo"
          value={name}
          setValue={setName}
        />
        <InputField
          id="mce-EMAIL"
          name="EMAIL"
          type="email"
          label="Email"
          placeHolder="exemplo@email.com"
          value={email}
          setValue={setEmail}
        />
        <InputField
          id="mce-PHONE"
          name="PHONE"
          type="tel"
          label="Telefone (somente número)"
          placeHolder="XX X XXXX XXXX"
          pattern="[0-9]{2}[0-9]{5}[0-9]{4}"
          value={phone}
          setValue={setPhone}
        />
        <div className="w-[90%]">
          <fieldset className="flex flex-col gap-1 group relative w-[90%]">
            <label className="py-px font-medium">
              Selecione seu plano de saúde
            </label>
            <select
              className="w-fit p-1 rounded"
              value={plan}
              onChange={(e) => setPlan(e.target.value)}
            >
              {optionsPlan.map((option) => (
                <option className="p-1" key={option.name} value={option.value}>
                  {option.value}
                </option>
              ))}
            </select>
          </fieldset>
        </div>
        <small className="text-cancel-default">
          * Não atendo plano de saúde HAPVIDA
        </small>
        {messageError && (
          <div className="text-cancel-default">{messageError}</div>
        )}
        {status === "error" && (
          <div className="text-cancel-default">
            Ops... Algo deu errado, tente mais tarde!
          </div>
        )}
        {status === "sending" ? (
          <Button text="Enviando..." disabled={true} />
        ) : (
          <Button text="Enviar" />
        )}
      </form>
    </>
  );
}
