import { useEffect } from "react";
import { useState } from "react";
import fetchAllCats from "../utils/fetchAllCats";
import { ImageList, ImageListItem } from "@mui/material";

export default function CatGallery() {
  const [catImages, setCatImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAllCats().then((data) => {
      setCatImages(data);
      setIsLoading(false);
    });
  }, []);

  function handleClick() {
    setIsLoading(true);
    fetchAllCats().then((data) => {
      setCatImages(data);
      setIsLoading(false);
    });
  }
  if (isLoading)
    return (
      <section className="gallery-button">
        <h1>The Purrfect Gallery</h1>
        <p>Loading...</p>
      </section>
    );

  return (
    <>
      {" "}
      <section className="gallery-button">
        <h1>The Purrfect Gallery</h1>
        <ImageList
          sx={{ width: 600, height: 700, overflow: "hidden", mt: 0 }}
          cols={3}
          rowHeight={164}
        >
          {catImages.map((item, index) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.url}?w=164&h=164&fit=crop&auto=format`}
                alt={item.id}
                loading="lazy"
                style={{ borderRadius: "5px" }}
              />
            </ImageListItem>
          ))}
        </ImageList>
        <button onClick={handleClick} className="regenerate-images">
          Regenerate
        </button>
      </section>
    </>
  );
}
