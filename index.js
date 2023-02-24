
// lesson 165  
// document.querySelectorAll is looking through document for everything with a class of DRUM
// next we loop through all DRUM elements and add event Listener with a mouse click
// then we call a function that styles everything WHITE
// triggering every button Use its identity to change the style


// detecting Button Press
var numberOfDrumButtons = document.querySelectorAll(".drum").length; // total length with drum class in the HTML

for(var i = 0; i< numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

       var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
    
        });


}

//Detecting Keyboard Press
document.addEventListener("keypress", function(event){
    makeSound(event.key);
});


function makeSound(key) {

    switch (key){
        case "w":
        var tom1 = new Audio("sounds/tom-1.mp3")
        tom1.play();
        break;

        case "a":
        var tom2 = new Audio("sounds/tom-2.mp3")
        tom2.play();
        break;
    
         case "s":
        var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play();
            break;
            
        case "d":

        var tom4 = new Audio("sounds/tom-4.mp3")
        tom4.play();
        break;

        case "j":
        var snare = new Audio("sounds/kick-bass.mp3")
        snare.play();
        break;

        case "k":
        var crash = new Audio("sounds/snare.mp3")
        crash.play();
        break;

        case "l":
        var kick = new Audio("sounds/crash.mp3")
        kick.play();
        break;
        

        default: console.log("buttonInnerHTML");
    }


}












    

// var audio = new Audio("sounds/tom-1.mp3");
   //     audio.play();



   //var numberOfDrumButtons = document.querySelectorAll(".drum").length;

    /*for(var i = 0;i< numberOfDrumButtons;i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
       
       console.log(this);
        this.style.color = "white";
       
    });
}


this.style.color = "white";
*/ 


/* var bellBoy1Name = "Timmy";
var BellBoy1Age = 19;
var BellBoy1HasWorkPermit = true;
var BellBoy1Languages = ["french", "English"];

alert("Hello") 

var BellBoy1 = { 
    name: "Timmy", 
    age:19, 
    hasWorkPermit: true, 
    languages: ["French", "English"]
}

alert("Hello, my name is " + BellBoy1.name)



var BellBoy1 = {
    name: "Timmy";
    age: 19, 
    hasWorkPermit: true, 
    languages: ["french", "English"]
    
}

addEventListener("keypress", function(event){
    console.log(event);
    this.alert("Key was pressed");
})

*/