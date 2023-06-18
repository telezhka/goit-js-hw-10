const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const url = `https://api.thecatapi.com/v1`;
const api_key =
  'live_vdjq6J9uGaAJpVe8CZrdne8KDK7tWhZFs0NMzSeBgCbKcrNYzL3wFnXM3ELZcOP7';
export default function fetchBreeds() {
  return fetch(`${url}/breeds?api_key=${api_key}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
function fetchCatByBreed(breedId) {
  return fetch(
    `${url}/images/search?breed_ids=${breedId}&api_key=${api_key}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
export { fetchCatByBreed };
