// Een object dat toetscodes toewijst aan bijbehorende labels
var allowedKeys = {
  37: 'left',  // Toetscode 37 wordt toegewezen aan het label 'left'
  38: 'up',    // Toetscode 38 wordt toegewezen aan het label 'up'
  39: 'right', // Toetscode 39 wordt toegewezen aan het label 'right'
  40: 'down',  // Toetscode 40 wordt toegewezen aan het label 'down'
  65: 'a',     // Toetscode 65 wordt toegewezen aan het label 'a'
  66: 'b',     // Toetscode 66 wordt toegewezen aan het label 'b'
  81: 'q',     // Toetscode 81 wordt toegewezen aan het label 'q'
  77: 'm',     // Toetscode 77 wordt toegewezen aan het label 'm'
  85: 'u',     // Toetscode 85 wordt toegewezen aan het label 'u'
  83: 's',     // Toetscode 83 wordt toegewezen aan het label 's'
  73: 'i',     // Toetscode 73 wordt toegewezen aan het label 'i'
  67: 'c'      // Toetscode 67 wordt toegewezen aan het label 'c'
};

// Het gewenste Konami-codepatroon als een array van toetsen
var konamiCode = ['q', 'm', 'u', 's', 'i', 'c'];

// De huidige positie in de Konami-code
var konamiCodePosition = 0;

// Eventlistener voor toetsaanslagen
document.addEventListener('keydown', function(e) {
  // De ingedrukte toets opzoeken in het allowedKeys-object
  var key = allowedKeys[e.keyCode];
  
  // De verwachte toets op basis van de huidige positie in de Konami-code
  var requiredKey = konamiCode[konamiCodePosition];

  // Controleren of de ingedrukte toets overeenkomt met de verwachte toets
  if (key === requiredKey) {
    // De positie in de Konami-code verhogen
    konamiCodePosition++;

    // Controleren of de volledige Konami-code is ingevoerd
    if (konamiCodePosition === konamiCode.length) {
      // Functie aanroepen om cheats te activeren
      activateCheats();
      
      // De positie in de Konami-code resetten
      konamiCodePosition = 0;
    }
  } else {
    // Als de ingedrukte toets niet overeenkomt met de verwachte toets,
    // de positie in de Konami-code resetten
    konamiCodePosition = 0;
  }
});

// Functie om de cheats te activeren
function activateCheats() {
  // Het containerDiv-element selecteren en een CSS-klasse toevoegen
  var containerDiv = document.getElementById('container');
  containerDiv.classList.add('confetti-active');

  // Het confettiDiv-element selecteren en de weergave instellen op 'block'
  var confettiDiv = document.getElementById('confetti');
  confettiDiv.style.display = 'block';

  // Een nieuw audio-element maken met het opgegeven audiobestand
  var confettiSound = new Audio('./foto/short-crowd-cheer-6713.mp3');
  // Het geluid afspelen
  confettiSound.play();

  // Een melding tonen aan de gebruiker
  alert("Confetti tijd!!!!!!!!!");

  // Een time-out instellen om de wijzigingen na een bepaalde tijd ongedaan te maken
  setTimeout(function() {
    // De CSS-klasse verwijderen van het containerDiv-element
    containerDiv.classList.remove('confetti-active');
    // De weergave van het confettiDiv-element instellen op 'none'
    confettiDiv.style.display = 'none';
    // Het geluid pauzeren
    confettiSound.pause();
    // De afspeeltijd van het geluid resetten naar het begin
    confettiSound.currentTime = 0;
  }, 5000); // De time-out wordt na 5000 milliseconden (5 seconden) uitgevoerd
}
