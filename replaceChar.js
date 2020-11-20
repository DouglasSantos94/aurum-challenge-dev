/**
 * @param {string} string  
 * @param {number} times 
 * @return {string}  
 */

// recebe uma string e um int
// retorna uma string
// se encontrar o caracter ?, substituir pelo caracter que está antes dele; deve criar uma repetição com o numero de vezes indicado no segundo parametro;
// se ? for o primeiro da string, deve ser colocado o ultimo caracter da string passada como parametro
const replaceChar = (string, times) => {
    let formatedString = '';
    let index = 0;
    let latestChar = '';
    while (index < string.length) {
        if (string[index] == '?') {
            if (index == 0) {
                if (string[string.length-1] == '?') {
                    formatedString += string[string.length-2].repeat(times);
                } else {
                    formatedString += string[string.length-1].repeat(times)
                }
            } else {
                formatedString += latestChar.repeat(times)
            }
        } else {
            formatedString += string[index];
        }
        latestChar = string[index];
        index++
    }
    return formatedString;
}
// corrigir bug quando o ultimo caracter é ?
console.log(replaceChar('?x', 3));
console.log(replaceChar("x?yzza?y?", 1));
console.log(replaceChar("x?yzza?y?", 2));
console.log(replaceChar("?x?yzza?y?", 2));