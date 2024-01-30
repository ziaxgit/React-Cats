import { useEffect, useState } from "react";
import fetchAllCatBreeds from "../utils/fetchAllCatBreeds";
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";

export default function DropDownMenu({ setBreed }) {
  const [breeds, setBreeds] = useState([]);
  useEffect(() => {
    fetchAllCatBreeds().then((data) => {
      const getBreeds = data.map((breed) => breed.name);
      setBreeds(getBreeds);
    });
  }, []);
  function handleClick(e) {
    setBreed(e.target.innerText);
  }
  return (
    <CDropdown>
      <CDropdownToggle color="secondary">Select Breed</CDropdownToggle>
      <CDropdownMenu onClick={handleClick}>
        {breeds.map((breed, index) => (
          <CDropdownItem key={index} href="#">
            {breed}
          </CDropdownItem>
        ))}
      </CDropdownMenu>
    </CDropdown>
  );
}
