class Drops{
constructor(x, y){
    var options = {
        isStatic: false
    }
this.x = x;
this.y = y;
this.body = Bodies.circle(x, y, 10, options);
World.add(world, this.body);
}

update(){
    if(this.body.position.y>800){
        this.body.position.y = this.y;
    }

}
display(){
    push();
    translate(this.body.position.x, this.body.position.x);
    rotate(this.body.angle);
    fill("blue");
    noStroke();
    ellipseMode(CENTER);
    ellipse(this.x, this.y, 10, 10);
    pop();

}


}