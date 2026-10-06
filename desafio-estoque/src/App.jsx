import { useState } from "react";
import "./App.css";
import estoqueData from "./data/estoque.json";
import FormularioMovimentacao from "./components/FormularioMovimentacao";
import { movimentarEstoque } from "./utils/movimentacao";
import TabelaMovimentacoes from "./components/TabelaMovimentacoes";
import TabelaEstoque from "./components/TabelaEstoque";

function App() {
  const [estoque, setEstoque] = useState(estoqueData.estoque);
  const [movimentacoes, setMovimentacoes] = useState([]);

  function handleMovimentar(movimentacao) {
  try {
    const novoEstoque = estoque.map((produto) => {
      if (produto.codigoProduto !== movimentacao.produtoCodigo) {
        return produto;
      }

      return {
        ...produto,
        estoque: movimentarEstoque(
          produto.estoque,
          movimentacao.tipo,
          movimentacao.quantidade
        ),
      };
    });

    setEstoque(novoEstoque);

    setMovimentacoes((movimentacoesAtuais) => [
      ...movimentacoesAtuais,
      movimentacao,
    ]);
  } catch (error) {
    alert(error.message);
  }
}

  return (
    <main>
      <h1>Controle de Estoque</h1>

      <FormularioMovimentacao
        produtos={estoque}
        onMovimentar={handleMovimentar}
      />

      <TabelaEstoque estoque={estoque} />

      <TabelaMovimentacoes
        movimentacoes={movimentacoes}
        estoque={estoque}
      />

    </main>
  );
}

export default App;