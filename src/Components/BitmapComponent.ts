module component {
    export class BitmapComponent extends es.Component {
        public name: string;
        public bitmap: egret.Bitmap;

        constructor(name: string) {
            super();

            this.name = name;
        }

        public initialize(){
            this.bitmap = this.createBitmapByName(this.name);
            Main.Instance.addChild(this.bitmap);
        }

        public setXY(x: number = this.bitmap.x, y: number = this.bitmap.y){
            this.bitmap.x = x;
            this.bitmap.y = y;
            return this;
        }

        public setSize(width: number, height: number){
            this.bitmap.width = width;
            this.bitmap.height = height;
            return this;
        }

        /**
         * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
         * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
         */
        private createBitmapByName(name: string) {
            let result = new egret.Bitmap();
            let texture: egret.Texture = RES.getRes(name);
            result.texture = texture;
            return result;
        }
    }
}