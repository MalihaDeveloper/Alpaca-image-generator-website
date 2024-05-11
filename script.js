//Hair Dom
const hairBtn = document.querySelector(".hairBtn");
const hair = document.querySelector(".hair");
const showHairs = document.querySelector(".Hair-container");
const defaultHair = document.querySelector(".defaultHair");
const curls = document.querySelector(".curls");
const bang = document.querySelector(".bang");
const short = document.querySelector(".short");
const elegant = document.querySelector(".elegant");
const quiff = document.querySelector(".quiff");
const stylingBtns = document.querySelector(".stylingBtns");

//Ears
const earsBtn = document.querySelector(".earsBtn");
const ears = document.querySelector(".ears");
const showEars = document.querySelector(".ears-container");
const defaultEars = document.querySelector(".defaultEars");
const tiltBack = document.querySelector(".tiltBack");
const tiltForward = document.querySelector(".tiltForward");

//Eyes
const eyesBtn = document.querySelector(".eyesBtn");
const eyes = document.querySelector(".eyes");
const showEyes = document.querySelector(".eyes-container");
const defaultEyes = document.querySelector(".defaultEyes");
const angry = document.querySelector(".angry");
const naughty = document.querySelector(".naughty");
const panda = document.querySelector(".panda");
const smart = document.querySelector(".smart");
const star = document.querySelector(".star");
//Mouth
const mouthBtn = document.querySelector(".mouthBtn");
const mouth = document.querySelector(".mouth");
const showMouth = document.querySelector(".mouth-container");
const defaultMouth = document.querySelector(".defaultMouth");
const astonished = document.querySelector(".astonished");
const eating = document.querySelector(".eating");
const laugh = document.querySelector(".laugh");
const tongue = document.querySelector(".tongue");
//Neck
const neckBtn = document.querySelector(".neckBtn");
const neck = document.querySelector(".neck");
const showNeck = document.querySelector(".neck-container");
const defaultNeck = document.querySelector(".defaultNeck");
const thick = document.querySelector(".thick");
const bendBack = document.querySelector(".bendBack");
const bendForward = document.querySelector(".bendForward");
//Leg
const legBtn = document.querySelector(".legBtn");
const leg = document.querySelector(".leg");
const showLeg = document.querySelector(".leg-container");
const defaultLeg = document.querySelector(".defaultLeg");
const bubbleTea = document.querySelector(".bubbleTea");
const cookie = document.querySelector(".cookie");
const gameConsole = document.querySelector(".gameConsole");
const tiltBackward = document.querySelector(".tiltBackward");
const tiltForw = document.querySelector(".tiltForw");
//Accessorie
const accessBtn = document.querySelector(".accessBtn");
const accessories  = document.querySelector(".accessories");
const showAccess = document.querySelector(".accessories-container");
const headphone = document.querySelector(".headphone");
const earrings = document.querySelector(".earrings");
const flower = document.querySelector(".flower");
const glasses = document.querySelector(".glasses");
const buttons = document.querySelectorAll(".buttons-container button");
//Background
const backgroundBtn = document.querySelector(".BackgroundBtn");
const backgrounds = document.querySelector(".backgrounds");
const showBackground = document.querySelector(".Background-container");
const defaultBackground = document.querySelector(".defaultBackground");
const blue70 = document.querySelector(".blue70");
const darkblue70 = document.querySelector(".darkblue70");
const green50 = document.querySelector(".green50");
const grey80 = document.querySelector(".grey80");
const red50 = document.querySelector(".red50");
const red60 = document.querySelector(".red60");
const yellow50 = document.querySelector(".yellow50");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((button) => {
      button.classList.remove("active");
    });
    button.classList.add("active");
  });
});
const btns = document.querySelectorAll(".btns-container button");
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");
  });
});
hairBtn.addEventListener("click", function () {
  hairBtn.classList.add("active");
  showHairs.classList.toggle("hidden");
  hideContainers([
    showEars,
    showEyes,
    showMouth,
    showNeck,
    showLeg,
    showAccess,
    showBackground
  ]);
});
earsBtn.addEventListener("click", function () {
  earsBtn.classList.add("active");
  showEars.classList.toggle("hidden");
  hideContainers([
    showHairs,
    showEyes,
    showMouth,
    showNeck,
    showLeg,
    showAccess,
    showBackground
  ]);
});
eyesBtn.addEventListener("click", function () {
  eyesBtn.classList.add("active");
  showEyes.classList.toggle("hidden");
  hideContainers([
    showHairs,
    showEars,
    showMouth,
    showNeck,
    showLeg,
    showAccess,
    showBackground
  ]);
});
mouthBtn.addEventListener("click", function () {
  showMouth.classList.toggle("hidden");
  hideContainers([
    showHairs,
    showEars,
    showEyes,
    showNeck,
    showLeg,
    showAccess,
    showBackground
  ]);
});
neckBtn.addEventListener("click", function () {
  showNeck.classList.toggle("hidden");
  hideContainers([
    showHairs,
    showEars,
    showEyes,
    showMouth,
    showLeg,
    showAccess,
    showBackground
  ]);
});
legBtn.addEventListener("click", function () {
  showLeg.classList.toggle("hidden");
  hideContainers([
    showHairs,
    showEars,
    showEyes,
    showMouth,
    showNeck,
    showAccess,
    showBackground
  ]);
});

