module scene {
    export class MainScene extends es.Scene {

        public initialize(){
            this.addEntityProcessor(new system.SpawnerSystem());
        }

        public async onStart(){
            let camera = this.createEntity("camera");
            camera.addComponent(new es.Camera());

            let spawn = this.createEntity("spawn");
            spawn.addComponent(new component.SpawnerComponent(component.EnemyType.worm));

            es.Core.Instance._titleMemory = (totalMemory, frameCounter) => {
                console.log("title", totalMemory, frameCounter);
            };
        }
    }
}
