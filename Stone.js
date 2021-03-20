class Stone{
    constructor(x,y){
        var options = {
            'restitution':0,
            'friction':1,
            'density':1.2,
        }
        this.stone = Bodies.circle(x,y,65,options);
        this.radius = 65;
        this.img = loadImage("stone.png");

        World.add(world,this.stone);
    }

    display(){
        var pos = this.stone.position;
        var angle = this.stone.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(RADIUS);
        image(this.img,0,0,this.radius,this.radius);
        pop();
    }
}