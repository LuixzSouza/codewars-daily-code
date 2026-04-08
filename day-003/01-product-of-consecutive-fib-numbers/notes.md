# Day 3: [Product of consecutive Fib numbers]

### 💡 O que eu tive que fazer:
Os números de Fibonacci são os números da seguinte sequência de inteiros (Fn): 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

Dado um número (`prod`), precisamos encontrar dois números consecutivos de Fibonacci `F(n)` e `F(n+1)` onde a multiplicação deles seja exatamente o `prod`. 
- Se encontrar: retorna `[F(n), F(n+1), true]`
- Se não encontrar (o produto passar do valor sem bater exato): retorna os próximos números que ultrapassaram o alvo, com `false`: `[F(n), F(n+1), false]`.

### 🧠 O que eu RELEMBREI ou APRENDI:
- **`for` vs `while`:** Aprendi na prática que quando não sabemos *quantas vezes* o loop precisa girar, mas sabemos a *condição de parada* (ex: "continue enquanto a multiplicação for menor que X"), o `while` é a ferramenta certa.
- **Desestruturação de Arrays (Destructuring):** Relembrei um truque ninja do JavaScript moderno. Em vez de criar uma variável `temp` para guardar valores antigos antes de somar a sequência de Fibonacci, posso atualizar duas variáveis ao mesmo tempo numa linha só: `[a, b] = [b, a + b]`.
- **Retornando Arrays:** Não tem segredo ou função complexa para retornar uma tupla/array, basta colocar as variáveis entre colchetes no return: `return [a, b, true]`.

### 🛑 Onde eu travei:
- Tentei usar um `for` no começo, mas não sabia definir o limite de paradas.
- Coloquei um `return` dentro do bloco do `while`. Aprendi que o `return` funciona como um botão de ejetar; ele não apenas sai do loop, mas "mata" a função inteira na primeira rodada. O loop precisa rodar livremente e os returns ficam do lado de fora.

### 🛠️ A Lógica Final:
1. Ponto de partida: `let a = 0` e `let b = 1`.
2. O loop `while` verifica se a multiplicação `a * b` ainda é menor que o `prod`.
3. Enquanto for menor, andamos para os próximos números da sequência com `[a, b] = [b, a + b]`.
4. Quando o loop finalmente parar (porque a multiplicação igualou ou passou do `prod`), fazemos um `if/else` para checar se a multiplicação deu o alvo exato ou não, retornando `true` ou `false`.

### 🛠️ Testes de amostra:
```javascript
const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.sameOrderedMembers(productFib(4895), [55, 89, true])
    assert.sameOrderedMembers(productFib(5895), [89, 144, false])
    assert.sameOrderedMembers(productFib(74049690), [6765, 10946, true])
    assert.sameOrderedMembers(productFib(84049690), [10946, 17711, false])
    assert.sameOrderedMembers(productFib(193864606), [10946, 17711, true])
    assert.sameOrderedMembers(productFib(447577), [610, 987, false])
    assert.sameOrderedMembers(productFib(602070), [610, 987, true])
  });
});
```