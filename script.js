//Acquiring all the li found in the document
var lis = document.querySelectorAll("li");

// looping through all the li exist in the document
for(var i = 0; i < lis.length; i++) { 
//when cursor hover over, class "selected" is activated
    lis[i].addEventListener("mouseover", function(){
        this.classList.add("selected");
    });
//when cursor hover out, class "selected" is removed and inactive
    lis[i].addEventListener("mouseout", function(){
        this.classList.remove("selected");
    });
//when cursor click on the list item, class "done" is activated
    lis[i].addEventListener("click", function(){
        this.classList.toggle("crossedOff");
    });
}