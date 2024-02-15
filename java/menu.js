
const menunavegacion = document.querySelector ('.menunavegacion')
const menu = document.querySelector ('.menu')

//console.log(menu)
//console.log(menunavegacion)

menu.addEventListener('click', ()=> {
    menunavegacion.classList.toggle ("spread")
})

window.addEventListener ('click', e=> {
    if(menunavegacion.classList.contains('spread')
    && e.target != menunavegacion && e.target != menu){

        menunavegacion.classList.toggle ("spread")

    }
})