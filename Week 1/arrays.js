let numbers = [46, 1, 4, 78, 9, 5, 1, 4, 5, 5];
// indeksai:    0  1  2   3  4  5  6  7  8  9
let nouns = ['apple', 'sister', 'hammer', 'sun', 'table', 'sky', 'lake'];
// indeksai:    0       1         2        3       4        5       6    
let helpers = ['in', 'with', 'on', 'my', 'is', 'a', 'the', ' '];
// indeksai:    0       1     2      3     4    5     6     7  

// Užduotis: Sudarykite šiuos sakinius ir išsaugokite kitamuosiuose:
//    sentence1, sentence2, ... , sentenceN;  N - natūralieji skaičiai.
// 1. my sister is in the lake
// let sentence1 = helpers[3] + helpers[7] + nouns[1] + helpers[7] + helpers[4] + helpers[7] + helpers[0] + helpers[7] + helpers[6] + helpers[7] + nouns[6];
//                'my'         ' '        'sister'      ' '          'is'          ' '         'in'          ' '         'the'         ' '       'lake'                                                                               
// console.log(sentence1);
// 2. hammer is on the table
// 3. sun is in the sky
// 4. apple is with my sister
// 5. Papildyti masyvą žodžiais, ir sukurti dar 3 +-logiškus sakinius.

console.group('1. Task - my sister is in the lake');

const sentence1 = helpers[3] + helpers[7] + nouns[1] + helpers[7] + helpers[4] + helpers[7] + helpers[0] + helpers[7] + helpers[6] + helpers[7] + nouns[6];

console.log(sentence1);

console.groupEnd();

console.group('2. Task - hammer is on the table');

const sentence2 = nouns[2] + helpers[7] + helpers[4] + helpers[7] + helpers[2] + helpers[7] + helpers[6] + helpers[7] + nouns[4];

console.log(sentence2);

console.groupEnd();

console.group('3. Task - sun is in the sky');

const sentence3 = nouns[3] + helpers[7] + helpers[4] + helpers[7] + helpers[0] + helpers[7] + helpers[6] + helpers[7] + nouns[5];

console.log(sentence3);

console.groupEnd();

console.group('4. Task - apple is with my sister');

const sentence4 = nouns[0] + helpers[7] + helpers[4] + helpers[7] + helpers[1] + helpers[7] + helpers[3] + helpers[7] + nouns[1];

console.log(sentence4);

console.groupEnd();

console.group('5. Task - Papildyti masyvą žodžiais, ir sukurti dar 3 +-logiškus sakinius.');

let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let nouns1 = ['apple', 'sister', 'hammer', 'sun', 'table', 'sky', 'lake', 'name', 'age', 'gender', 'Domi', 'male', 'programmer'];
let helpers1 = ['in', 'with', 'on', 'my', 'is', 'a', 'the', ' ','and', 'I', 'am'];

const sentence5 = helpers1[3] + helpers1[7] + nouns1[7] + helpers1[7] + helpers1[4] + helpers1[7] + nouns1[10];

console.log(sentence5);

const sentence6 = helpers1[3] + helpers1[7] + nouns1[8] + helpers1[7] + helpers1[7] + helpers1[4] + helpers1[7] + numbers1[1] + numbers1[7] + helpers1[7] + helpers1[8] + helpers1[7] + helpers1[3] + helpers1[7] + nouns1[9] + helpers1[7] + helpers1[4] + helpers1[7] + nouns1[11];

console.log(sentence6);

const sentence7 = helpers1[9] + helpers1[7] + helpers1[10] + helpers1[7] + helpers1[5] + helpers1[7] + nouns1[12];

console.log(sentence7);

console.groupEnd();
