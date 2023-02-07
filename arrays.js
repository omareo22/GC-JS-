
const numbers = [];

numbers.push (1,2,3,4,5,6,7,8,9,10);

function inArray (array, num) {

    for (let i= 0; i < numbers.length; i++) {
        if (num === array [i] ){
            return true;
        }
    }
    return false
}

const answer = inArray (numbers, 8);
console.log (answer)