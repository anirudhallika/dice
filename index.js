$("button").on("click",function()
{
{
var randomNumber1 = Math.floor(Math.random()*6)+1;
document.querySelector("img").setAttribute("src","images/dice"+randomNumber1+".png");
var randomNumber2 = Math.floor(Math.random()*6)+1;
document.querySelectorAll("img")[1].setAttribute("src","images/dice"+randomNumber2+".png");

if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerText="Sheethal Wins 😈";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerText="Anirudh Wins 👻";
}
else {
  document.querySelector("h1").innerText="Its a draw 💑";
}
}
});

$("button.reset").on("click",function()
{
  document.querySelector("img").setAttribute("src","images/dice6.png");
  document.querySelectorAll("img")[1].setAttribute("src","images/dice6.png");
  document.querySelector("h1").innerText="Roll the dice"
});
