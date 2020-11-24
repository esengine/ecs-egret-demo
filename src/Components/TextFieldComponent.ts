module component {
    export class TextFieldComponent extends es.Component {
        public textField: egret.TextField;

        public initialize() {
            this.textField = new egret.TextField();
            Main.Instance.addChild(this.textField);
        }

        public setAlpha(alpha: number) {
            this.textField.alpha = alpha;
            return this;
        }

        public setWidth(width: number){
            this.textField.width = width;
            return this;
        }

        public setTextAlign(align: string){
            this.textField.textAlign = align;
            return this;
        }

        public setSize(size: number){
            this.textField.size = size;
            return this;
        }

        public setTextColor(color: number = 0xffffff){
            this.textField.textColor = color;
            return this;
        }

        public setText(text: string){
            this.textField.text = text;
            return this;
        }

        public setXY(x: number, y: number){
            this.textField.x = x;
            this.textField.y = y;
            return this;
        }

        public startAnimation(result: string[]) {
            let parser = new egret.HtmlTextParser();

            let textflowArr = result.map(text => parser.parse(text));
            let textfield = this.textField;
            let count = -1;
            let change = () => {
                count++;
                if (count >= textflowArr.length) {
                    count = 0;
                }
                let textFlow = textflowArr[count];

                // 切换描述内容
                // Switch to described content
                textfield.textFlow = textFlow;
                let tw = egret.Tween.get(textfield);
                tw.to({ "alpha": 1 }, 200);
                tw.wait(2000);
                tw.to({ "alpha": 0 }, 200);
                tw.call(change, this);
            };

            change();
        }
    }
}