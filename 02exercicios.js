/*

(1) //PORTUGUESE
Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será -1. Se o parâmetro
de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do
tipo ...".
Exemplos:

inverso(true) // retornará false
inverso("6") // retornará "booleano ou número esperados, mas o parâmetro é do tipo string"
inverso(-2000) // retornará 2000
inverso("programação") // retornará "booleano ou números esperado, mas o parâmetro é do tipo string"

//ENGLISH
Write a function that receive a boolean or numeric value. If the given parameter is boolean, the
The function's return must be the reverse. For example, if the input is false, it will return true. If the parameter is
numeric, the return will be the inverse number. For example, if 1 is given, it will return -1. if the parameter
input is of none of the above types, return "expected boolean or number, but parameter is of
type ...".
Examples:
inverse(true) // return false
inverse("6") // return "expected boolean or number, but parameter is of type string"
inverse(-2000) // return 2000
inverse("programação") // return "bexpected boolean or number, but parameter is oftype string"

*/

function inverso(valor) {
    const tipo = typeof valor
    if (tipo == 'number') {
        return -valor
    } else if (tipo == 'boolean') {
        return !valor
    } else {
        return console.log(`booleano ou números esperado, mas o parâmetro é do tipo ${tipo}`)}

}

console.log(inverso(true))
console.log(inverso("6"))
console.log(inverso(-2000))
console.log(inverso('programação'))



/*

(2) //PORTUGUESE
Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado.
Exemplos:
repetir("código", 2) // retornará ["código", "código"]
repetir(7, 3) // retornará [7, 7, 7]

//ENGLISH
Write a function that receive two parameters. The first parameter is the element that will repeat, while
the second will be the number of times there will be repetition. An array will be returned.
Examples:
repeat("code", 2) // return ["code", "code"]
repeat(7, 3) // return [7, 7, 7]
*/

function repeat(element, repeatedTimes) {
    let result = []

    for (let i = 0; i < repeatedTimes; i++) {
        result.push(element)
    }
    return console.log(result)
}

repeat("código", 2)
repeat(7, 3)