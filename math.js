const add = (a,b) => a+b ;

const subtract = (a,b) => a-b ;

const divide = (a,b) => {
    if (b=== 0){
        console.log ('Error: Division by zero')
    } else {
        return a/b;
    }
}

const multiply = (a,b) => a*b ;

const answer = add (2,2)
console.log(answer)