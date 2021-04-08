const texto = ".$+*?-"
console.log(texto.match(/[+.?*$]/g))
console.log(texto.match(/[.]/g))
console.log(texto.match(/[+.?*$]./g)) //não precisa de scape no conjunto 

console.log(texto.match(/[$\-?]/g)) //não é intervalo pois tem scape
console.log(texto.match(/[-?]/g)) //não é intervalo pois só tem 2

//pode precisar de scape [ ] - ^
