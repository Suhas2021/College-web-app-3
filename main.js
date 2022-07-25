var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start() 
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
} 


recognition.onresult = function (event) 
{
    console.log(event);

    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    speak();
}


function speak()
{
    var synth = window.speechSynthesis;
    Webcam.attach(camera);
    speak_data = document.getElementById("textbox").value;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    setTimeout(function()
    {
        img_id= "selfie1";
        take_snapshot();
    },500  );
}

function speak()
{
    var synth = window.speechSynthesis;
    Webcam.attach(camera);
    speak_data = document.getElementById("textbox").value;
    var utterThis = new SpeechSynthesisUtterance(speak_data1);
    synth.speak(utterThis);
    setTimeout(function()
    {
        img_id= "selfie2";
        take_snapshot();
    },1000  );
}

function speak()
{
    var synth = window.speechSynthesis;
    Webcam.attach(camera);
    speak_data = document.getElementById("textbox").value;
    var utterThis = new SpeechSynthesisUtterance(speak_data2);
    synth.speak(utterThis);
    setTimeout(function()
    {
        img_id= "selfie3";
        take_snapshot();
    },1500  );
}


function take_snapshot()
{
    console.log(img_id);

    webcam.snap(function(data_uri) 
    {

        if(img_id=="selfie"){
            document.getElementById("result1").innerHTML = '<img id = "selfie" src="'+data_uri+'"/>';
        }

        if(img_id=="selfie1"){
            document.getElementById("result2").innerHTML = '<img id = "selfie1" src="'+data_uri+'"/>';
        }

        if(img_id=="selfie2"){
            document.getElementById("result3").innerHTML = '<img id = "selfie2" src="'+data_uri+'"/>';
        }
    });
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");