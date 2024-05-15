import { Entertainment } from "./definitions";
import { tvMovies } from "./data";

export async function fetchMockDatas(): Promise<Entertainment[]> {
  return new Promise(resolve => {
    resolve([...tvMovies]);
  });
}

