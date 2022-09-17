export function Success() {
  return (
    <div className="h-screen flex flex-col gap-6 items-center justify-center bg-primary-800 text-zinc-50">
      <img src="/logo-ibraim.png" className="absolute top-10" />
      <h3 className="text-4xl font-bold">Enviado com sucesso!</h3>
      <p className="text-sm font-medium">
        Obrigado por entrar em contato, em breve te retornaremos.
      </p>
      <a
        href="https://ibraimcavalcante.com.br/"
        className="absolute bottom-20 underline underline-offset-4"
      >
        Conheça mais sobre mim!
      </a>
    </div>
  );
}
