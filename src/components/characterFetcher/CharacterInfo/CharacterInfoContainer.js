export default function CharacterInfoContainer({ source, name, status }) {
  return (
    <div>
      <img src={source} alt={name} data-testid="img" />
      <h2>{name}</h2>
      <p>Status: {status}</p>
    </div>
  );
}
