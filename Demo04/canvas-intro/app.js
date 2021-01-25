let paintbox = document.getElementById('paintbox')
let context = paintbox.getContext('2d')

let gameOn = true

let playerSpeed = 5

class Box {
  constructor(size, color) {
    this.size = size
    this.color = color
    this.x = 0
    this.y = 0
  }
}

class Player extends Box {
  constructor() {
    super(50, 'blue')
    this.x = 0
    this.y = 225
    this.speed = 0
  }
  move() {
    this.x += this.speed
  }
}

class Enemy extends Box {
  constructor(speed) {
    super(20, 'red')
    this.speed = speed
  }

  move() {
    
    if (this.y + this.size >= 500) {
      this.speed = -Math.abs(this.speed)
    }
    if (this.y <= 0) {
      this.speed = Math.abs(this.speed)
    }
    this.y += this.speed
  }
}

let player = new Player()
let e1 = new Enemy(4)
let e2 = new Enemy(8)
let e3 = new Enemy(12)
e1.x = 100
e2.x = 233
e3.x = 366

function isCollided(box1, box2) {

    var xp=box2.x
    var xe=box1.x;

    var ye=box1.y;
    var yp=box2.y;

    if(yp>=ye-box2.size && yp<=ye+box1.size){

        if(xp>=xe-box2.size && xp<=xe+box1.size ){
            return true;
        }


    }

    
    
    return false;
       
    
}

function drawBox(box) {
  context.fillStyle = box.color
  context.fillRect(box.x, box.y, box.size, box.size)
}

paintbox.addEventListener('mousedown', () => {
  player.speed = playerSpeed
})

paintbox.addEventListener('mouseup', () => {
  player.speed = 0
})

setInterval(() => {
    playerSpeed =  5 + parseInt(Math.random() * 10)
    player.y = 100 + (Math.random() * 300)
}, 2000)

function gameLoop() {
  if (!gameOn) return  
  console.log('frame update')
  context.clearRect(0, 0, 500, 500)
  e1.move()
  e2.move()
  e3.move()
  player.move()

  if (isCollided(e1, player) || isCollided(e2, player) || isCollided(e3, player)) {
    gameOn = false  
    window.alert('Game Over')
  }

  drawBox(player)
  drawBox(e1)
  drawBox(e2)
  drawBox(e3)
  if(player.x>500){
      alert("You have reached without a crash :)");
      return;

      
  }


  window.requestAnimationFrame(gameLoop)
}


gameLoop()