module component {
    export class ShapeComponent extends es.Component {
        public shape: egret.Shape;

        public initialize(){
            this.shape = new egret.Shape();
            Main.Instance.addChild(this.shape);
        }

        public beginFill(color: number, alpha: number = 1){
            this.shape.graphics.beginFill(color, alpha);
            return this;
        }

        public lineStyle(thickness?: number, color: number = 0xffffff) {
            this.shape.graphics.lineStyle(thickness, color);
            return this;
        }

        public moveTo(x: number, y: number) {
            this.shape.graphics.moveTo(x, y);
            return this;
        }

        public lineTo(x: number, y: number){
            this.shape.graphics.lineTo(x, y);
            return this;
        }

        public drawRect(x: number, y: number, width: number, height: number){
            this.shape.graphics.drawRect(x, y, width, height);
            return this;
        }

        public endFill(){
            this.shape.graphics.endFill();
            return this;
        }

        public setY(y: number){
            this.shape.y = y;
            return this;
        }

        public setXY(x: number = this.shape.x, y: number = this.shape.y) {
            this.shape.x = x;
            this.shape.y = y;
            return this;
        }
    }

    export enum ShapeType {
        rect,
    }
}