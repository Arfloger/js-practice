(function () {
  var mainArr = new Array(9);
  var step = 9;
  var generateClose = function (evt) {
    if (evt.target.classList.contains('cell') && !evt.target.classList.contains('set')) {
      mainArr[evt.target.getAttribute('id')] = 1;
      createClose(evt.target);
      countStep();
    }
  }

  function createField() {
    let gameField = document.createElement('div');
    let container = document.querySelector('.container');
    let cell;
    gameField.classList.add('game-field');
    container.appendChild(gameField);

    for (let i = 0; i < mainArr.length; i++) {
      cell = document.createElement('div');
      cell.classList.add('cell');
      cell.setAttribute('id', i);
      gameField.appendChild(cell);
    }
  }

  function createNumber() {
    return Math.floor(Math.random() * mainArr.length);
  }

  function createNull(selector) {
    selector.classList.add('set');
    selector.classList.add('null');
    step--
  }

  function createClose(selector) {
    selector.classList.add('close');
    selector.classList.add('set');
    step--
  }

  function generateNull() {
    let num;
    let count = 0;

    while (count < mainArr.length) {
      num = createNumber();
      var el = document.getElementById(num);
      if (!el.classList.contains('set')) {
        createNull(el);
        mainArr[num] = 0;
        break
      }
    }
  }

  function validityWin() {
    for (let i = 0; i < mainArr.length; i++) {
      if (mainArr[i] == 1 && mainArr[i + 3] == 1 && mainArr[i + 6] == 1 ||
        mainArr[i] == 0 && mainArr[i + 3] == 0 && mainArr[i + 6] == 0) {
        return true
      }

      if (mainArr[0] == 1 && mainArr[1] == 1 && mainArr[2] == 1 ||
        mainArr[0] == 0 && mainArr[1] == 0 && mainArr[2] == 0 ||
        mainArr[3] == 1 && mainArr[4] == 1 && mainArr[5] == 1 ||
        mainArr[3] == 0 && mainArr[4] == 0 && mainArr[5] == 0 ||
        mainArr[6] == 1 && mainArr[7] == 1 && mainArr[8] == 1 ||
        mainArr[6] == 0 && mainArr[7] == 0 && mainArr[8] == 0) {
        return true
      }

      if (mainArr[i] == 1 && mainArr[i + 4] == 1 && mainArr[i + 8] == 1 ||
        mainArr[i] == 0 && mainArr[i + 4] == 0 && mainArr[i + 8] == 0) {
        return true
      }

      if (mainArr[2] == 1 && mainArr[4] == 1 && mainArr[6] == 1 ||
        mainArr[2] == 0 && mainArr[4] == 0 && mainArr[6] == 0) {
        return true
      }
    }

    return false
  }

  document.addEventListener('click', generateClose);

  function countStep() {
    if (validityWin()) {
      setTimeout("alert('Игра окончена')", 200);
      document.removeEventListener('click', generateClose);
      return;
    }

    if (step > 1) {
      generateNull();
    }

    if (step == 0) {
      setTimeout("alert('Игра окончена')", 200);
    }

    if (validityWin()) {
      setTimeout("alert('Игра окончена')", 200);
      document.removeEventListener('click', generateClose);
      return;
    }
  }

  createField();

})()
