import { Params, Response } from '../../redux';

const API_URL = 'https://pokeapi.co/api/v2/pokemon';

export const photoRequest = async ({ limit, offset }: Params): Promise<Response> => {
  const url = `${API_URL}?limit=${limit}&offset=${offset}`;

  return await fetch(url).then(res => res.json());
};