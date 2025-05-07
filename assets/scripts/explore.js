// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // Get all the necessary elements
  const voiceSelect = document.getElementById('voice-select');
  const textToSpeak = document.getElementById('text-to-speak');
  const talkButton = document.querySelector('button');
  const faceImage = document.querySelector('img');
  
  // Initialize speech synthesis
  const synth = window.speechSynthesis;
  let voices = [];

  // Function to populate voice select dropdown
  function populateVoiceList() {
    voices = synth.getVoices();
    
    // Clear existing options except the first one
    while (voiceSelect.options.length > 1) {
      voiceSelect.remove(1);
    }
    
    // Add all available voices
    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.setAttribute('data-lang', voice.lang);
      option.setAttribute('data-name', voice.name);
      voiceSelect.appendChild(option);
    });
  }

  // Populate voices when they are loaded
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  // Add event listener for talk button
  talkButton.addEventListener('click', function() {
    // Get the text to speak
    const text = textToSpeak.value;
    if (!text) return;

    // Create utterance
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Set the selected voice
    const selectedVoice = voiceSelect.selectedOptions[0].getAttribute('data-name');
    const voice = voices.find(v => v.name === selectedVoice);
    if (voice) {
      utterance.voice = voice;
    }

    // Change face to open mouth while speaking
    faceImage.src = 'assets/images/smiling-open.png';
    
    // Change face back when done speaking
    utterance.onend = function() {
      faceImage.src = 'assets/images/smiling.png';
    };

    // Speak the text
    synth.speak(utterance);
  });
}