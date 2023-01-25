const allTitles = document.querySelectorAll('.accordion dt');

function toggleContent(event) {
  allTitles.forEach((title) => title.classList.remove('expanded'));
  event.target.classList.toggle('expanded');
}

allTitles.forEach((title) => {
  title.addEventListener('click', toggleContent);
});
