const selectr = document.querySelector('.breed-select');
const info = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
import fetchBreeds from './js/cat-api';
let storedBreeds = [];
fetchBreeds()
  .then(data => {
    //filter to only include those with an `image` object
    // console.log(data);
    data = data.filter(img => img.image?.url != null);
    storedBreeds = data;
    for (let i = 0; i < storedBreeds.length; i++) {
      const breed = storedBreeds[i];
      let option = document.createElement('option');

      //skip any breeds that don't have an image
      if (!breed.image) continue;

      //use the current array index
      option.value = breed.id;
      option.innerHTML = `${breed.name}`;
      document.querySelector('.breed-select').appendChild(option);
      //   console.log(breed);
    }
  })
  .catch(function (error) {
    console.log(error);
    error.removeAttribute('hidden');
  });
import { fetchCatByBreed } from './js/cat-api';
selectr.addEventListener('change', changeHandler);
let breedId = '';
function changeHandler() {
  loader.removeAttribute('hidden');
  setTimeout(() => {
    loader.setAttribute('hidden', true);
    info.innerHTML = '';
    const selectedOption = this.options[this.selectedIndex];
    breedId = selectedOption.value;
    console.log('Selected Value:', breedId);
    fetchCatByBreed(breedId).then(data => {
      console.log(data[0]);
      let cat = data[0];
      let catInfo = cat.breeds[0];
      let markup = `
      <img src = "${cat.url}" class="cat-img" width="500"/>
      <p class="cat-desc">${catInfo.description}</p>
      <p class="cat-temperament">${catInfo.temperament}</p>
    `;
      info.innerHTML = markup;
    });
  }, 500);
}
