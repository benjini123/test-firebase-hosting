import React, { useState, Suspense, useEffect } from "react";
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Input } from "../../ui/input";
import { getCoordsFromLocation } from "../../lib/coords";
// import "dotenv/config";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYmVuamFoZW5sZXkiLCJhIjoiY2wzNHYxMTc0MDA1bTNicGNxZDB0bDlhayJ9.D3sJZ0xb27ISehSHAGvaIg";

export function MapboxMap(props) {
  const { onChange } = props;
  const initialCoords: any = [-58.38162, -34.60376];
  const [coords, setCoords] = useState(initialCoords);
  const [query, setQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    const newCoords = await getCoordsFromLocation(e.target.value);
    setCoords(newCoords);

    onChange({
      query: query,
      coords: newCoords,
    });
  };

  function inputChangeHandler(e) {
    setQuery(e.target.value);
  }

  const Map = ReactMapboxGl({
    accessToken: MAPBOX_TOKEN,
  });
  return (
    <div>
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "208px",
          width: "331px",
        }}
        center={coords}
        zoom={[15]}
        movingMethod="easeTo">
        <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={coords} />
        </Layer>
      </Map>
      <Input
        name="location"
        onChange={inputChangeHandler}
        value={props.value}
        onKeyPress={(e) => e.key === "Enter" && handleSearch(e)}>
        ubicacion
      </Input>
    </div>
  );
}
