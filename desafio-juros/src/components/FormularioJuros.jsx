import { useState } from "react";

function FormularioJuros({ onCalcular }) {
    const [valor, setValor] = useState("");
    const [dataVencimento, setDataVencimento] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        onCalcular({
            valor: Number(valor),
            dataVencimento,
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Calcular juros</h2>

            <div className="campo-valor">
                <label htmlFor="valor">Valor</label>

                <div className="input-moeda">
                    <span>R$</span>

                    <input
                        id="valor"
                        type="number"
                        min="0"
                        step="0.01"
                        placeholder="0,00"
                        value={valor}
                        onChange={(event) => setValor(event.target.value)}
                    />
                </div>
            </div>

            <div>
                <label htmlFor="dataVencimento">Data de vencimento</label>

                <input
                    id="dataVencimento"
                    type="date"
                    value={dataVencimento}
                    onChange={(event) => setDataVencimento(event.target.value)}
                    required
                />
            </div>

            <button type="submit">
                Calcular juros
            </button>
        </form>
    );
}

export default FormularioJuros;