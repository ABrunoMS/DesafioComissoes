function formatarMoeda(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function obterFaixaComissao(valor) {
  if (valor < 100) {
    return "Sem comissão";
  }

  if (valor < 500) {
    return "1%";
  }

  return "5%";
}

function TabelaComissoes({ vendas }) {
  if (vendas.length === 0) {
    return (
      <div className="empty-state">
        <h3>Nenhuma venda encontrada</h3>

        <p>
          Tente selecionar outro vendedor.
        </p>
      </div>
    );
  }

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Vendedor</th>
            <th>Valor da venda</th>
            <th>Faixa</th>
            <th>Comissão</th>
          </tr>
        </thead>

        <tbody>
          {vendas.map((venda, index) => (
            <tr key={`${venda.vendedor}-${index}`}>
              <td>
                <div className="seller">
                  <span>{venda.vendedor}</span>
                </div>
              </td>

              <td>
                {formatarMoeda(venda.valor)}
              </td>

              <td>
                <span
                  className={`commission-badge ${
                    venda.valor < 100
                      ? "none"
                      : venda.valor < 500
                      ? "low"
                      : "high"
                  }`}
                >
                  {obterFaixaComissao(venda.valor)}
                </span>
              </td>

              <td className="commission-value">
                {formatarMoeda(venda.comissao)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TabelaComissoes;