import { Caption, LinkText, Text, Title } from "../../ui/texts";
import css from "./index.css";
import pen from "../../media/pen.png";

export function PetCard(props) {
  return (
    <div className={css.cardContainer}>
      <img src={props.petImage} className={css.image} />
      <div className={css.textContainer}>
        <Title>{props.petName}</Title>
        <Caption>{props.petLocation}</Caption>
      </div>
      {props.edit ? (
        <img src={pen} className={css.pen} />
      ) : (
        <div className={css.link}>
          <LinkText onClick={props.handleClick}>Reportar Info</LinkText>
        </div>
      )}
    </div>
  );
}
