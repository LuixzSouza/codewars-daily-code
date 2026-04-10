# Day 5: [Human readable duration format]

### 💡 O que eu tive que fazer:
Criar uma função que recebe um número inteiro de segundos e o formata para uma string legível para humanos. O formato deve expressar o tempo em anos, dias, horas, minutos e segundos. 
Regras importantes:
- Retornar "now" se for 0.
- Lidar com singular e plural (ex: 1 second, 2 seconds).
- Omitir unidades que sejam zero.
- Separar os componentes com vírgula e espaço (", "), exceto o último, que deve ser separado por " and ".

### 🧠 O que eu RELEMBREI ou APRENDI:
- **A armadilha do `if / else if`:** Aprendi que blocos `else if` são mutualmente exclusivos. Se o código entrar no bloco de "minutos", ele ignora o de "segundos", o que não funciona para decompor tempo, já que um valor pode ter horas *e* minutos *e* segundos ao mesmo tempo.
- **Lógica de Cachoeira (Waterfall):** A melhor forma de converter unidades de medida é ir da maior para a menor. Você divide pelo valor da unidade, guarda o resultado inteiro (`Math.floor`), e passa apenas o "resto" (`%`) para a próxima unidade calcular.
- **O combo `.pop()` e `.join()`:** Descobri uma forma elegante de formatar listas de palavras. Em vez de fazer vários `ifs` complexos para saber onde colocar a vírgula e o "and", eu posso simplesmente arrancar o último item do array com `.pop()`, juntar o que sobrou com `.join(', ')`, e depois concatenar o "and" com o item arrancado.

### 🛑 Onde eu travei:
- Tentei usar estruturas condicionais rígidas (`if / else if`), o que me impedia de processar múltiplas unidades de tempo na mesma rodada.
- Tive dificuldade em visualizar como iria montar a string final com as vírgulas e o "and" nos lugares exatos dependendo de quantos itens o tempo tivesse. 

### 🛠️ A Lógica Final:
1. Verifico o caso base: se segundos for `0`, retorno `"now"`.
2. Crio um array de objetos chamado `timeUnits` que funciona como um dicionário, guardando o nome da unidade e quanto ela vale em segundos (da maior para a menor).
3. Crio um array vazio `parts` para guardar as strings geradas.
4. Faço um loop pelo `timeUnits`. Divido os segundos atuais pelo valor da unidade. Se o resultado for maior que 0:
   - Defino se o texto será singular ou plural.
   - Empurro a string (ex: "2 hours") para o array `parts`.
   - Atualizo a variável `seconds` com o resto da divisão (`seconds % valor_da_unidade`).
5. Fora do loop, verifico o tamanho do array `parts`:
   - Se tiver 1 item, retorno ele direto.
   - Se tiver mais, uso `parts.pop()` para separar a última string, e uso `parts.join(', ')` no restante, concatenando tudo com `" and "`.

### 🛠️ Testes de amostra:
```javascript
const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(formatDuration(1), "1 second");
    assert.strictEqual(formatDuration(62), "1 minute and 2 seconds");
    assert.strictEqual(formatDuration(120), "2 minutes");
    assert.strictEqual(formatDuration(3600), "1 hour");
    assert.strictEqual(formatDuration(3662), "1 hour, 1 minute and 2 seconds");
  });
});