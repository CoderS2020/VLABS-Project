//Namespace Project
namespace Project {

    //Class Point
    export class Point {
        public x: number;
        public y: number;
        constructor(x: number, y: number) {

            this.x = x;
            this.y = y;

        }
    }

    //Class Watertank
    export class Watertank {

        private startpt: Point;
        private width: number;
        private height: number;
        private l: number = 0;
        private limit: number;
        private color: string;
        private context: CanvasRenderingContext2D;
        constructor(stpt: Point, h: number, w: number, context: CanvasRenderingContext2D, color) {
            this.startpt = stpt;
            this.height = h;
            this.width = w;
            this.context = context;
            this.color = color;
        }

        //Drawing the tank
        draw(limit: number) {

            this.context.beginPath();
            this.context.rect(this.startpt.x, this.startpt.y, this.width, this.height);
            this.context.lineWidth = 3;
            this.context.stroke();
            this.limit = limit;
            this.draw1();

        }

        //Drawing the liquid as per needs
        public draw1() {

            this.context.beginPath();
            this.context.rect(this.startpt.x + 1, this.startpt.y + this.height - 1, this.width - 2, -this.limit);
            this.context.fillStyle = this.color;
            context.stroke();
            context.font = '10pt Arial';
            context.fillText("Tank A", 220, 250);
            context.fillText("Tank B", 220, 510);
            context.lineWidth = 3;
            context.stroke();
            this.context.globalAlpha=0.9;
            
            this.context.fill();
            this.context.stroke();

        }

    }

    //Class Square to draw the level indicators
    export class Square {
        private stpt: Point;
        private length: number;
        private context: CanvasRenderingContext2D;
        private _color: string;
        constructor(stpt: Point, length: number, context: CanvasRenderingContext2D) {
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
            this.context.globalAlpha=1;
            this.context.stroke();

        }
    }

    //Class Line for drawing lines
    export class Line {
        public start_x: number;
        public start_y: number;
        public end_x: number;
        public end_y: number;
        public color: string = "black";
        public context: CanvasRenderingContext2D;
        constructor(start_x: number, start_y: number, end_x: number, end_y: number, context: CanvasRenderingContext2D) {
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

    //Drawing Circle
    export class Circle {
        private cenpt: Point;
        private radius: number;
        private context: CanvasRenderingContext2D;
        constructor(cenpt: Point, radius: number, context: CanvasRenderingContext2D) {
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

    //Resistor setup
    export class Setup {
        public start_x: number;
        public start_y: number;

        public context: CanvasRenderingContext2D;
        constructor(start_x: number, start_y: number, context: CanvasRenderingContext2D) {
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

    //Class DIODE
    export class DIODE {
        public start_x: number;
        public start_y: number;
        public color: string;
        public context: CanvasRenderingContext2D;
        constructor(start_x: number, start_y: number, context: CanvasRenderingContext2D) {
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
    //Class NAND
    export class NAND {
        private context: CanvasRenderingContext2D;
        constructor(context: CanvasRenderingContext2D) {
            this.context = context
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
            this.context.moveTo(536, 396,);
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
    //Class Arrow to draw arrow
    export class Arrow {
        public start_x: number;
        public start_y: number;
        public end_x: number;
        public end_y: number;
        public context: CanvasRenderingContext2D;
        constructor(start_x: number, start_y: number, end_x: number, end_y: number, context: CanvasRenderingContext2D) {
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

}
