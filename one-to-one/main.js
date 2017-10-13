document.addEventListener('DOMContentLoaded', function() {

  var skylink = new Skylink();

  skylink.init({
    apiKey: 'your-key-here',
    defaultRoom: 'SampleRoom'
  }, function() {
    skylink.joinRoom({audio: true, video: true})
  });

  skylink.on('incomingStream', function(peerId, stream, isSelf) {
    if(isSelf) return;
    attachMediaStream(document.getElementById('remote'), stream);
  });


  skylink.on('mediaAccessSuccess', function(stream) {
    attachMediaStream(document.getElementById('local'), stream);
  });
});
