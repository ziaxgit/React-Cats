export default function fetchAllCatBreeds(limit) {
  return fetch(`https://api.thecatapi.com/v1/breeds?limit=${limit || 15}`).then(
    (response) => response.json()
  );
}
