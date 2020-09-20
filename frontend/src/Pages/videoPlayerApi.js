(function() {

    var width = 320;
    var height = 0;
  
    var streaming = false;
  
  
    var video = null;
    var canvas = null;

  
    function startup() {
      if(video != null && canvas != null){
        video = document.getElementById('video');
        canvas = document.getElementById('canvas');
    
        navigator.mediaDevices.getUserMedia({video: true, audio: false})
        .then(function(stream) {
          video.srcObject = stream;
          video.play();
        })
        .catch(function(err) {
          console.log("An error occurred: " + err);
        });
      }

      if(video != null){
        video.addEventListener('canplay', function(ev){
          if (!streaming) {
            height = video.videoHeight / (video.videoWidth/width);
    
            if (isNaN(height)) {
              height = width / (4/3);
            }
          
            video.setAttribute('width', width);
            video.setAttribute('height', height);
            canvas.setAttribute('width', width);
            canvas.setAttribute('height', height);
            streaming = true;
          }
        }, false);
      }
   
      clearphoto();
    }
  
    function clearphoto() {
      if(canvas != null){
        var context = canvas.getContext('2d');
        context.fillStyle = "#AAA";
        context.fillRect(0, 0, canvas.width, canvas.height);
      }
    }
  
    function sendDataToApi(imageData){
      var data = {
        "username": "dewanshrawat15",
        "image": imageData
      };
      var xhr = new XMLHttpRequest();
      var url = "http://localhost:8000/process/";
      xhr.open("POST", url, true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
              var responseData = JSON.parse(xhr.responseText);
              console.log(responseData);
          }
      };
      var res = JSON.stringify(data);
      xhr.send(res);
    }
  
    function takepicture() {
      var context = canvas.getContext('2d');
      if (width && height) {
        canvas.width = width;
        canvas.height = height;
        context.drawImage(video, 0, 0, width, height);
      
        var data = canvas.toDataURL('image/png');
        
        sendDataToApi(data);
  
      } else {
        clearphoto();
      }
    }
  
    function keyPress(e){
      if(e.keyCode === 13){
        takepicture();
      }
    }
  
    window.addEventListener('load', startup, false);
  
    window.addEventListener("keydown", keyPress);
  })();