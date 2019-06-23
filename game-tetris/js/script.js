let overlay = document.querySelector('.overlay');
let modal = document.querySelector('.modal');
let speed = 0;
modal.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('easy')) {
    speed = 1000;
  } else if (evt.target.classList.contains('normal')) {
    speed = 500;
  } else if (evt.target.classList.contains('hard')) {
    speed = 200;
  }
  
  if (evt.target.classList.contains('button')) {
    modal.style.display = 'none';
    overlay.style.display = 'none';
    startGame();
  }
})

function startGame() {

  let tetris = document.createElement('div');
  tetris.classList.add('tetris');

  for (let i = 1; i < 181; i++) {
    let excel = document.createElement('div');
    excel.classList.add('excel');
    tetris.appendChild(excel);
  }

  let main = document.getElementsByClassName('main')[0];
  main.appendChild(tetris);

  let excel = document.getElementsByClassName('excel');
  let i = 0;

  for (let y = 18; y > 0; y--) {
    for (let x = 1; x < 11; x++) {
      excel[i].setAttribute('posX', x);
      excel[i].setAttribute('posY', y);
      i++;
    }
  }

  let x = 5,
    y = 15;
  let mainArr = [
  // палка
  [
    [0, 1],
    [0, 2],
    [0, 3],
    // поворот на 90 градусов
    [
       [-1, 1],
       [0, 0],
       [1, -1],
       [2, -2],
    ],
    // поворот на 180 градусов
    [
       [1, -1],
       [0, 0],
       [-1, 1],
       [-2, 2],
    ],
    // поворот на 270 градусов
    [
       [-1, 1],
       [0, 0],
       [1, -1],
       [2, -2],
    ],
    // поворот на 360 градусов
    [
       [1, -1],
       [0, 0],
       [-1, 1],
       [-2, 2],
    ],
  ],
  // квадрат 
  [
    [1, 0],
    [0, 1],
    [1, 1],

        // поворот на 90 градусов
    [
       [0, 0],
       [0, 0],
       [0, 0],
       [0, 0],
    ],
    // поворот на 180 градусов
    [
       [0, 0],
       [0, 0],
       [0, 0],
       [0, 0],
    ],
    // поворот на 270 градусов
    [
       [0, 0],
       [0, 0],
       [0, 0],
       [0, 0],
    ],
    // поворот на 360 градусов
    [
       [0, 0],
       [0, 0],
       [0, 0],
       [0, 0],
    ],
  ],
  // буква L 
  [
    [1, 0],
    [0, 1],
    [0, 2],

     // поворот на 90 градусов
    [
       [0, 0],
       [-1, 1],
       [1, 0],
       [2, -1],
    ],
    // поворот на 180 градусов
    [
       [1, -1],
       [1, -1],
       [-1, 0],
       [-1, 0],
    ],
    // поворот на 270 градусов
    [
       [-1, 0],
       [0, -1],
       [2, -2],
       [1, -1],
    ],
    // поворот на 360 градусов
    [
       [0, -1],
       [0, -1],
       [-2, 0],
       [-2, 0],
    ],
  ],
    // зеркальная буква L 
  [
    [1, 0],
    [1, 1],
    [1, 2],

     // поворот на 90 градусов
    [
       [0, 0],
       [0, 0],
       [1, -1],
       [-1, -1],
    ],
    // поворот на 180 градусов
    [
       [0, -1],
       [-1, 0],
       [-2, 1],
       [1, 0],
    ],
    // поворот на 270 градусов
    [
       [2, 0],
       [0, 0],
       [1, -1],
       [1, -1],
    ],
    // поворот на 360 градусов
    [
       [-2, 0],
       [1, -1],
       [0, 0],
       [-1, 1],
    ],
  ],

    // молния вправо
  [
    [1, 0],
    [-1, 1],
    [0, 1],

     // поворот на 90 градусов
    [
       [0, -1],
       [-1, 0],
       [2, -1],
       [1, 0],
    ],
    // поворот на 180 градусов
    [
       [0, 0],
       [1, -1],
       [-2, 0],
       [-1, -1],
    ],
    // поворот на 270 градусов
    [
       [0, -1],
       [-1, 0],
       [2, -1],
       [1, 0],
    ],
    // поворот на 360 градусов
    [
       [0, 0],
       [1, -1],
       [-2, 0],
       [-1, -1],
    ],
  ],

      // молния влево
  [
    [1, 0],
    [1, 1],
    [2, 1],
     // поворот на 90 градусов
    [
       [2, -1],
       [0, 0],
       [1, -1],
       [-1, 0],
    ],
    // поворот на 180 градусов
    [
       [-2, 0],
       [0, -1],
       [-1, 0],
       [1, -1],
    ],
    // поворот на 270 градусов
    [
       [2, -1],
       [0, 0],
       [1, -1],
       [-1, 0],
    ],
    // поворот на 360 градусов
    [
       [-2, 0],
       [0, -1],
       [-1, 0],
       [1, -1],
    ],
  ],

      // деталь лего
  [
    [1, 0],
    [2, 0],
    [1, 1],
     // поворот на 90 градусов
    [
       [1, -1],
       [0, 0],
       [0, 0],
       [0, 0],
    ],
    // поворот на 180 градусов
    [
       [0, 0],
       [-1, 0],
       [-1, 0],
       [1, -1],
    ],
    // поворот на 270 градусов
    [
       [1, -1],
       [1, -1],
       [1, -1],
       [0, 0],
    ],
    // поворот на 360 градусов
    [
       [-2, 0],
       [0, -1],
       [0, -1],
       [-1, -1],
    ],
  ]
];

  let currentFigure = 0;
  let figureBody = 0;
  let rotate = 1;

  function create() {
    function getRandom() {
      return Math.floor(Math.random() * mainArr.length);
    }

    rotate = 1;
    currentFigure = getRandom();
    figureBody = [
    document.querySelector(`[posX = "${x}"][posY = "${y}"]`),
    document.querySelector(`[posX = "${x + mainArr[currentFigure][0][0]}"][posY = "${y + mainArr[currentFigure][0][1]}"]`),
    document.querySelector(`[posX = "${x + mainArr[currentFigure][1][0]}"][posY = "${y + mainArr[currentFigure][1][1]}"]`),
    document.querySelector(`[posX = "${x + mainArr[currentFigure][2][0]}"][posY = "${y + mainArr[currentFigure][2][1]}"]`)
  ];

    for (let i = 0; i < figureBody.length; i++) {
      figureBody[i].classList.add('figure');
    }
  }
  create();
  let score = 0;
  let input = document.querySelector('.input');
  input.value = `Ваши очки: ${score}`;

  function move() {
    let moveFlag = true;
    let coordinates = [
    [figureBody[0].getAttribute('posX'), figureBody[0].getAttribute('posY')],
    [figureBody[1].getAttribute('posX'), figureBody[1].getAttribute('posY')],
    [figureBody[2].getAttribute('posX'), figureBody[2].getAttribute('posY')],
    [figureBody[3].getAttribute('posX'), figureBody[3].getAttribute('posY')]
  ];

    for (let i = 0; i < coordinates.length; i++) {
      if (coordinates[i][1] == 1 || document.querySelector(`[posX = "${coordinates[i][0]}"][posY = "${coordinates[i][1] - 1}"]`).classList.contains('set')) {
        moveFlag = false;
        break;
      }
    }

    if (moveFlag) {
      for (let i = 0; i < figureBody.length; i++) {
        figureBody[i].classList.remove('figure');
      }

      figureBody = [
      document.querySelector(`[posX = "${coordinates[0][0]}"][posY = "${coordinates[0][1] -1}"]`),
      document.querySelector(`[posX = "${coordinates[1][0]}"][posY = "${coordinates[1][1] -1}"]`),
      document.querySelector(`[posX = "${coordinates[2][0]}"][posY = "${coordinates[2][1] -1}"]`),
      document.querySelector(`[posX = "${coordinates[3][0]}"][posY = "${coordinates[3][1] -1}"]`)
    ];

      for (let i = 0; i < figureBody.length; i++) {
        figureBody[i].classList.add('figure');
      }
    } else {
      for (let i = 0; i < figureBody.length; i++) {
        figureBody[i].classList.remove('figure');
        figureBody[i].classList.add('set');
      }

      for (let i = 1; i < 15; i++) {
        let count = 0;
        for (let k = 1; k < 11; k++) {
          if (document.querySelector(`[posX = "${k}"][posY = "${i}"]`).classList.contains('set')) {
            count++;
            if (count == 10) {
              score += 10;
              input.value = `Ваши очки: ${score}`;

              for (let m = 1; m < 11; m++) {
                document.querySelector(`[posX = "${m}"][posY = "${i}"]`).classList.remove('set');
              };
              let set = document.querySelectorAll('.set');
              let newSet = [];
              for (let s = 0; s < set.length; s++) {
                let setCoardinates = [set[s].getAttribute('posX'), set[s].getAttribute('posY')];
                if (setCoardinates[1] > i) {
                  set[s].classList.remove('set');
                  newSet.push(document.querySelector(`[posX = "${setCoardinates[0]}"][posY = "${setCoardinates[1] -1}"]`));
                }
              }
              for (let a = 0; a < newSet.length; a++) {
                newSet[a].classList.add('set');
              }
              i--;
            }
          }
        }
      }
      for (let n = 1; n < 11; n++) {
        if (document.querySelector(`[posX = "${n}"][posY = "15"]`).classList.contains('set')) {
          clearInterval(interval);
          alert('Игра окончена. Ваши очки: ' + score);
          break
        }
      }
      create();
    }
  }

  let interval = setInterval(() => {
    move();
  }, speed);

  let flag = true;

  window.addEventListener('keydown', function (evt) {
    let coardinates1 = [figureBody[0].getAttribute('posX'), figureBody[0].getAttribute('posY')];
    let coardinates2 = [figureBody[1].getAttribute('posX'), figureBody[1].getAttribute('posY')];
    let coardinates3 = [figureBody[2].getAttribute('posX'), figureBody[2].getAttribute('posY')];
    let coardinates4 = [figureBody[3].getAttribute('posX'), figureBody[3].getAttribute('posY')];

    function getNewstate(a) {
      flag = true;
      let figureNew = [
      document.querySelector(`[posX = "${+coardinates1[0] + a}"][posY = "${coardinates1[1]}"]`),
      document.querySelector(`[posX = "${+coardinates2[0] + a}"][posY = "${coardinates2[1]}"]`),
      document.querySelector(`[posX = "${+coardinates3[0] + a}"][posY = "${coardinates3[1]}"]`),
      document.querySelector(`[posX = "${+coardinates4[0] + a}"][posY = "${coardinates4[1]}"]`)
    ];

      for (let i = 0; i < figureNew.length; i++) {
        if (!figureNew[i] || figureNew[i].classList.contains('set')) {
          flag = false;
        }
      }

      if (flag) {
        for (let i = 0; i < figureBody.length; i++) {
          figureBody[i].classList.remove('figure');
        };

        figureBody = figureNew;

        for (let i = 0; i < figureBody.length; i++) {
          figureBody[i].classList.add('figure');
        };
      }
    }

    if (evt.keyCode == 37) {
      getNewstate(-1);
    } else if (evt.keyCode == 39) {
      getNewstate(1);
    } else if (evt.keyCode == 40) {
      move();
    } else if (evt.keyCode == 38) {
      flag = true;
      let figureNew = [
      document.querySelector(`[posX = "${+coardinates1[0] + mainArr[currentFigure][rotate + 2][0][0]}"][posY = "${+coardinates1[1] + mainArr[currentFigure][rotate + 2][0][1]}"]`),

      document.querySelector(`[posX = "${+coardinates2[0] + mainArr[currentFigure][rotate + 2][1][0]}"][posY = "${+coardinates2[1] + mainArr[currentFigure][rotate + 2][1][1]}"]`),

      document.querySelector(`[posX = "${+coardinates3[0] + mainArr[currentFigure][rotate + 2][2][0]}"][posY = "${+coardinates3[1] + mainArr[currentFigure][rotate + 2][2][1]}"]`),

      document.querySelector(`[posX = "${+coardinates4[0] + mainArr[currentFigure][rotate + 2][3][0]}"][posY = "${+coardinates4[1] + mainArr[currentFigure][rotate + 2][3][1]}"]`)
    ];

      for (let i = 0; i < figureNew.length; i++) {
        if (!figureNew[i] || figureNew[i].classList.contains('set')) {
          flag = false;
        }
      }

      if (flag) {
        for (let i = 0; i < figureBody.length; i++) {
          figureBody[i].classList.remove('figure');
        };

        figureBody = figureNew;

        for (let i = 0; i < figureBody.length; i++) {
          figureBody[i].classList.add('figure');
        };

        if (rotate < 4) {
          rotate++;
        } else {
          rotate = 1;
        }
      }
    }
  })
}
