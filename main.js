function setup() {
  classifier = ml5.imageClassifier("MobileNet", modelLoaded )
  canvas = createCanvas(300, 280);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
}

function modelLoaded() {
  console.log("model has loaded commander")
}

function draw() {

  image(video , 0 , 0 , 300 , 280)
classifier.classify(video , gotResults )



}
pr = ""
function gotResults(error , results) {

if(error){

  console.log(error)
}
else{
if(results[0].confidence>0.5 && pr!=results[0].label){
console.log(results)
res = results[0].confidence * 100; 
document.getElementById("hi").innerHTML= results[0].label ; 
document.getElementById("he").innerHTML= res.toFixed(3) + "%" ;
synth = window.speechSynthesis ; 
sd = "object detected is : " + results[0].label ; 
ut = new SpeechSynthesisUtterance(sd) ; 
synth.speak(ut) ;
} 
} 
}