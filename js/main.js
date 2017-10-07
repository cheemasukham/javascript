//Print Reverse Array
var friends = ['Aman', 'Armaan', 'Arsh', 'Avleen', 'Ajitpal'];
document.getElementById("friends").innerHTML = '<b>An Array: </b>' + friends;

friends.reverse();
document.getElementById("reverse-friends").innerHTML = '<b>Reverse Array: </b>' + friends;

/*
friends.toString();
document.getElementById("array-length").innerHTML = '<b>Array length : </b>' + friends.length;
*/

// Get array length
document.getElementById("array-length").innerHTML = '<b>Array length : </b>' + friends.length;

//Add two numbers at last
var addnumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
document.getElementById("numbers").innerHTML = '<b>An Array of number: </b>' + addnumber;
var sumnumber = addnumber[0] + addnumber[1];
console.log('sum of first two numbers: ' + sumnumber);

function findsum(){
    var addnumb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11];
    var totalsum = 0;
    for( var j = addnumb.length-1; j > addnumb.length-6 ; j--){
        totalsum += addnumb[j];
    }
    console.log('sum of last five numbers: ' + totalsum);
}
findsum();

addnumber.push(11,12);
document.getElementById("addnum").innerHTML = '<b>An Array after adding two more numbers: </b>' + addnumber;

// Add five numbers at the beginning
addnumber.unshift(55,44,33,22,11);
document.getElementById("addnumfirst").innerHTML = '<b>An Array after adding five numbers at the beginning: </b>' + addnumber;

//create array of odd numbers
function oddarray(){
    var oddarr = [];
    for( var i = 0; i < 20; i++){
        if(i%2 != 0){
            oddarr.push(i);
        }
    }
    console.log('alternate array: ' + oddarr );
    document.getElementById("oddnumbers").innerHTML = '<b>An array of odd numbers: </b>' + oddarr;
}
oddarray();

function printodd(){
    var arrnum = [];
    for( var i = 0; i < 5; i++){
    if(i%2 != 0){
        arrnum.push(i);
    }
}
    console.log('odd array' + arrnum);
}
printodd();

//Prompt and alert
/*function information(){
    var info = prompt("Please enter your name" , 'Enter your name');
    alert ('Hello ' + info + ' Welcome to JavaScript World!');
}
information();
*/
//sum of array numbers
function sumarr(){
    var numarray = [22, 33, 55];
    var total = 0;
    for(var i = 0; i < numarray.length; i++){
        total += numarray[i];
    }
    console.log(total);
    document.getElementById("arraysum").innerHTML = '<b>Sum of array numbers: </b>' + numarray + ' = ' + total;
}
sumarr();

//multiply and subtract two numbers
function multiply(a, b){
    var mresult = a * b;
    var sresult = b - a;
    console.log(mresult);
    document.getElementById('multinum').innerHTML = '<b>Multiply two numbers: </b>' + a + ' * ' + b + ' = ' + mresult;
    document.getElementById('subnum').innerHTML = '<b>Subtract two numbers: </b>' + b + ' - ' + a + ' = '  + sresult;
}
multiply(5,9);