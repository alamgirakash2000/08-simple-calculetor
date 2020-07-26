// Initialize the number array, Operator array and number string
var numbArr= new Array()
var operatorArr =new Array()
var getNumber=''


//Save the number to the number string
function showValue(e){
    if(typeof getNumber==='number'){
        getNumber=''
        showResult.innerText=''

    }
    getNumber+=e
    show.innerText=parseFloat(getNumber).toLocaleString()
}

// Save the operator to the operator array
function setOperation(e){
    if(getNumber!==''){
        numbArr.push(parseFloat(getNumber))
    }
    if(!(numbArr.length===operatorArr.length)){
        operatorArr.push(e)
    }
    getNumber=''
}


// Function to do the operation
function doOperation(){
    show.innerText='0'
    numbArr.push(parseFloat(getNumber))
    if(getNumber===''){
        var total=0
    }else{
        var total=numbArr[0]
    }
    for(var i=0; i<numbArr.length-1; i++){

        if(operatorArr[i]==='+'){
            total= total + numbArr[i+1]
        }
        else if(operatorArr[i]=== '*'){
            total= total * numbArr[i+1]
        }
        else if(operatorArr[i]=== '-'){
            total= total - numbArr[i+1]
        }
        else if(operatorArr[i]=== '/'){
            total= total / numbArr[i+1]
        }
    }
    showResult.innerText=total.toLocaleString()
    numbArr= []
    operatorArr=[]
    getNumber=total
    showResult.innerText=getNumber.toLocaleString()
}