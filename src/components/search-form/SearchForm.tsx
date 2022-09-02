import { useSearchResults } from "hooks";
import { useNavigate } from "react-router-dom";

export function SearchForm({ style }) {
  const navigate = useNavigate();
  const results = useSearchResults() || [];

  function handleSubmit(e: any) {
    e.preventDefault();
    navigate(`/search/${e.target.name.value}`, { replace: true });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name"></input>
      <button type="submit">Buscar</button>
      <h4>Resultadods: {results.length}</h4>
    </form>
  );
}
