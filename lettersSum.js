const convertSpecialCharacters = (char) => {
    if ('áàâã'.includes(char)) return 'a'
    if ('éèê'.includes(char)) return 'e';
    if ('íì'.includes(char)) return 'i';
    if ('óòõô'.includes(char)) return 'o';
    if ('úù'.includes(char)) return 'u';
    if (char == 'ç') return 'c';
    return char;
}

const charIndexes = (string, alphabet) => {
    let arrString = [];
    for (let char of string) {
        char = convertSpecialCharacters(char);
        if (!alphabet.includes(char.toUpperCase())) return false;
        arrString.push(alphabet.indexOf(char.toUpperCase())+1);
    }
    return arrString;
}

const getMinOrMaxChar = (string, op) => string.reduce((a, b) => op == 'min' ? Math.min(a, b) : Math.max(a, b));

const sum = (string1, string2) => {
    return getMinOrMaxChar(string1, 'max') * getMinOrMaxChar(string2, 'min') + getMinOrMaxChar(string2, 'max') * getMinOrMaxChar(string1, 'min');
}

/**
 * @param {string} string1 
 * @param {string} string2
 * @return {number}  
 */
const lettersSum = (string1, string2) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let charIndexes1 = charIndexes(string1, alphabet);
    let charIndexes2 = charIndexes(string2, alphabet);

    return charIndexes1 && charIndexes2 ? sum(charIndexes1, charIndexes2) : 'Caracter inválido encontrado!';
}


console.log(lettersSum("dacb", "gdab"));
console.log(lettersSum("dçb", "gdab"));
console.log(lettersSum("dacb", "gdãb"));