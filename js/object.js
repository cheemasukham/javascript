//document.write('<scr'+'ipt type="text/javascript" src="js/prompt.js" ></scr'+'ipt>');

// Object Literal 
var person = {
    firstname : '',
    lastname : '',
    age : '',
    kidsname : [],

    showInfo(){
        console.log(this.firstname + ' ' + this.lastname + ' is ' + this.age + ' years old.');
    },

    totalKids(){
        console.log('Total number of Kids are: ' + this.kidsname.length);
    },

    sortKids(){
        this.kidsname.sort();
        console.log('Sorted Name of the Kids are: ' + this.kidsname);
    },

    addkids(kidsname=[]){
        for(i = 0; i < kidsname.length; i++){
        this.kidsname.push(kidsname[i]);
        }
        console.log('My Kids : ' + this.kidsname);
    },



};



