
var skylink = new Skylink();

// initialize the skylink object
skylink.init({
  apiKey: 'your-key-here',
  defaultRoom: 'myRoom'
}, function() {
  //join the room on auth success
  skylink.joinRoom({audio: false, video: false})
});

// announce people joining the session
skylink.on('peerJoined', function(peerId, peerInfo, isSelf) {
  if (!isSelf) renderMessage( peerId, 'has joined the room');
});

// handle new messages
skylink.on('incomingMessage', function(message, peerId, peerInfo, isSelf) {

  // identify sender
  var sender = peerInfo.userData.name || peerId;
  renderMessage(sender,message.content);

});

function send() {
  var messageBody = document.getElementById('out');
  skylink.sendMessage(messageBody.value);
  messageBody.value = '';
}


////////////
function renderMessage(sender,content) {
  // create message elements
  var msgContainer = document.createElement('div');
  var msgContent = document.createTextNode(sender + ": " + content);
  var messages = document.getElementById('messages');

  // attach new message
  msgContainer.appendChild(msgContent);
  messages.insertBefore(msgContainer, messages.firstChild);

}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('send').addEventListener('click', function() {
    send();
  });
});
