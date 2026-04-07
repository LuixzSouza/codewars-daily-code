// ==========================================
// 🧠 MEU CINTO DE UTILIDADES JAVASCRIPT 🧠
// ==========================================

// ------------------------------------------
// 🧵 STRINGS (Textos)
// ------------------------------------------

// ✂️ .split() -> Corta o texto e transforma em Array
"luiz".split("");          // Retorna: ["l", "u", "i", "z"]
"a-b-c".split("-");        // Retorna: ["a", "b", "c"]

// 🔄 .replace() / .replaceAll() -> Troca um pedaço do texto
"oi mundo".replace("mundo", "Luiz"); // Retorna: "oi Luiz"
"a.b.c".replaceAll(".", "");         // Retorna: "abc"

// 📏 .slice() -> Pega um pedaço do texto (início, fim não incluso)
"abcdef".slice(0, 3);      // Retorna: "abc"
"abcdef".slice(-2);        // Retorna: "ef" (pega os 2 últimos)

// 🔠 .toUpperCase() / .toLowerCase() -> Maiúscula / Minúscula
"aBc".toUpperCase();       // Retorna: "ABC"
"aBc".toLowerCase();       // Retorna: "abc"

// 🔎 .includes() -> Verifica se tem um texto dentro (Retorna true/false)
"berilo".includes("ri");   // Retorna: true

// 🧹 .trim() -> Limpa os espaços vazios das pontas
"   luiz   ".trim();       // Retorna: "luiz"

// 🧱 .padStart() / .padEnd() -> Preenche com algo até dar o tamanho
"5".padStart(3, "0");      // Retorna: "005"
"1".padEnd(3, "0");        // Retorna: "100"


// ------------------------------------------
// 📦 ARRAYS (Listas)
// ------------------------------------------

// 🔗 .join() -> Junta o Array e transforma em Texto (O inverso do split)
["a", "b", "c"].join("");  // Retorna: "abc"
["a", "b"].join("-");      // Retorna: "a-b"

// 🔄 .map() -> Transforma TODOS os itens da lista
[1, 2, 3].map(x => x * 2); // Retorna: [2, 4, 6]

// 🧹 .filter() -> Filtra a lista, mantendo só o que for true
[1, 2, 3, 4].filter(x => x % 2 === 0); // Retorna: [2, 4] (só os pares)

// ➕ .reduce() -> Reduz a lista a um valor só (ótimo para somar tudo)
[1, 2, 3].reduce((total, num) => total + num, 0); // Retorna: 6

// 🔁 .reverse() -> Inverte a ordem da lista
[1, 2, 3].reverse();       // Retorna: [3, 2, 1]

// 🔀 .sort() -> Ordena a lista (Cuidado: números precisam de regra)
[3, 1, 2].sort();                  // Retorna: [1, 2, 3] (ordem alfabética)
[10, 2, 5].sort((a, b) => a - b);  // Ordem crescente (números)
[10, 2, 5].sort((a, b) => b - a);  // Ordem decrescente (números)

// 🚪 Adicionar e Remover itens:
let arr = [1, 2, 3];
arr.push(4);               // Coloca no FINAL -> [1, 2, 3, 4]
arr.pop();                 // Tira do FINAL -> [1, 2, 3]
arr.unshift(0);            // Coloca no COMEÇO -> [0, 1, 2, 3]
arr.shift();               // Tira do COMEÇO -> [1, 2, 3]


// ------------------------------------------
// 🧮 MATH (Matemática)
// ------------------------------------------

// ⬆️⬇️ Limites (Maior e Menor)
Math.max(10, 50, 5);       // Retorna: 50
Math.min(10, 50, 5);       // Retorna: 5

// 🧱 Arredondamentos
Math.floor(4.9);           // Retorna: 4 (Sempre joga pro CHÃO)
Math.ceil(4.1);            // Retorna: 5 (Sempre joga pro TETO)
Math.round(4.5);           // Retorna: 5 (Arredonda pro mais PRÓXIMO)

// 📏 Absoluto (Tira o sinal negativo)
Math.abs(-15);             // Retorna: 15

// 🎲 Aleatório
Math.random();             // Retorna um número quebrado entre 0 e 1


// ------------------------------------------
// 🧙‍♂️ CONVERSÕES MÁGICAS (Tipos)
// ------------------------------------------

// Texto para Número
Number("15");              // Retorna: 15 (Número)
+"15";                     // Retorna: 15 (Truque ninja pra virar número)
parseInt("15.5");          // Retorna: 15 (Pega só a parte inteira)
parseFloat("15.5");        // Retorna: 15.5 (Pega o número com vírgula)

// Número para Texto
String(15);                // Retorna: "15" (Texto)
(15).toString();           // Retorna: "15"
(15).toString(16);         // Retorna: "f" (Converte para Hexadecimal)