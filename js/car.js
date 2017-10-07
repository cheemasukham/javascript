var Car = function(model, color, engine){
    this.model = model;
    this.color = color;
    this.engine = engine;

    this.drive = function(speed, distance){
        console.log(speed * distance);
    };

    this.stopCar = function(carstop){
        this.carstop = carstop;
        console.log('Car engine ' + this.carstop);
    };

    this.startCar = function(carstart){
        this.carstart = carstart;
        console.log('Car engine ' + this.carstart);
    };

    this.arrayCar = [];
    this.addarray = function(arrayCar=[]){
        for(var i = 0; i < arrayCar.length; i++){
            this.arrayCar.push(arrayCar[i]);
        }
        console.log(arrayCar);
    };
    //this.addarray();
}

var myCar = new Car('Nissan', 'Red', 'Cool');
console.log('Car model : ' + myCar.model + ' Car color : ' + myCar.color + ' ' + myCar.engine);
myCar.drive(5, 6);
myCar.stopCar('stop');
myCar.startCar('Start');
myCar.addarray(['abc','dfe','svv']);

var myCar2 = new Car('Dodge', 'Black', 'Wow');
console.log('Car model : ' + myCar2.model + ' Car color : ' + myCar2.color + ' ' + myCar2.engine);
myCar2.drive(15, 18);
myCar2.stopCar('stop');
myCar2.startCar('Start');

// two arrays firstname / last name
// Lastname + FirstName
// 
 function personcar(person, car, home)
 {
 // name of person person.name has car.carname
 }

 personcar(myCar, myCar2, myhome);

 function mycars(ArraCar=[])
 {
    for(var i = 0; i < ArraCar.length; i++){
        console.log('Car model : ' + ArraCar[i].model + ' Car color : ' + ArraCar[i].color + ' ' + ArraCar[i].engine);
        ArraCar[i].startCar();
    }
 }

 mycars([mycar1, mycar2, mycar3]);


