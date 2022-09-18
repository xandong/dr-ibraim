import { ItemOrderList } from "../components/ItemOrderList";
import { ItemUnordered } from "../components/ItemUnordered";
import { MailchimpFormContainer } from "../components/MailchimpFormContainer.";
import { Section } from "../components/Section";

export function Index() {
  return (
    <>
      <section className="min-h-screen relative lg:px-28 md:px-10 px-2 sm:py-10 py-6 pb-16 flex flex-col text-primary items-center bg-gradient-to-b  to-primary-800 from-primary-600 text-zinc-50">
        <header className="w-full pb-6 flex sm:justify-start justify-center">
          <img src="/logo-ibraim.png" alt="Logo Doutor Ibraim" />
        </header>

        <div className="flex flex-col" id="sec-0">
          <div>
            <h1 className="xl:px-40 lg:px-20 px-10 sm:pb-10 pb-6 pt-4 sm:text-4xl text-3xl text-center font-extrabold">
              A Cirurgia Bariátrica é o tratamento mais efetivo contra a
              obesidade.
            </h1>
          </div>

          <div className="flex md:flex-row flex-col gap-10 items-center p-2 text-center">
            <div className="md:w-1/2 w-full flex items-center justify-center">
              <img
                src="/video1.png"
                alt=""
                className="rounded-md shadow-md hover:shadow-xl hover:scale-105 transition-all duration-[350ms]"
              />
            </div>

            <div className="md:w-1/2 w-full flex flex-col items-center gap-2">
              <h3 className="text-3xl font-bold">
                O primeiro passo só depende de você!
              </h3>
              <p className="pt-4 md:px-0 px-20">
                <strong>Mude a sua vida</strong> através de um procedimento para
                <strong> perda de peso seguro e saudável</strong>, com método
                minimamente invasivo e <strong>recuperação rápida</strong>.
              </p>
              <a
                href="#sec-5"
                className="flex w-fit mt-6 font-medium text-lg py-3 px-6  bg-zinc-100 hover:bg-zinc-50 shadow-md hover:shadow-xl my-2 text-primary-600 transition-all rounded"
              >
                Conversar com o Dr. Ibraim
              </a>
            </div>
          </div>
        </div>
      </section>

      <Section
        id="sec-1"
        href="#sec-2"
        theme="light"
        title="Não é o peso que você perde, é a vida que você ganha!"
      >
        <ul className="flex flex-col sm:flex-row">
          <ItemOrderList
            indice="01"
            text="A Bariátrica é um procedimento muito seguro. As complicações que a própria obesidade ocasiona são muito mais comuns e até mais graves do que a própria cirurgia."
          />

          <ItemOrderList
            indice="02"
            text="Você não vai ficar com cara de doente, você vai se tornar uma pessoa mais saudável, com autoestima elevada, com mais disposição para fazer as coisas que gosta e curtir a vida ao lado de quem ama."
          />

          <ItemOrderList
            indice="03"
            text="No início você passa por um período de adaptação, onde a alimentação passa a ser mais restrita, mas ao longo do tempo você vai conseguir ingerir os alimentos normalmente e de forma saudável."
          />

          <ItemOrderList
            indice="04"
            text="Reganho de peso só acontece para quem não faz acompanhamento e não segue as orientações da equipe. Quem mantém as consultas em dias permanece no objetivo por toda a vida."
          />
        </ul>
      </Section>

      <Section
        id="sec-2"
        href="#sec-3"
        theme="dark"
        title="Veja como a Cirurgia Bariátrica transformou a vida dessas pessoas"
      >
        <div className="flex sm:flex-row flex-col gap-10 p-4">
          <div>
            <img
              src="/video2.png"
              alt=""
              className="rounded-md shadow-md hover:shadow-xl hover:scale-105 transition-all duration-[350ms]"
            />
          </div>
          <div>
            <img
              src="/video3.png"
              alt=""
              className="rounded-md shadow-md hover:shadow-xl hover:scale-105 transition-all duration-[350ms]"
            />
          </div>
        </div>
        <a
          href="#sec-5"
          className="flex w-fit mt-6 font-medium text-lg py-3 px-6  bg-zinc-100 hover:bg-zinc-50 shadow-md hover:shadow-xl my-2 text-primary-600 transition-all rounded"
        >
          Agendar Consulta
        </a>
      </Section>

      <Section
        id="sec-3"
        href="#sec-4"
        theme="light"
        title="Menos dor e Recuperação mais Rápida"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between md:gap-10 gap-6">
          <div className="flex justify-center md:w-80 sm:w-64">
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet="/doutor-operando-5x6.png"
              />
              <source
                media="(max-width: 600px)"
                srcSet="/doutor-operando.png"
              />
              <img
                className="rounded-lg"
                src="/doutor-operando.png"
                alt="Doutor operando"
              />
            </picture>
          </div>
          <div className="flex flex-col items-center">
            <p className="py-4 md:w-96 sm:text-start text-end sm:w-80 w-full">
              Com as <strong>novas tecnologias</strong> a cirurgia bariátrica se
              tornou cada vez menos invasiva. Gerando{" "}
              <strong>inúmeras vantagens</strong> ao paciente durante o
              procedimento e em especialmente no <strong>pós-operatório</strong>
              .
            </p>
            <ul className="px-10">
              <ItemUnordered text="Menor dor no pós-operatório" />
              <ItemUnordered text="Menor lesão tecidual" />
              <ItemUnordered text="Melhor resultado estético" />
              <ItemUnordered text="Período de internação mais curto" />
              <ItemUnordered text="Menor perda sanguínea" />
              <ItemUnordered text="Rápido retorno às atividades diárias" />
            </ul>
            <a
              href="#sec-5"
              className="flex w-fit mt-6 font-medium text-lg py-3 px-6  bg-primary-400 hover:bg-primary-300 my-2 text-zinc-50 transition-colors rounded"
            >
              Quero mudar de vida com a bariátrica
            </a>
          </div>
        </div>
      </Section>

      <Section
        id="sec-4"
        href="#sec-5"
        theme="dark"
        title="Referência em Cirurgia Bariátrica e Metabólica"
      >
        <div className="flex md:flex-row flex-col items-center gap-10 lg:px-20 px-2">
          <div className="sm:w-2/3 w-full flex flex-col gap-4">
            <p>
              O Dr Ibraim Cavalcante é Cirurgião Geral e Bariátrico formado pela
              Universidade Federal do Ceará (UFC) e membro titular da Sociedade
              Brasileira de Cirurgia Bariátrica e Metabólica (SBCBM). Ceará.
            </p>
            <p>
              Fez residência em Cirurgia Geral pelo instituto José Frota e
              especialização em Cirurgia Bariátrica e Metabólica pelo Hospital
              Alemão Oswald Cruz.
            </p>
            <p>
              Em sua prática médica atua em diversas especialidades da cirurgia
              do aparelho digestivo e cirurgia bariátrica, com destaque especial
              para cirurgia minimamente invasiva por videolaparoscopia, redução
              do estômago por endoscopia e cirurgia robótica.
            </p>
            <p>
              Atualmente é coordenador do serviço de cirurgia do Hospital São
              Mateus e diretor do Centro Médico Digestive Center, localizado no
              Complexo São Mateus, em Fortaleza, Ceará.
            </p>
          </div>
          <div>
            <img
              src="/doutor-ibraim.png"
              alt="Doutor Ibraim"
              className="rounded-lg w-400"
            />
          </div>
        </div>
      </Section>

      <Section
        id="sec-5"
        theme="light"
        title="Vamos dar início a sua mudança de vida?"
      >
        <MailchimpFormContainer />
      </Section>
      <footer
        className="w-full py-10 sm:px-10 px-4 bg-zinc-800 text-zinc-50
      flex justify-between items-center"
      >
        <div>
          {" "}
          <img
            src="/logo-ibraim.png"
            alt="Logomarca Doutor Ibraim Cavalcante"
          />
          <span>Doutor Ibraim Cavalcante</span>
          <span>Todos os direitos reservados &copy;</span>
        </div>
        <span>
          Desenvolvido por{" "}
          <a
            className="hover:scale-110 hover:underline underline-offset-2"
            href="https://github.com/xandong"
            target={"_blank"}
          >
            @xandong
          </a>
        </span>
      </footer>
    </>
  );
}
