function getNumber(num){
 console.log(num)
 let result = document.getElementById('result')
 result.value +=num;
}

function clearResult(){
let result = document.getElementById('result');
result.value= "";
}


function getResult(){
    let result  = document.getElementById('result');
    
    result.value = eval(result.value)
}
