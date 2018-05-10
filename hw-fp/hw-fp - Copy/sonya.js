
  class Sonya {
    constructor(init_x, init_y, img_S, orientation){
      this.pos = {
        x: init_x,
        y: init_y

      };
  this.orientation = orientation;

///Reference to pre-load loadImage
  this.image = sonya_img;
//speed at which to animate
  this.speed = 4;
//the size of the pixels taken for animation
  this.size = {
    w:250,
    h:400
};

  this.sprite_num = -1;
  //the top left corner of every sub-rec
  this.subRect = [
  [0,0],
  [250,0],
  [500,0],
  [750,0],
];

}

    frame(){
      this.display();
      this.animate();

    }
    display() {
      push();

      translate(this.pos.x, this.pos.y);

      if(this.orientation === 0) {
          scale(1,1);
      } else if (this.orientation === 1){
        scale(-1, 1);
      }
      image(
        //Reference to image in memory
        this.image,

        //placement of image
        0,0)
        //display size of image
        this.size.w, this.size.h,
        //the top left of sub-rec
        this.subRect[this.sprite_num][0], this.subRect[this.sprite_num][1],
        //the size of the subRect
        this.size.w, this.size.h



      pop();
}
      animate(){
        //update the sprite #
        //updates the subRect positions
        if(frameCount % this.speed === 0){
          this.sprite_num ++;
          this.sprite_num %= 8;

          }
        }
    }
