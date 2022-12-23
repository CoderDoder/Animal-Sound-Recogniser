function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Z_rL0uXi2/model.json",modelLoaded);

}

function modelLoaded(){
    console.log("modelLoaded");
    classifier.classify(gotResults);
}
var bark=0;
var meow=0;
var moo=0;
var roar=0;
var BG=0;

function gotResults(error,results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        r=Math.floor(Math.random()*255)+1;
        g=Math.floor(Math.random()*255)+1;
        b=Math.floor(Math.random()*255)+1;
        document.getElementById("dog").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("cat").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("lion").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("cow").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("result_label").style.color="rgb("+r+","+g+","+b+")";
        if(results[0].label=="bark"){
            document.getElementById("img").src="dog.png";
            bark=bark+1;
            document.getElementById("dog").innerHTML="detected dogs- "+bark;
        }
        if(results[0].label=="meow"){
            document.getElementById("img").src="cat.png";
            meow=meow+1;
            document.getElementById("cat").innerHTML="detected cat- "+meow;
        }
        if(results[0].label=="Background Noise"){
            document.getElementById("img").src="ear.png";
        }
        if(results[0].label=="moo"){
            document.getElementById("img").src="cow.png";
            moo=moo+1;
            document.getElementById("cow").innerHTML="detected cows- "+moo;
        }
        if(results[0].label=="roar"){
            document.getElementById("img").src="lion.png";
            roar=roar+1;
            document.getElementById("lion").innerHTML="detected lions- "+roar;
        }
        


    }}
    