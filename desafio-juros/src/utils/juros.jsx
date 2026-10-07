export function calcularJuros(valor, dataVencimento) {
  const hoje = new Date();
  const vencimento = new Date(`${dataVencimento}T00:00:00`);

  const diferencaEmMilissegundos = hoje - vencimento;
  const diasAtraso = Math.max(
    0,
    Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24))
  );

  const taxaDiaria = 0.025;

  const juros = valor * taxaDiaria * diasAtraso;
  const valorTotal = valor + juros;

  return {
    diasAtraso,
    juros,
    valorTotal,
  };
}