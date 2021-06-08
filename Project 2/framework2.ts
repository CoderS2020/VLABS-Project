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
            this.context.strokeStyle = "black";
            this.context.fillStyle = "black";
            this.context.globalAlpha = 1;
            this.context
            this.limit = limit;
            this.context.stroke();
            this.draw1();

        }


        //Drawing the liquid as per needs
        public draw1() {

            this.context.beginPath();
            this.context.rect(this.startpt.x + 1, this.startpt.y + this.height - 1, this.width - 2, -this.limit);
            this.context.lineWidth = 3;
            this.context.font = '10pt Arial';
            this.context.fillText("Tank B", 220, 250);
            this.context.globalAlpha = 0.9;
            this.context.fillText("Tank A", 220, 510);
            this.context.fillStyle = this.color;
            this.context.strokeStyle = "black";
            this.context.fill();
            this.context.stroke();

        }
    }

    //Class NOT to draw NOT Gate
    export class NOT {
        public start_x: number;
        public start_y: number;
        public color: string;
        public context: CanvasRenderingContext2D;
        constructor(start_x: number, start_y: number, context: CanvasRenderingContext2D) {

            this.start_x = start_x;
            this.start_y = start_y;
            this.context = context;

        }

        //Drawing the NOT Gate
        draw() {


            //Drawing the triangle
            this.context.beginPath();
            this.context.moveTo(this.start_x, this.start_y);
            this.context.lineTo(this.start_x - 20, this.start_y - 20);
            this.context.lineTo(this.start_x - 20, this.start_y + 20);
            this.context.lineTo(this.start_x, this.start_y);
            this.context.strokeStyle = "black";
            this.context.lineWidth = 2;
            this.context.stroke();

    
            //Drawing the small circle
            this.context.beginPath();
            this.context.arc(this.start_x, this.start_y, 5, 0, 2 * Math.PI);
            this.context.fillStyle = "grey";
            this.context.globalAlpha = 1;
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

    
        //Drawing the square
        draw() {

            this.context.beginPath();
            this.context.rect(this.stpt.x, this.stpt.y, this.length, this.length);
            this.context.strokeStyle = "black";
            this.context.lineWidth = 3;
            this.context.stroke();

        }
    }


    //Class Line for drawing lines
    export class Line {
        private start_x: number;
        private start_y: number;
        private end_x: number;
        private end_y: number;
        public color: string = "black";
        private context: CanvasRenderingContext2D;
        constructor(start_x: number, start_y: number, end_x: number, end_y: number, context: CanvasRenderingContext2D) {
            this.start_x = start_x;
            this.start_y = start_y;
            this.end_x = end_x;
            this.end_y = end_y;
            this.context = context;

        }


        //Drawing the line
        draw() {

            this.context.beginPath();
            this.context.moveTo(this.start_x, this.start_y);
            this.context.lineTo(this.end_x, this.end_y);
            this.context.lineWidth = 2;
            this.context.strokeStyle = this.color;
            this.context.stroke();


        }
    }

    
    //Class Circle 
    export class Circle {
        private cenpt: Point;
        private radius: number;
        private context: CanvasRenderingContext2D;
        public color: string = "grey";
        constructor(cenpt: Point, radius: number, context: CanvasRenderingContext2D) {

            this.cenpt = cenpt;
            this.radius = radius;
            this.context = context;

        }


        //Drawing circle
        draw() {

            this.context.beginPath();
            this.context.arc(this.cenpt.x, this.cenpt.y, this.radius, 0, 2 * Math.PI, false);
            this.context.fillStyle = this.color;
            this.context.strokeStyle = "black";
            this.context.lineWidth = 2;
            this.context.fill();
            this.context.stroke();

        }

    }


    //Class AND for drawing AND Gate
    export class AND {
        private context: CanvasRenderingContext2D;
        constructor(context: CanvasRenderingContext2D) {

            this.context = context

        }
    
        //Drawing AND Gate
        draw() {

    
            // Vertical line
            this.context.beginPath();
            this.context.moveTo(556, 424);
            this.context.lineTo(556, 468);
            this.context.lineWidth = 2;
            this.context.strokeStyle = "black";
            this.context.stroke();

    
            //Upper Horizontal line
            this.context.beginPath();
            this.context.moveTo(556, 468);
            this.context.lineTo(590, 468);
            this.context.lineWidth = 2;
            this.context.strokeStyle = "black";
            this.context.stroke();

    
            //Lower Horizontal line
            this.context.beginPath();
            this.context.moveTo(556, 424);
            this.context.lineTo(590, 424);
            this.context.lineWidth = 2;
            this.context.strokeStyle = "black";
            this.context.fillStyle = "black";
            this.context.font = '10pt Arial';
            this.context.font = '10pt Arial';

    
            //Writing Text on Canvas
            this.context.fillText("Level Sensor B", 330, 235);
            this.context.fillText("Full Level", 330, 185);
            this.context.fillText("1/4 Level", 330, 535);
            this.context.fillText("Level Sensor A", 330, 585);
            this.context.fillText("Y=(A.B)'", 700, 498);
            this.context.stroke();


            //Drawing the semicircle in the AND Gate
            this.context.beginPath();
            this.context.rotate(Math.PI / 2); // To rotate the semicircle
            this.context.fillStyle = "wheat";
            this.context.arc(446, -590, 22, 0, Math.PI, true);//Drawing semicircle
            this.context.rotate(3 * Math.PI / 2); // Bringing canvas back to original position
            this.context.globalAlpha = 1;
            this.context.strokeStyle = "black";
            this.context.lineWidth = 2;
            this.context.fill();
            this.context.stroke();

        }

    }


    //Class innercircle to draw the rotating circle
    export class innercircle {
        private _stpt: Point;
        private _endpt: Point;
        private _angle: number;
        private _length: number;
        private context: CanvasRenderingContext2D;
        public color: string = "grey";

        constructor(stpt: Point, endpt: Point, context: CanvasRenderingContext2D) {

            this.context = context;
            this._stpt = stpt;
            this._endpt = endpt;
            this._length = this.length;
            this._angle = this.angle;

        }

        
        // Getting distance between start and end points
        private get length() {

            let l = Math.sqrt(Math.pow(this._stpt.x - this._endpt.x, 2) + Math.pow(this._stpt.y - this._endpt.y, 2));
            return (l);

        }

        
        // Getting Angle using tan inverse
        private get angle() {

            let ang = Math.atan2(this._endpt.y - this._stpt.y, this._endpt.x - this._stpt.x) * 180 / Math.PI;
            return (ang);

        }

        
        //Drawing inner circle
        draw() {


            this.context.beginPath();
            this.context.arc(this._endpt.x, this._endpt.y, 5, 0, Math.PI * 2);
            this.context.fillStyle = this.color;
            this.context.strokeStyle = this.color;
            this.context.lineWidth = 1;
            this.context.globalAlpha = 1;
            this.context.fill();
            this.context.stroke();


        }

        
        //Rotating the inner circle by changing (rotating) end points
        rotate() {
 
 
            this._angle++;
            this._endpt.x = this._stpt.x + this._length * Math.cos(this._angle * Math.PI / 180);
            this._endpt.y = this._stpt.y + this._length * Math.sin(this._angle * Math.PI / 180);
            this.rotatecheck();

 
        }


        //To set angle to 0, if it exceeds 360
        private rotatecheck() {

            if (this._angle >= 360) {
 
                this._angle = 0;

            }
 
        }
 
    }

}