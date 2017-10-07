// object constructor


var Person = function(fname, lname, age){
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.kids = function(kids=[]){
        for(var i = 0; i < kids.length; i++){
            kids.push(kids[i]);
        }
        console.log(this.kids);
    }
    this.showInfo = function(){
        console.log(this.fname + ' ' + this.lname + ' is ' + this.age + ' years old.');
    };

    this.totalKids= function(){
        console.log('Total number of Kids are: ' + this.kids.length);
    };

    this.sortKids = function(){
        this.kids.sort();
        console.log('Sorted Name of the Kids are: ' + this.kids);
    };
}

var per = new Person('Ajitpal', 'Dhindsa', '35');
console.log(per.fname + ' ' + per.lname + ' is ' + per.age + ' years old');
per.showInfo();
per.totalKids();
per.kids(['Avleen','Armaan','Samrath']);
per.sortKids();




var per2 = new Person('Kanwal', 'Tiwana', '35');
console.log(per2.fname + ' ' + per2.lname + ' is ' + per2.age + ' years old');
per2.showInfo();
per2.totalKids();
per2.kids(['Guralam','Avu','Armaan']);
per2.sortKids();
