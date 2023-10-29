let actions = document.querySelectorAll(".select .action");
let comparison = document.querySelector(".comparison");
let select = document.querySelector(".select");
let compactioncomp = document.querySelector(".comparison .computer .action");
let compactionyou = document.querySelector(".comparison .you .action");
let score = document.querySelector("header h1");
let result = document.querySelector(".result");
actions.forEach((action) => {
  action.onclick = () => {
    compactionyou.classList.remove("paper");
    compactionyou.classList.remove("scissors");
    compactionyou.classList.remove("rock");
    compactionyou.classList.add(action.classList[1]);
    compactionyou.innerHTML = action.innerHTML;
    interval = setInterval(() => {
      num = Math.floor(Math.random() * 3);
      compactioncomp.classList.remove("paper");
      compactioncomp.classList.remove("scissors");
      compactioncomp.classList.remove("rock");
      compactioncomp.classList.add(actions[num].classList[1]);
      compactioncomp.innerHTML = actions[num].innerHTML;
      comparison.classList.remove("none");
      select.classList.add("none");
    }, 100);
    setTimeout(() => {
      clearInterval(interval);
      if (compactionyou.classList[1] === compactioncomp.classList[1]) {
        result.innerHTML = "Draw";
      } else if (compactionyou.classList[1] === "paper") {
        if (compactioncomp.classList[1] === "scissors") {
          result.innerHTML = "You Lose";
          score.innerHTML = parseInt(score.innerHTML) - 1;
          if (parseInt(score.innerHTML) < 0) {
            score.innerHTML = 0;
          }
        } else if (compactioncomp.classList[1] === "rock") {
          result.innerHTML = "You Win";
          score.innerHTML = parseInt(score.innerHTML) + 1;
        }
      } else if (compactionyou.classList[1] === "scissors") {
        if (compactioncomp.classList[1] === "rock") {
          result.innerHTML = "You Lose";
          score.innerHTML = parseInt(score.innerHTML) - 1;
          if (parseInt(score.innerHTML) < 0) {
            score.innerHTML = 0;
          }
        } else if (compactioncomp.classList[1] === "paper") {
          result.innerHTML = "You Win";
          score.innerHTML = parseInt(score.innerHTML) + 1;
        }
      } else if (compactionyou.classList[1] === "rock") {
        if (compactioncomp.classList[1] === "paper") {
          result.innerHTML = "You Lose";
          score.innerHTML = parseInt(score.innerHTML) - 1;
          if (parseInt(score.innerHTML) < 0) {
            score.innerHTML = 0;
          }
        } else if (compactioncomp.classList[1] === "scissors") {
          result.innerHTML = "You Win";
          score.innerHTML = parseInt(score.innerHTML) + 1;
        }
      }
      setTimeout(() => {
        comparison.classList.add("none");
        select.classList.remove("none");
        result.innerHTML = "";
      }, 2000);
    }, 1500);
  };
});
