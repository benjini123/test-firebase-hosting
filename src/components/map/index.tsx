import React, { useState, useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import css from "./index.css";
import { getCoordsFromLocation } from "../../lib/coords";
import { useRecoilState, useRecoilValue } from "recoil";
import { editMode, petAtom, petState, userCoordinates } from "../../atoms";
const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYmVuamFoZW5sZXkiLCJhIjoiY2wzNHYxMTc0MDA1bTNicGNxZDB0bDlhayJ9.D3sJZ0xb27ISehSHAGvaIg";

export function MapboxMap(props) {
  //
  const pet = useRecoilValue(petState);
  const edit = useRecoilValue(editMode);
  const userCoords = useRecoilValue(userCoordinates);
  const mapContainer = useRef(null);
  const map = useRef(null);

  const [loc, setLoc] = useState(null);
  const [marker, setMarker] = useState(new mapboxgl.Marker());
  const [lat, setLat] = useState(
    edit ? pet.lat : userCoords ? userCoords[0] : -34.60376
  );
  const [lng, setLng] = useState(
    edit ? pet.lng : userCoords ? userCoords[1] : -58.38162
  );

  mapboxgl.accessToken = MAPBOX_TOKEN;

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: 9,
    });
  }, [mapContainer]);

  useEffect(() => {
    setMarker(marker.setLngLat([lng, lat]).addTo(map.current));
  }, [lng]);

  async function handleSearch(e) {
    e.preventDefault();
    const features: any = await getCoordsFromLocation(loc);
    if (!map.current) return;
    const [lng, lat] = features;
    await map.current.flyTo({
      center: [lng, lat],
      zoom: 15,
      speed: 0.6,
      curve: 2,
    });

    setLng(lng);
    setLat(lat);
    props.onChange({ coords: { lng, lat }, location: loc });
  }

  return (
    <div>
      <link
        href="https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css"
        rel="stylesheet"></link>
      <div ref={mapContainer} className={css.mapContainer}></div>

      <div className={css.ubicacionContainer}>
        <Input
          name="location"
          onChange={(e) => setLoc(e.target.value)}
          placeholder="find pets..."
          value={props.value}>
          ubicacion
        </Input>
        <Button color="#97EA9F" onClick={handleSearch}>
          Buscar
        </Button>
      </div>
    </div>
  );
}
