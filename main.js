const video = document.getElementById('video');
const photo = document.getElementById('photo');
const startButton = document.getElementById('startbutton');

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

navigator.mediaDevices.getUserMedia({video: true, audio: false})
  .then((stream) => {
    video.srcObject = stream;
    video.play();
    console.log(video);
  }).catch((err) => {
    console.log("An error occurred: " + err);
  });

function takepicture() {
  console.log(canvas);
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  ctx.drawImage(video, 0, 0, video.videoWidth,video.videoHeight);

  const imageSource = canvas.toDataURL('image/png');

  photo.setAttribute('src', imageSource);
}

startButton.addEventListener('click', (e) => {
  console.log('yes');
  takepicture();
  e.preventDefault();
});
