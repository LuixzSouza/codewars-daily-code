# Day 2: [Extrat the domain from a URL]

### 💡 O que eu tive que fazer:
Escreva uma função que, ao receber uma URL como string, extraia apenas o nome do domínio e o retorne como uma string. Por exemplo:

### 📤 Examples (input --> output):
* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"

### 🧠 O que eu RELEMBREI ou APRENDI:
- `.repalce()` procura pedaço de texto e substitui por outro
- `.split()` diz qual caractere ele deve usar para cortar o texto

### 🛑 Onde eu travei:
Entendi a lógica mas não sabia oque utilizar para programar

### 🛠️ Versão "Sem Consulta" (A Lógica):
1. Crio uma variavel pra receber
2. Reescrevo a String removendo as String desejada
3. Corto a partir do ponto final ignorando o resto
4. Retorno o valor 0 para pegar a primeira posição onde fica o domain

### 🛠️ Testes de amostra:
```javascript
const { assert } = require("chai");

describe("Sample test", () => {
  it("Should pass sample tests", () => {
    assert.equal(domainName("http://google.com"), "google");
    assert.equal(domainName("http://google.co.jp"), "google");
    assert.equal(domainName("www.xakep.ru"), "xakep");
    assert.equal(domainName("https://youtube.com"), "youtube");
  })  
})

```