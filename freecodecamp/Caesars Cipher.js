const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"  
]

function rot13(str) {
  let result = ""
  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (/[A-Z]/.test(char)) {
      let index = letters.findIndex((c) => c == char)
      result += letters[index + 13] || letters[index - 13]
    } else {
      result += char
    }
  }
  
  return result;
}

rot13("SERR PBQR PNZC");