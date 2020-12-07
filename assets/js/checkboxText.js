var checkbox;
var e = document.getElementsByClassName("checkboxText");

for (let i = 0; i < e.length; i++) {
    e[i].addEventListener( "click" ,function(){
        get(this);
        if ( checkbox.checked == true) {
            checkbox.checked = false;
        } else {
            checkbox.checked = true;
        }
    })
}

function get(x){
    if ( x == e[0] ){
        checkbox = document.querySelector("#Symbol")
    } else if ( x == e[1] ){
        checkbox = document.querySelector("#Number")
    } else if ( x == e[2] ){
        checkbox = document.querySelector("#Upper")
    } else {
        return false;
    }
}