accessBtn.addEventListener("click", function () {
  showAccess.classList.toggle("hidden");
  hideContainers([showHairs, showEars, showEyes, showMouth, showNeck, showLeg,showBackground
  ]);
});
backgroundBtn.addEventListener("click", function () {
  showBackground.classList.toggle("hidden");
  hideContainers([
    showHairs,
    showEars,
    showEyes,
    showNeck,
    showLeg,
    showAccess,
    showMouth
  ]);
});
function AlpacaStyle(select, container, location, imageName) {
  select.addEventListener("click", function () {
    container.src = `${location}/${imageName}.png`;
  });
}
//Hair
AlpacaStyle(curls, hair, "hair", "curls");
AlpacaStyle(defaultHair, hair, "hair", "default");
AlpacaStyle(short, hair, "hair", "short");
AlpacaStyle(bang, hair, "hair", "bang");
AlpacaStyle(elegant, hair, "hair", "elegant");
AlpacaStyle(quiff, hair, "hair", "quiff");
//Ears
AlpacaStyle(defaultEyes, ears, "ears", "default");
AlpacaStyle(tiltBack, ears, "ears", "tilt-backward");
AlpacaStyle(tiltForward, ears, "ears", "tilt-forward");
//Eyes
AlpacaStyle(defaultEyes, eyes, "eyes", "default");
AlpacaStyle(angry, eyes, "eyes", "angry");
AlpacaStyle(naughty, eyes, "eyes", "naughty");
AlpacaStyle(panda, eyes, "eyes", "panda");
AlpacaStyle(smart, eyes, "eyes", "smart");
AlpacaStyle(star, eyes, "eyes", "star");
//Mouth
AlpacaStyle(defaultMouth, mouth, "mouth", "default");
AlpacaStyle(astonished, mouth, "mouth", "astonished");
AlpacaStyle(eating, mouth, "mouth", "eating");
AlpacaStyle(laugh, mouth, "mouth", "laugh");
AlpacaStyle(tongue, mouth, "mouth", "tongue");
//Neck
AlpacaStyle(defaultNeck, neck, "neck", "default");
AlpacaStyle(thick, neck, "neck", "thick");
AlpacaStyle(bendBack, neck, "neck", "bend-backward");
AlpacaStyle(bendForward, neck, "neck", "bend-forward");
//Leg
AlpacaStyle(defaultLeg, leg, "leg", "default");
AlpacaStyle(bubbleTea, leg, "leg", "bubble-tea");
AlpacaStyle(cookie, leg, "leg", "cookie");
AlpacaStyle(gameConsole, leg, "leg", "game-console");
AlpacaStyle(tiltBackward, leg, "leg", "tilt-backward");
AlpacaStyle(tiltForw, leg, "leg", "tilt-forward");
//Accessorise
AlpacaStyle(headphone, accessories, "accessories", "headphone");
AlpacaStyle(earrings, accessories, "accessories", "earrings");
AlpacaStyle(flower, accessories, "accessories", "flower");
AlpacaStyle(glasses, accessories, "accessories", "glasses");
//Background
AlpacaStyle(defaultBackground,backgrounds,'backgrounds','blue50');
AlpacaStyle(blue70,backgrounds,'backgrounds','blue70');
AlpacaStyle(darkblue70,backgrounds,'backgrounds','darkblue70');
AlpacaStyle(green50,backgrounds,'backgrounds','green50');
AlpacaStyle(grey80,backgrounds,'backgrounds','grey80');
AlpacaStyle(red50,backgrounds,'backgrounds','red50');
AlpacaStyle(red60,backgrounds,'backgrounds','red60');
AlpacaStyle(yellow50,backgrounds,'backgrounds','yellow50');

function hideContainers(containersToHide) {
  containersToHide.forEach((element) => {
    element.classList.add("hidden");
  });
}
function hideButtonActive(btnToHide) {
  btnToHide.forEach((e) => {
    e.classList.remove("active");
  });
}
function removeActive(deActive) {
  deActive.forEach((a) => {
    a.classList.remove("active");
  });
}
function btnActive(act) {
  if (act.classList.contains("active")) {
    defaultHair.classList.remove("active");
  }
}
const randomBtn = document.querySelector('.randomBtn')
let categories = {
  hair:['curls','short','bang','elegant','fancy','quiff','default'],
  ears:['default','tilt-backward','tilt-forward'],
  eyes:['angry','default','naughty','panda','smart','star'],
  mouth :['astonished','default','eating','laugh','tongue'],
  neck:['default','thick','bend-forward','bend-backward'],
  leg:['bubble-tea','cookie','default','game-console','tilt-backward','tilt-forward'],
  backgrounds:['blue50','blue70','darkblue70','green50','grey80','red50','red60','yellow50'],
  accessories:['earrings','flower','headphone','glasses']
}

randomBtn.addEventListener('click',function(){
 Object.keys(categories).forEach(categorie=>{
  const randomIndex = Math.floor(Math.random() * categories[categorie].length);
  const randomOption = categories[categorie][randomIndex]
  document.querySelector(`.${categorie}`).src = `${categorie}/${randomOption}.png`
  console.log(document.querySelector(`.${categorie}`).src = `${categorie}/${randomOption}.png`)
 })
randomBtn.classList.add('active')
  })

  //Download
  // const downloadBtn = document.querySelector('.downloadBtn');
  // downloadBtn.addEventListener('click', download());
  