canvas=document.getElementById("my_Canvas");
ctx=canvas.getContext("2d");
var color="red";
var radius=40;
var lineWidth=2;


ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    color=document.getElementById("colour").value;
    lineWidth=document.getElementById("Linewidth").value;
    radius=document.getElementById("Radii").value;
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    circle(mouse_x,mouse_y);
    

}
function circle(mouse_x,mouse_y){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=lineWidth;
ctx.arc(mouse_x,mouse_y,radius,0,2*Math.PI);
ctx.stroke();
}
function clear_area(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}