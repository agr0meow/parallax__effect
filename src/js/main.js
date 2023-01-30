const parallaxThree = document.querySelector('.wrapper__three');
document.addEventListener('mousemove', (event) => {
    const offsetX = (event.clientX / window.innerWidth * 20) - 10 
    const offsetY = (event.clientY / window.innerHeight * 15) - 7
    parallaxThree.setAttribute("style", "background-position: " + offsetX + 'px ' + offsetY + 'px;');
})



