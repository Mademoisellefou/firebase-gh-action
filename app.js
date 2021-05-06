const randomBodyPart = ["Face", "Nose", "Hair"];
const randomAdjetive = ["Smelly", "Boring", "Stupid"];
const randomWord = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];
function myFunction() {
  var chooseBP = randomBodyPart[Math.floor(Math.random() * 3)];
  var chooseA = randomAdjetive[Math.floor(Math.random() * 3)];
  var chooseW = randomWord[Math.floor(Math.random() * 5)];
  console.log(chooseBP);
  var res =
    "Your " + chooseBP + " is like a " + chooseA + " .. " + chooseW + " !!! ";
  rendertohtml(res);
}

function rendertohtml(res) {
  console.log(res);
  var t2 = document.getElementById("res");
  t2.innerHTML = res;
}
