function FiltroVendedores({
  vendedores,
  selecionados,
  onChange,
}) {
  function selecionar(vendedor) {
    if (selecionados.includes(vendedor)) {
      onChange(
        selecionados.filter(
          (item) => item !== vendedor
        )
      );

      return;
    }

    onChange([...selecionados, vendedor]);
  }

  function selecionarTodos() {
    onChange([]);
  }

  const todosSelecionados =
    selecionados.length === 0;

  return (
    <div>
      <h2>Filtrar vendedores</h2>

      <div className="seller-filters">
        <button
          type="button"
          className={`filter-button ${
            todosSelecionados ? "active" : ""
          }`}
          onClick={selecionarTodos}
        >
          Todos
        </button>

        {vendedores.map((vendedor) => {
          const selecionado =
            selecionados.includes(vendedor);

          return (
            <button
              type="button"
              key={vendedor}
              className={`filter-button ${
                selecionado ? "active" : ""
              }`}
              onClick={() => selecionar(vendedor)}
            >
              {vendedor}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default FiltroVendedores;