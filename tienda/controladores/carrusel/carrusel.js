const htmlCarrusel =

`
 <div class="carrousel">
        <div class="conteCarrousel" style="transform: translateX(0%)">
          <div class="itemCarrousel" id="itemCarrousel-1">
            <img src="/img/slider/imagen1.png" alt="" />
          </div>
          <div class="itemCarrousel" id="itemCarrousel-2">
            <img src="/img/slider/imagen2.png" alt="" />
          </div>
          <div class="itemCarrousel" id="itemCarrousel-3">
            <img src="/img/slider/imagen3.png" alt="" />
          </div>
        </div>
        <i class="fas fa-chevron-left left"></i>
        <i class="fas fa-chevron-right right"></i>
      </div>
`



let slideIndex = 1;
export async function Carrusel(){
    let d = document
    let seccionCarrusel = d.querySelector(".carrusel");
    let seccionLogin = d.querySelector(".seccionLogin");
    
    seccionLogin.innerHTML = "";
    seccionCarrusel.innerHTML = htmlCarrusel;

    const carrousel = document.querySelector('.conteCarrousel')
    const flechaIzquierda = document.querySelector('.left')
    const flechaDerecha = document.querySelector('.right')

    flechaIzquierda.addEventListener('click', () => {
    const posicion = carrousel.style.transform
    if (posicion.includes('-33%')) {
        return carrousel.style.transform = 'translateX(0%)'
    } 
    if (posicion.includes('-66%')) {
        return carrousel.style.transform = 'translateX(-33%)'
    } 
    })
    flechaDerecha.addEventListener('click', () => {
    const posicion = carrousel.style.transform
    if (posicion.includes('(0%)')) {
        return carrousel.style.transform = 'translateX(-33%)'
    } 
    if (posicion.includes('-33%')) {
        return carrousel.style.transform = 'translateX(-66%)'
    } 
    })

}