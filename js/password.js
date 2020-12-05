var alphabet = ["a" ,"b" ,"c" ,"d", "e", "f", "g", "h" ,"i" ,"j" ,"k" ,"l" ,"m" ,"n" ,"o" ,"p" ,"q" ,"r" ,"s", "t", "u", "v" ,"w" ,"x" , "y", "z"];

var symbol = ["*" , "/", "#", "£", "$", "%", "?", "!", ";", "~", "&", ")", "(", ",", "-", "="];

var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

var rest = document.getElementById("rest");
var place = document.getElementById("password-output");
var tmp = "";
var length = null;
var order = [] ;

Password();

function Password(){
    tmp = "";

    symbolinput = document.getElementById("Symbol").checked
    numberinput = document.getElementById("Number").checked
    upperinput = document.getElementById("Upper").checked
    length = document.getElementById("slider").value

    uppercase(upperinput);

    to(alphabet)

    place.value = "";

    if ( symbolinput == true ) {to(symbol)};
    if ( numberinput == true ) {to(number)}

    for (let i = 0; i < length; i++){
        tmp += order[Math.floor(Math.random() * order.length)];
    }

    place.value = tmp;

    order = [];

}

function uppercase(a) {
    if ( a == true){
        tmp += alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase();
    }
    else {
        tmp += alphabet[Math.floor(Math.random() * alphabet.length)];
    }

    length -= 1;
}

function to(e){
    for (let i = 0; i < e.length; i++){
        order[order.length] = e[i]
    }
}

rest.addEventListener("click" ,Password)