var skylink = new Skylink();

skylink.init({
  apiKey: 'your-key-here',
  defaultRoom: 'MyLocalRoom'
}, function() {
  skylink.joinRoom({
    audio: true,
    video: true
  })
});


skylink.on('mediaAccessSuccess', function(stream) {
  var video = document.getElementById('local');
  attachMediaStream(video, stream);
});
