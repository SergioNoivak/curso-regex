const texto = "0,1,2,3,4,5,6,7,8,9,10,a,b,c,d,e,f";

const regex9 = RegExp('9')
console.log(regex9.test(texto))
console.log(regex9.exec(texto))