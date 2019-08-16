var colors = [];
var driehoeken = [];
var doorgang;
var offsetDriehoekKleur = 0;
var offsetAchtergrondKleur = 255;
var offsetY = 0;
var richtingx = 0;
var richtingy = 2;
var driehoekFill = true;
var maxDriehoeken = 10;
var val1 = 100;
var val2 = 1;
var val3 = 1;
var width = 768;
var canvasDiv = document.getElementById('sketch-holder');


$(function () {
  $("#slider-1").slider({
      slide: function (event, ui) {
        var val1 = ui.value;
        val1 = val1 / 6.66667;

        offsetDriehoekKleur = int(val1);
        console.log("val1 = ", val1)

      }
    }

  );
});

$(function () {
  $("#slider-2").slider({
      slide: function (event, ui) {
        var val2 = ui.value;
        console.log("val2 = ", val2)
        richtingx = val2;
      }
    }

  );
});

$(function () {
  $("#slider-3").slider({
      slide: function (event, ui) {
        var val3 = ui.value;

        richtingy = val3;
        console.log("val3 = ", val3)
      }
    }

  );
});




function setup() {

  var width = canvasDiv.offsetWidth;
  var height = canvasDiv.offsetHeight;


  let cnv = createCanvas(width, height);

  cnv.parent('sketch-holder');

  colors = [19];
  colors[0] = color("#FFD64F");
  colors[1] = color("#FF9A0C");
  colors[2] = color("#FF6300");
  colors[3] = color("#FF402E");
  colors[4] = color("#FF1267");
  colors[5] = color("#FF28D8");
  colors[6] = color("#C933FF");
  colors[7] = color("#7139FF");
  colors[8] = color("#2F39FF");
  colors[9] = color("#278DFF");
  colors[10] = color("#24D4FF");
  colors[11] = color("#29FFE4");
  colors[12] = color("#29FF95");
  colors[13] = color("#2FFF48");
  colors[14] = color("#A6FF2A");
  colors[15] = color("#FFF10E");
  colors[16] = color("#29FF95");
  colors[17] = color("#2FFF48");
  colors[18] = color("#A6FF2A");

  for (var i = 0; i < maxDriehoeken; i++) {
    var breedte = random(15, 70);
    driehoeken.push(new Driehoek(createVector(random(50, width - 50), random(50, height - 50)), breedte, breedte, int(random(0, 4)), random(-2, 2)));
  }
}

function draw() {




  background(0 + offsetAchtergrondKleur);
  noStroke();
  for (var i = 0; i < driehoeken.length; i++) {
    var d = driehoeken[i];
    d.update();
    d.teken();
  }
}

function Driehoek(tempMidden, tempBreedte, tempHoogte, tempStartkleur, tempDraaing) {
  var midden, punt1, punt2, punt3;
  var breedte, hoogte, draaing, draaien;
  var startkleur;
  midden = tempMidden;
  startkleur = tempStartkleur;

  hoogte = tempHoogte;
  breedte = tempBreedte;
  draaing = tempDraaing;
  punt1 = createVector(0 - breedte / 2, 0 + hoogte / 2);
  punt2 = createVector(0 + breedte / 2, 0 + hoogte / 2);
  punt3 = createVector(0, 0 - hoogte / 2);

  this.teken = function () {
    push();
    translate(midden.x, midden.y);
    rotate(radians(draaien));

    if (driehoekFill == true) {
      fill(colors[startkleur + offsetDriehoekKleur]);
      noStroke();
    } else {
      noFill();
      stroke(255 - offsetAchtergrondKleur);
    }
    triangle(punt1.x, punt1.y, punt2.x, punt2.y, punt3.x, punt3.y);

    if (driehoekFill) {
      fill(255, 100);
    }
    triangle(punt1.x, punt1.y, punt2.x, punt2.y, 0, 0);
    if (driehoekFill) {
      fill(0, 100);
    }
    triangle(punt1.x, punt1.y, punt3.x, punt3.y, 0, 0);
    pop();
    draaien = draaien + draaing;
  }

  this.update = function () {

    midden.x = midden.x + richtingx;
    midden.y = midden.y + richtingy;

    if (midden.x > width + breedte / 2) {
      midden.x = -20;
    }
    if (midden.y > height + hoogte / 2) {
      midden.y = -20;
    }
  }
}

function windowResized() {

  var width = canvasDiv.offsetWidth;
  var height = canvasDiv.offsetHeight;
  resizeCanvas(width, height);
}

function updateMiddle() {
  richtingx = uivars.offSetY;
  offsetDriehoekKleur = uivars.offSetX;
  offsetAchtergrondKleur = uivars.offsetAchtergrondKleur;
}

function toggleStroke() {
  driehoekFill = !driehoekFill;
}