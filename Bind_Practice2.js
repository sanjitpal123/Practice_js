
//Create an object car with properties brand and speed. Write a function displayInfo that logs "This [brand] is running at [speed] mph." Bind this function to the car object and call it.
const car = {
    brand: 'Thar',
    speed: '360',
};

function displayinfo() {
    console.log(`This ${this.brand} is running at ${this.speed} mph`);
}

const newbind = displayinfo.bind(car);
newbind();
