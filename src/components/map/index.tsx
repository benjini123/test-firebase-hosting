import React, { useState, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/navbar";
import "dotenv/config";

import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export function MapboxMap(props) {
  const Map = ReactMapboxGl({
    accessToken: process.env.MAPBOX_TOKEN,
  });
  return (
    <Map
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: "100vh",
        width: "100vw",
      }}>
      <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
        <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
      </Layer>
    </Map>
  );
}
