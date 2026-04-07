function firstNonRepeatingLetter(s) {
  let minLetter = s.toLowerCase()

  for (let i = 0; i < minLetter.length; i++) {
    let letraAtual = minLetter[i];

    let primeiraPos = minLetter.indexOf(letraAtual)
    let ultimaPos = minLetter.lastIndexOf(letraAtual)

    if (primeiraPos === ultimaPos) {
        return s[i]
    }
  }
  return ""
}