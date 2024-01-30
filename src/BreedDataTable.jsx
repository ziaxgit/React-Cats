import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import fetchAllCatBreeds from "../utils/fetchAllCatBreeds";

export default function BreedDataTable() {
  const [breedData, setBreedData] = useState([]);

  useEffect(() => {
    fetchAllCatBreeds(67).then((data) => {
      setBreedData(data);
    });
  }, []);

  const columns = [
    { field: "name", headerName: "Breed", width: 180 },
    { field: "origin", headerName: "Origin", width: 180 },
    { field: "life_span", headerName: "Life span", width: 120 },
    { field: "adaptability", headerName: "Adaptability", width: 120 },
    { field: "intelligence", headerName: "Intelligence", width: 120 },
    { field: "vocalisation", headerName: "Vocalisation", width: 120 },
    { field: "shedding_level", headerName: "Shedding level", width: 120 },
    { field: "energy_level", headerName: "Energy level", width: 120 },
  ];
  return (
    <div style={{ height: "80%", width: "60%" }}>
      <DataGrid
        rows={breedData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 20, 30, { value: -1, label: "All" }]}
      />
    </div>
  );
}
