import { useState } from "react";
import FormularioJuros from "./components/FormularioJuros";
import ResultadoJuros from "./components/ResultadoJuros";
import { calcularJuros } from "./utils/juros";
import "./App.css";

function App() {
  const [resultado, setResultado] = useState(null);

  function handleCalcular(dados) {
    const resultadoCalculado = calcularJuros(
      dados.valor,
      dados.dataVencimento
    );

    setResultado(resultadoCalculado);
  }

  return (
    <main>
      <h1>Calculadora de Juros</h1>

      <FormularioJuros onCalcular={handleCalcular} />

      {resultado && <ResultadoJuros resultado={resultado} />}
    </main>
  );
}

export default App;