
// ===================================STRUCTURE============================//



const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024
canvas.height = 576

const gravity = 0.5

class Player {
    constructor(position) {
        this.position = position 
        this.velocity = {
            x: 0,
            y: 1
        }
        // {
        //     x: 0,
        //     y: 0,
        this.height = 100
        
    }
    draw() {
 c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, 100, this.height);
    }

    update() {
        this.draw()

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y


        if (this.position.y + this.height + this.velocity.y < canvas.height)
            this.velocity.y += gravity
        else this.velocity.y = 0
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

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'd':
            console.log('I`m moving right')
            player.velocity.x = 1
            break
    }
//    console.log(event) 
});