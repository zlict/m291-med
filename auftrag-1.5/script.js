const addThreeMoreReleasesButton = document.getElementById('releases-action-add-three-more');
const selectRandomlyReleasesButton = document.getElementById('releases-action-select-randomly');
const removeFirstThreeReleasesButton = document.getElementById('releases-action-remove-first-three');
const releasesGrid = document.getElementById('releases-grid');
let currentIndex = releasesGrid.children.length;
const randomCoverURL = 'https://loremflickr.com/480/480/cd,album,cover?random=';

// Zum Array eine Funktion hinzufügen, um einen zufälligen Eintrag zu erhalten.
Array.prototype.sample = function () {
  return this[Math.floor(Math.random() * this.length)];
}

function addThreeReleases() {
  for (let i = 0; i < 3; i++) {
    currentIndex++;
    const newRelease = document.createElement('li');
    const newReleaseImage = document.createElement('img');
    newReleaseImage.src = `${randomCoverURL}${currentIndex}`;
    newReleaseImage.alt = `Random cover ${currentIndex}`;
    newRelease.appendChild(newReleaseImage);
    releasesGrid.appendChild(newRelease);
  }
}

function selectRandomRelease() {
  const releasesAsArray = [...releasesGrid.children];
  releasesAsArray.forEach(child => child.removeAttribute('class'));
  releasesAsArray.sample().classList.add('selected');
}

function removeFirstThreeReleases() {
  for (let i = 0; i < 3; i++) {
    if (releasesGrid.children.length > 0) {
      releasesGrid.children[0].remove();
    }
  }
}

addThreeMoreReleasesButton.addEventListener('click', addThreeReleases);
selectRandomlyReleasesButton.addEventListener('click', selectRandomRelease);
removeFirstThreeReleasesButton.addEventListener('click', removeFirstThreeReleases);