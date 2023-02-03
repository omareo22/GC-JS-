function add (a,b){
    return a+b;
}


function getSalesTax(state) {
  if (state === "MI") {
    return {
        state: 'MI',
        rate:0.06,
}
  } else if (state === "OH") {
    return{ 
        state: 'OH',
        rate:0.07
  }
  } else {
    return 0;
  }
}

const rate = getSalesTax('OH');

console.log(rate);