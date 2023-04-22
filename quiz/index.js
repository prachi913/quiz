const num1 = Math.floor(Math.random() * 10)
const num2 = Math.floor(Math.random() * 10);

const questione1 = document.getElementById("question")
const inputelement=document.getElementById("input")
const form =document.getElementById("form")
questione1.innerText = `What is ${num1} multiply by ${num2}?`
// let score = 0;
const scoreelemenrt = document.getElementById("score");


let score=JSON.parse(localStorage.getItem("score"))
if (!score) {
  score = 0;
}
scoreelemenrt.innerText=`score:${score}`
const correctans = num1 * num2

form.addEventListener("submit", () => {
    const userans = +inputelement.value
    console.log(userans)
    console.log(correctans)
    if (userans ===correctans) {
        score++
        localstorage()
    } else {
        score--
        localstorage()
    }
})

function localstorage() {
    localStorage.setItem("score",JSON.stringify(score))
}


