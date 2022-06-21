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



/*

(3) //PORTUGUESE
Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array:
Exemplos:
receberPrimeiroEUltimoElemento([7,14,"olá"]) // retornará [7, "olá"]
receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) // retornará [-100, 16]


//ENGLISH


*/

function receiveFirstAndLast (elements) {
    const indexFirst = 0
    const indexLast = elements.length - 1
    const first = elements[indexFirst]
    const last = elements[indexLast]

    return console.log([first, last])
}

receiveFirstAndLast([7, 14, "Olá"])
receiveFirstAndLast([-100, "aplicativo", 16])



/*

(4) //PORTUGUESE
Quando temos um objeto e manipulamos seus atributos, adicionando, atualizando ou removendo-os, estamos
apenas modificando-o, mas, em essência, o objeto continua o mesmo, ou seja a sua referência de memória é a
mesma.
Num projeto que você está trabalhando, você foi designado a refatorar diversas funções para que façam
cópias de objetos e manipulem os dados dessas cópias, com o intuito de evitar efeitos indesejáveis em
algumas situações devido a referências a objetos. Abaixo, está a descrição de uma dessas funções.
Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o
nome de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a
propriedade especificada no segundo parâmetro.
Exemplos:
removerPropriedade({a: 1, b: 2}, "a") // retornará {b: 2}
removerPropriedade({
id: 20,
nome: "caneta",
descricao: "Não preenchido"
}, "descricao") // retornará {id: 20, nome: "caneta"}

OBS: A fim de testar se o objeto retornado não é o mesmo que foi passado como parâmetro para a função
removerPropriedade, você poderá usar a função Object.is(), por exemplo:
Object.is(removerPropriedade(objeto, "descricao"), objeto)
Retornará false se o objeto não for o mesmo.

//ENGLISH


*/

let product = {
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido", 
}


let letters = {
    a: 1,
    b: 2
}

function removeProperty(object, removedAttribute) {
    const objectWithAttribute = Object.assign({}, object)
    delete objectWithAttribute[removedAttribute]
    return console.log(objectWithAttribute)
}
removeProperty(letters, "a")
removeProperty(product, "descricao")



/*

(5) //PORTUGUESE
Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro.
Exemplos:
filtrarNumeros(["Javascript", 1, "3", "Web", 20]) // retornará [1, 20]
filtrarNumeros(["a", "c"]) // retornará []

//ENGLISH


*/
function onlyNumbers (arr) {
    const result = []
    
    for (let element of arr) {
        
        if (typeof element === "number") {
            result.push(element)
        
        }
    }
        return result
}


console.log(onlyNumbers(["Javascript", 1, "3", "Web", 20]))
console.log(onlyNumbers(["a", "c"]))