# Day 4: [Roman Numerals Helper]

### 💡 O que eu tive que fazer:
Criar uma classe `RomanNumerals` com dois métodos utilitários estáticos:
- `toRoman(num)`: Recebe um número inteiro e o converte para uma string de algarismos romanos.
- `fromRoman(str)`: Recebe uma string de algarismos romanos e a converte de volta para um número inteiro.
O limite dos números era de 1 a 3999, cobrindo o uso padrão dos símbolos (M, CM, D, CD, C, XC, L, XL, X, IX, V, IV, I).

### 🧠 O que eu RELEMBREI ou APRENDI:
- **Escopo de Classes no JS:** Relembrei que não posso declarar variáveis soltas (`let`, `const`) ou loops (`while`) diretamente no corpo principal de uma `class`. Tudo precisa estar envelopado em métodos ou propriedades.
- **Propriedades Estáticas (`static`):** Aprendi a usar `static map = {...}` para criar um dicionário de valores diretamente na classe. Isso permitiu que os dois métodos acessassem a tabela de conversão facilmente usando `this.map`.
- **A lógica de conversão Romana (Subtração Gulosa):** Para converter de número para romano, a melhor estratégia é ir do maior símbolo (M) para o menor (I), subtraindo o valor máximo possível a cada iteração.
- **A lógica de conversão Inversa (Look-ahead):** Para converter de romano para número, basta ler da esquerda para a direita comparando a letra atual com a próxima. Se a letra atual valer *menos* que a próxima (ex: "I" antes de "V"), eu **subtraio**. Se valer igual ou mais, eu **somo**.

### 🛑 Onde eu travei:
- Tentei estruturar o loop e as variáveis no lugar errado (direto na classe, fora dos métodos), o que causou erro de sintaxe.
- Acabei cometendo um erro de digitação na montagem da tabela (coloquei que `X` valia 50 em vez de 10), o que desregulou a matemática toda. Um lembrete para revisar constantes antes de focar apenas na lógica do loop!

### 🛠️ A Lógica Final:
1. **Dicionário:** Criei uma propriedade `static map` organizando os valores em ordem decrescente (M: 1000, CM: 900, ..., I: 1).
2. **Método `toRoman`:** Usei um `for...in` para percorrer as chaves do dicionário. Dentro dele, um `while` verifica: "Enquanto o número atual for maior ou igual ao valor da chave, adicione essa chave (letra) ao resultado e subtraia seu valor do total".
3. **Método `fromRoman`:** Usei um `for` clássico para percorrer cada letra da string romana. Criei variáveis para a letra atual e a próxima. Se a atual for menor que a próxima, subtraio do resultado; senão, somo ao resultado.

### 🛠️ Testes de amostra:
```javascript
describe("sample tests", () => {
  const assert = require('chai').assert;

  it("to", () => {
    assert.strictEqual(RomanNumerals.toRoman(1000), 'M');
    assert.strictEqual(RomanNumerals.toRoman(4), 'IV');
    assert.strictEqual(RomanNumerals.toRoman(1), 'I');
    assert.strictEqual(RomanNumerals.toRoman(1990), 'MCMXC');
    assert.strictEqual(RomanNumerals.toRoman(2008), 'MMVIII');
  });

  it("from", () => {
    assert.strictEqual(RomanNumerals.fromRoman('XXI'), 21);
    assert.strictEqual(RomanNumerals.fromRoman('I'), 1);
    assert.strictEqual(RomanNumerals.fromRoman('IV'), 4);
    assert.strictEqual(RomanNumerals.fromRoman('MMVIII'), 2008);
    assert.strictEqual(RomanNumerals.fromRoman('MDCLXVI'), 1666);
  });
});