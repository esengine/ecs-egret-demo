export class MainScene extends es.Scene {
    public onStart() {
        const bgEntity = this.createEntity("bg");
        es.Core.content.loadTexture("egret_icon_png").then(texture => {
            bgEntity.addComponent(new es.SpriteRenderer(texture));
            bgEntity.setRotationDegrees(30);
            bgEntity.setScale(new es.Vector2(1.5, 1));
            bgEntity.setPosition(200, 200);
        });
    }
}
