import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import SlideShow from "react-image-show";
import { useRecoilValue } from "recoil";
import { queryState } from "../atoms";

export function PageThree() {
  const params = useParams();
  const results = useRecoilValue(queryState);

  return (
    <SlideShow
      images={results}
      width="920px"
      imagesWidth="800px"
      imagesHeight="450px"
      imagesHeightMobile="56vw"
      thumbnailsWidth="920px"
      thumbnailsHeight="12vw"
      indicators
      thumbnails
      fixedImagesHeight
    />
  );
}
