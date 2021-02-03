class Umbrella{
    constructor(x, y, r){
        var options = {
            isStatic: true
        }
        this.image = loadImage("walking_1.png");
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x, y, r, options);

        World.add(world, this.body);

    }

    display(){
        var pos = this.body.position;
        var angle =  this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0, 0, this.r, this.r);
        pop();

    }
}
