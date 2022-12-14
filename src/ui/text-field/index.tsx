import { Caption } from "../../ui/texts";
import css from "./index.css";

export function TextField(props) {
  return (
    <div className={css.container}>
      <Caption>{props.children}</Caption>
      <textarea className={css.textarea} name={props.name} />
    </div>
  );
}
