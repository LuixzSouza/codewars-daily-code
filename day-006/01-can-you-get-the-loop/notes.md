# Day 6: [Can you get the loop ?]

### 💡 O que eu tive que fazer:
Descobrir o tamanho de um laço (loop) dentro de uma Lista Encadeada (Linked List). O desafio era que a lista possuía uma "cauda" antes do loop começar, não sabíamos o tamanho total, e a regra mais importante era: **NÃO modifique os nós!**

### 🧠 O que eu RELEMBREI ou APRENDI:
- **Listas Encadeadas (Linked Lists):** Descobri na prática que elas são bem diferentes de Arrays. Elas não têm índices (`[0]`, `[1]`) nem propriedade de tamanho (`.length`). A única forma de navegar é indo de porta em porta usando o `node.getNext()`.
- **O perigo do [Circular *1]:** Aprendi que tentar dar um `console.log` inteiro em um objeto que aponta para ele mesmo gera um aviso de referência circular, pois o Node.js percebe que entraria em um loop infinito ao tentar imprimir tudo.
- **O poder do objeto `Map`:** Como eu não podia alterar o nó para marcar que "já passei por ali", aprendi a usar um `Map`. O `Map` é incrível porque permite usar um **Objeto inteiro** (o nó) como "chave" e guardar um valor associado a ele (no meu caso, o número do passo em que o encontrei).

### 🛑 Onde eu travei:
- Tentei fazer um loop usando `node.length`, esquecendo que listas encadeadas não têm tamanho pré-definido.
- Travei na hora de juntar a sintaxe do `Map` (`has`, `set`, `get`) com o fluxo do `while`. 
- No começo, esqueci de fazer o ponteiro "andar" (`node = node.getNext()`), o que criaria um loop infinito no mesmo lugar.

### 🛠️ A Lógica Final:
1. Crio um "caderno de anotações" usando `const caderno = new Map()` e um contador `let passoAtual = 0`.
2. Inicio uma caminhada com `while (node)`.
3. A cada nó que piso, pergunto ao caderno se já estive ali: `if (caderno.has(node))`.
4. **Se SIM (Achei o loop):** Pego o passo de agora e subtraio o passo de quando passei por aqui a primeira vez (`passoAtual - caderno.get(node)`). O resultado é o tamanho exato da volta. Retorno esse valor.
5. **Se NÃO (Ainda é caminho novo):** Anoto no caderno passando o nó e o passo de agora (`caderno.set(node, passoAtual)`). Aumento o contador de passos (`passoAtual++`) e ando para o próximo nó (`node = node.getNext()`).

### 🛠️ Testes de amostra:
```javascript
const assert = require('chai').assert;

describe('sample tests', function () {
    it('should work for some small lists', function () {
        {
            const A = new Node();
            A.setNext(A);
            assert.deepEqual(loop_size(A), 1); 
        }
        {
            const A = new Node(), B = new Node();
            A.setNext(B), B.setNext(A);
            assert.deepEqual(loop_size(A), 2); 
        }
        {
            const A = new Node(), B = new Node(), C = new Node();
            A.setNext(B), B.setNext(C), C.setNext(A);
            assert.deepEqual(loop_size(A), 3); 
        }
    });
});