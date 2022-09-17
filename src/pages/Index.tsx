import { ItemList } from "../components/ItemList";
import { MailchimpFormContainer } from "../components/MailchimpFormContainer.";
import { Section } from "../components/Section";

export function Index() {
  return (
    <>
      <Section
        id="sec-0"
        href="#sec-1"
        theme="dark"
        title="A Cirurgia Bariátrica é o tratamento mais efetivo contra a obesidade."
      >
        <div className="flex gap-6">
          <div>
            <p>
              <strong>Mude a sua vida</strong> através de um procedimento para
              <strong> perda de peso seguro e saudável</strong>, com método
              minimamente invasivo e <strong>recuperação rápida</strong>.
            </p>
          </div>
          <div>
            <h3>O primeiro passo só depende de você!</h3>
            <a href="#sec-5">Quero mudar de vida com a bariátrica!</a>
          </div>
        </div>
      </Section>

      <Section
        id="sec-1"
        href="#sec-2"
        theme="light"
        title="Não é o peso que você perde, é a vida que você ganha!"
      >
        <ul className="flex flex-col sm:flex-row">
          <ItemList
            indice="01"
            text="A Bariátrica é um procedimento muito seguro. As complicações que a própria obesidade ocasiona são muito mais comuns e até mais graves do que a própria cirurgia."
          />

          <ItemList
            indice="02"
            text="Você não vai ficar com cara de doente, você vai se tornar uma pessoa mais saudável, com autoestima elevada, com mais disposição para fazer as coisas que gosta e curtir a vida ao lado de quem ama."
          />

          <ItemList
            indice="03"
            text="No início você passa por um período de adaptação, onde a alimentação passa a ser mais restrita, mas ao longo do tempo você vai conseguir ingerir os alimentos normalmente e de forma saudável."
          />

          <ItemList
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
        <div></div>
      </Section>

      <Section
        id="sec-3"
        href="#sec-4"
        theme="light"
        title="Menos dor e Recuperação mais Rápida"
      >
        <div className="flex flex-col sm:flex-row items-center gap-6">
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
          <div>
            <p className="p-4 md:w-96 sm:text-start text-end sm:w-80 w-full">
              Com as <strong>novas tecnologias</strong> a cirurgia bariátrica se
              tornou cada vez menos invasiva. Gerando{" "}
              <strong>inúmeras vantagens</strong> ao paciente durante o
              procedimento e em especialmente no <strong>pós-operatório</strong>
              .
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="sec-4"
        href="#sec-5"
        theme="dark"
        title="Referência em Cirurgia Bariátrica e Metabólica"
      >
        <div></div>
      </Section>

      <Section
        id="sec-5"
        theme="light"
        title="Vamos dar início a sua mudança de vida?"
      >
        <MailchimpFormContainer />
      </Section>
    </>
  );
}
