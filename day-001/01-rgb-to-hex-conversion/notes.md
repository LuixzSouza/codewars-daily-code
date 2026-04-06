# Day 1: [RGB To Hex Conversion]

### 💡 O que eu tive que fazer:
A função rgb está incompleta. Complete-a para que, ao passar valores decimais RGB, seja retornada uma representação hexadecimal. Os valores decimais válidos para RGB são de 0 a 255. Quaisquer valores fora desse intervalo devem ser arredondados para o valor válido mais próximo.

Observação: Sua resposta deve sempre ter 6 caracteres; a abreviação com 3 caracteres não funcionará neste caso.

### 📤 Examples (input --> output):
255, 255, 255 --> "FFFFFF"
255, 255, 300 --> "FFFFFF"
0, 0, 0       --> "000000"
148, 0, 211   --> "9400D3"

### 🧠 O que eu RELEMBREI ou APRENDI:
- **Limitar valores matematicamente:** Aprendi a usar `Math.max(0, Math.min(255, valor))` para "travar" um número dentro de um limite sem precisar usar vários `if/else`.
- **Conversão de Base:** O JavaScript tem a conversão nativa para hexadecimal usando o método `.toString(16)`. Não é necessário fazer a divisão na mão usando `% 16`.
- **Preenchimento de String:** Aprendi o método `.padStart(2, '0')`. Ele é perfeito para garantir que um número como "0" ou "f" vire "00" ou "0f", mantendo o padrão de 2 caracteres por cor.

### 🛑 Onde eu travei:
Eu estava tentando resolver a matemática do Hexadecimal do zero usando `switch case` e `% 16`, e tentei validar os limites usando `if (r & g & b > 255)`, o que não funciona porque o `&` comercial sozinho no JS é um operador bitwise, e não o "E" lógico (`&&`). Além disso, o JS exige que cada variável seja comparada individualmente.

### 🛠️ Versão "Sem Consulta" (A Lógica):
1. Crio uma função que pega um número.
2. Se for menor que 0, vira 0. Se maior que 255, vira 255.
3. Transformo na base 16.
4. Adiciono um zero à esquerda se faltar.
5. Deixo tudo maiúsculo.
6. Chamo essa função pro R, pro G e pro B e concateno tudo.

### 🛠️ Testes de amostra:
```javascript
describe("Tests", () => {

  const { strictEqual } = require('chai').assert;

  function doTest(r, g, b, expected) {
      const actual = rgb(r, g, b);
      const message = `for r = ${r} g = ${g} b = ${b}`;
      strictEqual(actual, expected, message);
  }

  it("Sample Tests", () => {
    doTest(  0,   0,   0, '000000');
    doTest(  0,   0, -20, '000000');
    doTest(300, 255, 255, 'FFFFFF');
    doTest(173, 255,  47, 'ADFF2F');
  });
});
```