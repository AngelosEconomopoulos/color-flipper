const colors=["green","red","blue"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener("click", function () {
    let randomNumber = getRandomNumber();
    document.body.style.backgroundColor = randomNumber;
    color.textContent = randomNumber;
});

function getRandomNumber(){
    var randomColor = '#'+(Math.floor(Math.random()*16777215).toString(16));
    return randomColor;
}