/*
$(document).ready(function() {
  $('#presentation').fullpage({
    afterLoad: function() {
      $('.page-number').each(function(key) {$(this).text(key+1)});
    },

    css3: true,
    scrollingSpeed: 700,
    fitToSection: true,
    fitToSectionDelay: 1000,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease'
  });
}); */

var sections;
var currentSection = 0;

function nextSection() {
  currentSection = currentSection + 1;
  if (currentSection > sections.length) {
    currentSection = sections.length;
  }
  window.scrollTo(0,sections[currentSection].offsetTop);
}

function prevSection() {
  currentSection = currentSection - 1;
  if (currentSection < 0) {
    currentSection = 0;
  }
  window.scrollTo(0,sections[currentSection].offsetTop);
}

//// SKYLINK FUN



function insertPageNumber(pageNum, target) {
  var pageNumberBlock = document.createElement('div');
  var pageNumberText = document.createTextNode(pageNum+1);
  pageNumberBlock.classList.add('page-number');
  pageNumberBlock.appendChild(pageNumberText);
  target.insertBefore(pageNumberBlock, target.childNodes[0]);
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('adding page numbers');
  sections = document.querySelectorAll('.section');
  for(var i = 0; i < sections.length; i++) {
    insertPageNumber(i, sections[i]);
  }
});

document.addEventListener('keyup', function(evt) {
  if(evt.key == 'ArrowUp' || evt.key == 'a') prevSection();
  if(evt.key == 'ArrowDown' | evt.key == 'z') nextSection();
});


var skylink = new Skylink();

skylink.init({
  apiKey: 'your-key-here',
  defaultRoom: 'millimatters'
}, function() {
  skylink.joinRoom({
    audio: false,
    video: false
  })
});

skylink.on('peerJoined', function(peerId, peerInfo, isSelf) {
  if(isSelf) return;
});

skylink.on('incomingMessage', function(message, peerId, peerInfo, isSelf) {
  switch(message.content) {
    case 'prev':
      prevSection();
      break;
    case 'next':
      nextSection();
      break;
    default:
      break;
  }
});


///

skylink.on('incomingStream', function(peerId, stream, isSelf) {
  if(isSelf) return;
  attachMediaStream(document.getElementById('remote'), stream);
});


skylink.on('mediaAccessSuccess', function(stream) {
  attachMediaStream(document.getElementById('local'), stream);
});



function start() {
  skylink.joinRoom({
    audio: true,
    video: true
  })

  $('#video-container').show();
}

function stop() {
  skylink.leaveRoom();
  $('#video-container').hide();
}
