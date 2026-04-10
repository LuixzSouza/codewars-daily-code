class RomanNumerals {
  
  static mapRoman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,  
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  static toRoman(num) {
    let result = '';
    
    for (let symbol in this.mapRoman) {
      let value = this.mapRoman[symbol]
      
      while (num >= value) {
        result += symbol;
        num -= value;
      }
    }
    
    return result;
  }

  static fromRoman(str) {
    let result = 0;
    
    for (let i = 0; i < str.length; i++) {
      let currentSymbolValue = this.mapRoman[str[i]];
      let nextSymbolValue = this.mapRoman[str[i + 1]];
      
      if (nextSymbolValue && currentSymbolValue < nextSymbolValue) {
        result -= currentSymbolValue;
      } 
      else {
        result += currentSymbolValue;
      }
    }
    
    return result;
  }
}