const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight


let gameOver = true

const scaledCanvas = {
  width: canvas.width / 1,
  height: canvas.height / 1,
}

const floorCollisions2D = []
for (let i = 0; i < floorCollisions.length; i += 360) {
  floorCollisions2D.push(floorCollisions.slice(i, i + 360))
}

const collisionBlocks = []
floorCollisions2D.forEach((row, y) => {
  row.forEach((symbol, x) => {
    if (symbol > 0) {
      collisionBlocks.push(
        new CollisionBlock({
          position: {
            x: x * 4,
            y: y * 4,
          },
        })
      )
    }
  })
})

const platformCollisions2D = []
for (let i = 0; i < platformCollisions.length; i += 474) {
  platformCollisions2D.push(platformCollisions.slice(i, i + 474))
}

const platformCollisionBlocks = []
platformCollisions2D.forEach((row, y) => {
  row.forEach((symbol, x) => {
    if (symbol > 0) {
      platformCollisionBlocks.push(
        new CollisionBlock({
          position: {
            x: x * 4,
            y: y * 4,
          },
          height: 4,
        })
      )
    }
  })
})

const gravity = 0.1

let pular = true



const player = new Player({
  position: {
    x: 170,
    y: 11500,
  },
  collisionBlocks,
  platformCollisionBlocks,
  imageSrc: './img/warrior/Astronauta.png',
  frameRate: 1,
  animations: {
    Idle: {
      imageSrc: './img/warrior/Astronauta.png',
      // frameRate: 8,
      // frameBuffer: 3,
    },
    Run: {
      imageSrc: './img/warrior/Astronauta.png',
      // frameRate: 8,
      // frameBuffer: 5,
    },
    Jump: {
      imageSrc: './img/warrior/Astronauta.png',
      // frameRate: 2,
      // frameBuffer: 3,
    },
    Fall: {
      imageSrc: './img/warrior/Astronauta.png',
      // frameRate: 2,
      // frameBuffer: 3,
    },
    FallLeft: {
      imageSrc: './img/warrior/AstronautaLeft.png',
      // frameRate: 2,
      // frameBuffer: 3,
    },
    RunLeft: {
      imageSrc: './img/warrior/AstronautaLeft.png',
      // frameRate: 8,
      // frameBuffer: 5,
    },
    IdleLeft: {
      imageSrc: './img/warrior/AstronautaLeft.png',
      // frameRate: 8,
      // frameBuffer: 3,
    },
    JumpLeft: {
      imageSrc: './img/warrior/AstronautaLeft.png',
      // frameRate: 2,
      // frameBuffer: 3,
    },
  },
})

const keys = {
  d: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
}

let teste = 0

const background = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  imageSrc: "/img/gameBG.png",
})

const backgroundImageHeight = 12000

const camera = {
  position: {
    x: 0,
    y: -backgroundImageHeight + scaledCanvas.height,
  },
}

function kant(){
    
  if (teste==0)
    teste=player.position.y 
  
  
  let numero = (((player.position.y) - teste)*(-1)/1000) + 0.21
  let numberSmall = numero.toFixed(2)

  if (numberSmall < 0){
    numberSmall = 0.00
    numberSmall = numberSmall.toFixed(2)
  }


  return c.fillStyle = 'green',c.font = '30px arial',c.fillText(numberSmall,10 ,50)
}

function end(){
  if(player.position.y >12000){
    gameOver = false
  }
}

// ,c.fillRect(0, 0, 100, 100),

function animate() {
  if(gameOver){
window.requestAnimationFrame(animate)
  
  
  
  c.save()
  
  c.translate(camera.position.x, camera.position.y)
  
  background.update()
  
  // collisionBlocks.forEach((collisionBlock) => {
  //   collisionBlock.update()
  // })

  // platformCollisionBlocks.forEach((block) => {
  //   block.update()
  // })
  player.checkForHorizontalCanvasCollision()
  player.update()

  player.velocity.x = 0
  if (keys.d.pressed) {
    player.switchSprite('Run')
    player.velocity.x = 2
    player.lastDirection = 'right'
    // player.shouldPanCameraToTheLeft({ canvas, camera })
  } else if (keys.a.pressed) {
    player.switchSprite('RunLeft')
    player.velocity.x = -2
    player.lastDirection = 'left'
    // player.shouldPanCameraToTheRight({ canvas, camera })
  } else if (player.velocity.y === 0) {
    pular = true 
    if (player.lastDirection === 'right') 
    player.switchSprite('Idle')
    else player.switchSprite('IdleLeft')
  }

  if (player.velocity.y < 0) {
    player.shouldPanCameraDown({ camera, canvas })
    if (player.lastDirection === 'right') 
    player.switchSprite('Jump')
    else player.switchSprite('JumpLeft')
  } else if (player.velocity.y > 0) {
    player.shouldPanCameraUp({ camera, canvas })
    if (player.lastDirection === 'right') 
    player.switchSprite('Fall')
    else player.switchSprite('FallLeft')
  }
  
  c.restore()
  kant()
  end()
  }
  else {
    c.fillText("Fim",200,200)
  }
  
}

animate()

window.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'd':
      keys.d.pressed = true
      break
    case 'a':
      keys.a.pressed = true
      break
    case 'w':
      if (pular){
        player.velocity.y = -9
        pular=false
      }
      
      break
  }
})

window.addEventListener('keyup', (event) => {
  switch (event.key) {
    case 'd':
      keys.d.pressed = false
      break
    case 'a':
      keys.a.pressed = false
      break
  }
})
