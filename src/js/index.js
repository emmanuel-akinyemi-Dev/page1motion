//video
var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

// Pause and play the video function
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
