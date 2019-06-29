const ENTER_KEYCODE = 13;
var template = document.querySelector('#template').content.querySelector('li');
var mainList = document.querySelector('.things-list');
var complitedList = document.querySelector('.completed-list');
var inputText = document.querySelector('#newcase');
var count = 0;

function insertCase() {
  count += 1;
  var templateElement = template.cloneNode(true);

  if (inputText.value.length > 0) {
    templateElement.querySelector('.project-label').textContent = inputText.value;
    templateElement.querySelector('.project-label').setAttribute('for', count)
    templateElement.querySelector('.project-checkbox').setAttribute('id', count);

    mainList.insertAdjacentElement('afterbegin', templateElement);
    inputText.value = '';
  }
};

function transferCase(selector) {
  if (selector.checked) {
    var nextElement = selector.closest('li');
    selector.classList.add('completed-task');
    complitedList.appendChild(nextElement);
  } else if (selector.classList.contains('completed-task')) {
    var prevElement = selector.closest('li');
    selector.classList.remove('completed-task');
    mainList.appendChild(prevElement);
  }
};

function validityCase() {
  var valCase = document.getElementsByClassName('completed-task');
  if (valCase.length > 0) {
    document.querySelector('.completed').classList.add('open');
  } else {
    document.querySelector('.completed').classList.remove('open');
  }
};

document.addEventListener('click', function (evt) {
  var onClickElement = evt.target;
  if (onClickElement.classList.contains('savecase')) {
    insertCase();
  } else if (onClickElement.classList.contains('del-button')) {
    onClickElement.parentNode.remove();
    validityCase();
  } else if (onClickElement.classList.contains('project-checkbox')) {
    transferCase(onClickElement);
    validityCase();
  }
});

inputText.addEventListener('keypress', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    insertCase();
  }
});
