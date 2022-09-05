export function Button(props) {
  return (
    <button style={{ backgroundColor: props.color }}>{props.children}</button>
  );
}
