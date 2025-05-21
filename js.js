

var BTN = document.getElementById("mybutton");
var doSomething = function(event){
    alert("praise me! ");
    console.log(event);
}

for (var i = 0; i < 3; i++){
    var newBTN = BTN.cloneNode(true);
    document.body.append(newBTN)
    newBTN.addEventListener("click", doSomething)
}
alert("Please let it work")
