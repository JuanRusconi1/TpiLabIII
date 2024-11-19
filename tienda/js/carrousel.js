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