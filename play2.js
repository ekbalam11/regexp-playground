const regexp = /[aeiou]{1}/i;   // RegExp que acepta cualquier vocal 

console.log(regexp.test("a"));
console.log(regexp.test("e"));
console.log(regexp.test("u"));
console.log(regexp.test("m"));
console.log(regexp.test("U"));      

console.log(regexp.test("qwer"));      
