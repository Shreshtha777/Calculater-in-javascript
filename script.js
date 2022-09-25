var a = 0;
var b = 0;
var c = 0;
var op = "";
function clearDisplay() {
    document.getElementById("result").value = "";
}

function back() {
    let str=document.getElementById("result").value;
   let newstr=str.substring(0, str.length - 1);
   document.getElementById("result").value=newstr;
}

function display(num) {
    var display = document.getElementById("result");
    if (display.value == 0) {
        display.value = num;
    } else {
        display.value = display.value + num
        
    }
    

}
function add() {

    a = document.getElementById("result").value;
    op = "+";
    document.getElementById("result").value = 0;


}
function sub() {

    a = document.getElementById("result").value;
    op = "-";
    document.getElementById("result").value = 0;


}
function multi() {

    a = document.getElementById("result").value;
    op = "*";
    document.getElementById("result").value = 0;


}
function div() {

    a = document.getElementById("result").value;
    op = "/";
    document.getElementById("result").value = 0


}
function mod() {

    a = document.getElementById("result").value;
    op = "%";
    document.getElementById("result").value = 0


}
function equal() {
    b = document.getElementById("result").value;
    switch (op) {
        case "+":
            c = parseFloat(a)+parseFloat(b);;
            document.getElementById("result").value = c;
            break;
        case "-":
            c = parseFloat(a)-parseFloat(b);
            document.getElementById("result").value = c;
            break;
        case "*":
            c = parseFloat(a)*parseFloat(b);
            document.getElementById("result").value = c;
            break;

        case "/":
            c = parseFloat(a)/parseFloat(b);
            document.getElementById("result").value = c;
            break;
            case "%":
                c = parseFloat(a)%parseFloat(b);
                document.getElementById("result").value = c;
                break;
    }
    // if(op=="+"){
    //     c=parseFloat(a)+parseFloat(b);
    //     document.getElementById("result").value=c;
    // }
    // if(op=="-"){
    //     c=parseFloat(a)-parseFloat(b);
    //     document.getElementById("result").value=c;
    // }
    // if(op=="*"){
    //     c=parseFloat(a)*parseFloat(b);
    //     document.getElementById("result").value=c;
    // }
    // if(op=="/"){
    //     c=parseFloat(a)/parseFloat(b);
    //     document.getElementById("result").value=c;
    // }
}
