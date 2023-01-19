const form = document.getElementById('formular');
const result = document.getElementById('resultat');
let zips;

fetch('./places.json').then((res) => res.json()).then((data) => zips = data);
form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const formData = new FormData(form);
    result.innerText = JSON.stringify(Object.fromEntries(formData), null, 2);
});

const zip = document.querySelector('input[name=plz]');
const place = document.querySelector('input[name=ort]');
zip.addEventListener('input', (input) => {
    console.log(input.target.value);
})
zip.addEventListener('blur', (input) => {
    const value = input.target.value;
    if(value && value.length >= 4) {
        const placeByZip = zips.find((entry) => entry.zipcode === value).place;
        place.value = placeByZip;
    }
});
