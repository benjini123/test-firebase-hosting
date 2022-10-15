import { Caption, LinkText, Text, Title } from "../../ui/texts";
import css from "./index.css";
import pen from "../../media/pen.png";
import { MouseEventHandler } from "react";

type PetCardProps = {
  petName: string;
  petImage: string;
  petLocation: string;
  edit?: boolean;
  onClick?: any;
  onReport?: any;
  petId: number;
};

export function PetCard(props: PetCardProps) {
  return (
    <div className={css.cardContainer}>
      <img src={props.petImage} className={css.image} />
      <div className={css.textContainer}>
        <Title>{props.petName}</Title>
        <Caption>{props.petLocation}</Caption>
      </div>
      {props.edit ? (
        <img src={pen} className={css.pen} onClick={props.onClick} />
      ) : (
        <div className={css.link}>
          <LinkText onClick={props.onReport}>Reportar Info</LinkText>
        </div>
      )}
    </div>
  );
}
