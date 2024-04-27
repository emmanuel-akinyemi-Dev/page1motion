//video
const video = document.getElementById("myVideo");
const btn = document.getElementById("myBtn");
 

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
