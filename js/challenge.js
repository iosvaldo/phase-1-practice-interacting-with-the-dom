let pause = false
let timeout = setInterval(function(){
  const counter = document.getElementById('counter');
  const numberCnt = parseInt(counter.innerText);
  counter.innerText = numberCnt+1;
},1000)

const e = document.getElementById('pause');

e.addEventListener('click', function(){
  if(pause = true){
    pause();
  } else if (pause = false){
    play();
  };
});

function isPaused() {
  clearInterval(timeout);
  pause = true
}

function play(){
  setInterval(function(){
    const counter = document.getElementById('counter');
    const numberCnt = parseInt(counter.innerText);
    counter.innerText = numberCnt+1;
  },1000)
  pause = false
}

function decreased() {
  const counter = document.getElementById('counter');
  const numberCnt = parseInt(counter.innerText);
  counter.innerText = numberCnt - 1;
}

const subtract = document.getElementById('subtract');

subtract.addEventListener('click', decreased);

function increase() {
  const counter = document.getElementById('counter');
  const numberCnt = parseInt(counter.innerText);
  counter.innerText = numberCnt + 1 
}

const addition = document.getElementById('plus');
plus.addEventListener('click', increase);

const likeArray = []
function like(){
  const counter = document.getElementById('counter');
  const numberCnt = parseInt(counter.innerText);

  likeArray.unshift(numberCnt)

const times = likeArray.filter(l => l==l).length

  for (l in likeArray){
    const list = document.querySelector('.likes');
    const li = document.createElement("li");
    li.textContent = `${likeArray[l]} was liked ${times} times!`
    list.append(li);
  }
}

const heart = document.getElementById('heart');
heart.addEventListener('click',like);