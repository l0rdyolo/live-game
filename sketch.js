let gameManager;
let music;

function preload() {
  music = loadSound(GameConfig.music.src);
}

function setup() {
  createCanvas(GameConfig.canvas.size, 400, WEBGL);
  pixelDensity(1);
  colorMode(RGB, 255, 255, 255, 1);

  gameManager = new GameManager(music);
  gameManager.initialize();
}

function draw() {
  background(0);
  gameManager.update();
  gameManager.draw();

  updateStats(gameManager.speed , gameManager.baseSpeed);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    gameManager.player.move('left');
  } else if (keyCode === RIGHT_ARROW) {
    gameManager.player.move('right');
  }

  if (key === 'c') {
    if (gameManager.cameraManager.mode === 'normal') {
      gameManager.cameraManager.setMode('test');
    } else {
      gameManager.cameraManager.setMode('normal');
    }
  }
}

function updateStats(gameSpeed , gameBaseSpeed) {
  document.getElementById('speedDisplay').innerHTML = `Speed: ${gameSpeed.toFixed(0)}`; 
  document.getElementById('base speedDisplay').innerHTML = `Base Speed: ${gameBaseSpeed.toFixed(0)}`; 
  document.getElementById('fpsDisplay').innerHTML = `FPS: ${frameRate().toFixed(0)}`;
  document.getElementById('score').innerHTML = `Score: ${gameManager.score}`;
  document.getElementById('stage').innerHTML = `Stage: ${gameManager.stage}`;

}

function togglePlay() {
  gameManager.togglePause();
}
