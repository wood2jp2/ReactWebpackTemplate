const Mazda = new Car('Mazda', '626', 18)
class Truck extends Car {
    // you can set default args like normal
    // The way default args work if they are NOT the last argument: for numbers, take the following function:
        // multiple = ( x = 5, y) => x * y
        // multiple(4, 3) === 12
        // multiple(null, 3) === 0 => BECAUSE null is equivalent to 0
        // multiple(undefined, 3) === 15
        // multiple(false, 3) === 0
    constructor(make, model = 'anonymous', age, bed = '34 square feet', doors) {
        // Super goes out and grabs the master class's constructor assignment methods and does with it as outlined on that class. In this case, it assigns the make, model and age as expected and outlined on Car.
        super(make, model, age)
        this.bed = bed
        this.doors = doors
    }

    //getCarDescription is already accessible on this class.
    getTruckbedInfo() {return `The bed of my truck is ${this.bed} large`}

    hasDoors() {
        return !!this.doors
    }

    // override parent functions by outlining it again.
    getCarDescription() {
        // use super to access a function's return previously, along with any methods (zero in this case) and do with it as you will.
        var description = super.getCarDescription()
        return `${description} and is a truck.`
    }
}
console.log(Mazda.getCarDescription())
const F150 = new Truck('Ford', 'F150', 18)
console.log(F150.getCarDescription())