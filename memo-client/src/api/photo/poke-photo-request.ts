import { Pokemon } from '../../redux';

export const pokePhotoRequest = async (url: string): Promise<Pokemon> => {
  return await fetch(url).then(res => res.json());
}