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
  let string = [array[array.length - 1], array[0]].join(', ');
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
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === maxNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return 'os gatos trombam e o rato foge';
  } if (cat1 > cat2) {
    return 'cat2';
  }
  return 'cat1';
}

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      newArray.push('fizzBuzz');
    } else if (array[i] % 5 === 0) {
      newArray.push('buzz');
    } else if (array[i] % 3 === 0) {
      newArray.push('fizz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}

// Desafio 9
function encode(newString) {
  let encodeString = newString.replace(/a/gi, '1').replace(/e/gi, '2').replace(/i/gi, '3').replace(/o/gi, '4').replace(/u/gi, '5');
  return encodeString;
}
function decode(stringNumber) {
  let numbers = [1, 2, 3, 4, 5];
  let decodeString = stringNumber.replaceAll(numbers[0], 'a').replaceAll(numbers[1], 'e').replaceAll(numbers[2], 'i').replaceAll(numbers[3], 'o').replaceAll(numbers[4], 'u');
  return decodeString;
}

// Desafio 10
let arrayObjects = [];
function techList(tech, name) {
  tech.sort();
  for (i = 0; i < tech.length; i += 1){
  arrayObjects.push({tech: tech[i], name});
  }
  if (tech.length === 0) {
    return 'Vazio!';
  }
  return arrayObjects;
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
