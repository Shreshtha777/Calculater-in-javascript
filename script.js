
var a=0;
var b=0;
var op=null;
var c=0;


function display(num){
    var display=document.getElementById('result');
    
    if(display.value=="0"){
        display.value=num;
    }else{
        display.value=display.value+num;
    }
    

}
function clearDisplay(){
    document.getElementById('result').value="0";
}
function add(){
    a=document.getElementById('result').value;
    op='+';
    document.getElementById('result').value="0";
}
function sub(){
    a=document.getElementById('result').value;
    op='-';
    document.getElementById('result').value="0";
}
function multi(){
    a=document.getElementById('result').value;
    op='*';
    document.getElementById('result').value="0";
}
function div(){
    a=document.getElementById('result').value;
    op='/';
    document.getElementById('result').value="0";
}

function equal(){
    b=document.getElementById('result').value;
    if(op=="+"){
        c=parseFloat(a)+parseFloat(b);
    }
    if(op=="-"){
        c=parseFloat(a)-parseFloat(b);
    }
    if(op=="*"){
        c=parseFloat(a)*parseFloat(b);
    }
    if(op=="/"){
        c=parseFloat(a)/parseFloat(b);
    }
    console.log(a,b,c,op);
    document.getElementById('result').value=c;
}