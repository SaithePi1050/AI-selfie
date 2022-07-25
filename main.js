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
        if (content == "take my selfie") 
        {
            speak(); 
        }
    Webcam.attach(camera);
    setTimeout(
        function()
    {
        take_snapshot();
        save();
    }, 5000);
}

function speak() 
{
    var API1 = window.speechSynthesis;
    var speakdata = "Taking your selfie in 5 seconds";
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

function take_snapshot() 
{
    Webcam.snap(
        function (data_uri) 
        {
            document.getElementById("selfie").innerHTML = '<img id = "selfie_image" src = " '+ data_uri +' ">';
        }
    );
}

function save() 
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}