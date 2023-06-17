const selectr = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const info = document.querySelector('.cat-info');
const url = `https://api.thecatapi.com/v1/breeds`;
const api_key =
  'live_vdjq6J9uGaAJpVe8CZrdne8KDK7tWhZFs0NMzSeBgCbKcrNYzL3wFnXM3ELZcOP7';
let storedBreeds = [];
fetch(url, {
  headers: {
    'x-api-key': api_key,
  },
})
  .then(response => {
    return response.json();
  })
  .then(data => {
    //filter to only include those with an `image` object

    data = data.filter(img => img.image?.url != null);
    storedBreeds = data;
    for (let i = 0; i < storedBreeds.length; i++) {
      const breed = storedBreeds[i];
      let option = document.createElement('option');

      //skip any breeds that don't have an image
      if (!breed.image) continue;

      //use the current array index
      option.value = i;
      option.innerHTML = `${breed.name}`;
      document.querySelector('.breed-select').appendChild(option);
      //   console.log(breed);
    }

    selectr.addEventListener('change', changeHandler);
  })
  .catch(function (error) {
    console.log(error);
    error.removeAttribute('hidden');
  });
function changeHandler() {
  loader.removeAttribute('hidden');
  setTimeout(() => {
    loader.setAttribute('hidden', true);
    info.innerHTML = '';
    const selectedOption = this.options[this.selectedIndex];
    const selectedValue = Number(selectedOption.value);
    console.log('Selected Value:', selectedValue);
    console.log(storedBreeds[selectedValue]);
    let selectedBreed = storedBreeds[selectedValue];
    let markup = `
    <img src = "${selectedBreed.image.url}" class="cat-img" width="500"/>
    <p class="cat-desc">${selectedBreed.description}</p>
    <p class="cat-temperament">${selectedBreed.temperament}</p>
  `;
    info.innerHTML = markup;
  }, 250);
}
