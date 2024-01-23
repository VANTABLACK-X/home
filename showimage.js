function showVideo(videoNumber) {
  // Remove 'active' class from all clickableDivs
  document.querySelectorAll('.clickableDiv').forEach(div => {
    div.classList.remove('run');
  });

  // Add 'active' class to the clicked clickableDiv
  event.currentTarget.classList.add('run');

  // Pause all videos
  document.querySelectorAll('.videoDiv video:not(#video1 video)').forEach(video => {
    video.pause();
  });

  // Remove 'active' class from all videoDivs
  document.querySelectorAll('.videoDiv').forEach(div => {
    div.classList.remove('active');
  });

  // Add 'active' class to the clicked videoDiv
  document.querySelector(`#video${videoNumber}`).classList.add('active');

  // Hide all videos
  document.querySelectorAll('.videoDiv').forEach(div => {
    div.style.display = 'none';
  });

  // Show the selected video
  document.getElementById(`video${videoNumber}`).style.display = 'block';
  const selectedVideo = document.getElementById(`video${videoNumber}`).querySelector('video');
  selectedVideo.currentTime = 0; // Start from the beginning

  if (selectedVideo.paused){
    selectedVideo.play(); // Play the selected video
  }


  // Set first clickable div and video as active by default
  document.addEventListener('DOMContentLoaded', function () {
    const firstVideoDiv = document.querySelector('video1');
    firstVideoDiv.classList.add('active');
    firstVideoDiv.style.display='block';

    const firstVideo = firstVideoDiv.querySelector('video');
    firstVideo.currentTime = 0;
    firstVideo.play();

  });
}