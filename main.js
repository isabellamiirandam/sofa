/* variable*/
const sofa = document.querySelector('#sofa')
const vector = document.querySelector('.vector')
const close = document.querySelector('.close')

/*function*/
function changeImage() {
  sofa.setAttribute('src', 'assets/sofa.gif')
  vector.classList.add('hide')
  close.classList.remove('hide')
}

function previousImage() {
  close.classList.add('hide')
  vector.classList.remove('hide')
  sofa.setAttribute('src', 'assets/sofa.png')
}