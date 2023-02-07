// const drink = {
//     name: 'Gatorade',
//     flavor: 'Grape',
//     tasteGood: true
// };

// console.log (drink.flavor)


const car = {
    make: 'BMW',
    model: '128i',
    year: 2008,
    fuelAmount: 1,
    isRunning: true,
    displayInfo() {
        console.log (`${this.year} ${this.make} ${this.model}`)
    },
    updateFuel (amount){
        this.fuelAmount = amount;
        console.log (`The car now has fuel: ${this.fuelAmount}`)
    },
    start (){
        this.isRunning = true;
        console.log ('The car is running');
    },
    stop (){
        this.isRunning = false;
        console.log ('The care is stopped')
    }
}

car.displayInfo();

car.start();

setTimeout (()=>{
    car.updateFuel(.25);
}, 5000)

setTimeout (()=>{
    car.stop();
}, 10000)