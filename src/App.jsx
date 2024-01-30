import { useState } from "react";
import CatGallery from "./CatGallery";
import DropDownMenu from "./DropDownMenu";
import CatByBreed from "./CatByBreed";
import BreedDataTable from "./BreedDataTable";

export default function App() {
  const [breed, setBreed] = useState("Australian Mist");
  return (
    <>
      <div id="gallery-catbreed">
        <CatGallery />
        <section className="search-by-breed-section">
          <DropDownMenu setBreed={setBreed} className="dropdown-menu" />
          <CatByBreed breed={breed} />
        </section>
      </div>
      <section className="breed-data">
        <BreedDataTable />
      </section>
    </>
  );
}
