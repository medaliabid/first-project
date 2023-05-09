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
"https://cdn.w600.comps.canstockphoto.com/back-soon-illustration_csp28677029.jpg",
"https://static.750g.com/images/1200-675/b520523117d647dab6b842a36f4cc7f5/mojito-le-vrai.jpg",
"https://static.toiimg.com/thumb/msid-80850219,width-1070,height-580,imgsize-735181,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
"https://www.bhg.com/thmb/iL-5Q6gGjmXkxCKqEovughTLQAo=/3000x0/filters:no_upscale():strip_icc()/how-to-bake-how-to-make-cupcakes-hero-01-12c03f3eff374d569b0565bff7d9e597.jpg",
"https://gateauetcuisinerachida.com/wp-content/uploads/2015/03/Recette-cheesecake-new-yorkais.jpg"];



nex.onclick = function () {
    count++ 
    console.log(count)
    imge.src = array[Math.abs(count % array.length)]
}

prev.onclick = function () {
    count--;
    console.log(count)
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
