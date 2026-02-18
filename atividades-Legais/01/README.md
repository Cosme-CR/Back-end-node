# 📈 Calculadora de Juros Compostos - Node.js

Sistema desenvolvido em JavaScript para ambiente Node.js, com o objetivo de calcular o montante final de compras financiadas utilizando a fórmula de juros compostos.

## 📋 Descrição do Projeto

O programa interage com o usuário via terminal para coletar dados de compras, taxas de juros e períodos de parcelamento. Ele permite que o usuário informe o tempo em **anos** ou **meses**, realizando a conversão automática para o cálculo, conforme a regra de que o período ($n$) deve ser sempre em meses.

### A Fórmula
O cálculo é baseado na fórmula:
$$M = C \times (1 + i)^n$$

Onde:
- **M**: Montante final.
- **C**: Capital inicial (valor da compra).
- **i**: Taxa de juros.
- **n**: Tempo (em meses).

## 🚀 Tecnologias Utilizadas

*   [Node.js](https://nodejs.org) - Ambiente de execução JavaScript.
*   `readline` - Módulo nativo para captura de dados via entrada padrão (stdin).

## 🔧 Pré-requisitos

Para rodar o script, você precisa ter o Node.js instalado em sua máquina.

## 💻 Como Executar

1. Clone ou baixe este repositório.
2. Abra o terminal na pasta do projeto.
3. Execute o comando:
   ```bash
   node seu_arquivo.js
