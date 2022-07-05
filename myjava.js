
let list = document.querySelector('.fa-list')
let xmark = document.querySelector('.fa-xmark')
let nav_group = document.querySelector('.nav_Group')
let teenager = document.querySelector('#cornerBox')
let navi = document.querySelectorAll('.nav_indi')
    


window.addEventListener("load",function(event){
    document.getElementById('nav').classList.add('open')
})
function globalEvent(element,myFunc) {
 document.body.addEventListener('click',function(event){
    if(event.target == element){
        myFunc()
    }
 })
}

globalEvent(list,function(){

	nav_group.style.transition = '2s ease'
  list.style.transition = '2s ease'
	nav_group.style.right = '0'
  list.style.transition = '2s ease'
  list.style.opacity = '0'
})
globalEvent(xmark,function(){
	nav_group.style.right = '-400px'
  list.style.opacity = '1'
})

teenager.addEventListener('click',teen => {
  teen.preventDefault()
})


navi[0].setAttribute('id','permanent')
navi.forEach(data => {
data.addEventListener('click',function(ata) {
  ata.preventDefault()
  document.querySelectorAll('.nav_indi').forEach(indi => {
    indi.removeAttribute('id')
  }) 
  this.setAttribute('id','permanent')
  
})
})


console.log('hi')








