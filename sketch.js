// Add some header info
// For TM template code

// Video
let video;
let classifier;
let label = "Say something..."

// STEP 1: Load the model!
function preload(){
	classifier = ml5.soundClassifier('https://snehil001.github.io/Teaching-Machine-Github/mlmodelji/model.json');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  // Create the video

  // STEP 2: Start classifying
  classifyAudio();
}

// STEP 2 classify!
function classifyAudio(){
	classifier.classify(gotResults);
}

function draw() {
  background(0, 255, 0);
  
  
 textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, width / 2, 3*height / 4);

  // Pick an emoji, the "default" is train
  let emoji = "🎧";
  if (label == "Hello") {
    emoji = "🤩";
  } else if (label == "Over") {
    emoji = "🤗";
  }

  // Draw the emoji
  textSize(256);
  text(emoji, width / 2, height / 2);
  
}


// STEP 3: Get the classification!
function gotResults(error, results){
	if(error) {
    console.error(error);
  }
  label = results[0].label;
}
