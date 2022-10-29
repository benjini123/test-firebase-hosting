import { Caption } from "../../ui/texts";
import css from "./index.css";

export function Input(props) {
  return (
    <label className={css.container}>
      <Caption>{props.children}</Caption>
      <input
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        className={css.input}
        name={props.name}
        defaultValue={props.value}
        onKeyPress={props.onKeyPress}
      />
    </label>
  );
}
