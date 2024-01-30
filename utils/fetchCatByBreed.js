export default function fetchBreedImg(breed) {
  //   console.log(breed);
  return fetch(`https://api.thecatapi.com/v1/images/${breed}`).then(
    (response) => response.json()
  );
}
