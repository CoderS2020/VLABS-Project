//initialise canvas and context
var canvas = document.getElementById("mycanvas");
var context = canvas.getContext('2d');
//Drawing Upper Tank
var stpt1 = new Project.Point(170, 190);
var wtank1 = new Project.Watertank(stpt1, 150, 150, context, "blue");
wtank1.draw(0);
//Drawing Lower Tank
var stpt2 = new Project.Point(170, 440);
var wtank2 = new Project.Watertank(stpt2, 150, 150, context, "violet");
wtank2.draw(0);
//Drawing the level indicators for both tanks
var stpt3 = new Project.Point(320, 300);
var sq1 = new Project.Square(stpt3, 15, context);
sq1.draw();
var stpt4 = new Project.Point(320, 550);
var sq2 = new Project.Square(stpt4, 15, context);
sq2.draw();
//Lines emerging from first tank starting with line1
var line1part1 = new Project.Line(335, 307, 435, 307, context);
line1part1.draw();
var line1part2 = new Project.Line(435, 307, 435, 415, context);
line1part2.draw();
var line1part3 = new Project.Line(435, 415, 535, 415, context);
line1part3.draw();
//Lines emerging from second tank starting with line2
var line2part1 = new Project.Line(335, 557, 435, 557, context);
line2part1.draw();
var line2part2 = new Project.Line(435, 557, 435, 427, context);
line2part2.draw();
var line2part3 = new Project.Line(435, 427, 535, 427, context);
line2part3.draw();
//NAND GATE
var nand = new Project.NAND(context);
nand.draw();
//DIODE
var tri = new Project.DIODE(700, 250, context);
tri.drawtri();
//Lines emerging from diode starting with triline
var triline1 = new Project.Line(700, 393, 700, 421, context);
triline1.color = "greenyellow";
triline1.draw();
var triline2 = new Project.Line(700, 421, 594, 421, context);
triline2.color = "greenyellow";
triline2.draw();
//Resistor Setup
var setup = new Project.Setup(700, 250, context);
setup.draw();
// Arrows
var arrow1 = new Project.Arrow(760, 380, 795, 405, context);
arrow1.draw();
var arrow2 = new Project.Arrow(740, 395, 775, 420, context);
arrow2.draw();
//Two sliders for two tanks
var slider1 = document.getElementById("slider1");
var slider2 = document.getElementById("slider2");
//Event listeners to both sliders to listen mouse events
slider1.addEventListener("mousedown", mousedown, false);
slider1.addEventListener("mouseup", mouseup, false);
slider1.addEventListener("mousemove", mousemove, false);
slider2.addEventListener("mousedown", mousedown, false);
slider2.addEventListener("mouseup", mouseup, false);
slider2.addEventListener("mousemove", mousemove, false);
var drag = false; // To check if drag is true or false for mouse event listening
var isanim = false; // To check if animation is active or not
//Function Mousedown
function mousedown() {
    drag = true;
}
//Function Mouseup
function mouseup() {
    console.log("mouseup");
    start();
    slider1check();
    slider2check();
    triline();
    drag = false;
}
//Function Mousemove
function mousemove(e) {
    if (drag) {
        start();
    }
    slider1check();
    slider2check();
    triline();
}
//Function start() to call anim() and setting isanim as true
function start() {
    isanim = true;
    anim();
}
//Function anim() to fill the tank with liquid as per requirements
function anim() {
    context.clearRect(170, 190, 150, 500);
    wtank1.draw(+slider1.value - 2);
    wtank2.draw(+slider2.value - 2);
}
//Function to change color of lines if liquid rises to upper tank's 1/4 level
function slider1check() {
    if (+slider1.value > 40) {
        line1part1.color = "greenyellow";
        line1part2.color = "greenyellow";
        line1part3.color = "greenyellow";
        line1part1.draw();
        line1part2.draw();
        line1part3.draw();
    }
    else {
        line1part1.color = "black";
        line1part2.color = "black";
        line1part3.color = "black";
        line1part1.draw();
        line1part2.draw();
        line1part3.draw();
    }
}
//Function to change color of lines if liquid rises to lower tank's 1/4 level
function slider2check() {
    if (+slider2.value > 40) {
        line2part1.color = "greenyellow";
        line2part2.color = "greenyellow";
        line2part3.color = "greenyellow";
        line2part1.draw();
        line2part2.draw();
        line2part3.draw();
    }
    else {
        line2part1.color = "black";
        line2part2.color = "black";
        line2part3.color = "black";
        line2part1.draw();
        line2part2.draw();
        line2part3.draw();
    }
}
//Function triline to change color of lines emerging from diode as per requirements
function triline() {
    if (+slider1.value > 40 && +slider2.value > 40) {
        triline1.color = "black";
        triline1.draw();
        triline2.color = "black";
        triline2.draw();
        tri.color = "greenyellow";
        tri.drawtri();
    }
    else {
        triline1.color = "greenyellow";
        triline1.draw();
        triline2.color = "greenyellow";
        triline2.draw();
        tri.color = "grey";
        tri.drawtri();
    }
}
//# sourceMappingURL=app.js.map