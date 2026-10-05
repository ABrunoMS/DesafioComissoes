export function calcularComissao(valor) {
    if (valor <= 100) {
        return 0;
    }

    if (valor <= 500) {
        return valor * 0.01;
    }

    return valor * 0.05;
}