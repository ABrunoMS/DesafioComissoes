import { useState } from 'react'
import vendasData from './data/vendas.json'
import { calcularComissao } from './utils/comissao'
import FiltroVendedores from './components/FiltroVendedores'
import TabelaComissoes from './components/TabelaComissoes'
import './App.css'

function App() {
  const vendas = vendasData.vendas;

  const [vendedoresSelecionados, setVendedoresSelecionados] = useState([]);
  
  const vendedores = [
    ...new Set(vendasData.vendas.map((venda) => venda.vendedor))
  ];
  
  const vendasFiltradas =
    vendedoresSelecionados.length === 0
      ? vendas
      : vendas.filter((venda) =>
          vendedoresSelecionados.includes(venda.vendedor)
        );

  const vendasComComissao = vendasFiltradas.map((venda) => ({
    ...venda,
    comissao: calcularComissao(venda.valor)
  }));

  const totalVendas = vendasFiltradas.reduce(
    (total, venda) => total + venda.valor,
    0
  );

  const totalComissao = vendasComComissao.reduce(
    (total, venda) => total + venda.comissao,
    0
  );

  
  
  return (
     <main>
      <h1>Comissões de Vendedores</h1>

      <FiltroVendedores
        vendedores={vendedores}
        selecionados={vendedoresSelecionados}
        onChange={setVendedoresSelecionados}
      />

      <section>
        <strong className="totals">
          Total de vendas:{" "}
          {totalVendas.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </strong>

        <strong>
          Total de comissão:{" "}
          {totalComissao.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </strong>
      </section>

      <TabelaComissoes
        vendas={vendasComComissao}
      />
    </main>
  );
}

export default App;
