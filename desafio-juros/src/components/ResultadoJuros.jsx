function ResultadoJuros({ resultado }) {
  return (
    <section>
      <h2>Resultado</h2>

      <p>
        <span>Dias em atraso</span>
        <strong>{resultado.diasAtraso}</strong>
      </p>

      <p>
        <span>Juros</span>
        <strong>
          {resultado.juros.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </strong>
      </p>

      <p>
        <span>Valor total</span>
        <strong>
          {resultado.valorTotal.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </strong>
      </p>
    </section>
  );
}

export default ResultadoJuros;