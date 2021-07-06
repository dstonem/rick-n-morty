export default function Button({ handleClick }) {
  return (
    <button data-testid="button" onClick={handleClick}>
      Fetch Character
    </button>
  );
}
