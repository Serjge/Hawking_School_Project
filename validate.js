const validateInput = document.querySelector(".js-validate");
const lotteryBtn = document.querySelector(".js-lottery-btn");
const validateBtn = document.querySelector(".js-validate-btn");
const validateMessage = document.querySelector(".js-validate-message");
const lotteryMessage = document.querySelector(".js-lottery-message");

const dataReset = (input) => {
  if (input.classList.contains('error')) {
    input.classList.remove('error');
  }
  input.innerHTML = "";
}

const inputCheck = () => {
  const value = validateInput.value;
  const number = Number(value);

  dataReset(validateMessage);

  try {
    if (value === "") throw "пустую строку";
    if (isNaN(value)) throw "не число";
    if (number < 5) throw "слишком мало";
    if (number > 10) throw "слишком много";
    validateMessage.innerHTML = "Вы ввели " + number;
  } catch (err) {
    validateMessage.classList.add('error');
    validateMessage.innerHTML = "Вы ввели " + err;
  }
}

const lottery = () => {
  console.log("Вы начали игру");

  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      Math.random(0) > 0.5 ? resolve() : reject("Вы промахнулись");
    }, 1000);
  });
}

const lotteryCheck = async () => {
  dataReset(lotteryMessage);

  try {
    await lottery();
    console.log("Вы выиграли");
    console.log("Вам заплатили");

    lotteryMessage.innerHTML = "Вы выиграли";
    lotteryMessage.innerHTML += "<br/>Вам заплатили";
  } catch (error) {
    console.log("Вы проиграли");

    lotteryMessage.classList.add('error');
    lotteryMessage.innerHTML = "Вы проиграли";
  } finally {
    console.log("Игра закончена");

    lotteryMessage.innerHTML += "<br/>Игра закончена";
  }
}

validateBtn.addEventListener("click", inputCheck);
lotteryBtn.addEventListener("click", lotteryCheck);
