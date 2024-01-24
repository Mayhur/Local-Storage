let Confirm= document.querySelector('.Confirm')
let First= document.querySelector('.First')
let Last= document.querySelector('.Last')
Confirm.addEventListener('click', function(){
localStorage.setItem('FirstName:',First.value)
localStorage.setItem('SecondName:',Last.value)

})