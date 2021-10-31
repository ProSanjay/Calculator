let output=document.getElementById('output');
function display(n){
    output.value=output.value+n;
}
function ClearAll(){
    output.value="";
}
function Calculate(){
    try{
        output.value=eval(output.value);
    }catch{
        alert("invalid expression");
    }
}