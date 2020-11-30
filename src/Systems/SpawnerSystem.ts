module system {
    export class SpawnerSystem extends es.EntityProcessingSystem {
        constructor(){
            super(new es.Matcher().all(component.SpawnerComponent));
        }

        processEntity(entity: es.Entity){
            let spawner = entity.getComponent<component.SpawnerComponent>(component.SpawnerComponent);
            if (spawner.numAlive <= 0)
                spawner.enabled = true;
            
            if (!spawner.enabled)
                return;

            if (spawner.cooldown == -1) {
                this.scheduleSpawn(spawner);
                console.log("冷却时间已到，进入下一轮刷新 冷却时间:", spawner.cooldown);
                spawner.cooldown /= 4;
            }

            spawner.cooldown -= es.Time.deltaTime;
            if (spawner.cooldown <= 0) {
                this.scheduleSpawn(spawner);

                for (let i = 0; i < RandomUtils.randint(spawner.minCount, spawner.maxCount); i ++) {
                    console.log("创建敌人", entity.position.x, entity.position.y, spawner.enemyType, entity);
                    spawner.numSpawned ++;
                    spawner.numAlive++;
                }

                if (spawner.numAlive > 0)
                    spawner.enabled = false;
            }
        }

        private scheduleSpawn(spawner: component.SpawnerComponent) {
            spawner.cooldown = RandomUtils.randint(spawner.minInterval, spawner.maxInterval);
        }
    }
}