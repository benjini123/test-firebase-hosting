import { useSearchResults } from "../hooks";
import { Link } from "react-router-dom";

export function PageTwo() {
  const results = useSearchResults();

  return (
    <ul>
      {results.map((item) => (
        <li key={item.id}>
          <h2>{item.title}</h2>
          <h3>{item.pitemice}</h3>
          <Link to={"/item/" + item.id}>Ver mas</Link>
        </li>
      ))}
    </ul>
  );
}
