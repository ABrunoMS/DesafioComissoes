function TabelaMovimentacoes({ movimentacoes, estoque }) {
  if (movimentacoes.length === 0) {
    return (
      <section>
        <h2>Movimentações</h2>
        <p>Nenhuma movimentação registrada.</p>
      </section>
    );
  }

  function obterNomeProduto(codigoProduto) {
    const produto = estoque.find(
      (produto) => produto.codigoProduto === codigoProduto
    );

    return produto ? produto.descricaoProduto : "Produto não encontrado";
  }

  return (
    <section>
      <h2>Movimentações</h2>

      <table className="movement-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Produto</th>
            <th>Tipo</th>
            <th>Quantidade</th>
            <th>Descrição</th>
          </tr>
        </thead>

        <tbody>
          {movimentacoes.map((movimentacao) => (
            <tr key={movimentacao.id}>
              <td>{movimentacao.id}</td>

              <td>
                {obterNomeProduto(movimentacao.produtoCodigo)}
              </td>

              <td>
                <span className={`movement-badge ${movimentacao.tipo}`}>
                  {movimentacao.tipo}
                </span>
              </td>

              <td>{movimentacao.quantidade}</td>

              <td>{movimentacao.descricao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default TabelaMovimentacoes;