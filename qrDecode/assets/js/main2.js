// navigator.mediaDevices.getUserMedia({
//   audio: false,
//   video: true,
// });

async function getMedia(constraints) {
  let stream = null;

  try {
    stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: { width: 1280, height: 720 },
    });
    console.log(stream);
    /* use the stream */
  } catch (err) {
    /* handle the error */
  }
}

getMedia();
