var copy = document.querySelector("#copy")

copy.addEventListener("click" , function() {
    var input = document.querySelector("#password-output");
    const temp = document.createElement('textarea');
    temp.value = input.value;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand('copy');
    document.body.removeChild(temp);
})