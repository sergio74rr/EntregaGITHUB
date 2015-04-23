// Math.random() devuelve número aleatorio entre 0 y 1.

var numero = Math.random();

var str =' MAYOR que 0,5';

if (numero <= 0.5){
  console.log('\n' + numero + ' MENOR que 0,5 \n');
}
else {
  console.log('\n' + numero + ' MAYOR que 0,5 \n');
  str = ' MENOR que 0,5';
}

console.log('\n' + numero + str + '\n');
