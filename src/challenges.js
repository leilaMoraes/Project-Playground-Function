// Desafio 1
function compareTrue(animal1, animal2) {
  if (animal1 === true && animal2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  string = [array.at (- 1), array[0]].join(', ');
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  if (wins > 0 || ties > 0) {
    return wins * 3 + ties * 1;
  }
  return 0;
}

// Desafio 6
function highestCount(array) {

  let maxNumber = Math.max(...array);
  let count = 0;

  for (index = 0; index < array.length; index += 1) {
    if (array[index] === maxNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return "os gatos trombam e o rato foge";
  } else if (cat1 > cat2) {
    return "cat2";
  }
    return "cat1";
  }
//console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};