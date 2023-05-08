var nex = document.getElementById("b3")
var prev = document.getElementById("b2")
var inp = document.getElementById("drink")
var add = document.getElementById("b4")
var imge = document.getElementById("i")
var commande = document.getElementById("cmd")
var boody =  document.getElementById("body")
var rmve = document.getElementById("b5")

var elemnts = document.createElement("ul")
elemnts.setAttribute("id", "drinks")
console.log(elemnts)

var count = 0 
var array= ["https://cdn.cnn.com/cnnnext/dam/assets/150929101049-black-coffee-stock-super-tease.jpg",
"https://t4.ftcdn.net/jpg/01/16/61/93/360_F_116619399_YA611bKNOW35ffK0OiyuaOcjAgXgKBui.jpg",
"https://assets.epicurious.com/photos/57ced55ee6411cab70f0d948/1:1/w_1600,c_limit/fresh-mint-and-ginger-lemonade.jpg",
"https://jrad-distribution.tn/wp-content/uploads/2020/07/boisson-gazeuse-11.png",
"https://cdn.w600.comps.canstockphoto.com/back-soon-illustration_csp28677029.jpg"];



nex.onclick = function () {
    count++ 
    console.log(count)
    // if(count > array.length) {return count = array.length-1 }
    imge.src = array[Math.abs(count % array.length)]
}

prev.onclick = function () {
    count--;
    console.log(count)
    // if(count <= 0) {return count === 0}
    imge.src = array[Math.abs(count% array.length)];
  };



  add.onclick = function () {
    var drink = document.getElementById("drink").value
    console.log("drink",drink)
    var node = document.createElement("li");
    var textnode = document.createTextNode(drink);
    node.appendChild(textnode);
    console.log(node)
    var list =  elemnts.appendChild(node);
   boody.appendChild(list)
  }

