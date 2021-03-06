AFRAME.registerComponent("non-stop-movement", {
    schema: {
        initialDirection: {type: 'vec3', default: {x: 0, y: 0, z: -1}},
        speed: {type: 'number', default: 1}
    },

    update: function () {
        this.unitDirectionVec3 = new THREE.Vector3(this.data.initialDirection.x, this.data.initialDirection.y, this.data.initialDirection.z).normalize();
        this.movementVector3 = new THREE.Vector3(this.unitDirectionVec3.x, this.unitDirectionVec3.y, this.unitDirectionVec3.z);
        var axisY = new THREE.Vector3(0,1,0);
        var self = this;
        
        this.rotateDirection = function (event) {
            console.log(event)
            self.unitDirectionVec3.applyAxisAngle(axisY, event.detail.rotateRight? -Math.PI/3 : Math.PI/3)
        }

        self.el.addEventListener('rotate', this.rotateDirection);
        self.el.addEventListener('rotate', this.rotateDirection);
    },

    tick: function (time, timeDelta) {
        var movementVector3 = this.movementVector3;
        var unitDirectionVec3 = this.unitDirectionVec3;
        
        var factor = (timeDelta/1000) * this.data.speed;
        ['x', 'y', 'z'].forEach(function (axis) {
            movementVector3[axis] = unitDirectionVec3[axis]*factor; 
        })
        
        var currentPosition = this.el.object3D.position;
        this.el.setAttribute('position', {
            x: currentPosition.x + movementVector3.x,
            y: currentPosition.y + movementVector3.y,
            z: currentPosition.z + movementVector3.z
        })
    }
})