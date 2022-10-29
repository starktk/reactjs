import "./styles.css";

function Filme(props) {
  const { filme } = props;
  return (
    <div>
      Nome: <h2>{filme.nome}</h2>
    </div>
  );
}

export default function App() {
  const filmes = [
    {
      nome: "O Senhor do Aneis: A Sociedade do Anel",
      lancamento: 2002,
      oscar: true,
      diretores: ["Peter Jackson"],
      generos: ["Fantasia", "Aventura"]
    },
    {
      nome: "Harry Potter e a Pedra Filosofal",
      lancamento: 2001,
      oscar: true,
      diretores: ["Chris Columbus"],
      generos: ["Fantasia"]
    },
    {
      nome: "Matrix",
      oscar: true,
      lancamento: 1999,
      diretores: ["Lana Wachowski", "Lilly Wachowski"],
      generos: ["Ação", "Ficção Cientifica"]
    },
    {
      nome: "Meninas Malvadas",
      oscar: false,
      lancamento: 2004,
      diretores: ["Mark Waters"],
      generos: ["Comédia"]
    }
  ];

  return (
    <div>
      {filmes
        .filter(({ oscar }) => oscar === true)
        .map(({ nome }) => {
          return <h2>{nome}</h2>;
        })}
    </div>
  );
}
