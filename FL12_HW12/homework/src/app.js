const rootNode = document.getElementById('root');

const termins = [];
const term_input = document.getElementById('termin')
const termins_section = document.getElementById('termins')

const MAIN_HASH = '';
const ADD_HASH = '#/add';
const MODIFY_HASH = '#/modify';

function changeHashAdd() {
    location.hash = ADD_HASH;
}

function changeHashMain() {
    location.hash = MAIN_HASH;
}

function changeHashModify() {
    location.hash = MODIFY_HASH;
}

function HashHandler() {

  const logo = document.getElementById('logo')
  const add_btn = document.getElementById('add-btn')
  const save = document.getElementById('save_change')
  const add_termin = document.getElementById('add_termin')
  const cancel = document.getElementById('cancel')

  switch (location.hash) {

    case MAIN_HASH:

      logo.style.display = 'block'
      add_btn.style.display = 'block'
      add_termin.style.display = 'none'
      cancel.style.display = 'none'
      term_input.style.display = 'none'
      save.style.display = 'none'

      break;

    case ADD_HASH:

      term_input.style.display = 'unset'
      term_input.value = ''
      add_btn.style.display = 'none'
      logo.style.display = 'none'
      cancel.style.display = 'unset'
      save.style.display = 'unset'
      add_termin.style.display = 'unset'

      break;

    //no default
  }
}

function addTermin() {
  const div = document.createElement('div');
  div.classList.add('term')
  const h2 = document.createElement('h2')
  for (let i = 0; i < termins.length; i++) {
    div.appendChild(h2)
    div.id = i
    div.style.background = 'lightgrey';
    h2.innerHTML = termins[i]
  }
  termins_section.appendChild(div)
}

const addButtonClicked = document.getElementById('add-btn').onclick = function() {
  changeHashAdd();
}

const cancelButtonClicked = document.getElementById('cancel').onclick = function () {
  changeHashMain()
}

const saveButtonClicked = document.getElementById('save_change').onclick = function () {
  termins.push(term_input.value);
  console.log(termins)
  addTermin()
  changeHashMain();
}

window.addEventListener('hashchange', HashHandler, true);
