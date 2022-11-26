const rulesBtn = document.getElementById('rules-btn');
const closeBtn = document.getElementById('close-btn');
const rules = document.getElementById('rules');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let score = 0;

const brickRowCount = 9;
const brickColumnCount = 5;
const delay = 500; // Delay to reset the game

// const ballX = 123;
// const ballY = 123;
// const ballSize = 123;
// const ballSpeed = 123;
// const ball_x = 123;

// Create ball props
const ball = {
	x: canvas.width / 2,
	y: canvas.height / 2,
	size: 10,
	speed: 4,
	dx: 4,
	dy: -4,
	visible: true
};

// Create paddle props
const paddle = {
	x: canvas.width / 2 - 40,
	y: canvas.height - 20,
	w: 80,
	h: 10,
	speed: 8,
	dx: 0,
	visible: true
};

// Create brick props
const brickInfo = {
	w: 70,
	h: 20,
	padding: 10,
	offsetX: 45,
	offsetY: 60,
	visible: true
};

const bricks = [];
for (let i = 0; i < brickRowCount; i++) {
  bricks[i] = [];
  for (let j = 0; j < brickColumnCount; j++) {
    const x = i * (brickInfo.w + brickInfo.padding) + brickInfo.offsetX;
    const y = j * (brickInfo.h + brickInfo.padding) + brickInfo.offsetY;
		bricks[i][j] = {
			x,
			y,
			...brickInfo
		}
  }
}

// Draw ball on canvas
function drawBall() {
  ctx.beginPath();
	ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
	ctx.fillStyle = ball.visible ? '#0095dd' : 'transparent';
	ctx.fill();
	ctx.closePath();
}

// Draw paddle on canvas
function drawPaddle() {
  ctx.beginPath();
	ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h);
	ctx.fillStyle = paddle.visible ? '#0095dd' : 'transparent';
	ctx.fill();
	ctx.closePath();
}

// Draw score on canvas
function drawScore() {
  
}

// Draw bricks on canvas
function drawBricks() {
	bricks.forEach(column => {
		column.forEach(bri => {
			ctx.beginPath();
			ctx.rect(bri.x, bri.y, bri.w, bri.h);
			ctx.fillStyle = bri.visible ? '#0095dd' : 'transparent';
			ctx.fill();
			ctx.closePath();
		})
	})
}

// Move paddle on canvas
function movePaddle() {
	paddle.x += paddle.dx;

	if (paddle.x < 0) {
		paddle.x = 0;
	}

	if (paddle.x + paddle.w > canvas.width) {
		paddle.x = canvas.width - paddle.w;
	}
}

// Move ball on canvas
function moveBall() {
	ball.x += ball.dx;
	ball.y += ball.dy;

	// Wall collision right/left
	if (ball.x + ball.size > canvas.width || ball.x - ball.size < 0) {
		ball.dx *= -1;
	}

	// Wall collision top/bottom
	if (ball.y + ball.size > canvas.height || ball.y - ball.size < 0) {
		ball.dy *= -1;
	}
}

// Increase score
function increaseScore() {

}

// Make all bricks appear
function showAllBricks() {
  
}

// Draw everything
function draw() {
  // clear canvas here
	ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawBall();
  drawPaddle();
  drawScore();
  drawBricks();
}

// Update canvas drawing and animation
function update() {
  movePaddle();
  moveBall();

  draw();

  requestAnimationFrame(update);
}

update();

// Keydown event
function keyDown(e) {
	if (e.key === 'ArrowRight') {
		paddle.dx = paddle.speed;
	}
	else if (e.key === 'ArrowLeft') {
		paddle.dx = -paddle.speed
	}
}

// Keyup event
function keyUp(e) {
	if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
		paddle.dx = 0;
	}
}

// Keyboard event handlers
document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);


// Rules and close event handlers for rulesBtn and closeBtn

