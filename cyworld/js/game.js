const startWord = () => {
  const myWord = document.getElementById("my__word");
  const word = document.getElementById("word");
  const result = document.getElementById("result");

  const lastWord = word.innerText[word.innerText.length - 1];
  const firstWord = myWord.value[0];

  if (lastWord === firstWord) {
    result.innerText = "정답입니다.";
    word.innerText = myWord.value;
    myWord.value = "";
  } else {
    result.innerText = "땡!";
    myWord.value = "";
  }
};



const lottoStart = () => {
  const gameLottoNum = document.querySelector(".game__lotto__number");
  gameLottoNum.innerText = "";
  const lottoAllList = [];
  for (let i = 1; i <= 45; i++) {
    lottoAllList.push(i);
  }

  const luckyList = [];
  for (let i = 1; i <= 6; i++) {
    const rndIndex = Math.floor(Math.random() * lottoAllList.length);
    const luckyNumber = lottoAllList.splice(rndIndex, 1)[0];
    luckyList.push(luckyNumber);
  }

  luckyList.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i <= 5; i++) {
    const list = document.createElement("span");
    list.innerText = luckyList[i];
    gameLottoNum.appendChild(list);
  }
};
