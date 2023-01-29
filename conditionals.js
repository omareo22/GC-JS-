const prompt = require("prompt-sync")();

const total = +prompt ('What is the total amount?');
const state = prompt ('What state are you in?');
let totalTax = 0

switch (state) {
    case 'CA':
        console.log(totalTax += (total*1.07));
        break;
    case 'MI':
        console.log(totalTax += (total*1.05));
        break;
    case 'NY':
        console.log(totalTax += (total*1.06));
        break;
    case 'TX':
        console.log(totalTax += (total*1.03));
    break;
    default:
        console.log('Please select a valid state.');
}
