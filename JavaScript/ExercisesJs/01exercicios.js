/*

(1) //PORTUGUESE
Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
função) e com ponto de exclamação "!" no final.
Exemplos:
cumprimentar("Leonardo") // retornará "Olá, Leonardo!"
cumprimentar("Maria") // retornará "Olá, Maria!"

//ENGLISH
Create a function that returns the string "Hello," concatenated with a text argument (to be passed to the
function) and with exclamation point "!" at the end.
Examples:
greating("Leonardo") // return "Hello, Leonardo!"
greating("Maria") // return "Hello, Maria!"

*/

function soma (nome) {
    return console.log(`Olá, ${nome}!`)
}

soma('Leonardo')
soma('Maria')



/*

(2)//PORTUGUSE
Escreva uma funcao que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.
.. Obs: considere que um ano tem 365 dias. Desconsidere anos bissextos (com 366 dias) e
desconsidere tambem dias decorridos desde o ultimo aniversario.
Exemplos:
converterIdadeEmAnosParaDias(25) // retornara 9125
converterIdadeEmAnosParaDias(70) // retornara 25550

//ENGLISH
Write a function thats receive person's age in years and returns the same age in days.
.. Note: consider that one year has 365 days. Discredit leap years (with 366 days) and
Also discredit days elapsed since last birthday.
Exemples:
transformYearsToDays(25) // return 9125
transformYearsToDays(70) // return 9125

*/

function transformYearsToDays(years) {   
    const daysOneYear = 365
   return years * daysOneYear
    
}

console.log(transformYearsToDays(25))
console.log(transformYearsToDays(70))



/*

(3) //PORTUGUESE
Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
X", em que X é o quanto o funcionário ganhou no mês.
Exemplos:
calcularSalario(150, 40.5) // retornará "Salário igual a R$ 6075"

//ENGLISH
Create a function that receive two parameters, one is the amount of worked hours by a
employeer in a month, and how much he earns per hour. The function return must be the string "Salary equal to R$
X", where X is how much the employee earned in the month.
Example:
calculateSalary(150, 40.5) // return "Salary equal to R$ 6075"

*/

function payment (workedHours, PayPerHour) {
    return workedHours * PayPerHour

}

console.log(`Salário igual a R$ ${payment(150, 40.5)}`) // como eu fiz


//outra forma de ser feita // another form to do it

function pagamento (horasTrabalhadas, salarioPorHora) {
    const salario = horasTrabalhadas * salarioPorHora
    return console.log(`Salário igual a R$ ${salario}`)

}

pagamento(150, 40.5)



/*

(4) //PORTUGUESE
Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês do ano.)
Exemplos:
nomeDoMes(1) // retornará "Janeiro"
nomeDoMes(4) // retornará "Abril"

// ENGLISH
Create a function that receice some number (from 1 to 12 and returns the corresponding month as a string.
For example, if the input is 2, the function should return "February", as this is the 2nd month of the year.)
Examples:
nameMonth(1) // return "January"
nameMonth(4) // return "April"

*/

function calendario (mes) {

    switch (mes) {
        case 1:
            console.log('Janeiro')
            break
        
        case 2:
            console.log('Fevereiro')
            break

        case 3:
            console.log('Março')
            break

        case 4:
            console.log('Abril')
            break

        case 5:
            console.log('Maio')
            break

        case 6:
            console.log('Junho')
            break

        case 7:
            console.log('Julho')
            break

        case 8:
            console.log('Agosto')
            break

        case 9:
            console.log('Setembro')
            break

        case 10:
            console.log('Outubro')
            break

        case 11:
            console.log('Novembro')
            break

        case 12:
            console.log('Dezembro')
            break
            

    }
}

calendario(1)
calendario(4)



/*

(5) //PORTUGUESE
Crie uma função que receba dois números e retorne falso se o primeiro é maior ou igual ao segundo.
Exemplos:
maiorOuIgual(3, 4) // retornará true
maiorOuIgual(0, "0") // retornará false
maiorOuIgual(5, 1) // retornará false

//ENGLISH
Create a function that receive two numbers and return false if the first are bigger than or equal to the second
biggerOrEqual(3, 4) // return true
biggerOrEqual(0, "0") // return false
biggerOrEqual(5, 1) // return false

*/

function comparacao(a, b) {
    if(a >= b) {
        return false
    } else {
        return true
    }

}

console.log(comparacao(3, 4))
console.log(comparacao(0, '0'))
console.log(comparacao(5, 1))
