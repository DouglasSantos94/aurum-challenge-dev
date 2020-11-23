const getLastValidChar = (string) => {
    while (string[string.length-1] == '?') {
        string = string.slice(0, string.length-1);
    }
    return string[string.length-1];
}

const firstChar = (index) => index == 0;

/**
 * @param {string} string  
 * @param {number} times 
 * @return {string}  
 */
const replaceChar = (string, times) => {
    let formattedString = '';
    let index = 0;
    let latestChar = '';
    let aux = string;
    while (index < string.length) {
        if (string[index] == '?') {
            formattedString += firstChar(index) ? getLastValidChar(aux).repeat(times) : latestChar.repeat(times);
        } else {
            formattedString += string[index];
            latestChar = string[index];
        }
        index++;
    }
    return formattedString;
}

export default replaceChar;