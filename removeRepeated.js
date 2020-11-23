const validLimit = (limit) => !isNaN(limit) && limit >= 0;

/**
 * @param {string} string  
 * @param {number} limit 
 * @return {string}  
 */
const removeRepeated = (string, limit) => {
    if (!validLimit(limit)) {
        return 'O limite deve ser um número válido!';
    }

    let formattedString = '';
    let count = 0;
    let index = 0;
    let latestChar = '';
    while(index < string.length) {
        string[index] == latestChar ? count++ : count = 0;
        if (count < limit) {
            formattedString += string[index];
        }
        latestChar = string[index];
        index++;
    }
    return formattedString;
}

export default removeRepeated;
