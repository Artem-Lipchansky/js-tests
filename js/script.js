const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024
canvas.height = 576

class Player {
    constructor(position) {
        this.position = position 
        // {
        //     x: 0,
        //     y: 0,
        
    }
    draw() {
 c.fillStyle = 'red';
 c.fillRect(this.position.x, this.position.y, 100, 100);
    }

    update() {
        this.draw()
        this.position.y++
    }
}

// let y = 100
// let y2 = 100

const player = new Player({
    x: 0,
    y: 0,
        
});
const player2 = new Player({
    x: 300,
    y: 100,
        
});
function animate() {
    window.requestAnimationFrame(animate);
c.fillStyle = 'white';
    c.fillRect(0, 0, canvas.width, canvas.height);
    // player.draw()
    player.update()
    player2.update()
    // console.log('go');


// y++
    
// c.fillStyle = 'red';
//  c.fillRect(400, y2, 100, 100);
//  y2++
}

animate()