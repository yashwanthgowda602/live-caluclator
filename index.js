document.getElementById('result').value="1+2/89"

function fn1(){
    
    document.getElementById('result').value=document.getElementById('result').value.slice(0,-1)
}
function fn2(){
    
    document.getElementById('result').value=" "
}
function fn3(){
     document.getElementById('result').value=eval(document.getElementById('result').value)
}
function btnfn(val){
    document.getElementById('result').value+=val;

}