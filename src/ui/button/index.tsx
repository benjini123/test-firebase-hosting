import { TextBold } from "../../ui/texts";
import css from "./index.css";

export function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={css.button}
      style={{ backgroundColor: props.color }}>
      <TextBold>{props.children}</TextBold>
    </button>
  );
}
