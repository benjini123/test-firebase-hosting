import css from "./index.css";

export function Title(props) {
  return <h1 className={`${css.title} ${css.font}`}>{props.children}</h1>;
}

export function Subtitle(props) {
  return <h3 className={`${css.subtitle} ${css.font}`}>{props.children}</h3>;
}

export function SubtitleBold(props) {
  return (
    <h3 className={`${css.subtitleBold} ${css.font}`}>{props.children}</h3>
  );
}

export function Text(props) {
  return <p className={`${css.text} ${css.font}`}>{props.children}</p>;
}

export function TextBold(props) {
  return <p className={`${css.textBold} ${css.font}`}>{props.children}</p>;
}

export function LinkText(props) {
  return (
    <a onClick={props.onClick} className={`${css.font} ${css.link}`}>
      {props.children}
    </a>
  );
}

export function Caption(props) {
  return <p className={`${css.caption} ${css.font}`}>{props.children}</p>;
}
