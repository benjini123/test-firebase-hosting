import { Caption } from "../../ui/texts";
import css from "./index.css";

export function Input(props) {
  return (
    <div className={css.container}>
      <Caption>{props.children}</Caption>
      <input
        onChange={props.onChange}
        className={css.input}
        type={props.type}
        name={props.name}
        defaultValue={props.value}
        onKeyPress={props.onKeyPress}
      />
    </div>
  );
}
