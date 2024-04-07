const buttonSeeProjects = document.querySelector('.btn-mostrar-projetos')
const inativeProjects = document.querySelectorAll('.projeto:not(.ativo)')

buttonSeeProjects.addEventListener('click', () => {
  mostreMoreProjects()
  showButton()
})


function showButton () {
  buttonSeeProjects.classList.add('remover')
}

function mostreMoreProjects () {
  inativeProjects.forEach(inativeProjects => {
    inativeProjects.classList.add('ativo')
  })
}