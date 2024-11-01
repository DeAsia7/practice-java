export class vehicle {

    constructor(make, model, year) {
        this.make = make
        this.model = model
        this.year = year

    }
    getdetails() {
        return `the vehicle make ${thi.make} and model ${this.model}`
    }
}

export class car extends vehicle {

    constructor(make, model, year, doors){
        super(make, model, year)
        this.doors = doors
    }
    

}

export class motorcycle extends vehicle {

    constructor(make, model, year, type){
        super(make, model, year)
        this.type=type
    }
    

}