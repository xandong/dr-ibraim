import { ItemList } from "./components/ItemList";
import { Section } from "./components/Section";

export function App() {
  return (
    <>
      <Section
        title="Não é o peso que você perde, é a vida que você ganha!"
        theme="light"
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
        title="Veja como a Cirurgia Bariátrica transformou a vida dessas pessoas"
        theme="dark"
      >
        <div></div>
      </Section>

      <Section title="Menos dor e Recuperação mais Rápida" theme="light">
        <div></div>
      </Section>

      <Section
        title="Referência em Cirurgia Bariátrica e Metabólica"
        theme="dark"
      >
        <div></div>
      </Section>

      <Section title="Vamos dar início a sua mudança de vida?" theme="light">
        <div></div>
      </Section>
    </>
  );
}
