class roof{
constructor(){
var options={
'isStatic':true,
}
this.body=Bodies.rectangle(400,100,200,200,options);
World.add(world,this.body);
}
display(){
var pos=this.body.position;

push ();
translate (pos.x,pos.y);
rectMode(CENTER)
rect(0,0,600,50);
pop();
}
}