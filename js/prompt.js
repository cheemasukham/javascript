//Prompt 

var username = 'sukham';
var password = '123';

var name = window.prompt('Enter Username');
var pwd = window.prompt('Hello ' + this.name + '! ' + 'Please enter the Password');

if(name === username && pwd === password ){
   console.info('hurray all good !');
   var per = Object.create(person);
   per.firstname = 'Sukham';
   per.lastname = 'Cheema';
   per.age = '28';
   per.addkids(['Avu','veenu','kiki']);
   
   per.showInfo();
   per.totalKids();
   per.sortKids();

}
else{
    alert('invalid username and password');
}

