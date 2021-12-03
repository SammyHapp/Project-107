//

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/pEOUIM4JP/model.json' , modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error , results){
    
}