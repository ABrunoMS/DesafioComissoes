function TabelaEstoque({ estoque }) {
  return (
    <section>
      <h2>Estoque atual</h2>

      <table className="stock-table">
        <thead>
          <tr>
            <th>Código</th>
            <th>Produto</th>
            <th>Quantidade em estoque</th>
          </tr>
        </thead>

        <tbody>
          {estoque.map((produto) => (
            <tr key={produto.codigoProduto}>
              <td>{produto.codigoProduto}</td>
              <td>{produto.descricaoProduto}</td>
              <td>{produto.estoque}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default TabelaEstoque;