//Declaring Sonya class for my sprite
  class Sonya {
    constructor(x, y, img, orientation){
        this.pos = {
            x: 80,
            y: 130

        };

        this.orientation = orientation;

        // Link to my image in sketch.js
        this.image = sprite_img;

        // Setting speed of animation moving through arrays
        this.m_speed = 5;

        //Declaring size of sprite sheet to be displayed in arrays
        this.size = {
            w: 180,
            h: 450
        };
        // # of sprite
        this.sprite_num = 0;
        // top-left corner of each sub-rect!
        this.subRect = [
            [0, 0],//1
            [200, 0],//2
            [400, 0],//3
            [600, 0],//4
            [800, 0],//5
            [1000, 0],//6
            [1200, 0],//7
            [1400, 0],//8
            [1600, 0],//9
            [1800, 0],//10
            [2000, 0],//11
            [2200, 0],//12
            [2400, 0],//13
            [2600, 0],//14
            [2800, 0]//15
        ];
      }

       frame() {
           this.display();
           this.animate();
       }

       display() {
           push();

           translate(this.pos.x, this.pos.y);


            if (this.orientation === 0) {
               scale(1,1);
           } else if (this.orientation === 1) {
               scale(-1,1);
           }

           image(
               // Calling on my sprite image
               this.image,

               0, 0,
               // size of the image
               this.size.w/2, this.size.h/2,

               this.subRect[this.sprite_num][0], this.subRect[this.sprite_num][1],
               // the size of the subrect
               this.size.w, this.size.h


           );
           pop();
       }

       animate() {
           // update the sprite num
           // Updates pos
           this.sprite_num ++;
           this.sprite_num %= 15;

           //Using if statement to get sprite to move side to side
             if ( this.pos.x > width || this.pos.x < 0 ) {
               this.m_speed = this.m_speed * -1;
               this.image = sprite_img_2;                      }
                this.pos.x = this.pos.x + this.m_speed;
                 }
}
