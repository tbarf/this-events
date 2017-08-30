//Secret Menu Challenge!
/*Add event listeners to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/

var nameElem = document.getElementsByClassName("name");
for(var i = 0; i<nameElem.length; i++){
  nameElem[i].addEventListener("click",showPrice);
console.log(name);
}

function showPrice(){
  var menu = this.querySelectorAll(".menu")[0];
  if(menu.style.display === "none"){
    menu.style.display = "block";
  }else{
    menu.style.display = "none";
  }
}

