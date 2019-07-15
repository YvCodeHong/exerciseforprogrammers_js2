// Multiplication Table 

//Create a program that generates multiplication tables for 
//the numbers 0 through 12. 

// Example output: 
// 0 X 0 = 0 
// 0 X 1 = 0 
// ....
//12 x 11 = 132
// 12 x 12 = 144 


var result = ' x   ';

function buff(val) {
    var buff = '';
    var pad = 4 - val;
    while (pad-- > 0)
        buff += ' ';
    return buff;
}

for (var i = 0; i < 13; i++) {

    for (var j = 0; j < 13; j++) {

        if (i == 0 && j > 0) {
            result += '[' + j + ']' + buff((j + '').length + 2);
        }
        else if (j == 0 && i > 0) {
            result += '[' + i + ']';
        }
        else if (i > 0 && j > 0) {
            result += buff((i * j + '').length) + i * j;
        }
    }
    result += '\n'
}