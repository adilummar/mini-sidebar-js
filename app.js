const sidebar = document.querySelector('.sidebar')
const handBtn = document.querySelector('.sidebar-toggle')
const closeBtn = document.querySelector('.close-btn')

// eventListeners
handBtn.addEventListener('click',()=>{
    eventToggler()
    console.log('clicked');
})

closeBtn.addEventListener('click',()=>{
    eventToggler()
    console.log('clicked');
})

// functions
function eventToggler(){
    sidebar.classList.toggle('show-sidebar')
}