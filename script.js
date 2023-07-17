function calculator(newValue){
    document.getElementById('myResult').value += newValue;
}
function deleteMe(){
    document.getElementById('myResult').value = '';
}
function Answer(){
    let a = document.getElementById('myResult').value;
    let b = eval(a);
    document.getElementById('myResult').value = b;
}