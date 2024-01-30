import { useEffect, useState } from "react";
import fetchAllCatBreeds from "../utils/fetchAllCatBreeds";
import fetchBreedImg from "../utils/fetchCatByBreed";

export default function CatByBreed({ breed }) {
  const [cat, setCat] = useState("");
  const [catImg, setCatImg] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAllCatBreeds()
      .then((breeds) => {
        const foundCat = breeds.filter((eachBreed) => eachBreed.name === breed);
        setCat(foundCat[0]);
        setIsLoading(false);
        return foundCat[0].reference_image_id;
      })
      .then((imgId) => {
        return fetchBreedImg(imgId);
      })
      .then((imgObj) => {
        setCatImg(imgObj.url);
        setIsLoading(false);
      });
  }, [breed]);

  if (isLoading)
    return (
      <>
        <h2>{breed}</h2>
        <img className="cat-breed-img" src={catImg} alt="" />
        <div className="breed-description">
          <p>Loading...</p>
        </div>
      </>
    );
  return (
    <>
      <h2>{breed}</h2>
      <img className="cat-breed-img" src={catImg} alt="" />
      <div className="breed-description">
        <p>
          {cat.description}
          <br></br>
        </p>
        <p>
          <span>Origin: </span>
          {cat.origin}
        </p>
        <p>
          <span> Adaptability: </span> {cat.adaptability}
        </p>
        <p>
          <span> Affection Level: </span> {cat.affection_level}
        </p>
        <p>
          <span> Intelligence Level: </span> {cat.intelligence}
        </p>
        <p>
          <span> Temperament: </span>
          {cat.temperament}
        </p>
      </div>
    </>
  );
}
