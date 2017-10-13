var skylink = new Skylink();

document.addEventListener('DOMContentLoaded', function() {

  var remoteContainer = document.getElementById('remote');

  skylink.init({
    apiKey: 'your-key-here',
    defaultRoom: 'SampleRoom'
  }, function() {
    skylink.joinRoom({audio: true, video: true})
  });

  // handle incoming remote streams
  skylink.on('incomingStream', function(peerId, stream, isSelf) {
    if(isSelf) return;
    attachMediaStream(document.getElementById(peerId), stream);

    ///// MAKE SCREEEN SHARE WINDOW BIGGER!
    if(peerInfo.settings.video.screenshare) {
      document.getElementById(peerId).classList.add('screenshare')  ;
    }

  });

  // handle camera access dialog action
  skylink.on('mediaAccessSuccess', function(stream) {
    attachMediaStream(document.getElementById('local'), stream);
  });

  // handle peer enter
  skylink.on('peerJoined', function(peerId, peerInfo, isSelf) {
    if(isSelf) return;
    var video = document.createElement('video');
    video.setAttribute('id', peerId);
    video.setAttribute('muted', true); // demo only
    video.setAttribute('autoplay', true);
    remoteContainer.appendChild(video);
  });

  // handle peer departure
  skylink.on('peerLeft', function(peerId, peerInfo, isSelf) {
    document.getElementById(peerId).remove();
  });

});


////////////////////////
