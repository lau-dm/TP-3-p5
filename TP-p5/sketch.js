function setup() {

  createCanvas(windowWidth, windowHeight);

  noLoop();
}

function draw() {

  background(230, 225, 215);

  drawBackground();
  drawBear();
}

// fondo

function drawBackground() {

  noStroke();

  // superior izquierda - azul hielo
  fill(170, 210, 235);
  rect(0, 0, width / 2, height / 2);

  // superior derecha - azul frío oscuro
  fill(90, 130, 170);
  rect(width / 2, 0, width / 2, height / 2);

  // inferior izquierda - nieve
  fill(245, 245, 240);
  rect(0, height / 2, width / 2, height / 2);

  // inferior derecha - gris azulado
  fill(180, 195, 205);
  rect(width / 2, height / 2, width / 2, height / 2);
}

function drawBear() {
  translate(width / 2 - 450, height / 2 - 550);

  stroke(25);
  strokeWeight(4);

  // orejas

  fill(210, 215, 215);

  // oreja izquierda
  quad(
    300, 180,
    360, 120,
    420, 200,
    350, 260
  );

  // oreja derecha
  quad(
    520, 200,
    590, 120,
    660, 190,
    590, 270
  );

  // cabeza
  fill(225, 228, 223);

  beginShape();

  vertex(220, 320);
  vertex(360, 220);
  vertex(560, 220);
  vertex(700, 340);
  vertex(720, 650);
  vertex(570, 850);
  vertex(340, 860);
  vertex(200, 650);

  endShape(CLOSE);

  // mitad izquierda
  fill(215, 220, 218);

  triangle(
    220, 320,
    430, 520,
    340, 860
  );

  // mitad derecha
  fill(200, 210, 212);

  triangle(
    430, 520,
    700, 340,
    570, 850
  );

  // ojos
  fill(10);

  noStroke();

  // ojo izquierdo
  beginShape();

  vertex(330, 420);
  vertex(345, 425);
  vertex(350, 440);
  vertex(338, 448);
  vertex(325, 440);
  vertex(323, 428);

  endShape(CLOSE);

  // ojo derecho
  beginShape();

  vertex(530, 425);
  vertex(545, 420);
  vertex(557, 430);
  vertex(555, 445);
  vertex(542, 450);
  vertex(528, 440);

  endShape(CLOSE);

  // hocico
  stroke(25);
  strokeWeight(4);

  fill(245, 242, 235);

  quad(
    320, 550,
    430, 510,
    430, 670,
    300, 640
  );

  fill(235, 232, 225);

  quad(
    430, 510,
    560, 550,
    580, 650,
    430, 670
  );

  // nariz
  fill(35);

  quad(
    390, 560,
    480, 560,
    455, 620,
    405, 620
  );

// cuerpo
// torso izquierdo
fill(210, 218, 218);

quad(
  240, 760,
  360, 710,
  410, 1050,
  210, 1050
);

// torso derecho
fill(200, 208, 212);

quad(
  500, 760,
  630, 730,
  690, 1050,
  500, 1050
);
// pecho
fill(200, 210, 215);

quad(
  360, 860,
  450, 820,
  490, 1080,
  380, 1080

);
fill(240, 238, 232);

quad(
  360, 830,
  435, 780,
  525, 870,
  500, 1070
  );
}