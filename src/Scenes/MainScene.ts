export class MainScene extends es.Scene {
    public onStart() {
        const bgEntity = this.createEntity("bg");
        es.Core.content.loadTexture("egret_icon_png").then(texture => {
            bgEntity.addComponent(new es.SpriteRenderer(texture));

            console.log(es.Core.stage);
        });
    }
}
