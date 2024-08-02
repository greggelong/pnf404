let scroll = 0;
let textindex = 0;
let textstart = 0;
let txt = "404 PAGE NOT FOUND! ";
let texta = txt.split("");
let cnv

function setup() {
  cnv = createCanvas(800, 600);
  let cx = windowWidth/2 - cnv.width/2
  let cy=  windowHeight/2- cnv.height/2
  cnv.position(cx,cy);
  noStroke();
  background(0);
  textSize(40);
  frameRate(6);
}

function draw() {
  background(0);
  // map y to a wobbly sine function
  for (let x = 0; x < width; x += 1) {
    let y = map(
      sin(radians(x * 8 + scroll) + sin(radians(x * 14 + scroll))),
      -1,
      1,
      600,
      40
    );

    fill(0, 255, 0);
    text(texta[textindex % texta.length], x * 30, y);
    textindex++;
  }
  scroll += 5;
  textstart++;
  if (textstart >= texta.length) {
    textstart = 0;
  }
  textindex = textstart;
}
