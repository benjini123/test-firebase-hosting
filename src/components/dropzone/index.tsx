import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "../../ui/button";
import fondo from "../../media/fondo.png";
import css from "./index.css";
import { Text } from "../../ui/texts";
import { useRecoilValue, useRecoilState } from "recoil";
import { editMode, petAtom, petState } from "../../atoms";
import logoHeader from "../../media/paws.png";

export function MyDropzone(props) {
  const [pet, setPet] = useRecoilState(petState);
  const edit = useRecoilValue(editMode);

  const onDrop = useCallback(
    (acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target.result;
          setPet({ ...pet, url: result });
        };
        reader.readAsDataURL(file);
      });
    },
    [pet]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className={css.container} {...getRootProps()}>
      <input className={css.input} {...getInputProps()} />

      <div className={css.thumbsContainer}>
        {pet.url ? (
          <img className={css.img} src={pet.url} />
        ) : (
          <img src={fondo} className={css.fondoImagen} />
        )}
      </div>
      <Button type="button" color="#97EA9F">
        agregar/modificar foto
      </Button>
    </div>
  );
}
