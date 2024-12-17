import { Pokemon, PokemonGrid, PokemonsResponse } from '@/pokemons';

const getData = async (offset = 0, limit = 150): Promise<Pokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  ).then((res) => res.json());
  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }));
  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getData();
  // throw new Error('Error');
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Listado de pokemons <small>estáticos</small>
        <PokemonGrid pokemons={pokemons} />
      </span>
    </div>
  );
}
