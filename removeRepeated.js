/**
 * @param {string} string  
 * @param {number} limit 
 * @return {string}  
 */

 // recebe 2 parametros, string e int
 // o int indica o numero maximo de vezes que cada caracter pode ser repetido em sequencia
 // retorna uma string
 // fazer uma função que ve se o proximo caracter é repetido e o numero de vezes permitidas foi atingido; se sim, pular para o proximo
const removeRepeated = (string, limit) => {
    let formatedString = '';
    let count = 0;
    let index = 0;
    let lastChar = '';
    while(index < string.length) {
        string[index] == lastChar ? count++ : count = 0;
        if (count < limit) {
            formatedString += string[index];
        }
        lastChar = string[index];
        index++;
    }
    return formatedString;
}

export default removeRepeated;
