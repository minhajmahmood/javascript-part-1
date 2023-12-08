





// The onclick Attribute

function defineEvent(){
    document.getElementById
} 


// if else statment
var v=20;
function ifElse() {
    if (v>10);
    document.getElementById("if_else_stat").innerHTML = "The smaller";
   
}





// avaScript evaluates expressions from left to right. Different sequences can produce different results
let k = 16 + 4 + "Volvo";
function getNow(){
    document.getElementById("demo").innerHTML = k;
}


// Finding HTML Elements Using document.title
function catchNow() {
    document.getElementById('F_title').innerHTML="The title of this document is: " + document.title;
}

// The same variable can be used to hold different data types
let f;         // Now x is undefined
f = 5;         // Now x is a Number
f = "John";
function defineVar(){
    document.getElementById('d_var').innerHTML= "The result is" +  f;
}


// The Assignment (=) Operator
// Assign the value 5 to x
let a = 5;
// Assign the value 2 to y
let b = 2;
// Assign the value x + y to z
let c = a + b;
// Display z
function sumResult(){
    document.getElementById('result_sum').innerHTML="The result of the sum is :" + z;
}
// show the summation
var x=6;
var y=4;
var z= x+y ;
function finalResult(){
    document.getElementById('final_result').innerHTML= "The value of x + y is :" +z;
}
// length of tag
function clength(){
    var data= document.getElementsByTagName('h1');
    alert(data.length);
}
// classname
function cName(){
    document.getElementsByClassName('p')[0].innerHTML="world";
}
// Show the result of summation
var number1 = 3;
var number2 = 4;
var result= number1 + number2;

function showResult(){
    document.getElementById('result').innerHTML=result;
}
// smile
function smIle(){
    document.getElementById('img').src="images/smile.gif";
}
function sAd(){
    document.getElementById('img').src="images/sad.gif";
}

// bulb on and off
function bulbOn(){
    document.getElementById('img').src="images/on.gif";
}
function bulbOff(){
    document.getElementById('img').src="images/off.gif";
}


// Jquery part examples


// jquery example 1
$(document).ready(function(){

    $('.btn').on('click', function(){
        alert("Welcome");
    });

// hide
$('#hide').on('click',function(){
    $('#sh_h3').hide();
})


})

// show/hide/toggle
