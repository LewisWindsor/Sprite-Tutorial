const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
let staggerFrames = 5;
const spriteAnimations = [];
const animationStates = [
    {
        name: 'idle',
        frames: 7,
    },
    {
        name: 'jump',
        frames: 7,
    }
];
animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for (let j = 0 ; j < state.frames; j++){
        let positonX = j * spriteWidth;
        let positonY = index * spriteHeight;
        frames.loc.push({x: positonX, y: positonY});
    }
    spriteAnimations[state.name] = frames;
});
console.log(spriteAnimations);

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let positon = Math.floor(gameFrame/staggerFrames) % 6;
    frameX = spriteWidth * positon;
    ctx.drawImage(playerImage, frameX, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    // if (gameFrame % staggerFrames == 0){
    //     if (frameX < 6) frameX++;
    // else frameX = 0;
    // }
    

    gameFrame++;
    //ctx.drawImage(playerImage, 50, 50);
    requestAnimationFrame(animate);
};
animate();