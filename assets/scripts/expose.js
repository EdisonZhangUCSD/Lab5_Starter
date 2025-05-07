// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // Get all the necessary elements
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('img');
  const audioElement = document.querySelector('audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');
  const jsConfetti = new JSConfetti();

  // Add event listener for horn selection
  hornSelect.addEventListener('change', function() {
    const selectedHorn = hornSelect.value;
    if (selectedHorn === 'select') return;

    // Update image
    hornImage.src = `assets/images/${selectedHorn}.svg`;
    hornImage.alt = `${selectedHorn} image`;

    // Update audio
    audioElement.src = `assets/audio/${selectedHorn}.mp3`;
  });

  // Add event listener for volume changes
  volumeSlider.addEventListener('input', function() {
    const volume = volumeSlider.value;
    
    // Update volume icon based on level
    if (volume == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (volume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (volume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }

    // Update audio volume (convert from 0-100 to 0-1)
    audioElement.volume = volume / 100;
  });

  // Add event listener for play button
  playButton.addEventListener('click', function() {
    // Play the sound
    audioElement.play();

    // If party horn is selected, trigger confetti
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}