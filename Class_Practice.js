class Car {
    constructor(make, model, year, month, day) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.month = month;
        this.day = day;
    }

    getAge() {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1;
        const currentDay = currentDate.getDate();

        let age = currentYear - this.year;

        if (currentMonth < this.month || (currentMonth === this.month && currentDay < this.day)) {
            age--;
        }

        return age;
    }

    display() {
        const age = this.getAge();
        console.log(`The car is ${age} years old.`);
    }
}

const car1 = new Car('Toyota', 'Corolla', 2000, 10, 4);
car1.display();
