module scene {
    export class MainScene extends es.Scene {
        public async onStart(){
            let stageW = Main.Instance.stage.stageWidth;
            let stageH = Main.Instance.stage.stageHeight;

            let sky = this.createEntity("sky");
            sky.addComponent(new component.BitmapComponent("bg_jpg"))
                .setSize(stageW, stageH);

            let topMask = this.createEntity("topMask");
            topMask.addComponent(new component.ShapeComponent())
                .beginFill(0x000000, 0.5)
                .drawRect(0, 0, stageW, 172)
                .endFill()
                .setY(33);

            let egret_icon = this.createEntity("egret_icon");
            egret_icon.addComponent(new component.BitmapComponent("egret_icon_png")).setXY(26, 33);

            let line = this.createEntity("line");
            line.addComponent(new component.ShapeComponent())
                .lineStyle(2)
                .moveTo(0, 0)
                .lineTo(0, 117)
                .endFill()
                .setXY(172, 61);

            let colorLabel = this.createEntity("colorLabel");
            colorLabel.addComponent(new component.TextFieldComponent())
                .setAlpha(0)
                .setWidth(stageW - 172)
                .setTextColor()
                .setTextAlign("center")
                .setText("Hello Egret")
                .setSize(24)
                .setXY(172, 80);

            const result = await RES.getResAsync("description_json")
            let textfield = this.createEntity("textfield");
            textfield.addComponent(new component.TextFieldComponent())
                .setAlpha(0)
                .setWidth(stageW - 172)
                .setTextAlign(egret.HorizontalAlign.CENTER)
                .setSize(24)
                .setTextColor()
                .setXY(172, 135)
                .startAnimation(result);

            console.log("main start");
        }
    }
}
