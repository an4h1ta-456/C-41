class Drops{
    construtor(x,y){
        var options={
            friction: 0.1,
            restitution: 0.1
        }
        this.r=3;
      
        this.body = Bodies.circle(x, y, this.r,options);       
        this.color=color(0,255,255);
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }
    }
