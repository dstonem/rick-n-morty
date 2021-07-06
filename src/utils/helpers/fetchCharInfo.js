export default async function fetchCharInfo() {
  const randInt = Math.floor(Math.random() * 671);
  try {
    const charInfo = await fetch(
      `https://rickandmortyapi.com/api/character/${randInt}`
    )
      .then((r) => r.json())
      .then((data) => data);

    return charInfo;
  } catch (e) {
    return null;
  }
}
