export function movimentarEstoque(estoqueAtual, tipo, quantidade) {
  if (quantidade <= 0) {
    throw new Error("A quantidade deve ser maior que zero.");
  }

  if (tipo === "entrada") {
    return estoqueAtual + quantidade;
  }

  if (tipo === "saida") {
    if (quantidade > estoqueAtual) {
      throw new Error("Estoque insuficiente para realizar a saída.");
    }

    return estoqueAtual - quantidade;
  }

  throw new Error("Tipo de movimentação inválido.");
}