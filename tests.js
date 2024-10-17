import { customIndexOf } from './indexOf.js';


const names = ['Ana', 'Felix', 'Gilmera', 'Luke'];
const name = 'Fernando';
const values = [0, 1, 5, 22, 66, 22, 5];
const mixed = 'Lindinha586';
const myString = new String('Luana');
const anotherTest = "arapuarani";

let elementIndex;

elementIndex = customIndexOf(names, 'Luke');
console.log('Com array de strings:');
console.log(`Searching for 'Luke' on array \[${names}\].Found on index ${elementIndex}.`); //3
console.log('-------------------------');

elementIndex = customIndexOf(name, 'd');
console.log('Com string primitiva:');
console.log(`Searching for 'd' on "${name}". Found on index ${elementIndex}.`); //6
console.log('-------------------------');

elementIndex = customIndexOf(myString, 'ana');
console.log('Com objeto String:');
console.log(`Searching for 'ana' on "${myString}". Found on index ${elementIndex}.`); //2
console.log('-------------------------');

elementIndex = customIndexOf(mixed, 5);
console.log('Com objeto String:');
console.log(`Searching for 5 on "${mixed}". Found on index ${elementIndex}.`); //8
console.log('-------------------------');

elementIndex = customIndexOf(values, 22);
console.log('Com inteiros');
console.log(`Searching for 22 on "${values}". Found on index ${elementIndex}.`); //3
console.log('-------------------------');

elementIndex = customIndexOf(anotherTest, 'ara');
console.log('Primeira ocorrência de um subset');
console.log(`Searching for ara on "${anotherTest}". Found on index ${elementIndex}.`); //0
console.log('-------------------------');

elementIndex = customIndexOf(anotherTest, 'ran');
console.log('Com string:');
console.log(`Searching for ran on "${anotherTest}". Found on index ${elementIndex}.`); //6
console.log('-------------------------');

elementIndex = customIndexOf(anotherTest, 'ron');
console.log('Com string:');
console.log(`Searching for ron on "${anotherTest}". Found on index ${elementIndex}.`); //-1
console.log('-------------------------');

elementIndex = customIndexOf(anotherTest, 'niar');
console.log('Com string:');
console.log(`Searching for niar on "${anotherTest}". Found on index ${elementIndex}.`); //-1
console.log('-------------------------');

// "Fernando".indexOfDaAna('o');

// console.log("Fernando".indexOf('o'));