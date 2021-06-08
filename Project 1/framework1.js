//Namespace Project
var Project;
(function (Project) {
    //Class Point
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }
    Project.Point = Point;
    //Class Watertank
    class Watertank {
        constructor(stpt, h, w, context, color) {
            this.l = 0;
            this.startpt = stpt;
            this.height = h;
            this.width = w;
            this.context = context;
            this.color = color;
        }
        //Drawing the tank
        draw(limit) {
            this.context.beginPath();
            this.context.rect(this.startpt.x, this.startpt.y, this.width, this.height);
            this.context.lineWidth = 3;
            this.context.stroke();
            this.limit = limit;
            this.draw1();
        }
        //Drawing the liquid as per needs
        draw1() {
            this.context.beginPath();
            this.context.rect(this.startpt.x + 1, this.startpt.y + this.height - 1, this.width - 2, -this.limit);
            this.context.fillStyle = this.color;
            context.stroke();
            context.font = '10pt Arial';
            context.fillText("Tank A", 220, 250);
            context.fillText("Tank B", 220, 510);
            context.lineWidth = 3;
            context.stroke();
            this.context.globalAlpha = 0.9;
            this.context.fill();
            this.context.stroke();
        }
    }
    Project.Watertank = Watertank;
    //Class Square to draw the level indicators
    class Square {
        constructor(stpt, length, context) {
            this.stpt = stpt;
            this.length = length;
            this.context = context;
        }
        //Drawing square
        draw() {
            this.context.beginPath();
            this.context.rect(this.stpt.x, this.stpt.y, this.length, this.length);
            this.context.strokeStyle = "black";
            this.context.lineWidth = 3;
            this.context.globalAlpha = 1;
            this.context.stroke();
        }
    }
    Project.Square = Square;
    //Class Line for drawing lines
    class Line {
        constructor(start_x, start_y, end_x, end_y, context) {
            this.color = "black";
            this.start_x = start_x;
            this.start_y = start_y;
            this.end_x = end_x;
            this.end_y = end_y;
            this.context = context;
        }
        //Draw line
        draw() {
            this.context.beginPath();
            this.context.moveTo(this.start_x, this.start_y);
            this.context.lineTo(this.end_x, this.end_y);
            this.context.lineWidth = 2;
            this.context.strokeStyle = this.color;
            this.context.stroke();
        }
    }
    Project.Line = Line;
    //Drawing Circle
    class Circle {
        constructor(cenpt, radius, context) {
            this.cenpt = cenpt;
            this.radius = radius;
            this.context = context;
        }
        //Draw circle
        draw() {
            this.context.beginPath();
            this.context.arc(this.cenpt.x, this.cenpt.y, this.radius, 0, 2 * Math.PI, false);
            this.context.fillStyle = "white";
            this.context.strokeStyle = "black";
            this.context.lineWidth = 2;
            this.context.fill();
            this.context.stroke();
        }
    }
    Project.Circle = Circle;
    //Resistor setup
    class Setup {
        constructor(start_x, start_y, context) {
            this.start_x = start_x;
            this.start_y = start_y;
            this.context = context;
        }
        //To draw the resistor setup
        draw() {
            //Drawing Circle
            this.context.beginPath();
            this.context.arc(this.start_x, this.start_y, 5, 0, 2 * Math.PI, false);
            this.context.fillStyle = "white";
            this.context.strokeStyle = "black";
            this.context.lineWidth = 2;
            this.context.fill();
            this.context.stroke();
            //Drawing resistor
            this.context.beginPath();
            this.context.moveTo(this.start_x, this.start_y);
            this.context.lineTo(this.start_x, this.start_y + 50);
            this.context.lineTo(this.start_x + 5, this.start_y + 55);
            this.context.lineTo(this.start_x - 5, this.start_y + 60);
            this.context.lineTo(this.start_x + 5, this.start_y + 65);
            this.context.lineTo(this.start_x - 5, this.start_y + 70);
            this.context.lineTo(this.start_x + 5, this.start_y + 75);
            this.context.lineTo(this.start_x - 5, this.start_y + 80);
            this.context.lineTo(this.start_x, this.start_y + 85);
            this.context.lineTo(this.start_x, this.start_y + 120);
            this.context.lineWidth = 2;
            this.context.strokeStyle = "black";
            this.context.stroke();
        }
    }
    Project.Setup = Setup;
    //Class DIODE
    class DIODE {
        constructor(start_x, start_y, context) {
            this.start_x = start_x;
            this.start_y = start_y;
            this.context = context;
        }
        drawtri() {
            //Drawing triangle of DIODE
            this.context.beginPath();
            this.context.moveTo(this.start_x - 20, this.start_y + 120);
            this.context.lineTo(this.start_x + 20, this.start_y + 120);
            this.context.lineTo(this.start_x, this.start_y + 140);
            this.context.lineTo(this.start_x - 20, this.start_y + 120);
            this.context.fillStyle = this.color;
            this.context.strokeStyle = "black";
            this.context.lineWidth = 2;
            this.context.fill();
            this.context.stroke();
            //Drawing line of DIODE
            this.context.beginPath();
            this.context.moveTo(this.start_x - 20, this.start_y + 142);
            this.context.lineTo(this.start_x + 20, this.start_y + 142);
            this.context.stroke();
        }
    }
    Project.DIODE = DIODE;
    //Class NAND
    class NAND {
        constructor(context) {
            this.context = context;
        }
        //Drawing NAND Gate
        draw() {
            // Vertical line
            this.context.beginPath();
            this.context.moveTo(536, 396);
            this.context.lineTo(536, 440);
            this.context.lineWidth = 2;
            this.context.strokeStyle = "black";
            this.context.stroke();
            //Upper Horizontal line
            this.context.beginPath();
            this.context.moveTo(536, 440);
            this.context.lineTo(570, 440);
            this.context.lineWidth = 2;
            this.context.strokeStyle = "black";
            this.context.stroke();
            //Lower Horizontal line
            this.context.beginPath();
            this.context.moveTo(536, 396);
            this.context.lineTo(570, 396);
            this.context.lineWidth = 2;
            this.context.strokeStyle = "black";
            context.fillStyle = "black";
            context.font = '10pt Arial';
            //Filling the text
            context.fillText("Level Sensor A", 330, 290);
            context.fillText("1/4 Level", 330, 340);
            context.fillText("1/4 Level", 330, 535);
            context.fillText("Level Sensor B", 330, 585);
            context.fillText("Y=(A.B)'", 700, 465);
            this.context.stroke();
            //Drawing the semicircle for NAND Gate
            this.context.beginPath();
            this.context.stroke();
            //To rotate semicircle
            this.context.rotate(Math.PI / 2);
            context.fillStyle = "blue";
            context.font = '10pt Arial';
            //Text on Canvas
            context.fillText("R", 312, -680);
            context.fillText("+ 5V", 235, -680);
            //Drawing semicircle 
            this.context.arc(418, -570, 22, 0, Math.PI, true);
            // Bringing canvas back to original position
            this.context.rotate(3 * Math.PI / 2);
            this.context.stroke();
            //Drawing Smaller circle of NAND Gate
            this.context.beginPath();
            this.context.globalAlpha = 1;
            this.context.arc(593, 421, 5, 0, 2 * Math.PI, false);
            this.context.fillStyle = "grey";
            this.context.strokeStyle = "black";
            this.context.lineWidth = 2;
            this.context.fill();
            this.context.stroke();
        }
    }
    Project.NAND = NAND;
    //Class Arrow to draw arrow
    class Arrow {
        constructor(start_x, start_y, end_x, end_y, context) {
            this.start_x = start_x;
            this.start_y = start_y;
            this.end_x = end_x;
            this.end_y = end_y;
            this.context = context;
        }
        // to draw arrow
        draw() {
            //Arm 1 of arrow
            this.context.beginPath();
            this.context.moveTo(this.start_x, this.start_y);
            this.context.lineTo(this.end_x, this.end_y);
            this.context.lineWidth = 2;
            this.context.strokeStyle = "black";
            this.context.stroke();
            //Arm 2 of arrow
            this.context.beginPath();
            this.context.moveTo(this.start_x + 25, this.start_y + 10);
            this.context.lineTo(this.end_x, this.end_y);
            this.context.lineWidth = 2;
            this.context.strokeStyle = "black";
            this.context.stroke();
            //Arm 3 of arrow
            this.context.beginPath();
            this.context.moveTo(this.start_x + 15, this.start_y + 20);
            this.context.lineTo(this.end_x, this.end_y);
            this.context.lineWidth = 2;
            this.context.strokeStyle = "black";
            this.context.stroke();
        }
    }
    Project.Arrow = Arrow;
})(Project || (Project = {}));
//# sourceMappingURL=framework1.js.map