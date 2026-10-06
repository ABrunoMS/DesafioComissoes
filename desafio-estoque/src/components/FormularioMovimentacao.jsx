import { useState } from "react";

function FormularioMovimentacao({ produtos, onMovimentar }) {
  const [produtoSelecionado, setProdutoSelecionado] = useState("");
  const [tipo, setTipo] = useState("entrada");
  const [quantidade, setQuantidade] = useState("");
  const [descricao, setDescricao] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const movimentacao = {
      id: Date.now(),
      produtoCodigo: Number(produtoSelecionado),
      tipo,
      quantidade: Number(quantidade),
      descricao,
    };

    onMovimentar(movimentacao);

    setProdutoSelecionado("");
    setTipo("entrada");
    setQuantidade("");
    setDescricao("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Nova movimentação</h2>

      <div>
        <label htmlFor="produto">Produto</label>

        <select
          id="produto"
          value={produtoSelecionado}
          onChange={(event) => setProdutoSelecionado(event.target.value)}
          required
        >
          <option value="">Selecione um produto</option>

          {produtos.map((produto) => (
            <option
              key={produto.codigoProduto}
              value={produto.codigoProduto}
            >
              {produto.codigoProduto} - {produto.descricaoProduto}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="tipo">Tipo de movimentação</label>

        <select
          id="tipo"
          value={tipo}
          onChange={(event) => setTipo(event.target.value)}
        >
          <option value="entrada">Entrada</option>
          <option value="saida">Saída</option>
        </select>
      </div>

      <div>
        <label htmlFor="quantidade">Quantidade</label>

        <input
          id="quantidade"
          type="number"
          min="1"
          value={quantidade}
          onChange={(event) => setQuantidade(event.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="descricao">Descrição</label>

        <input
          id="descricao"
          type="text"
          placeholder="Ex.: Compra de mercadoria"
          value={descricao}
          onChange={(event) => setDescricao(event.target.value)}
          required
        />
      </div>

      <button type="submit">
        Registrar movimentação
      </button>
    </form>
  );
}

export default FormularioMovimentacao;