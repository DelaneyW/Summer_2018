


let sonyas = ['Sonya_0.png','Sonya_1.png','Sonya_2.png'];
let sonya_img;
let bg = '3b17cc9';
let img;

function preload(){

  img_a = loadImage (sonyas[0]);
  sonya_img = loadImage('Sonya.png');
  img = loadImage('backdrop.jpg');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
    sonyas[0] = new Sonya(100, 150, sonya_img, 0);
    sonyas[1] = new Sonya(1015, 100, sonya_img, 1);


     // image(sonya_img, 0, 0, );
}
  function draw() {
      background(img);
       for(let i = 0; i < sonyas.length; i++) {
         sonyas[i].frame();

        //
        // x = (counter % 4) * w;
        // y = (counter / 4) * w;





  }
