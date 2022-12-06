let textarea = document.querySelector('#area')
let useCount = document.querySelector('.useCount')
textarea.addEventListener('input',funtion(){
    useCount.innerHTML =textarea.value.length
})