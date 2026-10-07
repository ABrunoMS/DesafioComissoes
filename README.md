Projeto desenvolvido para resolução de desafios técnicos utilizando React.

A proposta é implementar os desafios, buscando manter uma estrutura organizada, separando componentes, regras de negócio e fontes de dados.

##Tecnologias

- React
- JavaScript
- Vite
- HTML
- CSS
- Git
- GitHub

##Desafios

O projeto contém três desafios principais:

### 1. Cálculo de comissão de vendedores

A aplicação recebe uma lista de vendas e calcula a comissão de cada venda de acordo com as seguintes regras:

| Valor da venda | Comissão |

| Abaixo de R$ 100,00 | 0% |
| De R$ 100,00 até abaixo de R$ 500,00 | 1% |
| A partir de R$ 500,00 | 5% |

A aplicação permite:

- Visualizar as vendas;
- Visualizar a comissão calculada;
- Filtrar por um ou mais vendedores;
- Visualizar o total de vendas;
- Visualizar o faturamento;
- Visualizar o total de comissões;
- Identificar visualmente a faixa de comissão aplicada.

Os dados utilizados atualmente estão armazenados em um arquivo JSON local, simulando a fonte de dados da aplicação.

### 2. Movimentação de estoque

A aplicação permite registrar movimentações de entrada e saída de produtos, atualizando o estoque de acordo com cada movimentação.

A aplicação permite:

- Visualizar o estoque atual;
- Registrar entradas e saídas;
- Identificar cada movimentação por um número único;
- Informar uma descrição para cada movimentação;
- Visualizar o histórico de movimentações;
- Impedir saídas maiores que o estoque disponível.

Os produtos iniciais estão armazenados em um arquivo JSON local.

### 3. Cálculo de juros por atraso

A aplicação calcula os juros de acordo com o valor informado e a data de vencimento.

O cálculo considera uma taxa de **2,5% ao dia** sobre o valor em atraso.

A aplicação permite:

- Informar o valor;
- Informar a data de vencimento;
- Calcular os dias de atraso;
- Visualizar o valor dos juros;
- Visualizar o valor total com juros.

## Como executar

Clone o repositório:
git clone git@github.com:ABrunoMS/DesafioTargetSistemas.git

Acesse o diretório:

-cd DesafioTargetSistemas

Desafio 1:

-cd desafio-comissoes

-npm install

-npm run dev

Desafio 2:

-cd desafio-estoque

-npm install

-npm run dev

Desafio 3:

-cd desafio-juros

-npm install

-npm run dev

Após executar npm run dev, o Vite disponibilizará a aplicação localmente no endereço informado no terminal.
