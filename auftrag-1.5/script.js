const addThreeMoreReleasesButton = document.getElementById('releases-action-add-three-more');
const removeFirstThreeReleasesButton = document.getElementById('releases-action-remove-first-three');
const releasesGrid = document.getElementById('releases-grid');
let currentIndex = releasesGrid.children.length;
const randomCoverURL = 'https://loremflickr.com/480/480/cd,album,cover?random=';

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

function removeFirstThreeReleases() {
  for (let i = 0; i < 3; i++) {
    if (releasesGrid.children.length > 0) {
      releasesGrid.children[0].remove();
    }
  }
}

addThreeMoreReleasesButton.addEventListener('click', addThreeReleases);
removeFirstThreeReleasesButton.addEventListener('click', removeFirstThreeReleases);