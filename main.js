var speechrecognition = window.webkitSpeechRecognition;
var recongnition = new speechrecognition();

function start() 
{
    document.getElementById("text_area").innerHTML = " ";
    recongnition.start();
}

recongnition.onresult = function(event)
{
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("text_area").innerHTML = content;
    speak();
    Webcam.attach(camera);
}

function speak() 
{
    var API1 = window.speechSynthesis;
    var speakdata = document.getElementById("text_area").value;
    var savevalue  = new SpeechSynthesisUtterance(speakdata);
    API1.speak(savevalue);
}

camera = document.getElementById("camera");

Webcam.set
({
    width : 400,
    height : 400,
    image_format : 'png', 
    png_quality : 90,
})