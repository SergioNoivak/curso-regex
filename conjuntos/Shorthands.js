const texto = `1,2,3,4,5,6,a.b c!d?e	-
f_g`;

console.log(texto.match(/\d/g)) //numeros [0-9]
console.log(texto.match(/\D/g)) //não números [^0-9]

console.log(texto.match(/\w/g)) //caracteres [a-zA-Z0-9_]

console.log(texto.match(/\W/g)) //caracteres [a-zA-Z0-9_]
console.log(texto.match(/\s/g)) //espaços[ \t\n\f\r]
console.log(texto.match(/\S/g))	// tudo o que não for espaço ou seja [^ \t\n\f\r]
