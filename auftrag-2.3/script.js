const chooseButton = document.getElementById('choose');
const destinationsList = document.getElementById('destinations');

// Dem Objekt Array die Funktion sample, welche ein zufälliger Eintrag auswählt, hinzufügen.
Array.prototype.sample = function () {
  return this[Math.floor(Math.random() * this.length)];
}

function chooseDestination() {
  const destinationsArray = [...destinationsList.children];
  destinationsArray.forEach(destination => destination.removeAttribute('class'));
  const randomDestination = destinationsArray.sample();
  randomDestination.classList.add('selected');
  // Optionale Aufgabe
  randomDestination.scrollIntoView({behavior: 'smooth', block: 'center'});
};

chooseButton.addEventListener('click', chooseDestination);

// Optionale Aufgabe
const chooseWithAnimationButton = document.getElementById('chooseWithAnimation');

function chooseDestinationWithAnimation() {
  for(let i = 0; i <= 50; i++) {
    setTimeout(() => chooseDestination(), Math.pow(i, 2) * 5);
  }
};

chooseWithAnimationButton.addEventListener('click', chooseDestinationWithAnimation);