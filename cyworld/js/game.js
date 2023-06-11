const startWord = () => {
    const myWord = document.getElementById("my__word");
    const word = document.getElementById("word");
    const result = document.getElementById("result");


    const lastWord = word.innerText[word.innerText.length -1];
    const firstWord = myWord.value[0]

    if(lastWord === firstWord ) {
        result.innerText = "정답입니다."
        word.innerText = myWord.value;
        myWord.value = "";
    } else {
        result.innerText = "땡!";
        myWord.value = "";
    }
}