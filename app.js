var video = document.getElementById('video');
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let constraints = {
    audio:true,
    video : {
        height: 1080,
        width: 480,
    }
}
// Get access to the camera!
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
        //video.src = window.URL.createObjectURL(stream);
        video.srcObject = stream;
        video.play();
    });
}
document.getElementById("snap").addEventListener("click", function(){
    context.drawImage(video, 0, 0, 640, 480);
})


// let preview = document.getElementById("preview");
// let recording = document.getElementById("recording");
// let startButton = document.getElementById("startButton");
// let stopButton = document.getElementById("stopButton");
// let downloadButton = document.getElementById("downloadButton");
// let logElement = document.getElementById("log");

// let recordingTimeMS = 5000;


// function log(msg) {
//     //logElement.innerHTML += msg + "\n";
// }

// function wait(delayInMS) {
//     return new Promise(resolve => setTimeout(resolve, delayInMS));
// }

// function startRecording(stream, lengthInMS) {
//     let recorder = new MediaRecorder(stream);
//     let data = [];

//     recorder.ondataavailable = event => data.push(event.data);
//     recorder.start();
//     log(recorder.state + " for " + (lengthInMS/1000) + " seconds...");

//     let stopped = new Promise((resolve, reject) => {
//     recorder.onstop = resolve;
//     recorder.onerror = event => reject(event.name);
//     });

//     let recorded = wait(lengthInMS).then(
//     () => recorder.state == "recording" && recorder.stop()
//     );

//     return Promise.all([
//         stopped,
//         recorded
//     ])
//     .then(() => data);
// }

// function stop(stream) {
//     stream.getTracks().forEach(track => track.stop());
// }

// startButton.addEventListener("click", function() {
//     navigator.mediaDevices.getUserMedia({
//         video: true,
//         audio: false
//     }).then(stream => {
//             preview.srcObject = stream;
//             downloadButton.href = stream;
//             preview.captureStream = preview.captureStream || preview.mozCaptureStream;
//             return new Promise(resolve => preview.onplaying = resolve);
//           }).then(() => startRecording(preview.captureStream(), recordingTimeMS))
//           .then (recordedChunks => {
//             let recordedBlob = new Blob(recordedChunks, { type: "video/webm" });
//             recording.src = URL.createObjectURL(recordedBlob);  
//             downloadButton.href = recording.src;
//             downloadButton.download = "RecordedVideo.webm";

//             log("Successfully recorded " + recordedBlob.size + " bytes of " +
//                 recordedBlob.type + " media.");
//           })
//           .catch(log);
//     }, false);


//     stopButton.addEventListener("click", function() {
//     stop(preview.srcObject);
//     }, false);

