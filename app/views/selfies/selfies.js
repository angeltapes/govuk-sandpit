<script>
let myCanvas, img, freeze;

function setup() {
    background(255,255,90);
    
    // Create the video capture and hide the element.
    capture = createCapture(VIDEO,{ flipped:true });
    capture.hide();
    
    myCanvas = createCanvas(300, 500);
    myCanvas.parent("p5Canvas");

	freeze = false;
	ellipseMode(CENTER);
	noFill();
	stroke(255);
	strokeWeight(2);
    img = createImage(300,500);
    describe('A video stream from the webcam.');
}

function draw() {
    // Draw the video capture within the canvas.
    // image(img, dx, dy, dWidth, dHeight, sx, sy, [sWidth], [sHeight], [fit], [xAlign], [yAlign])
    if (freeze == false){
	  image(capture, 0, 0,  width, height,        150,0, width,height,     CONTAIN, LEFT, TOP);
      ellipse(width/2, height / 2, width * 0.7, height * 0.6);
	}
	else{
		image(img, 0, 0,  300,500)
	}
	 
}

function takePhoto(){
  img = get(0,0,300,500);
  freeze = true
}

function reTake(){
    freeze = false
}
</script>