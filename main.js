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
}