function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/STEEvpXMY/model.json",modelLoaded);

}

function modelLoaded(){
    console.log("modelLoaded");
    classifier.classify(gotResults);
}

function gotResults(error,results){
    console.log("got results");
}