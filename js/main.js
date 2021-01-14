"use strict"
console.log('Kintamuju inicijavimas');
console.log('----------------------');

// pirma uzduotis
const obuoliai = 24;
console.log(obuoliai);

const kriauses = 15;
console.log(kriauses);

const apelsinai = 11;
console.log(apelsinai);

// antra uzduotis
const zodis1 = 'Ziema';
console.log(zodis1);

const zodis2 = 'atejo';
console.log(zodis2);

const zodis3 = 'netiketai!';
console.log(zodis3);
console.log(zodis1, zodis2, zodis3);

const sakinys = zodis1 + ' ' + zodis2 + ' ' + zodis3;
console.log(sakinys);

// trecia uzduotis
const bananai = [2,6,14,9,3];
console.log(bananai);

const kiviai = [1,5,7,8,4];
console.log(kiviai);

const braskes = [21,15,28,1,9];
console.log(braskes);

// ketvirta uzduotis
const a = ['L', 'o', 'o', 'k', 's'];
console.log(a);

const b = ['g', 'o', 'o', 'd', '!'];
console.log(b);

const c = ['O', 'M', 'G', '!', '!'];
console.log(c);

console.log ('**Veiksmai su kintamaisiais**');
console.log('-------------------------');

// pirma uzduotis
const sumaban = (bananai[0] + bananai[1] + bananai[2] + bananai[3] + bananai[4]);
console.log('Bananu suma:', sumaban);
const sumakiv = (kiviai[0] + kiviai[1] + kiviai[2] + kiviai[3] + kiviai[4]);
console.log('Kiviu suma:', sumakiv);
const sumabras = (braskes [0] + braskes [1] + braskes [2] + braskes [3] + braskes [4]);
console.log('Braskiu suma:', sumabras);

// antra uzduotis
const sujungtiZodziai = (a[0] + a[1] + a[2] + a[3] + a[4] +  ' ' + b[0] + b[1] + b[2] + b[3] + b[4]);
console.log('Rezultatas:' , sujungtiZodziai);

// trecia uzduotis
const veiksmas = (kiviai[0] - kiviai[1] + kiviai[2] - kiviai[3] + kiviai[4]);
console.log('Kiviu veiksmas:', veiksmas);

// ketvirta uzduotis
const sujungtasZodis = (a[4] + ', ' + a[3] + ', ' + a[2] + ', ' + a[1] + ', ' + a[0]);
console.log('Rezultatas:', sujungtasZodis);

