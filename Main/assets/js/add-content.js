// JavaScript Document
var today = new Date();
var hourNow = today.getHours();
var greeting;
var eltag=document.getElementById("greeting");

switch(hourNow) {
    case hourNow > 0 && hourNow < 12:
        greeting = 'Good morning!';
        break;
        
    case hourNow > 12 && hourNow < 18:
        greeting = 'Good afternoon!';
        break;
        
    case hourNow > 18:
        greeting = 'Good evening!';
        break;
        
    default:
        greeting = 'Welcome!';
}

eltag.innerHTML = '<h3>'+greeting+'</h3>';
//document.write('<h3>' + greeting + '</h3>');