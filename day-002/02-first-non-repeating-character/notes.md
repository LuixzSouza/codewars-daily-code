# Day 2: [First non-repeating character]

### 💡 O que eu tive que fazer:
Escreva uma função que receba uma string como entrada e retorne o primeiro caractere que não se repete em nenhum lugar da string.

Por exemplo, se a entrada for "stress", a função deve retornar 't', já que a letra 't' ocorre apenas uma vez na string e é a primeira letra da string.

Como um desafio adicional, caracteres maiúsculos e minúsculos são considerados o mesmo caractere, mas a função deve retornar o caractere inicial com a grafia correta. Por exemplo, a entrada "sTreSS" deve retornar "T".

Se uma string contiver apenas caracteres repetidos, retorne uma string vazia ("");

Observação: apesar do nome em algumas linguagens, sua função deve lidar com qualquer ponto de código Unicode.

### 📤 Examples (input --> output):
"@#@@*"    --> "#"
"かか何"   --> "何"
"🐐🦊🐐" --> "🦊"

### 🧠 O que eu RELEMBREI ou APRENDI:
- **Case Insensitive:** Para comparar strings ignorando maiúsculas e minúsculas, a melhor estratégia é criar uma cópia da string usando `.toLowerCase()` e fazer as verificações lógicas nela, mas na hora de retornar o valor, usar o índice na string original.
- **O truque de achar elementos únicos:** Aprendi que não preciso contar quantas vezes uma letra aparece. Basta usar `.indexOf()` (que acha a primeira aparição da esquerda pra direita) e `.lastIndexOf()` (que acha a primeira aparição da direita pra esquerda). Se os dois índices forem **iguais**, significa que a letra só existe naquela posição, ou seja, não se repete!

### 🛑 Onde eu travei:
- Tentei usar o `.indexOf()` duas vezes seguidas, o que sempre retornava o mesmo valor. Precisei lembrar da existência do `.lastIndexOf()`.
- Tentei dar `return ""` dentro de um `else` no meio do loop, o que matava a função inteira logo na primeira letra repetida. Aprendi que o retorno vazio só deve ficar do lado de fora, caso o loop inteiro termine sem achar nada.

### 🛠️ Versão "Sem Consulta" (A Lógica):
1. Crio uma variável que guarda a palavra toda em letras minúsculas.
2. Faço um loop `for` para passar por cada posição da palavra.
3. Para cada letra (na versão minúscula), pergunto qual a primeira posição dela (`indexOf`) e qual a última (`lastIndexOf`).
4. Se as posições forem iguais, achei a letra única! Retorno a letra da variável original usando a posição atual `[i]`.
5. Se o loop acabar e não tiver retornado nada, retorno `""`.

### 🛠️ Testes de amostra:
```javascript
describe('Testing firstNonRepeatingLetter', () => {
  const {assert} = require('chai')
  
  const doTest = (s, expected) =>
    it(`'${s}'`, () => assert.strictEqual(firstNonRepeatingLetter(s), expected))
  
  describe('Fixed tests', () => {
    describe('Basic tests', () => {
      doTest('a', 'a')
      doTest('stress', 't')
      doTest('moonmen', 'e')
    })
  })
})
```