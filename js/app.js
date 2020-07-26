
const container= document.querySelector('.buttons')
const show =document.querySelector('#show')
const clear =document.querySelector('#clear')
const result= document.querySelector('#result')
const showResult= document.querySelector('#show-result')

// Effects of the clicking of the buttons of digits and operators
container.addEventListener('click', e =>{
    if(e.target.classList.contains('digit')){
        showValue(e.target.innerText)
    }

    else if(e.target.classList.contains('operator')){
        setOperation(e.target.innerText)
    }
})

// Functionality of assign button 
result.addEventListener('click', doOperation)

// Functionality of Clear button
clear.addEventListener('click', e => {
        numbArr= []
        operatorArr=[]
        getNumber=''
        show.innerText='0'
        showResult.innerText=''
})