import { useState } from "react";
import fetchCharInfo from "../helpers/fetchCharInfo";

export default function useFetchChar() {
  const [char, setChar] = useState({});

  async function getCharInfo() {
    let charInfo = await fetchCharInfo();
    setChar(charInfo);
  }

  return [char, getCharInfo];
}
