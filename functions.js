// function double (total){
//     return (total = total*2)
// }

// double(2)

//display of 2 numbers
function sum (a, b){
    console.log(a+b)
}

console.log (sum (5,5))

//name and age
function nameAge (name, age){
    console.log(`${name} is ${age} years old.`, )
}

nameAge ('Omar', 26)

//area

function areaOfCircle (radius){
    let answer = (3.14 * (radius * radius));
    return answer;
}
console.log (areaOfCircle(4));

function circumfrenceOfCircle (radius){
    let answer = 2 * 3.14 * radius;
    return answer;
}
console.log (circumfrenceOfCircle(4))

const flip = Math.random() < 0.5 ? 'H' : 'T';